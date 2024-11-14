import { PiCopyrightFill } from "react-icons/pi";
const Footer = () => {
  return (
    <>
      <div className="bg-[#333333] mt-6   text-[#f4f4f4] md:h-[300px]   ">
        <div className="grid grid-cols-2 md:flex md:justify-evenly">
          <div className="text-base p-8 hover:cursor-pointer ">
            <h1 className="font-bold  text-xl no-underline">DISCOVER</h1>
            <p className="underline underline-offset-4">Home</p>
            <p className="underline underline-offset-4">
             Books
            </p>
            <p className="underline underline-offset-4">
             Authors
            </p>
            <p className="underline underline-offset-4">
             Su
            </p>
            <p className="underline underline-offset-4">
             Collections
            </p>
          </div>
          <div className="text-base p-8 hover:cursor-pointer">
            <h1 className="font-bold  text-xl">HELP</h1>
            <p className="underline underline-offset-4">
              Help Center
            </p>
            <p className="underline underline-offset-4">
              Report a Problem
            </p>
            <p className="underline underline-offset-4">
              Release Notes
            </p>
            <p className="underline underline-offset-4">
              Contact
            </p>
          </div>
          <div className="text-base p-8 hover:cursor-pointer ">
            <h1 className="font-bold  text-xl ">STAY CONNECTED</h1>
            <p className="underline underline-offset-4">Social Media</p>
            <p className="underline underline-offset-4">Get Mobile App</p>
            <p className="underline underline-offset-4">Insider Email</p>
          </div>
        </div>
        <hr className="mt-6 mx-10" />

        <div className="flex flex-col items-center p-2 md:flex-row md:justify-around ">
          <div className="flex gap-4 hover:cursor-pointer">
            <p className="hover:underline underline-offset-4">PrivacyPolicy</p>
            <p className="hover:underline underline-offset-4">Contact</p>
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
