import React, { useEffect, useState } from "react"
import { Title } from "./common/Title"
import { brand } from "@/assets/data/dummydata"


const Brand = () => {
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
      <section className='brand'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='WE ARE PROUD TO WORK WITH THESE COMPANIES' />
          </div>
          <div className={`brand-content ${!deviceWidth? 'grid-6' : 'flexing'}`}>
            {brand.map((item) => (
                <img src={item.cover} key={item.id} alt={item.id} width={!deviceWidth? '100%' : '50%'} height={!deviceWidth? '100%' : '50%'} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Brand
