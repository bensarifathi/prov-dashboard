import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./components/Main";
import NavbarProv from "./components/navigations/Navbar";

function App() {
  return (
    <div>
      <div>
        <NavbarProv />
        <Main />
      </div>
    </div>
  );
}

export default App;
