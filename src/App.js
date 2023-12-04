import logo from './logo.svg';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { createContext, useState } from 'react';
export const IsHomeContext = createContext(true);
function App() {
  const [isHome, setIsHome] = useState(null);
  return (
    <IsHomeContext.Provider value={[isHome, setIsHome]}>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-160px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </IsHomeContext.Provider>
  );
}

export default App;
