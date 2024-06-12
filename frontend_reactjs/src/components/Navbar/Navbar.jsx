import React, { useState, useEffect } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";
import { client } from "../../client";
import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const [cv, setCV] = useState([]);

  useEffect(() => {
    const query = '*[_type == "cv"]';
    client.fetch(query).then((data) => {
      setCV(data);
    });
  }, []);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <a href="#home">
          <img src={images.logo} alt="logo" />
        </a>
      </div>
      <ul className="app__navbar-links">
        {["home", "about", "work", "skills", "experience", "contact"].map(
          (item) => (
            <li className="app__flex p-text" key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          )
        )}
      </ul>
      {cv.map((myCv) => (
        <button type="button" className="p-text app__nav-button">
          <a href={myCv.cvlink} target="_blank" rel="noreferrer">
            Resume
          </a>
        </button>
      ))}

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeOut" }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {["home", "about", "work", "skills", "experience", "contact"].map(
                (item) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                )
              )}
              {cv.map((myCv) => (
                <button type="button" className="p-text mobile__nav-button">
                  <a href={myCv.cvlink} target="_blank" rel="noreferrer">
                    Resume
                  </a>
                </button>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
