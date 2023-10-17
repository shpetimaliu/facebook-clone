import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/header/Header";
import LeftSide from "../../components/home/left/LeftSide";
import RightSide from "../../components/home/right/RightSide";
import "./Home.css";

function Home() {
  const { user } = useSelector((user) => ({ ...user }));
  return (
    <div>
      <Header />
      <LeftSide user={user} />
      <RightSide user={user} />
    </div>
  );
}

export default Home;
