import { Route, Routes } from 'react-router-dom';
import * as Pages from './routes'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Pages.Home />} />
      <Route path="*" element={<Pages.ErrorPage />} />
    </Routes>
  );
};

export default App;
