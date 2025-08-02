import React from "react";
import Layout from "./layout/Layout";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home, BookForm, Locations, TermsConditions, BookingHome, Meet, CountrySelection } from './layout/pageIndex.js'
function App() {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home />
        }, {
          path: '/book/:airport',
          element: <BookingHome />
        }, {
          path: '/book/:airport/:serviceType',
          element: <BookForm />
        }
        , {
          path: '/locations',
          element: <Locations />
        }, {
          path: '/termsandconditions',
          element: <TermsConditions />
        }, {
          path: '/services/meet-and-greet',
          element: <Meet />
        }, {
          path: '/selectCountry',
          element: <CountrySelection />
        }

      ]
    }
  ])
  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App;
