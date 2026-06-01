import React from 'react';
import Link from 'next/link';
import mySkills from "../../data/skills.json"
import { getIcon } from "../icons/skillsIcons";

export default function Skills() {
  return (
    <>
      <div className="text-center">
        <Link href="/skills" className="display-3 pb-4">
          Skills
        </Link>
      </div>
      <br />
      <div className="row">
        {mySkills.map((category, indexC) =>
          <React.Fragment key={indexC}>
            {category.skills.map((skill, indexS) => {
              const IconComponent = getIcon(skill?.logo);
              return (<span className="col-xxl-3 col-lg-4 col-md-6 col-6 py-1 text-center" data-aos="fade-up" key={indexS}>
                {IconComponent ? <IconComponent /> : "no-icon"}
                <span className="d-none d-sm-inline col-md-12 col-sm-0 px-2 align-middle fs-3">{skill?.name}</span>
              </span>);
            }
            )}
          </React.Fragment>
        )}
      </div>
    </>
  )
}

