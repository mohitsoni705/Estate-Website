import React from 'react'
import Header from '../layout/Ui/UI/Header'

const About = () => {
  return (
    <div className='container-about'>
      <div className="about">
        <div className='flex-row'>
        <h1>About</h1>
        <p className='underline'>Our Brand</p>
        </div>
        <div>
        <p className='about-para'>Passionate About Properties,Dedicated to Your Vision</p>
        </div>
      </div>

      <div className="details">

      <div className="image">
        <img src="./images/brand_image.png" alt="brandImage" />
      </div>

        <div className="achievements">

          <div>
          <ul className='grid-two-cols'>
            <li>
              <h1>10+</h1>
              <p>Years of Excellemce</p>
            </li>
            <li>
              <h1>12+</h1>
              <p>Projects Completed</p>
            </li>
            <li>
              <h1>20+</h1>
              <p>Mn.Sq.Ft.Delivered</p>
            </li>
            <li>
              <h1>25+</h1>
              <p>Ongoing Pojects</p>
            </li>
          </ul>
          </div>

        <div className="words">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </div>

        <div>
          <button className='btn-2'>Learn more</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About
