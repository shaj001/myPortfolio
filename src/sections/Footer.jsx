import { mySocials } from "../constants/myData.js";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";

const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />

      <div className="hidden md:flex  left-0 gap-5">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index} target="_blank">
            <img
              src={social.icon}
              className="w-5 h-5 cursor-pointer hover:-translate-y-1 duration-200  active:scale-60 transition duration-100 ease-in-out"
              alt={social.name}
            />
          </a>
        ))}
      </div>
      <div className="flex flex-col ml-0 items-center mx-auto md:mx-0 md:mr-23 ">
        <p className="text-[15px] md:text-lg">Crafted with ❤️ by <a href="https://github.com/sherrykeos" target="_blank" className=" hover:text-lavender transition duration-150 ease-in-out">
            Sherry Keos
          </a>
        </p>  

        <p className="text-xs pt-2">
          © 2026 sharad kumar. All rights reserved.
        </p>
      </div>
      <div>
        <ScrollToTopButton />
      </div>
    </section>
  );
};

export default Footer;
