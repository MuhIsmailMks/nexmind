import React from 'react'
import { Container } from '../ui/container'
import { apple, logo, windows } from '../../assets'
import { ButtonArrow } from './Icon'

const linkSections = [
  {
    title: null,
    links: [
      { link: '#', text: 'Plans & Pricing' },
      { link: '#', text: 'Personal AI Manager' },
      { link: '#', text: 'AI Business Writer' },
    ]
  },
  {
    title: null,
    links: [
      { link: '#Blog', text: 'Blog' },
      { link: '#Careers', text: 'Careers' },
      { link: '#News', text: 'News' },
    ]
  },
  {
    title: null,
    links: [
      { link: '#Documentation', text: 'Documentation' },
      { link: '#Papers', text: 'Papers' },
      { link: '#PressConferences', text: 'Press Conferences' },
    ]
  }
]

const Links = ({link, text}) => {
    return (
        <li className='flex-center gap-3 button-hover'>
            <a href="#" className='relative after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 group-hover:after:w-full'>{text}</a>
            <ButtonArrow/>
        </li>
    )
}


const App = ({link, icon, text}) => {
    return (
        <a href={link} className='flex-center gap-1 w-[128px] h-[45px] rounded-full border-[1.5px] border-[#FFFFFFA6] cursor-pointer duration-150 hover:scale-95'>
            <div className="icon w-4">
                <img src={icon} alt="" className='w-full'/>
            </div>
            <p>{text}</p> 
        </a>
    )
}
 

const Footer = () => {
  return (
    <footer className='relative z-10 w-full flex-center flex-col justify-between xl:h-[259px]'>

      <Container layout={'between'} gap={'md'} className={'w-full xl:w-[90%] xl:h-[75%]'} padding={'md'}>
        
        <div className="logo-footer flex-center flex-col gap-4 w-full   xl:w-[30%] max-w-[400px]">
            <div className="logo flex items-center gap-4 w-full">
                <img src={logo} alt="" className='w-12'/>
                <p>NexMind 2025</p>
            </div>
            <p className='font-sora w-full'>Empowering your research journey with your own AI-driven assistant.</p> 
        </div>
        
        {/* links footer */}
        {linkSections.map((section, i) => (
            <div key={i} className="links-footer flex flex-col gap-4 items-start w-[30%] md:w-[29%] xl:w-auto xl:max-w-[200px]">
              {section.links.map((item, j) => (
                <Links key={j} link={item.link} text={item.text} />
              ))}
            </div>
          ))}
        
        
        <div className="app-footer flex  flex-col gap-4 items-start w-[40%] md:w-[29%] xl:w-auto xl:max-w-[200px]">
          <p className='text-colortext text-s font-semibold'>Get the app</p>
          <App icon={windows} text={'Windows'}/>
          <App icon={apple} text={'macOS'}/>
        </div>

      </Container>

      <div className="by-footer w-full max-lg:py-4 lg:h-[69px] flex-center bg-[#010314]">
         <Container layout={'between'} gap={'sm'} className={'w-full md:w-[90%] xl:w-[70%] xl:h-[75%] text-s '}>
          
            <p className='text-center w-full lg:w-auto'>©  2025 AI Research Tools. All rights reserved.</p>

            <ul className='flex-center flex-wrap gap-4 w-full lg:w-auto'>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Cookies</a></li>
            </ul>

         </Container>
      </div>

    </footer>
  )
}

export default Footer
