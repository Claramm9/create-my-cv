import React from 'react';

import './styles.css';

const Display = ({ info, fields, isSimpleForm }) => {
    return (
        <>
            {!(isSimpleForm) ?
                <div>
                    {info.map(field => (
                        <div className="display">
                            <span className="field">{fields.get('field1')}: {field.get('field1')}</span>
                            <span className="field">{fields.get('field2')}: {field.get('field2')}</span>
                            <span className="field">{fields.get('startDate')}: {field.get('startDate')}</span>
                            <span className="field">{fields.get('endDate')}: {field.get('endDate')}</span>
                            <span className="field">{fields.get('description')}: {field.get('description')}</span>
                        </div>
                    ))}
                </div>
                :
                <div>
                    {info.map(field => (
                        <div className="display">
                            <span className="field">{field.get('field')}</span>
                        </div>
                    ))}
                </div>
            }
        </>
    )
}

export default Display;