import GlobalStyles from './styles/global';
import { baseTheme } from './styles/theme';
import React from 'react';
import MainScreen from './pages/main-screen/main-sceen';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { AppRoute} from './const';
import NotFoundScreen from './pages/not-found-screen/not-found-screen';


function App(): JSX.Element {
  return (
      <ThemeProvider theme={baseTheme}>
        <React.Fragment>
          <GlobalStyles />
          <Routes>
            <Route path={AppRoute.Root} element={<MainScreen />} />
            <Route path={AppRoute.Other} element={<NotFoundScreen />} />
          </Routes>
        </React.Fragment>
      </ThemeProvider>
  );
}

export default App;
