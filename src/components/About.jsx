import React from 'react'

function About(props) {
  return (
    <div id={props.id}>
        <div className="about-image">
            <img src={props.image} alt="" />
        </div>

        <div className="about-text">
            <h2>{props.title}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime rerum quo dolore molestias asperiores tenetur eum pariatur libero impedit! Deleniti porro veniam facilis dicta nisi tempora hic quam similique maxime?</p>
            <button>{props.button}</button>
        </div>
    </div>
  )
}

export default About