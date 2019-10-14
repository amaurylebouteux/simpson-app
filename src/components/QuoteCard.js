import React from 'react';
import './QuoteCard.css'



/*const QuoteCard = () => {
    return(
        <figure className = "QuoteCard">
            <img src="https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FNelsonMuntz.png?1497567511185"
      alt="Nelson Muntz"></img>
        <figcaption>
            <blockquote>
                Shoplifting is a victimless crime, like punching someone in the dark.
            </blockquote>
            <cite>Nelson Muntz</cite>
        </figcaption>
        </figure>
    );

}*/
const QuoteCard = props => (
    <div>
        <img src={props.image} alt={props.cite}/>
        <h2>{props.quote} </h2>
        <h4>{props.cite}</h4>
    </div>
);

export default QuoteCard;