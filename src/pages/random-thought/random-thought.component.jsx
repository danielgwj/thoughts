import React from 'react';

import './random-thought.styles.scss';

class RandomThought extends React.Component {

// function required to retreieve random thought from database
    
    render() {
        return (
            <h1 class="animate__animated animate__fadeInDown">Here's what others are thinking...</h1>   
        )
    }
}

export default RandomThought;