import React from 'react';

import './styles.css';
import Modal from '../Modal/index.jsx';

const Display = ({ fields, field, isSimpleForm, header, onDelete}) => {
    return (
        <>
            {!(isSimpleForm) ?
                    <div className="display">
                        <span className="field">{fields.get('field1')}: {field.get('field1')}</span>
                        <span className="field">{fields.get('field2')}: {field.get('field2')}</span>
                        <span className="field">{fields.get('startDate')}: {field.get('startDate')}</span>
                        <span className="field">{fields.get('endDate')}: {field.get('endDate')}</span>
                        <span className="field">{fields.get('description')}: {field.get('description')}</span>
                    </div>
                :
                <div>
                    <span className="field-aptitud">
                        <button className="delete" onClick={() => onDelete(field.get('id'))}>X</button>
                        {field.get('aptitud')}
                    </span>
                </div>
            }
        </>
    )
}

export default Display;