import WelcomePage from 'pages/WelcomePage';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound/NotFound';
import ThemeProvider from '../providers/themeProvider';
import HomePage from '../pages/HomePage';
import ScreensPage from '../pages/ScreensPage';

export const App = () => {
  return (
    <div>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<WelcomePage />} />
          <Route path="/home" element={<HomePage />}>
            <Route index element={<ScreensPage />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};
