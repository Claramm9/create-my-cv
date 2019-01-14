import React from 'react';
import './styles.css';

const Display = ({value}) => (
    <div className="display">
        <input id="resultado" type="text" readOnly value={value} />
    </div>
);

export default Display;