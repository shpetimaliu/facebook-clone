import React, { useRef, useState } from "react";
import Header from "../../components/header/Header";
import LeftSide from "../../components/home/left/LeftSide";
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
      <LeftSide />
    </div>
  );
}

export default Home;
