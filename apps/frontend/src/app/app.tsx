import { Greetings } from '@nx-demo-app/design-system';
import { useGetUsersQuery } from './queries.generated';

export const App = () => {
  const { data, loading, error } = useGetUsersQuery();

  const user = data?.users[0].name;

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

      {loading && <p>Loading...</p>}

      {error && <p>There was an error!</p>}

      {user && <Greetings name={user} />}

    </>
  );
};

export default App;
