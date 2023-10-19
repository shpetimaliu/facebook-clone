import React from "react";

function Story({ story }) {
  return (
    <div className="story">
      <img src={story.image} alt="" className="story_img" />
      <div className="story_foto_profilit">
        <img src={story.foto_profilit} alt="" />
      </div>
      <div className="story_emri_profilit">
        <span>{story.emri_profilit}</span>
      </div>
    </div>
  );
}

export default Story;
