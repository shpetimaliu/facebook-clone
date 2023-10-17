import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/header/Header";
import LeftSide from "../../components/home/left/LeftSide";
import RightSide from "../../components/home/right/RightSide";
import Stories from "../../components/home/stories/Stories";
import CreatePost from "../../components/post/CreatePost";
import "./Home.css";

function Home() {
  const { user } = useSelector((user) => ({ ...user }));
  return (
    <div className="home">
      <Header />
      <LeftSide user={user} />
      <div className="homeMiddle">
        <Stories />
        <CreatePost user={user} />
      </div>
      <RightSide user={user} />
    </div>
  );
}

export default Home;
