// import WelcomePage from 'pages/WelcomePage';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound/NotFound';
import ThemeProvider from '../providers/themeProvider';
// import MainDashboard from './ScreensPage/MainDashboard/MainDashboard';
import Board from './ScreensPage/Board/Board';

export const App = () => {
  return (
    <div>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<Board />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};
