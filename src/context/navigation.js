import { createContext, useEffect, useState } from 'react';

const NavigationContext = createContext();

function NavigationProvider({ children }) {
  // in fact we need state here only for the reason to cause the page to re-render when BACK/FORWARD is clicked
  const [currentPath, setCurrentPath] = useState(window.location.pathname);


  // so the below is not really necessary
  useEffect(() => {
    // we need to set to what address the user navigated to
    const handler = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handler);

    // it's always good to clean up the listeners
    return () => window.removeEventListener('popstate', handler);

  }, []);

  const navigate = (toPath) => {
    window.history.pushState({}, '', toPath);
    setCurrentPath(toPath);
  };

  return (
    <NavigationContext.Provider value={{currentPath, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}

export { NavigationProvider };
export default NavigationContext;
