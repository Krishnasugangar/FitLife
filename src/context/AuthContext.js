import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const USERS_KEY = "fitlife_users";
const CURRENT_USER_KEY = "fitlife_current_user";

export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem(USERS_KEY);
    return storedUsers ? JSON.parse(storedUsers) : [];
  });
  const [currentUser, setCurrentUser] = useState(() => {
    const storedUser = localStorage.getItem(CURRENT_USER_KEY);
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    currentUser
      ? localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(currentUser))
      : localStorage.removeItem(CURRENT_USER_KEY);
  }, [currentUser]);

  const register = (email, password) => {
    if (users.find((u) => u.email === email)) {
      throw new Error("User already exists");
    }
    const newUser = { email, password, subscriptions: [] };
    setUsers([...users, newUser]);
  };

  const login = (email, password) => {
    const user = users.find((u) => u.email === email && u.password === password);
    if (!user) throw new Error("Invalid credentials");
    setCurrentUser(user);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const subscribePlan = (planName) => {
    if (!currentUser) throw new Error("Login required");
    if (currentUser.subscriptions.includes(planName))
      throw new Error("Already subscribed");
    const updatedUser = {
      ...currentUser,
      subscriptions: [...currentUser.subscriptions, planName],
    };
    setCurrentUser(updatedUser);
    setUsers(users.map(u => u.email === updatedUser.email ? updatedUser : u));
  };

  return (
    <AuthContext.Provider value={{ users, currentUser, register, login, logout, subscribePlan }}>
      {children}
    </AuthContext.Provider>
  );
};
