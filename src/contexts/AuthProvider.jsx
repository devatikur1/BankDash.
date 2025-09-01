import { createContext, useState, useEffect } from "react";
import LocalStorageService from "../utils/LocalStorage";

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [registerStatus, setRegisterStatus] = useState(null);
  const [loginStatus, setLoginStatus] = useState(null);

  // Check if user is logged in
  useEffect(() => {
    const users = LocalStorageService.getData();
    const loggedInUser = users.find(
      (user) => user.userInfo.loginStatus === true
    );
    if (loggedInUser) {
      setCurrentUser(loggedInUser);
      setLoginStatus(true);
    }
  }, []);

  const logoutUser = () => {
    if (currentUser) {
      LocalStorageService.updateUser(currentUser.userInfo.email, {
        ...currentUser,
        userInfo: {
          ...currentUser.userInfo,
          loginStatus: false,
        },
      });
      setCurrentUser(null);
      setLoginStatus(false);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        loginStatus,
        setLoginStatus,
        registerStatus,
        setRegisterStatus,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
