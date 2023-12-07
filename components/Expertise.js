import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"

const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Our expertise' />
            <p>Pioneering IT Solutions with Expertise in Software, ML, and Web Tech. Your Trusted Partner Nationwide.</p>
          </div>
          <div className='hero-content grid-3'>
            {expertise.map((item) => (
              <Card data={item} key={item.id} caption='Details' show={true} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise
