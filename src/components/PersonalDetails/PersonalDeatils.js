import React from 'react';
import { useContext } from 'react';
import {
  AboutContext,
  AddressContext,
  EmailContext,
  NameContext,
  PhoneContext,
  PhotoContext,
} from '../CreateResume/CreateResume';
const PersonalDeatils = () => {
  const [name, setName, handlerToSave] = useContext(NameContext);
  const [email, setEmail] = useContext(EmailContext);
  const [phone, setPhone] = useContext(PhoneContext);
  const [about, setAbout] = useContext(AboutContext);
  const [address, setAddress] = useContext(AddressContext);
  const [photo, setPhoto] = useContext(PhotoContext);

  return (
    <div className="my-12">
      <h3 className="text-3xl font-semibold text-center">
        This is personal Details fields
      </h3>
      <div className=" mx-auto my-12">
        <div>
          <label className="label" htmlFor="name">
            Name:
          </label>
          <input
            onChange={e => setName(e.target.value)}
            className="input-field"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label className="label" htmlFor="email">
            Email:
          </label>
          <input
            onChange={e => setEmail(e.target.value)}
            className="input-field"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div>
          <label className="label" htmlFor="number">
            Mobile Number:
          </label>
          <input
            onChange={e => setPhone(e.target.value)}
            className="input-field"
            type="number"
            placeholder="Enter your number"
          />
        </div>
        <div>
          <label className="label" htmlFor="address">
            Address:
          </label>
          <input
            onChange={e => setAddress(e.target.value)}
            className="input-field"
            type="text"
            placeholder="Enter your address"
          />
        </div>
        <div>
          <label className="label" htmlFor="address">
            Photo:
          </label>
          <input
            onChange={e => setPhoto(e.target.files[0])}
            className="input-field"
            type="file"
            placeholder="Enter your photo url"
          />
        </div>
        <div>
          <label className="label" htmlFor="name">
            About:
          </label>
          <textarea
            onChange={e => setAbout(e.target.value)}
            className="input-field h-32"
            name="about"
            id="about"
          ></textarea>
        </div>
        <button onClick={handlerToSave} className="coustom-btn mt-5 ">
          Save
        </button>
      </div>
    </div>
  );
};

export default PersonalDeatils;
