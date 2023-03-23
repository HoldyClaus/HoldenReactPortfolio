import './App.css';
import { useState } from 'react';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Resume from './components/Resume';
// import {renderTab} from './About';

function App() {
  const [currentTab, setCurrentTab] = useState("about");
  const renderTabs = () => {
        switch (currentTab) {
            case "about":
              return <About />;
            case "portfolio":
              return <Portfolio />;
            case "contact":
              return <Contact />;
            case "resume":
              return <Resume />;
            default:
              return null;
        }
  };

  return (
    <div>
        <div className="mobile-header">
            <Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
        </div>
        <div>
            <main>{renderTabs()}</main>
        </div>
        <div>
            <Footer></Footer>
        </div>
    </div>
  );
}

export default App;
