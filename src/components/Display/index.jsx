import React from 'react';

import './styles.css';

const Display = ({ fields, field, isSimpleForm, onDelete}) => {
    let display = true;
    if(!(isSimpleForm)){
        display = fields.get('startDate') === "" ? false : true;
    }
    return (
        <>
            {!(isSimpleForm) ?
                    <div className="display">
                        <span className="field">{fields.get('field1')}: {field.get('field1')}</span>
                        <span className="field">{fields.get('field2')}: {field.get('field2')}</span>
                        { display ? <span className="field">{fields.get('startDate')}: {field.get('startDate')}</span> : null }
                        { display ? <span className="field">{fields.get('endDate')}: {field.get('endDate')}</span> : null }
                        { display ? <span className="field">{fields.get('description')}: {field.get('description')}</span> : null }
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