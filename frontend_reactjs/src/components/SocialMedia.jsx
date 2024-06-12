import React from "react";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";
import { FaEdit } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <a
      href="https://www.linkedin.com/in/vivekyadav2003/"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <BsLinkedin />
      </div>
    </a>

    <a href="https://github.com/Humancodes" target="_blank" rel="noreferrer">
      <div>
        <BsGithub />
      </div>
    </a>
    <a
      href="https://vivekyadav.sanity.studio/"
      target="_blank"
      rel="noreferrer"
    >
      <div>
        <FaEdit />
      </div>
    </a>
  </div>
);

export default SocialMedia;
