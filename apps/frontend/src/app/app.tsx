import { NetworkStatus } from '@apollo/client';
import { Button, UserCard } from '@nx-demo-app/design-system';
import { useGetUsersQuery } from './queries.generated';


export const App = () => {
  const { data, error, fetchMore, networkStatus } = useGetUsersQuery({
    variables: {
      take: 5,
    }, notifyOnNetworkStatusChange: true
  });

  const hasNextPage = Boolean(data) && data?.aggregateUser._count?._all !== data?.users.length;

  return (
    <>
      <div style={{ textAlign: 'center' }}>
        <h1>Welcome to hello!</h1>
        <img
          width="450"
          src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png"
          alt="Nx - Smart, Fast and Extensible Build System"
        />
      </div>

      {networkStatus === NetworkStatus.loading && <p>Loading...</p>}

      {error && <p>There was an error!</p>}

      {data?.users.map((user) => <UserCard key={user.id} name={user.name as string} email={user.email as string} />)}

      {hasNextPage && <Button onClick={() => {
        fetchMore({
          variables: {
            skip: 1,
            cursor: {
              id: data?.users.at(-1)?.id
            },
          }
        })
      }}>Load more</Button>}

      {networkStatus === NetworkStatus.fetchMore && <p>Loading more...</p>}

    </>
  );
};

export default App;
