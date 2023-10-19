import React from "react";

function Contact({ user }) {
  return (
    <div className="contact hover3">
      <div className="contact_img">
        <img src={user.profili} alt="profili" />
      </div>
      <span>
        {user.emri} {user.mbiemri}
      </span>
    </div>
  );
}

export default Contact;
