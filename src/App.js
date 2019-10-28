import React from 'react';
import './App.css';
import axios from 'axios';
import Navbar from'./components/Navbar';
import QuoteCard from './components/QuoteCard';
import QuoteList from './components/QuoteList';
import QuoteApi from './components/QuoteApi';
import QuoteForm from './components/QuoteForm'

/*const Homer = {
  quote : "All I'm gonna use this bed for is sleeping, eating and maybe building a little fort.",
  image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
  cite : "Homer Simpson",
  characterDirection: "Right"
}

const Nelson = {
  quote : "Shoplifting is a victimless crime, like punching someone in the dark.",
  image : "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185",
  cite : "Nelson Muntz"
}

const sampleSimpson = {
  quote: "That's where I saw the leprechaun...He told me to burn things.",
  character:"Ralph Wiggum",
  image: "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FRalphWiggum.png?1497567511523"
};*/



class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      simpson: null
    };
    this.getSimpson = this.getSimpson.bind(this);
  }
  componentDidMount () {
    this.getSimpson()
  }
  getSimpson () {
    axios.get ('https://quests.wilders.dev/simpsons-quotes/quotes?count=num')
    .then (response => response.data)
    .then (data => {
      console.log(data);
      this.setState ({
        simpson: data[0],
      });
      
    });
  }
  render(){
    return (
      <div>
        <Navbar/>
        <QuoteForm/>
        {this.state.simpson ? <QuoteApi simpson = {this.state.simpson} /> : <p>loading</p>}
        <button type="button" onClick={this.getSimpson}>New Quote</button>     
      </div>
    );
  }
}

export default App;
