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

       <div className="logo flex-center md:gap-4">
        <img src={logo} alt="" className="rounded-full w-9 md:w-14 aspect-square"/>
         <a href="#" className={`font-semibold ${textVariants({ intent:'mediumtext' })}`}>
          NexMind
        </a>
       </div>

        <nav className={`absolute lg:relative max-lg:left-0 max-lg:top-[100%] w-full lg:w-auto max-w-[100%] bg-[#0e0e0e5b]  backdrop-blur-md py-8  ${isMenuOpen ? "block" : "hidden"} lg:block`}>
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
            <a href="#testimonials">
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

          <Button asChild variant='primary' className={`gradient-primary px-2 py-1`}>
            <a href="#get-demo" >Get Demo</a>
          </Button>

          <LineNav className={'lg-hidden'}/>

          <div className="menu flex-center flex-col gap-1 w-7 aspect-square cursor-pointer lg-hidden"   onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

        </div>

      </Container>

    </header>
  );
};

export default Navbar;
