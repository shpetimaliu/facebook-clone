import React from "react";
import { useMediaQuery } from "react-responsive";
import { stories } from "../../../data/home";
import { ArrowRight, Plus } from "../../../svg";
import "./Stories.css";
import Story from "./Story";

function Stories() {
  const query1175px = useMediaQuery({
    query: "(max-width: 1175px)",
  });

  const query1030px = useMediaQuery({
    query: "(max-width: 1030px)",
  });

  const max = query1030px ? 5 : query1175px ? 4 : stories.length;

  return (
    <div className="stories">
      <div className="create_story_card">
        <img src="../../../images/default_pic.png" alt="" />
        <div className="plus_story">
          <Plus color="#fff" />
        </div>
        <div className="story_create_text">Create Story</div>
      </div>
      {stories.slice(0, max).map((story, i) => (
        <Story story={story} key={i} />
      ))}
      <div className="white_circle">
        <ArrowRight color="#65676b" />
      </div>
    </div>
  );
}

export default Stories;
