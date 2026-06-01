import React from "react";
import mySkills from "../data/skills.json"
import { getIcon } from "../components/icons/skillsIcons";
import { ProgressBar } from "react-bootstrap";

function Skills() {
  return (
    <div className="container">
      <h1 className="text-center mt-5 display-2">Skills</h1>
      <br />
      <br />
      {mySkills.map((category, index) => <div className="my-5 py-3" key={index}>
        <h1 className="my-4">{category.category}</h1>
        <div className="row" data-aos="fade-up">
          {category.skills.map((skill, index) => <SkillComponent key={index} skill={skill} />)}
        </div>
      </div>)}
    </div>
  );
}

const SkillComponent = ({skill}) => {
  const IconComponent = getIcon(skill?.logo);
  const level = skill?.skills_percentage;

  return (
      <div className="py-3 col-md-6 px-2">
        <div className="col-12">
          {IconComponent ? <IconComponent /> : "noicon"}
          <span className="px-2 align-middle fs-3"> {skill?.name}</span>
        </div>
        <div className="col-12">
          <div className="py-3">
              <ProgressBar striped className="bg-indigo" now={level} />
          </div>
        </div>
      </div>
  );
};

export default Skills;
