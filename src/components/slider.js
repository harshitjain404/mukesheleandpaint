import React ,{useState }from "react"
import {FaArrowAltCircleRight , FaArrowAltCircleLeft , FaChalkboardTeacher} from "react-icons/fa";
import "./slider.css"

function Slider () {

    const [Current , setCurrent] = useState(0)
        const nextSlide = () => {
        setCurrent(Current === Sliderdata.length - 1 ? 0 : Current +1  )
    }

const prevSlide = ( ) => {
    setCurrent(Current === 0 ? Sliderdata.length -1 : Current -1 )
}

    const Sliderdata = [
        {
            src : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s"
        },
        {
            src:'./fdueagfoef/aefiufe.png'
        },
        {
            src:'okueyfrowqyrpoqwyrp/oufh.png'
        }
    ]

    Sliderdata.map((slide , index) => {
// console.log(index , slide.src)
return(
    <div>

        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmCy16nhIbV3pI1qLYHMJKwbH2458oiC9EmA&s" alt="hii"/>
    <div className={index === Current ? 'slide Active ' : 'slide'} 
                  key={index}>
            <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide}  />
             <FaArrowAltCircleRight className="right-arrow"  onClick={nextSlide} />
        </div>
        </div>
)
    })
}

            
 
export default Slider 