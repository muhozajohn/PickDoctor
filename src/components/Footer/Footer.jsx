import React from "react";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
const socialinks = [
  {
    path: "https://www.pickdoctor.vercel.app",
    icon: <AiFillYoutube className=" h-5 w-4 group-hover:text-white " />,
  },
  {
    path: "https://www.github.com/muhozajohn",
    icon: <AiFillGithub className=" h-5 w-4 group-hover:text-white " />,
  },
  {
    path: "https://www.instagram.com/mjohn_rw",
    icon: <AiOutlineInstagram className=" h-5 w-4 group-hover:text-white " />,
  },
  {
    path: "https://www.linkedin.com/muhozajohn_2a",
    icon: <RiLinkedinFill className=" h-5 w-4 group-hover:text-white " />,
  },
];
const quicklink01 = [
  {
    path: "/home",
    display: "home",
  },
  {
    path: "/",
    display: "About Us",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/",
    display: "Blog",
  },
];
const quicklink02 = [
  {
    path: "/find-a-doctor",
    display: "Find a doctor",
  },
  {
    path: "/",
    display: "Request an Appointment",
  },
  {
    path: "/",
    display: "Find a Location",
  },
  {
    path: "/",
    display: "Get a Opinion",
  },
];
const quicklink03 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div className="flex flex-col flex-wrap justify-between gap-[30px] md:flex-row">
          <div>
            <img src={logo} alt="" />
            <p className="mt-4 font-[400] leading-7 text-textColor ">
              Copyright &copy; {year} developed by
              <span className=" mx-2 cursor-pointer text-[18px] font-[500] text-primaryColor ">
                <Link target="_blank" to={`http://muhoza.vercel.app`}>
                  Muhoza John
                </Link>
              </span>
              all right reserved
            </p>
            <div className="mt-4 flex items-center gap-4">
              {socialinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="group flex h-9 w-9 items-center justify-center rounded-full border border-solid border-[#181A1E] hover:border-none hover:bg-primaryColor"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="mb-6 text-[20px] font-[700] leading-[30x] text-headingColor ">
              Quick Links
            </h2>
            <ul>
              {quicklink01.map((item, index) => (
                <li className="mb-4 capitalize " key={index}>
                  <Link
                    to={item.path}
                    className="text-[16px] font-[400] leading-7 text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-[20px] font-[700] leading-[30x] text-headingColor ">
              Iwant to
            </h2>
            <ul>
              {quicklink02.map((item, index) => (
                <li className="mb-4 capitalize " key={index}>
                  <Link
                    to={item.path}
                    className="text-[16px] font-[400] leading-7 text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-[20px] font-[700] leading-[30x] text-headingColor ">
              Support
            </h2>
            <ul>
              {quicklink03.map((item, index) => (
                <li className="mb-4 capitalize " key={index}>
                  <Link
                    to={item.path}
                    className="text-[16px] font-[400] leading-7 text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
