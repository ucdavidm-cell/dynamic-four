import { useEffect, useState } from "react";
import Home from "./Home";
import AboutUs from "./AboutUs";
export default function App() {
  const [page, setPage] = useState(window.location.hash);
  useEffect(() => {
    const changePage = () => {
      setPage(window.location.hash);
    };
    window.addEventListener("hashchange", changePage);
    return () => {
      window.removeEventListener("hashchange", changePage);
    };
  }, []);
  return page === "#aboutus" ? <AboutUs /> : <Home />;
}
