import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import { Education } from "../../components";
import "./Experiences.scss";

const Experiences = () => {
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    const query = '*[_type == "experiences"]';

    client.fetch(query).then((data) => setExperiences(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        My <span>Experience</span>
      </h2>

      <div className="app__experience-profiles">
        <div className="app__skills-exp">
          {experiences.map((experience, index) => (
            <motion.div className="app__skills-exp-item" key={index}>
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
                <div className="app__experience-months">
                  <p className="app__start-month">{experience.smonth} - </p>
                  <p className="app__end-month"> {experience.emonth}</p>
                </div>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                      key={work.name}
                    >
                      <div
                        key={work.id}
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={work.desc}
                      >
                        <h4 key={work.name} className="bold-text">
                          {work.name}
                        </h4>
                        <p key={work.company} className="p-text">
                          {work.company}
                        </p>
                      </div>
                    </motion.div>

                    <ReactTooltip id="my-tooltip" className="skills-tooltip" />
                  </>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
      <h2 className="head-text" style={{ marginTop: "1.3rem" }}>
        My <span>Education</span>
        <Education
          marks="7.68 CGPA"
          sYear="2020"
          eYear="2024"
          edu="B.Tech CS"
          school="Shri Ramswaroop Memorial University"
        />
        <Education
          marks="77%"
          sYear="2019"
          eYear="2020"
          edu="Intermediate / 12th"
          school="St. Mary's Inter College (CBSE)"
        />
      </h2>
    </>
  );
};

export default AppWrap(
  MotionWrap(Experiences, "app__experience"),
  "experience",
  "app__primarybg"
);
