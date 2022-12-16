import { NetworkStatus } from '@apollo/client';
import {
  Button,
  UserCard,
  Stack,
  Box,
} from '@nx-demo-app/client/design-system';
import { useGetUsersQuery } from './queries.generated';

/* eslint-disable-next-line */
export interface UserListProps {}

export const UserList = (props: UserListProps) => {
  const { data, error, fetchMore, networkStatus } = useGetUsersQuery({
    variables: {
      take: 5,
    },
    notifyOnNetworkStatusChange: true,
  });

  const hasNextPage =
    Boolean(data) && data?.aggregateUser._count?._all !== data?.users.length;

  if (error) {
    return <p>There was an error!</p>;
  }

  if (networkStatus === NetworkStatus.loading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Stack spacing={2}>
        {data?.users.map((user) => (
          <UserCard key={user.id} name={user.name} email={user.email} />
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
    </>
  );
};

export default UserList;
