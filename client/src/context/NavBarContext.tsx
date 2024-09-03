
import React, { createContext, useContext, useState } from 'react';

type NavBarContextType = {
  isOpen: boolean;
  toggleNavBar: () => void;
};

const NavBarContext = createContext<NavBarContextType | undefined>(undefined);

export const NavBarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavBar = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <NavBarContext.Provider value={{ isOpen, toggleNavBar }}>
      {children}
    </NavBarContext.Provider>
  );
};

export const useNavBar = () => {
  const context = useContext(NavBarContext);
  if (!context) {
    throw new Error('useNavBar must be used within a NavBarProvider');
  }
  return context;
};
