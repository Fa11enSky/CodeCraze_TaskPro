import WelcomePage from 'pages/WelcomePage';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound/NotFound';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
