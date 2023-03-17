import logo from './logo.svg';
import './App.css';

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
            <main>{renderTab()}</main>
        </div>
        <div>
            <Footer></Footer>
        </div>
    </div>
  );
}

export default App;
