import { Component } from 'react';
import './App.css';
import { sampleText } from './sampleText';
import ReactMarkdown from 'react-markdown';

class App extends Component {
  state = {
    markdownText: sampleText
  }

  style = {
    minHeight: '90vh',
    resize: 'vertical',
    overflow: 'auto'
  }

  componentDidMount () {
    const text = localStorage.getItem('text');
    if (text) {
      this.setState({ markdownText: text });
    }else{
      this.setState({ markdownText: sampleText });

    }
  }

  componentDidUpdate () {
    const text = this.state.markdownText;
    localStorage.setItem('text', text);
  }

  handleChange = (event) => {
    this.setState({ markdownText: event.target.value });
  }

  handleHtmlChange = (event) => {
    this.setState({ markdownText: event.target.value });
  }

  render (){
    return (
      <div className="App container">
        <div className='row'>
          <div className='col-sm-6 h-100 '>
            <textarea 
              onChange={this.handleChange}
              style={this.style}
              value={this.state.markdownText}
              className='form-control'
              rows="10"
            />
          </div>

          <div className='col-sm-6'>
            <div className="preview__scroll htmlDiv" style={this.style}>
              <ReactMarkdown>
                {this.state.markdownText}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
