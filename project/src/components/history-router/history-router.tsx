import { useState, useLayoutEffect, useEffect } from 'react';
import { Router } from 'react-router-dom';
import type { BrowserHistory } from 'history';

export interface HistoryRouterProps {
  history: BrowserHistory
  basename?: string
  children?: React.ReactNode
}

function HistoryRouter({
  history,
  basename,
  children,
}: HistoryRouterProps) {

  const [state, setState] = useState({
    action: history.action,
    location: history.location,
  });

  useLayoutEffect(() => history.listen(setState), [history]);

  useEffect(() => {

    if(state.location.hash && document.querySelector(state.location.hash)) {
      document.querySelector(state.location.hash)?.scrollIntoView();
    } else {
      document.documentElement.scrollTop = 0;
    }
  }, [state.location])

  return (
    <Router
      basename={basename}
      location={state.location}
      navigationType={state.action}
      navigator={history}
    >
      {children}
    </Router>
  );
}

export default HistoryRouter;
