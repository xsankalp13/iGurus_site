import React, { useEffect, useState } from "react"
const Banner = () => {
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
      <section className='banner'>
        <div className={`container`}>
          <div>
            <h1 className={!deviceWidth? '' : 'checkthisH1'}>We are looking forward to start a new project</h1>
            <p className={!deviceWidth? '' : 'checkthisP'}> Lets take your business to the next level! </p>
          </div>
          <div>
            <button className='button-primary'>Request a call-back</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
