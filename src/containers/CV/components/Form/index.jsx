import React from 'react';
import PropTypes from 'prop-types';

const Form = ({
  fields, state, onChange, onClick 
}) => (
  <form>
    {fields.map(field => (
      <div key={ field.id }>
        <label>{field.label}</label>
        {field.component === 'input'
          ? <div className="personal-field">
            <input
              className="modal-input"
              type={ field.type }
              name={ field.name }
              placeholder={ field.placeholder }
              onChange={ onChange }
              value={ state.fields[field.name] }
            >
            </input>
            <span className="validation">{state.errors[field.name]}</span>
          </div>
          : <div className="personal-field">
            <textarea
              rows="5"
              id="textarea"
              type={ field.type }
              name={ field.name }
              placeholder={ field.placeholder }
              onChange={ onChange }
              value={ state.fields[field.name] }
            >
            </textarea>
            <span className="validation">{state.errors[field.name]}</span>
          </div>
        }
      </div>
    ))}
    <div><input id="save" type="submit" value="Save"
      onClick={ onClick } /></div>
  </form>
);

Form.propTypes = {
  fields: PropTypes.array.isRequired,
  state: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Form;