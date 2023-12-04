import React, { useContext, useRef } from 'react';
import { ExperienceContext } from '../CreateResume/CreateResume';

const Experience = () => {
  const exRef = useRef(null);
  const [experience, setExperince] = useContext(ExperienceContext);
  let allExperi = [];
  const handlerToSave = () => {
    allExperi = [...experience, exRef.current.value];
    setExperince(allExperi);
  };
  return (
    <div>
      {' '}
      <h3 className="text-3xl font-semibold text-center">Experiences fields</h3>
      <span className="p-1 px-2 my-5 text-gray-400 rounded-md bg-slate-100">
        If you want to multipule skill or language you should write your skill
        and every time clicked save button
      </span>
      <div>
        <label className="label" htmlFor="name">
          Experiences:
        </label>
        <textarea
          ref={exRef}
          className="input-field h-32"
          type="text"
          placeholder="You can add multiple experience "
        />
      </div>
      <button onClick={handlerToSave} className="coustom-btn mt-5 ">
        Save
      </button>
    </div>
  );
};

export default Experience;
