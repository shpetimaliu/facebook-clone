import React from "react";
import { Feeling, LiveVideo, Photo } from "../../svg";
import "./CreatePost.css";

function CreatePost({ user }) {
  return (
    <div className="createPost">
      <div className="createPost_header">
        <img src={user?.profili} alt="" />
        <div className="open_post hover2">
          What's on your mind, {user?.emri}
        </div>
      </div>
      <div className="create_splitter"></div>
      <div className="createPost_body">
        <div className="createPost_icon hover1">
          <LiveVideo color="#f3425f" />
          Live Video
        </div>
        <div className="createPost_icon hover1">
          <Photo color="#4bbf67" />
          Photo/video
        </div>
        <div className="createPost_icon hover1">
          <Feeling color="#F7B927" />
          Feeling/activity
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
