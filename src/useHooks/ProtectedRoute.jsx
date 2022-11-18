import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";
import useToken from "../useToken";
import getToken from "../getToken";

const ProtectedRoute = ({ children, ...rest }) => {
  return (
    <Routes>
                    <Route
                      {...rest}
                      render={({ location }) =>
                        localStorage.getToken(useToken) ? (
                          children
                        ) : (
                          <Navigate
                            to={{
                              pathname: " ",
                              state: { from: location }
                            }}
                          />
                        )
                      }
                    />
      </Routes>
  );
};
export default ProtectedRoute;