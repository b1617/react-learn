import React, { createContext, useReducer } from 'react';

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN': {
      return true;
    }
    case 'LOGOUT': {
      return false;
    }
    default: {
      return state;
    }
  }
};

export const AuthContext = createContext(false);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, false);
  const login = () => {
    dispatch({
      type: 'LOGIN'
    });
  };
  const logout = () => {
    dispatch({
      type: 'LOGOUT'
    });
  };

  return (
    <AuthContext.Provider value={{ login, logout, isLogged: state }}>
      {children}
    </AuthContext.Provider>
  );
};
