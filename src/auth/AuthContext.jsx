import { createContext, useContext, useState } from "react";
const AuthContext = createContext(null);
export const useAuth = () => useContext(AuthContext);
// TODO: keep { user, token } state, persist the token (localStorage), expose login(), register(), logout().
// Auth option: JWT from our API (see API_CONTRACT.md) OR Google OAuth (bonus).
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const value = {
    user,
    token,
    isLoggedIn: !!token,
    login: async () => {},
    register: async () => {},
    logout: () => {},
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
