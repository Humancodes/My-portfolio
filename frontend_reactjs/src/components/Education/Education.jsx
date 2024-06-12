import React from "react";
import { motion } from "framer-motion";

import "./Education.scss";
const Education = ({ marks, sYear, eYear, edu, school }) => {
  return (
    <>
      <div className="app__education-profiles">
        <div className="app__edu">
          <motion.div className="app__edu-item">
            <div className="app__edu-marks">
              <p className="bold-text">{marks}</p>
              <div className="app__edu-months">
                <p className="app__start-year">{sYear} - </p>
                <p className="app__end-year">{eYear}</p>
              </div>
            </div>
            <motion.div className="app__edu-works">
              <>
                <motion.div
                  whileInView={{ opacity: [0, 1] }}
                  transition={{ duration: 0.5 }}
                  className="app__edu-work"
                  data-tip
                  data-for={"Intermediate"}
                >
                  <h4 className="bold-text">{edu}</h4>
                  <p className="p-text">{school}</p>
                </motion.div>
              </>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Education;
