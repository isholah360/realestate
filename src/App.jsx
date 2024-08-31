import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./component/footer/footer";
import CursorProvider from "./component/providers/cursorProvider";

// import Sides from './Sides';

export default function App() {
  return (
    <CursorProvider>
      <div className="App">
        <Outlet />
        <Footer />
      </div>
    </CursorProvider>
  );
}
