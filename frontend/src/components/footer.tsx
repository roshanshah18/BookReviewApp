import { PiCopyrightFill } from "react-icons/pi";
const Footer = () => {
  return (
    <>
      <div className="bg-[#333333] mt-6   text-[#f4f4f4] md:h-[300px]   ">
        <div className="grid grid-cols-2 md:flex md:justify-evenly">
          <div className="text-base p-8 hover:cursor-pointer ">
            <h1 className="font-bold  text-xl no-underline">DISCOVER</h1>
            <p >Home</p>
            <p >
             Books
            </p>
            <p >
             Authors
            </p>
            <p >
             Subjects
            </p>
            <p >
             Collections
            </p>
          </div>
          <div className="text-base p-8 hover:cursor-pointer">
            <h1 className="font-bold  text-xl">HELP</h1>
            <p >
              Help Center
            </p>
            <p >
              Report a Problem
            </p>
            <p >
              Release Notes
            </p>
            <p >
              Contact
            </p>
          </div>
          <div className="text-base p-8 hover:cursor-pointer ">
            <h1 className="font-bold  text-xl ">STAY CONNECTED</h1>
            <p>Social Media</p>
            <p >Get Mobile App</p>
            <p >Insider Email</p>
          </div>
        </div>
        <hr className="mt-6 mx-10" />

        <div className="flex flex-col items-center p-2 md:flex-row md:justify-around ">
          <div className="flex gap-4 hover:cursor-pointer">
            <p >PrivacyPolicy</p>
            <p >Contact</p>
          </div>
          <div>
            <p className="flex ">
              Copyright
              <PiCopyrightFill className="m-1" />
              Pustakalaya.All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
