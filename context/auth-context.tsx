"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type User = {
  id: string;
  name: string;
  email: string;
  preferences: {
    notifications: boolean;
    marketing: boolean;
    theme: 'light' | 'dark' | 'system';
    language: string;
  };
};

type AuthContextType = {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  updatePreferences: (preferences: Partial<User['preferences']>) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('xcom-user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const login = async (email: string, password: string) => {
    // Simulate API call
    const mockUser: User = {
      id: '1',
      name: email.split('@')[0],
      email,
      preferences: {
        notifications: true,
        marketing: false,
        theme: 'system',
        language: 'en',
      },
    };
    
    setUser(mockUser);
    localStorage.setItem('xcom-user', JSON.stringify(mockUser));
  };

  const signup = async (name: string, email: string, password: string) => {
    // Simulate API call
    const mockUser: User = {
      id: '1',
      name,
      email,
      preferences: {
        notifications: true,
        marketing: true,
        theme: 'system',
        language: 'en',
      },
    };
    
    setUser(mockUser);
    localStorage.setItem('xcom-user', JSON.stringify(mockUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('xcom-user');
  };

  const updatePreferences = (preferences: Partial<User['preferences']>) => {
    if (user) {
      const updatedUser = {
        ...user,
        preferences: {
          ...user.preferences,
          ...preferences,
        },
      };
      setUser(updatedUser);
      localStorage.setItem('xcom-user', JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, updatePreferences }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}