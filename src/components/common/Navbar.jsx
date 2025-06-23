import React, {useState} from "react"; 
import { Container } from "../ui/container"; 
import { textVariants } from "../ui/text";
import { LineNav } from "../common/Line";
import { Button } from "../ui/button";
import { logo } from "../../assets";
 
 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);


  return (
    <header className="header-navbar w-full flex-center  py-4 relative z-[999] inset-0 bg-[#0e0e0e5b] ">

      <Container layout="between" className={"w-full"} padding={'xmd'}>

       <div className="logo flex-center  gap-2 md:gap-4">
        <img src={logo} alt="" className="rounded-full w-9 md:w-14 aspect-square "/>
         <a href="#" className={`font-semibold ${textVariants({ intent:'mediumtext' })}`}>
          NexMind
        </a>
       </div>

        <nav className={`absolute lg:relative max-lg:left-0 max-lg:top-[100%]   w-full lg:w-auto max-w-[100%] bg-[#0e0e0e5b]  backdrop-blur-md lg:py-8  duration-300 ${isMenuOpen ? "py-8 h-auto" : "h-[0px] overflow-hidden"} `}>
          <ul className={`flex-center gap-7 lg:gap-4 flex-wrap ${textVariants({ intent:'mediumtext' })}`}>
          <li>
            <a href="#about">
              About
            </a>
          </li>
          <li>
            <a href="#features">
              Features
            </a>
          </li>
          <li>
            <a href="#interface">
              Interface
            </a>
          </li>
          <li>
            <a href="#testimonials" className="">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#pricing">
              Pro
              <span className="gradient-primary px-2 py-0.5 ml-2 text-[10px]">
                New
              </span>
            </a>
          </li>
        </ul>
        </nav>

        <div className={`flex-center gap-2 lg:gap-3 ${textVariants({ intent:'smalltext'})}`}>

           <a href="#login" >
            Login
          </a>
 
          <LineNav/>

          <Button asChild variant='primary' className={`gradient-primary px-2 py-1 duration-200 hover:scale-105`}>
            <a href="#get-demo" >Get Demo</a>
          </Button>

          <LineNav className={'lg-hidden'}/>

          <div className={`menu flex-center flex-col w-7 h-[20px] aspect-square cursor-pointer lg-hidden relative  ${isMenuOpen ? "active" : ""} `} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="top-0"></span>
            <span className="top-[50%]"></span>
            <span className="bottom-[1%]"></span>
          </div>

        </div>

      </Container>

    </header>
  );
};

export default Navbar;
