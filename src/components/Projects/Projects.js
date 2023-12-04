import React, { useContext, useRef } from 'react';
import { ProjectsContext } from '../CreateResume/CreateResume';

const Projects = () => {
  const projectRef = useRef(null);
  const [project, setProject] = useContext(ProjectsContext);
  let projects = [];
  const handlerToSave = () => {
    projects = [...project, projectRef.current.value];
    setProject(projects);
  };
  return (
    <div>
      {' '}
      <h3 className="text-3xl font-semibold text-center">Projects fields</h3>
      <span className="p-1 px-2 my-5 text-gray-400 rounded-md bg-slate-100">
        If you want to multipule skill or language you should write your skill
        and every time clicked save button
      </span>
      <div>
        <label className="label" htmlFor="name">
          Live Site Link:
        </label>
        <input
          ref={projectRef}
          className="input-field"
          type="text"
          placeholder="Enter your project link"
        />
      </div>
      <button onClick={handlerToSave} className="coustom-btn mt-5 ">
        Save
      </button>
    </div>
  );
};

export default Projects;
