import WelcomePage from 'pages/WelcomePage';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound/NotFound';
import AuthPage from 'pages/AuthPage';
import PublicRoute from 'guards/PublicRoute';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route
          path="/auth/:id"
          element={<PublicRoute redirectTo="/home" component={<AuthPage />} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
