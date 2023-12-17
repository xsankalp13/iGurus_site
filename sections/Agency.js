import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const Agency = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT AGENCY' /> <br />
            <br />
            <Title title='The last digital agency you will ever need!' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Turning your business ideas into smart digital products since 2017' />
              <p className='desc-p'>iGururs Technology Services is one of the fastest-growing IT companies having footprints in Pune and Ranchi and serving many clients across India. iGururs is a professionally managed organization, providing automated solutions for your business needs in latest Software, Machine Learning/Data Science and web technologies like Python, Java-Java EE and Mobile technologies. We provide Software Engineering and IT organizations with a range of solutions and services in the areas of Application Development, Maintenance, Embedded Systems, Software Testing and Quality Assurance.</p>
              <p className='desc-p'>We are focused on Software and Web Design, Artificial Intelligence (AI) implementation, Mobile development, search engine optimization, Web marketing, e-Commerce, multimedia solutions, content writing, graphic design , Machine learning and Computer Vision implementation. . .</p>
              <p className='desc-p'>Our team includes experienced, young and self-motivated software developers. We have a highly capable team of Data scientist , web consultants, creative designers, content writers, programmers and web marketing professionals who know how to deliver results.</p>
              <p className='desc-p'>We treat each of our clients individually and In order to understand customer's requirements and provide the low cost solutions from their niche point of view, we personally let our developers interact directly with our clients and allow them to take their own decision making approach. Our ability to bundle services brings integrated sourcing to our clients, ensuring that they will get the right mix of technology and services appropriate to their requirements.</p>
              <div className='grid-4'>
                <div className='box'>
                  <h1 className='indigo'>5+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>50+</h1>
                  <h3>Successful cases</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>12+</h1>
                  <h3>Industry awards</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml mt-5'>
              <img src='/images/s1.jpg' alt='Img' className='round' width='100%' height='40%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Our mission' />
              <br />
              <p className='misson-p'>Our mission is to consistently provide innovative, world-class software solutions that effectively address real-world challenges for our valued clients. We achieve this by stedfastly upholding th iGurus code of Ethics, unwaveringly fulfiling our commitments, and aligning out work with our visionary statements.</p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default Agency
