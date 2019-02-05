import React from 'react';
import { Map } from 'immutable';
import PropTypes from 'prop-types';

import './styles.css';

const Display = ({
  fields, data, isSimpleForm, onDelete 
}) => (

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

Display.propTypes = {
  fields: PropTypes.array,
  data: PropTypes.instanceOf(Map),
  isSimpleForm: PropTypes.bool.isRequired,
  onDelete: PropTypes.func,
};

export default Display;
