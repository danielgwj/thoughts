import React from 'react';

import './thought-bubble.styles.scss';

const ThoughtBubble = ({ thought }) => (
    <div class="thought-bubble">
        <h2>{thought}</h2>
    </div>
)

export default ThoughtBubble