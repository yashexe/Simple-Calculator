import './App.css';
import Button from './components/Button.js';
import Input from './components/input.js';
import { useState } from 'react';
import * as math from "mathjs";


const App = () => {
  const [text,setText] = useState("");
  const [result,setResult] = useState("");

  const addToText = val => {
    if(val === "ln"){val = '(1/log(e))*log'}
      setText((text) => [...text, val]);
  };
  const resetInput = () =>{
    setText("");
    setResult("");
  };
  const calculateResult=()=>{
    const ans = math.evaluate(text.join(""))//remove commas
    setResult(math.format(ans,10));
  };
  const getAnswer=()=>{
    const ans = math.format(math.evaluate(text.join("")), 10);
    setText((text)=>[ans + " "]);
  };
  const deleteRecent=()=>{
    setText(text.slice(0,-1));
  }

  return (
    
    <div className="App">
      <div id="star">
        <div id="stars">
          <div id="stars1"></div>                              
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="blipstars"></div>
        </div>
        <div id="stars01">
          <div id="stars1"></div>                              
          <div id="stars2"></div>
          <div id="stars3"></div>
          <div id="blipstars"></div>
        </div>
      </div>
      <div className='calc-wrapper'>
        <div className='calc-wrapper-two'>
          <Input text={text} result={result}/>{/* #38b834 */}

          <div className='row'>
            <Button symbol='^' handleClick={addToText} color = '#38312e'/>
            <Button symbol='^(1/2)' handleClick={addToText} color = '#38312e'/>
            <Button symbol='log' handleClick={addToText} color = '#38312e'/>
            <Button symbol='ln' handleClick={addToText} color = '#38312e'/>
            <Button symbol='e' handleClick={addToText} color = '#38312e' />
          </div>
          <div className='row'>

            <Button symbol='sin' handleClick={addToText} color = '#38312e'/>
            <Button symbol='cos' handleClick={addToText} color = '#38312e'/>
            <Button symbol='tan' handleClick={addToText} color = '#38312e'/>
            <Button symbol='(' handleClick={addToText} color = '#38312e'/>
            <Button symbol=')' handleClick={addToText} color = '#38312e'/>

          </div>
          <div className='row'>
            <Button symbol='7' handleClick={addToText}/>
            <Button symbol='8' handleClick={addToText}/>
            <Button symbol='9' handleClick={addToText}/>
            <Button symbol='ANS' handleClick={getAnswer} color = '#38312e'/>
            <Button symbol='=' handleClick={calculateResult} color = "#38312e"/>
          </div>

          <div className='row'>
            <Button symbol='6' handleClick={addToText}/>
            <Button symbol='5' handleClick={addToText}/>
            <Button symbol='4' handleClick={addToText}/>
            <Button symbol='*' handleClick={addToText} color = '#38312e'/>
            <Button symbol='/' handleClick={addToText} color = '#38312e'/>
          </div>

          <div className='row'>
            <Button symbol='3' handleClick={addToText}/>
            <Button symbol='2' handleClick={addToText}/>
            <Button symbol='1' handleClick={addToText}/>
            <Button symbol='+' handleClick={addToText} color = '#38312e'/>
            <Button symbol='-' handleClick={addToText} color = '#38312e'/>
          </div>

          <div className='row'>
            <Button symbol='0' handleClick={addToText}/>
            <Button  symbol='.' handleClick={addToText}/>
            <Button symbol='*10^' handleClick={addToText} />
            <Button  symbol='DEL' handleClick={deleteRecent} color = "#D17159" />
            <Button  symbol='AC' handleClick={resetInput} color = "#D17159" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

