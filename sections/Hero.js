import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import React, { useEffect, useState } from "react"

const Hero = () => {
  const [deviceWidth, setDeviceWidth] = useState(false);
  useEffect(()=> {
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
  },[]);
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <TitleLogo title='Gurus' caption='i' className='logobg' />
          <h1 className={`hero-title ${!deviceWidth ? 'bigE' : '' }`}>WE BUILD DIGITAL EXPERIENCES</h1>

          <div className={`sub-heading ${deviceWidth ? 'flex-col' : ''}`}>
            <TitleSm title='SOFTWARES' /> <span>.</span>
            <TitleSm title='ML and DS' /> <span>.</span>
            <TitleSm title='INTERNSHIPS' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='The last digital agency you ll ever need' />
            <p>iGururs is a rapidly expanding IT company with a presence in Pune and Ranchi, catering to clients across India. We specialize in cutting-edge technologies, including Software, Machine Learning/Data Science, Python, Java-Java EE, and Mobile technologies. Our services cover Application Development, Maintenance, Embedded Systems, Software Testing, and Quality Assurance.</p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      {/* <ShowCase /> */}
      <Brand />

      <div className='text-center'>
        <Title title='Latest news & articles' />
      </div>
      <BlogCard />
    </>
  )
}

export default Hero
