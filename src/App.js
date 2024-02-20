import Header from './components/header/Header';
import TestContextProvider from './context/testContext';

const App = () => {
  return (
    <>
      <TestContextProvider>
        <Header />
      </TestContextProvider>
    </>
  );
};

export default App;
