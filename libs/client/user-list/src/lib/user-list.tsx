import { NetworkStatus } from '@apollo/client';
import { Button, UserCard } from '@nx-demo-app/design-system';
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

  return (
    <>
      {networkStatus === NetworkStatus.loading && <p>Loading...</p>}

      {data?.users.map((user) => (
        <UserCard key={user.id} name={user.name} email={user.email} />
      ))}

      {hasNextPage && (
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
        >
          {networkStatus === NetworkStatus.fetchMore
            ? 'Loading...'
            : 'Load more'}
        </Button>
      )}
    </>
  );
};

export default UserList;
