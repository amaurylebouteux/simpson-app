import React from 'react';

function QuoteApi({simpson}) {
    return (
        <div className="QuoteApi">
            <h2>{simpson.character}</h2>
            <img src={simpson.image} alt={simpson.character}/>
            <p>{simpson.quote}</p>
        </div>
    )
}




export default QuoteApi;