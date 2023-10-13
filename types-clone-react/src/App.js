import logo from "./logo.svg";
import "./App.css";
import MiHeader from "./components/header";
import "./css/header.css";
import MiFooter from "./components/footer";
import "./css/footer.css";
import MiSection from "./components/section1";
import "./css/container.css";
import "./css/types.css";

function App() {
  return (
    <>
      
        <MiHeader />

        <main>
          <MiSection />
        </main>

        <MiFooter />
      
    </>
  );
}

export default App;
