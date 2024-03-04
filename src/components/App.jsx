import { Route, Routes } from 'react-router-dom';
import WelcomePage from 'pages/WelcomePage';
import NotFound from './NotFound/NotFound';
import ThemeProvider from '../providers/themeProvider';
import PublicRoute from '../guards/PublicRoute';
import AuthPage from 'pages/AuthPage';

export const App = () => {
  return (
    <div>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route
            path="/auth/:id"
            element={
              <PublicRoute redirectTo="/home" component={<AuthPage />} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};
