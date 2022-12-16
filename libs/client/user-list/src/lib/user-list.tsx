import { NetworkStatus } from '@apollo/client';
import {
  Button,
  UserCard,
  Stack,
  Box,
} from '@nx-demo-app/client/design-system';
import { useState } from 'react';
import { UpdateUserModal } from './update-user-modal';
import { useGetUsersQuery } from './queries.generated';

interface ModalState {
  userId: string;
  userName: string;
}

export const UserList = () => {
  const { data, error, fetchMore, networkStatus } = useGetUsersQuery({
    variables: {
      take: 5,
    },
    notifyOnNetworkStatusChange: true,
  });

  const [modalState, setModalState] = useState<ModalState | null>(null)

  const hasNextPage =
    Boolean(data) && data?.aggregateUser._count?._all !== data?.users.length;

  if (error) {
    return <p>There was an error!</p>;
  }

  if (networkStatus === NetworkStatus.loading) {
    return <p>Loading...</p>;
  }

  const closeModal = () => setModalState(null);

  return (
    <>
      <Stack spacing={2}>
        {data?.users.map((user) => (
          <UserCard key={user.id} name={user.name} email={user.email} onRename={() => setModalState({ userId: user.id, userName: user.name })} />
        ))}
      </Stack>

      {hasNextPage && (
        <Box display="flex" m={8} justifyContent="center">
          <Button
            onClick={() => {
              fetchMore({
                variables: {
                  skip: 1,
                  cursor: {
                    id: data?.users.at(-1)?.id,
                  },
                },
              });
            }}
            variant="contained"
          >
            {networkStatus === NetworkStatus.fetchMore
              ? 'Loading...'
              : 'Load more'}
          </Button>
        </Box>
      )}

      {
        modalState ? <UpdateUserModal onClose={closeModal} onComplete={closeModal} userId={modalState.userId} userName={modalState.userName}/> : null
      }
    </>
  );
};

export default UserList;
