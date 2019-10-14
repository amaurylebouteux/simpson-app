import React from 'react';
import './App.css';
import Navbar from'./components/Navbar';
import QuoteCard from './components/QuoteCard';
import QuoteList from './components/QuoteList';

const Homer = {
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

function App() {
  return (
    <div className="App">
      <Navbar/>
      <QuoteCard {...Homer}/>
      <QuoteCard {...Nelson}/>
      <QuoteList/>
    </div>
  );
}

export default App;
