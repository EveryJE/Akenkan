import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";
import * as SecureStore from "expo-secure-store";

interface AuthContextProps {
  isLoggedIn: boolean;
  login: () => void;
  logout: () => void;
  hasCompletedOnboarding: boolean;
  completeOnboarding: () => void;
}

const AuthContext = createContext<AuthContextProps | undefined>(undefined);

const AUTH_STORAGE_KEY = "user_auth";
const ONBOARDING_KEY = "user_onboarding";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [hasCompletedOnboarding, setHasCompletedOnboarding] =
    useState<boolean>(false);

  useEffect(() => {
    const loadAuthStatus = async () => {
      try {
        const authStatus = await SecureStore.getItemAsync(AUTH_STORAGE_KEY);
        const onboardingStatus = await SecureStore.getItemAsync(ONBOARDING_KEY);

        if (authStatus) {
          setIsLoggedIn(JSON.parse(authStatus));
        }
        if (onboardingStatus) {
          setHasCompletedOnboarding(JSON.parse(onboardingStatus));
        }
      } catch (e) {
        console.error("Failed to load status", e);
      }
    };
    loadAuthStatus();
  }, []);

  useEffect(() => {
    const saveAuthStatus = async () => {
      try {
        await SecureStore.setItemAsync(
          AUTH_STORAGE_KEY,
          JSON.stringify(isLoggedIn)
        );
        await SecureStore.setItemAsync(
          ONBOARDING_KEY,
          JSON.stringify(hasCompletedOnboarding)
        );
      } catch (e) {
        console.error("Failed to save status", e);
      }
    };
    saveAuthStatus();
  }, [isLoggedIn, hasCompletedOnboarding]);

  const login = () => {
    setIsLoggedIn(true);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const completeOnboarding = () => {
    setHasCompletedOnboarding(true);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        hasCompletedOnboarding,
        login,
        logout,
        completeOnboarding,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
