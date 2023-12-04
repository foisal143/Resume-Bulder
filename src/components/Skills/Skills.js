import React, { useEffect, useState, useRef, useContext } from 'react';
import {
  EducationContext,
  LanguageContext,
  SkillsContext,
} from '../CreateResume/CreateResume';

const Skills = () => {
  const [skill, setSkills] = useContext(SkillsContext);
  const [language, setLanguage] = useContext(LanguageContext);
  const [education, setEducation] = useContext(EducationContext);
  const skillRef = useRef(null);
  const langRef = useRef(null);
  const educationRef = useRef(null);
  let skills = [];
  let languages = [];
  let educations = [];
  const handlerToSave = () => {
    skills = [...skill, skillRef.current.value];
    languages = [...language, langRef.current.value];
    educations = [...education, educationRef.current.value];
    setSkills(() => skills);
    setLanguage(() => languages);
    setEducation(() => educations);
  };
  return (
    <div>
      <h3 className="text-3xl font-semibold text-center">
        This is Skills fields
      </h3>
      <span className="p-1 px-2 my-5 text-gray-400 rounded-md bg-slate-100">
        If you want to multipule skill or language you should write your skill
        and every time clicked save button
      </span>
      <div>
        <div>
          <label className="label" htmlFor="name">
            Tecnical Skills:
          </label>
          <input
            ref={skillRef}
            className="input-field"
            type="text"
            placeholder="You can add multiple skills"
          />
        </div>
        <div>
          <label className="label" htmlFor="name">
            Language:
          </label>
          <input
            ref={langRef}
            className="input-field"
            type="text"
            placeholder="You can add multiple languages"
          />
        </div>
        <div>
          <label className="label" htmlFor="name">
            Education:
          </label>
          <input
            ref={educationRef}
            className="input-field"
            type="text"
            placeholder="Degree , University name and years "
          />
        </div>
      </div>
      <button onClick={handlerToSave} className="coustom-btn mt-5 ">
        Save
      </button>
    </div>
  );
};

export default Skills;
