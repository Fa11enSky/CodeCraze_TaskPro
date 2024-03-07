import { Route, Routes } from 'react-router-dom';
import WelcomePage from 'pages/WelcomePage';
import NotFound from './NotFound/NotFound';
import ThemeProvider from '../providers/themeProvider';
import HomePage from '../pages/HomePage';
import PublicRoute from '../guards/PublicRoute';
import AuthPage from '../pages/AuthPage';
import PrivateRoute from '../guards/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { useEffect } from 'react';
import { refreshUser } from '../redux/auth/operations';
import Loader from './Loader/Loader';
import ColumnsList from './ColumnList/ColumnList';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
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
            // element={<HomePage />}
          >
            <Route path=":boadrId" element={<ColumnsList />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};
