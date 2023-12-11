import Link from "next/link"
import Image from "next/image"
import { TitleSm } from "./Title"
import { HiOutlineArrowRight } from "react-icons/hi"

export const Card = ({ data, caption, show, path }) => {
  return (
    <div className="card-container">
      <div className="card" key={data.id}>
        <div className="outerCardDiv">
            <div className="tag-exp">
              { show && 
                data.desc.map((text,i) => {
                  return (
                    <div key={i + 'hhh'} className="innerTags">
                      <span>{text.text}</span>
                    </div>
                  )
                })
              }
            </div> 
          <Link className="cardLinker"  href={`${path}/${data.id}`}>
            <img
            src={data.cover}
            alt={data.title}
            className="card-img01"
            
            />
          </Link>
          
        </div>
        <div className="content">
          <h2>{'0' + data.id}</h2>

          <h3 id="heretheh2">{data.title}</h3>
          <p>{data.ptag}</p>
        </div>
        
      </div>
    </div>
  )
}
