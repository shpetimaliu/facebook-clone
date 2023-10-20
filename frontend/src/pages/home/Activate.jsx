import React, { useState } from "react";
import { useSelector } from "react-redux";
import Header from "../../components/header/Header";
import LeftSide from "../../components/home/left/LeftSide";
import RightSide from "../../components/home/right/RightSide";
import Stories from "../../components/home/stories/Stories";
import CreatePost from "../../components/post/CreatePost";
import ActivateForm from "./ActivateForm";
import "./Home.css";

function Activate() {
  const { user } = useSelector((user) => ({ ...user }));
  const [success, setSuccess] = useState("");
  const [failed, setFailed] = useState("");
  const [loading, setLoading] = useState(true);
  return (
    <div className="home">
      {success && (
        <ActivateForm
          type="success"
          header="Account verification successfully"
          text={success}
          loading={loading}
        />
      )}
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

export default Activate;
