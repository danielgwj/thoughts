import React from 'react';

import './random-thought.styles.scss';

import ThoughtBubble from '../../components/thought-bubble/thought-bubble.component';

class RandomThought extends React.Component {

    // function required to retreieve random thought from database

    render() {
        return (
            <div>
                <h1 class="animate__animated animate__fadeInDown">Here's what others are thinking...</h1>
                
                {/* TODO: Fix the thought bubble component, it is not showing correctly */}
                <ThoughtBubble thought="arandomthought" />
            </div>
        )
    }
}

export default RandomThought;