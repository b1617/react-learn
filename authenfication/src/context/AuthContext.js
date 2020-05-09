import React, { createContext, useReducer } from 'react';

const AuthReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_SUCESS': {
      return !state;
    }
    default: {
      return state;
    }
  }
};

export const AuthContext = createContext(false);

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, false);
  const loginSuccess = () => {
    dispatch({
      type: 'LOGIN_SUCESS'
    });
  };

  return (
    <AuthContext.Provider value={{ loginSuccess, isLogged: state }}>
      {children}
    </AuthContext.Provider>
  );
};
