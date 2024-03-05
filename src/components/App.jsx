// import WelcomePage from 'pages/WelcomePage';
import { Route, Routes } from 'react-router-dom';
import NotFound from './NotFound/NotFound';
import ThemeProvider from '../providers/themeProvider';
import WelcomePage from 'pages/WelcomePage';

export const App = () => {
  return (
    <div>
      <ThemeProvider>
        <Routes>
          <Route path="/" element={<WelcomePage />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};
