import React from 'react';
import { useRoutes } from "react-router-dom";
import Routes from './routes';

function App() {
  const elements = useRoutes(Routes());
  return <> {elements} </>
}

export default App;
