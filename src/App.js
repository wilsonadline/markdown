import { useState } from 'react';
import './App.css';
import { sampleText } from './sampleText';
import { marked } from 'marked';

function App() {
  const style = {
    height:'90vh',
  }
  
  
  const [state, setState] = useState(sampleText)
  const handleChange = (event) => {
    setState(event.target.value);
  }
  console.log(state);

  const renderText = text =>{
    const __html = marked(text, { sanitize: true})
    return { __html}
  } 

  return (
    <div className="App container">
      <div className='row'>
        <div className='col-sm-6 h-100'>
          <textarea 
            onChange={handleChange}
            style={style}
            value={state}
            className='form-control'
            rows="10"
          />
        </div>

        <div className='col-sm-6'>
          <div dangerouslySetInnerHTML={ renderText(state)}>

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
