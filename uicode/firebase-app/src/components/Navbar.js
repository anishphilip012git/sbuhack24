import React from 'react'

//import { Link } from "react-router-dom";
// import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";
// import Switcher from "./Switcher";

const Navbar = () => {
  return (
    <nav className="z-0 sticky top-0 inset-x-0  border-b font-custom dark:text-white dark:border-b-slate-700 bg-white dark:bg-slate-700">
      <div className="container mx-auto px-6 flex items-center font-nunito justify-between ">
        <div className="px-5 text-xl mb-5 mt-5 font-bold mx-auto">
          <span className="text-4xl">❤ Gratefulme </span>
        </div>

        <div className="flex items-center space-x-4 ">
          <a
            href="https://github.com/shekinahmanyi"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full text-xl"
          >
            {/* <FaGithub />
          </a>

          <a
            href="https://twitter.com/ShekinahManyi"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full text-lg"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/shekinah-manyi-849a21210/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full text-lg"
          >
            <FaLinkedin /> */}
          </a>
          {/* <Switcher /> */}
        </div>
      </div>
    </nav>
  )
}

export default Navbar