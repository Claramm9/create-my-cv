import React from 'react';

import './styles.css';

const Display = ({ fields, data, isSimpleForm, onDelete}) => {
    
    return (
        <>
            {!(isSimpleForm) ?
                    <div key={data.get('id')} className="display">
                        {fields.map(field => (
                        <span className="field">{field.label} {data.get(field.name)}</span>
                        ))}
                    </div>
                :
                <div key={data.get('id')}>
                    <span className="field-aptitud">
                        <button className="delete" onClick={() => onDelete(data.get('id'))}>X</button>
                        {data.get('aptitud')}
                    </span>
                </div>
            }
        </>
    )
}

export default Display;