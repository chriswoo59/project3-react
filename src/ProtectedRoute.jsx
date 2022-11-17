import React from "react";
import { Route, Navigate, Routes } from "react-router-dom";


const ProtectedRoute = ({ children, ...rest }) => {
  return (
    <Routes>
                    <Route
                      {...rest}
                      render={({ location }) =>
                        localStorage.getItem("token") ? (
                          children
                        ) : (
                          <Navigate
                            to={{
                              pathname: "/home",
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