import { Route, Routes } from 'react-router-dom';
import { UserList } from '@nx-demo-app/client/user-list';

const About = () => <p>Hello else</p>;

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="*" element={<About />} />
    </Routes>
  );
};

export default App;
