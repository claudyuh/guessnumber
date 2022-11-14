import React from "react";
import { RouteObject } from "react-router-dom";
import GuessNumber from "./pages/GuessNumber";
import Homepage from "./pages/Homepage";
import ResultPage from "./pages/ResultPage";

const Routes = (): RouteObject[] => {
  return [
    {
      path: "/",
      children: [
        { 
          index: true,
          element: <Homepage/> 
        },
        {
          path: '/guessnumber',
          element: <GuessNumber />
        },
        {
          path: '/guessnumber/result',
          element: <ResultPage />
        },
      ],
    },
  ];
};
  
  export default Routes;
  