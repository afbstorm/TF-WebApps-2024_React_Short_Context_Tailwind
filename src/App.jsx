import './App.css'
import './services/mirage.js';
import {useRoutes} from "react-router-dom";
import routes from "./router/router.jsx";
import Navbar from "./components/shared/Navbar.jsx";

function App() {

  const appRoutes = useRoutes(routes)

  return (
      <>
        <Navbar />
        { appRoutes }
      </>
  )
}

export default App
