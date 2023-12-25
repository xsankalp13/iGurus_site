import Link from "next/link"
import { TitleLogo } from "./Title"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { RiMenu4Line } from "react-icons/ri"
import { AiOutlineClose } from "react-icons/ai"
import Image from 'next/image'
import IguruLogo from "@/assets/images/iguru-logo.png"

const Header = () => {
  const [activeLink, setActiveLink] = useState("")
  const [open, setOpen] = useState(false)
  const [deviceWidth, setDeviceWidth] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if(window.innerWidth <800) {
        setDeviceWidth(true);
      }else{
        setDeviceWidth(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

  },[])

  const router = useRouter()
  useEffect(() => {
    setActiveLink(router.pathname)
  }, [router.pathname])
  return (
    <>
      <header>
        <div className='container'>
          <div className='logo'>
            <Link href='/'>
              {/* <TitleLogo title='Gurus' caption='i' className='logomin' /> */}
              <Image src={IguruLogo} height={60} width={200} className="" alt="igurus logo"/>
            </Link>
          </div>
          <nav className={open ? "openMenu" : "closeMenu"} onClick={() => setOpen(null)}>
            <Link href='/' className={activeLink == "/" ? "activeLink" : "none"}>
              Home
            </Link>
            <Link href='/agency' className={activeLink == "/agency" ? "activeLink" : "none"}>
              About us
            </Link>
            <Link href='/services' className={activeLink == "/services" ? "activeLink" : "none"}>
              Services
            </Link>
            {/* <Link href='/showcase' className={activeLink == "/showcase" ? "activeLink" : "none"}>
              Showcase
            </Link> */}
            <Link href='/blogs' className={activeLink == "/blogs" ? "activeLink" : "none"}>
              Blog
            </Link>
            <Link href='/contact'>
              <button className='button-primary'>Contact Us</button>
            </Link>
          </nav>
          {
            deviceWidth &&
            <button onClick={() => setOpen(!open)}>{open ? <AiOutlineClose size={25} /> : <RiMenu4Line size={25} />}</button>

          }
        </div>
      </header>
    </>
  )
}

export default Header
