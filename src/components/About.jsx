import React, { useState } from 'react';

export default function About(props) {

  // let myStyle = {
  //   color: 'red',
  //   backgroundColor: 'blue'
  // };

  // const [myStyle, setMyStyle] = useState({
  //   color: 'black',
  //   backgroundColor: 'white'
  // });

  const myStyle = {
    color: props.mode === 'dark' ? 'white' : 'black',
    backgroundColor: props.mode === 'dark' ? 'rgb(35 33 89)' : 'white',
  }

  return (
    <div className='container' style={{color: props.mode === 'dark' ? 'white' : 'black',}}>
      <h1 className='mb-3' >About Us</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              <strong>Analyze your text</strong>
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body"style={myStyle} >
            With TextUtils, you can analyze your text by performing operations such as counting words and characters, converting text to uppercase or lowercase, and removing unnecessary whitespace. The tool also provides insights into text readability and allows for advanced manipulation to optimize your content.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              <strong>Free to use</strong>
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            TextUtils is a free, versatile tool that helps you analyze and enhance your text effortlessly. With features like word and character counting, case conversion, and whitespace removal, you can streamline text processing tasks. It also offers tools for text summarization and readability analysis, making it ideal for writers, students, and professionals. Whether you need to refine your writing or perform detailed text analysis, TextUtils provides a user-friendly interface and powerful functionality at no cost.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              <strong>Browser compatible</strong>
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body" style={myStyle}>
            TextUtils is designed to be fully browser-compatible, ensuring a seamless experience across various web browsers. Whether you're using Chrome, Firefox, Safari, or Edge, you can access and utilize all the features of TextUtils without compatibility issues. This cross-browser functionality allows for a consistent and reliable text analysis experience on any device.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
