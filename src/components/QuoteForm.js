import React from 'react';
import './QuoteForm.css';

const MAX_LENGTH = 15;



class QuoteForm extends React.Component {
    constructor(props){
        super(props);
        this.state ={character:''}
        this.handleChange = this.handleChange.bind(this);
    }
    
    handleChange(event) {
        if (event.target.value.length > MAX_LENGTH){
            return 
        }
        this.setState ({character: event.target.value})
        
        
    }
    render() {
        
        return (
            <form
              className="QuoteForm"
            >
                <label htmlFor="character">Character:</label>
                <input
                id="name"
                className={this.state.character.length < MAX_LENGTH? 'length-ok' : 'length-maximum-reached'}
                name="character"
                type="text"
                value={this.state.character}
                onChange={this.handleChange}
                />
                <p>
                you typed: <strong>{this.state.character}</strong>
                </p>
                <p>`remaining characters:{MAX_LENGTH - this.state.character.length}`</p>
                 
                
            </form>
            
        );
    }
  }
  
  export default QuoteForm;