import React, { useRef, useState } from "react";
import Header from "../../components/header/Header";
import useClickOutside from "../../helpers/clickOutside";
import "./Home.css";

function Home() {
  const [visible, setVisible] = useState(true);
  const el = useRef(null);
  useClickOutside(el, () => {
    setVisible(false);
    console.log("You clicked outside");
  });

  return (
    <div>
      <Header />
      {visible && <div className="card" ref={el}></div>}
    </div>
  );
}

export default Home;
