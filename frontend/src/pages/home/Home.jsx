import React, { useRef } from "react";
import Header from "../../components/header/Header";
import useClickOutside from "../../helpers/clickOutside";
import "./Home.css";

function Home() {
  const el = useRef(null);
  useClickOutside(el, () => {
    el.current.style.display = "none";
  });

  return (
    <div>
      <Header />
      <div className="card" ref={el}></div>
    </div>
  );
}

export default Home;
