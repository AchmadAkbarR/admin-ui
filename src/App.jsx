import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ForgotPassword from "./components/Fragments/ForgotPassword";
import ErrorRoute from "./pages/errorRoute";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import Expensespage from "./pages/expenses";
import { Container, Row, Col } from 'react-bootstrap';


const App = () => {
  const myRouter = createBrowserRouter([
	{
	  path: "/",
      element: <DashboardPage/>,
	  errorElement: <ErrorRoute/>,

	},
	{
		path: "/expenses",
		element: <Expensespage/>,
	},
	{
		path: "/login",
		element: <SignInPage/>,
	},
	{
		path: "/register",
		element: <SignUpPage/>,
	},
	{
		path: "/forgot-password",
		element: <ForgotPassword /> ,
	},
	{
		path: "/balance",
		element: <BalancePage/>,
  
	  },
	]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
