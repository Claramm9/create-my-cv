import React from 'react';

import './styles.css';

const Display = ({ fields, data, isSimpleForm, onDelete }) => (
  <>
    {!(isSimpleForm)
      ? <div className="display">
        {fields.map(field => (
          <span key={ field.id } className="field">{field.label} {data.get(field.name)}</span>
        ))}
      </div>
      : <div>
        <span className="field-aptitud">
          <button className="delete" onClick={ () => onDelete(data.get('id')) }>X</button>
          {data.get('aptitud')}
        </span>
      </div>
    }
  </>
);


export default Display;