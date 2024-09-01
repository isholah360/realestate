import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./component/footer/footer";
import CursorProvider from "./component/providers/cursorProvider";
import Header from "./component/header/heade";
import Navbar from "./component/header/navbar";

// import Sides from './Sides';

export default function App() {
  return (
    <CursorProvider>
      <div className="App">
       <Navbar/>
        <Outlet />
        <Footer />
      </div>
    </CursorProvider>
  );
}
