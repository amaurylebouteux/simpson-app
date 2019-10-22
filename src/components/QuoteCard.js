import React from 'react';
import './QuoteCard.css';


class QuoteCard extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            favorite: false,
        };
    }
    render(){
        return (
            <figure className="QuoteCard">
                <img src={this.props.image} alt={this.props.character} />
                <figcaption>
                    <blockquote>{this.props.quote}</blockquote>
                    <p>
                        <cite>{this.props.character}</cite>
                        <span 
                            className={this.state.favorite ? 'is-favorite' : ''}
                            onClick = {event => {
                                const newFavorite = !this.state.favorite;
                                this.setState ({favorite: newFavorite});
                            }}
                        >
                            &#9733;
                        </span>
                    </p>
                </figcaption>
            </figure>
        );
    }
}

export default QuoteCard;
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
/*const QuoteCard = props => (
    <div className="QuoteCard">
        <img src={props.image} alt={props.cite}/>
        <h2>{props.quote} </h2>
        <h4>{props.cite}</h4>
    </div>
);
*/
