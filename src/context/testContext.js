import { useState, createContext } from 'react';

export const TestContext = createContext('light');

const TestContextProvider = ({ children }) => {
  const [test, setTest] = useState('light');

  return <TestContext.Provider value={{ test }}>{children}</TestContext.Provider>;
};

export default TestContextProvider;
