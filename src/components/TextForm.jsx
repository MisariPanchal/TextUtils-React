import React, { useState } from 'react';
import '../App.css';

export default function TextForm(props) {
  let [text, setText] = useState('');
  //text = 'New text'; //Wrong way to change the state
  //setText('New Text'); //Correct way to change the state

  // let [wordOccurrences, setWordOccurrences] = useState({});

  const handleOnChange = (event) => {
    // console.log('On Change Invoked');
    setText(event.target.value);
  }
  const handleUpCsClick = () => {
    // console.log('Uppercase btn was clicked' + text);
    setText(text.toUpperCase());
    // console.log(text);
    props.showAlert("Converted to Upper Case!", "success");
  }
  const handleLowCsClick = () => {
    // console.log('Lowercase btn was clicked' + text);
    setText(text.toLowerCase());
    // console.log(text);
    props.showAlert("Converted to Lower Case!", "success");
  }
  const handleCapClick = () => {
    let splitWords = text.split(/(\s+)/);
    let joinSentence = '';
    splitWords.forEach((word)=>{
      joinSentence += word[0] ? word[0].toUpperCase() + word.slice(1).toLowerCase(): word;
    });
    setText(joinSentence);
    props.showAlert("Converted to Capitalize!", "success");
  }
  const handleClearClick = () => {
    setText('');
    props.showAlert("Text Cleared!", "success");
  }

  const handleCopy = () => {
    // let text = document.getElementById('myBox');
    // text.select();
    navigator.clipboard.writeText(text);
    // document.getSelection().removeAllRanges();
    props.showAlert("Copied to Clipboard!", "success");
  }
  const handleExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra Spaces Removed!", "success");
  }

  const numOfChar = (text) => {
    let nextLineCount =  text.match(/\n/g) || [];
    return text.length - nextLineCount.length;
  }
  const CharWithoutSpace = (text) => {
    let nextLineCount =  text.match(/\n/g) || [];
    let charCount = text.replaceAll(" ","");
    return charCount.length - nextLineCount.length;
  }
  const countWords = (text) => {
    return text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
  }
  const minToRead = (text) => {
    return 0.008*(text.trim() === '' ? 0 : text.trim().split(/\s+/).length);
  }
  const countSentence = (text) => {
    if (text.trim() === '') return 0;
    // Split text based on sentence-ending punctuation followed by whitespace or end of string
    const sentenceEndings = /[.!?]+\s*|\n+/g;
    const sentences = text.trim().split(sentenceEndings);
    return sentences.filter(sentence => sentence.length > 0).length;
  }

  const style = {
    color : props.mode === 'light' ? 'black' : 'white',
    backgroundColor: props.mode === 'light' ? 'white' : '#0b0940',
  }

  const preStyle = {
    fontFamily: "sans-serif",
    fontSize: 15,
    border:props.mode === 'light'?"1px solid #DCDCDC":"1px solid white",
    borderRadius: 5,
    padding: 10,
    minHeight: 150
  }
  
  return (
    <>
      <div style={style}>
        <h1 className='mb-3' style={style}>{props.heading}</h1>
        <div className="mb-3">
          {/* <input name="UserName"   onChange={(event) => console.log(event.target.value ,":Event", event.target)}/> */}
          <textarea style={style} className="form-control" placeholder='Enter text here' value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary me-3 my-1" onClick={handleUpCsClick}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary me-3 my-1" onClick={handleLowCsClick}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary me-3 my-1" onClick={handleCapClick}>Convert to Capitalize</button>
        <button disabled={text.length===0} className="btn btn-primary me-3 my-1" onClick={handleClearClick}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary me-3 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary me-3 my-1" onClick={handleExtraSpace}>Remove Extra Space</button>
      </div>
      <div className="container my-3" style={style}>
      <h3>Text Analysis</h3>
        <table className="table table-bordered container my-3" style={style}>
          <tbody>
          <tr>
            <th style={style}>Number of characters (including spaces)</th>
            <td style={style}>{numOfChar(text)}</td>
          </tr>
          <tr>
            <th style={style}>Number of characters (excluding spaces)</th>
            <td style={style}>{CharWithoutSpace(text)}</td>
          </tr>
          <tr>
            <th style={style}>Number of words</th>
            <td style={style}>{countWords(text)}</td>
          </tr>
          <tr>
            <th style={style}>Number of sentences</th>
            <td style={style}>{countSentence(text)}</td>
          </tr>
          <tr>
            <th style={style}>Minutes to read</th>
            <td style={style}>{minToRead(text)}</td>
          </tr>
          </tbody>
        </table>
        {/* <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p> */}
        <h3>Preview</h3>
        <pre style={preStyle}>{text.length > 0 ? text : "Nothing to preview."}</pre>
        
      </div>
    </>
  );
}
