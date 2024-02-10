import React from "react";

function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="relative p-10 text-primary-content flex flex-col justify-center items-center text-base dark:text-white  bg-white dark:bg-slate-100">
      <div className="relative z-10 container ">
        <div className=" dark:text-slate-700 text-center font-custom text-lg mt-12">
          <p className="">Designed & Built for SBU Hacks {footerYear}✨</p>
          <p className="">&copy; {footerYear} All rights reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;