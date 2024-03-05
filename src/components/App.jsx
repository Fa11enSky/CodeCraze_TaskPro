import WelcomePage from 'pages/WelcomePage';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound/NotFound';
import ThemeProvider from '../providers/themeProvider';
import HomePage from 'pages/HomePage';
import PublicRoute from '../guards/PublicRoute';
import AuthPage from 'pages/AuthPage';
import PrivateRoute from 'guards/PrivateRoute';

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
          <Route
            path="/home"
            element={
              <PrivateRoute redirectTo="/auth/login" component={<HomePage />} />
            }
          >
            <Route
              path=":boadrId"
              element={<div>Тут буде рендер колонок дошки</div>}
            ></Route>
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};
