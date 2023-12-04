import React, { createContext, useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import logo from './logo192.png';
export const NameContext = createContext('');
export const EmailContext = createContext('');
export const PhoneContext = createContext('');
export const AboutContext = createContext('');
export const AddressContext = createContext('');
export const PhotoContext = createContext('');
export const SkillsContext = createContext('');
export const LanguageContext = createContext('');
export const EducationContext = createContext('');
export const ExperienceContext = createContext('');
export const ProjectsContext = createContext('');
const CreateResume = () => {
  const pdfRef = useRef();
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [about, setAbout] = useState('');
  const [address, setAddress] = useState('');
  const [photo, setPhoto] = useState('');
  const [experience, setExperince] = useState([]);
  const [person, setPerson] = useState({});
  const [skills, setSkills] = useState([]);
  const [language, setLanguage] = useState([]);
  const [education, setEducation] = useState([]);
  const [project, setProject] = useState([]);
  const details = {
    names: name,
    emails: email,
    phones: phone,
    abouts: about,
    addresss: address,
    langs: language,
    skill: skills,
    educations: education,
    experiences: experience,
    projects: project,
  };
  const { names, emails, phones, abouts, addresss } = person;
  const { skill, langs, educations, experiences, projects } = details;
  console.log(skill);
  // hangler for save data

  const handlerToSave = () => {
    setPerson(() => details);
  };
  // handler to download
  const hanlerDownload = () => {
    const input = pdfRef.current;
    html2canvas(input)?.then(canvas => {
      const imageData = canvas?.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4', true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHieght = pdf.internal.pageSize.getHeight();
      const imageWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imageWidth, pdfHieght / imgHeight);
      const imgX = (pdfWidth - imageWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imageData,
        'PNG',
        imgX,
        imgY,
        imageWidth * ratio,
        imgHeight * ratio
      );
      pdf.save('invoice.pdf');
    });
  };
  const lang = ['Bengli', 'English', 'Franch'];
  const expertise = [
    'Web Design',
    'Brandling',
    'Graphic Design',
    'SEO',
    'Marketing',
  ];
  return (
    <>
      <div className="py-12 bg-slate-100 flex justify-between items-center px-5 md:px-12">
        <div className="flex gap-5">
          <Link className="" to="/resume">
            Personal Details
          </Link>
          <Link to="/resume/skills">Skills</Link>
          <NavLink to="/resume/experience">Experience</NavLink>
          <NavLink to="/resume/project">Projects</NavLink>
        </div>
        <div>
          <button onClick={() => setIsOpen(true)} className="coustom-btn">
            Show
          </button>
        </div>
      </div>
      <p className="text-center p-3 bg-yellow-200 ">
        Fill this input fields to create resume
      </p>
      <div className="min-h-[calc(100vh-208px)] md:w-2/3 mx-auto my-5 px-5 md:px-12">
        <NameContext.Provider value={[name, setName, handlerToSave]}>
          <EmailContext.Provider value={[email, setEmail]}>
            <AboutContext.Provider value={[about, setAbout]}>
              <PhoneContext.Provider value={[phone, setPhone]}>
                <AddressContext.Provider value={[address, setAddress]}>
                  <PhotoContext.Provider value={[photo, setPhoto]}>
                    <SkillsContext.Provider value={[skills, setSkills]}>
                      <LanguageContext.Provider value={[language, setLanguage]}>
                        <EducationContext.Provider
                          value={[education, setEducation]}
                        >
                          <ExperienceContext.Provider
                            value={[experience, setExperince]}
                          >
                            <ProjectsContext.Provider
                              value={[project, setProject]}
                            >
                              <Outlet />
                            </ProjectsContext.Provider>
                          </ExperienceContext.Provider>
                        </EducationContext.Provider>
                      </LanguageContext.Provider>
                    </SkillsContext.Provider>
                  </PhotoContext.Provider>
                </AddressContext.Provider>
              </PhoneContext.Provider>
            </AboutContext.Provider>
          </EmailContext.Provider>
        </NameContext.Provider>
      </div>
      <div className="flex justify-center items-center">
        <div
          className={`bg-white z-10 w-10/12 absolute  ${
            isOpen ? 'block' : 'hidden'
          }    top-20 mx-auto min-h-[calc(100vh-208px)]`}
        >
          <button
            className="absolute -top-10 w-10 h-10 bg-white rounded-full -right-2"
            onClick={() => setIsOpen(false)}
          >
            X
          </button>
          <button
            onClick={hanlerDownload}
            className="absolute -top-10 w-10 h-10 bg-white rounded-full right-12"
          >
            D
          </button>
          <div ref={pdfRef} className="w-full h-full ">
            <div className="h-12 bg-orange-200"></div>
            <div className="flex my-12 px-12 gap-20 min-h-[calc(80vh-80px)] justify-between ">
              <div className="w-1/3 h-full ">
                <div className="w-32 h-32 rounded-full">
                  <img
                    className=" w-full h-full rounded-full"
                    src={logo}
                    alt=""
                  />
                </div>
                <div className="my-5">
                  <p>{phones ? phones : '01403406419'}</p>
                  <p>{emails ? email : 'islammdfoisal54@gmail.com'}</p>
                  <p>{address ? address : 'Jamalpur,Madargonj'}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">EDUCATION</h3>
                  {educations && educations.length > 0 ? (
                    educations.map((educat, i) => (
                      <p className="my-5 " key={i}>
                        {educat}
                      </p>
                    ))
                  ) : (
                    <>
                      <p className="my-5">
                        <span className="font-semibold text-base">
                          Bacholor of Design <br />
                          Wordwire University <br />
                        </span>
                        2006 - 2008
                      </p>
                      <p className="my-5">
                        <span className="font-semibold text-base">
                          Bacholor of Design <br />
                          Wordwire University <br />
                        </span>
                        2006 - 2008
                      </p>
                    </>
                  )}
                </div>
                <div>
                  <h3 className="text-xl mb-5 font-semibold">EXPERTISE</h3>
                  <ul>
                    {skill && skill.length > 0
                      ? skill.map((sk, i) => (
                          <li className="my-2" key={i}>
                            {sk}
                          </li>
                        ))
                      : expertise.map((expart, indx) => (
                          <li className="my-2" key={indx}>
                            {expart}
                          </li>
                        ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl my-5 font-semibold">LANGUAGE</h3>
                  <ul>
                    {langs && langs.length > 0
                      ? langs.map((ln, i) => (
                          <li className="my-2" key={i}>
                            {ln}
                          </li>
                        ))
                      : lang.map((language, indx) => (
                          <li className="my-2" key={indx}>
                            {language}
                          </li>
                        ))}
                  </ul>
                </div>
              </div>
              <div className="h-full flex-grow ">
                <div className="my-5">
                  <h3 className="text-4xl font-bold">
                    {names ? names : 'MD Foisal Islam'}
                  </h3>
                  <p className="my-2 font-sans">Web Developer</p>
                </div>
                <hr className="border border-gray-500" />
                <div className="my-5">
                  <h3 className="text-xl font-semibold">ABOUT ME</h3>
                  <p>
                    {abouts
                      ? abouts
                      : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque dicta quia sunt, perspiciatis officiis labore dolores unde officia, mollitia doloremque eveniet quam itaque accusamus possimus sint culpa iusto asperiores rerum!'}{' '}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">WORK EXPERIENCE</h3>
                  <p className="my-5">
                    {experience.length > 0 ? (
                      experience.map((ex, i) => (
                        <p key={i} className="my-8">
                          {ex}
                        </p>
                      ))
                    ) : (
                      <>
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Tenetur, exercitationem esse, maiores quam amet
                          error suscipit incidunt dolores ut magni dolorum
                          itaque architecto nesciunt illum libero ex quae.
                          Alias, doloribus.
                        </p>
                        <p className="my-8">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Tenetur, exercitationem esse, maiores quam amet
                          error suscipit incidunt dolores ut magni dolorum
                          itaque architecto nesciunt illum libero ex quae.
                          Alias, doloribus.
                        </p>
                        <p className="my-8">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Tenetur, exercitationem esse, maiores quam amet
                          error suscipit incidunt dolores ut magni dolorum
                          itaque architecto nesciunt illum libero ex quae.
                          Alias, doloribus.
                        </p>
                      </>
                    )}
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">Projets </h3>
                  <p>
                    {projects.length > 0 ? (
                      projects.map((project, i) => (
                        <div className="flex flex-col">
                          <a className="text-blue-500" href={project}>
                            {' '}
                            <span className="text-black">Live Link:</span>{' '}
                            {project}
                          </a>
                        </div>
                      ))
                    ) : (
                      <div className="mt-5 flex flex-col gap-5">
                        <a
                          href="www.google.com"
                          target="_blank"
                          className="text-blue-500"
                        >
                          <span className="text-black">Live Link:</span>{' '}
                          www.google.com
                        </a>
                        <a
                          href="www.google.com"
                          target="_blank"
                          className="text-blue-500"
                        >
                          <span className="text-black">Live Link:</span>{' '}
                          www.google.com
                        </a>
                        <a
                          href="www.google.com"
                          target="_blank"
                          className="text-blue-500"
                        >
                          <span className="text-black">Live Link:</span>{' '}
                          www.google.com
                        </a>
                        <a
                          href="www.google.com"
                          target="_blank"
                          className="text-blue-500"
                        >
                          <span className="text-black">Live Link:</span>{' '}
                          www.google.com
                        </a>
                      </div>
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateResume;
