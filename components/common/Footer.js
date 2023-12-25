import Link from "next/link"

import { BsFacebook } from "react-icons/bs"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import Image from "next/image"
import IguruLogo from "@/assets/images/iguru.png"
const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
  
              {/* <TitleLogo title='Gurus' caption='i' className='logomin' /> */}
              <Image src={IguruLogo} height={65} width={240} style={{marginBottom:20,height:80 }} className="" alt="igurus logo"/>
        
              <br />
              <span>
                Questions? Reach us <br /> Monday - Friday from 10 AM to 7 PM <br/> Branch: Pune | Ranchi
              </span>
              <br />
              <br />
              <h3>+91 8087004000</h3>
              <h3><Link href='mailto:info@igurus.in'>info@igurus.in</Link></h3>
              <br />
              <Link href='/contact'>
                <button className='button-primary'>Request for quote</button>
              </Link>
            </div>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href='/agency'>About agency</Link>
              </li>
              <li>
                <Link href='/showcase'>Showcase</Link>
              </li>
              <li>
                <Link href='/blogs'>Blog</Link>
              </li>
              <li>
                <Link href='/'>Demo design system</Link>
              </li>
              <li>
                <Link href='mailto:info@igurus.in'>Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href='/'>Software Development</Link>
              </li>
              <li>
                <Link href='/'>Support</Link>
              </li>
              <li>
                <Link href='/'>Training & Internships</Link>
              </li>
              <li>
                <Link href='/'>Technical Documentation</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className='connecticon'>
                <li>
                  <Link href='/'>
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillBehanceCircle size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='/'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>

              </div>
              {/* <div className="branches">
                <ul>
                  <h3>Main office</h3>
                  <li> Lohegaon-wagoli road, Lohegaon, Pune, Maharashtra</li>
                </ul>
                <ul>
                  <h3>Branch office</h3>
                  <li> Indrapuri Main Road, Ratu Road, Ranchi</li>
                </ul>
              </div> */}
            </ul>
            
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2023. ALL RIGHTS RESERVED.</span>
            </div>
            <div className='connect'>
              <span>iGurus</span>
              <span> &nbsp; | &nbsp; </span>
              <span>TERMS & CONDITIONS</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
