import React from 'react';
import PropTypes from 'prop-types';

const InformationForm = ({ state, onChange, onClick }) => (
  <form>
    <div className="form-row">
      <label>Name:</label>
      <div className="personal-field">
        <input type="text"
          name="name"
          value={ state.fields.name }
          onChange={ onChange }
        >
        </input>
        <span className="validation">{state.errors.name}</span>
      </div>
      <label>Last Name:</label>
      <div className="personal-field">
        <input type="text"
          name="lastName"
          value={ state.fields.lastName }
          onChange={ onChange }
        >
        </input>
        <span className="validation">{state.errors.lastName}</span>
      </div>
    </div>
    <div className="form-row">
      <label>Address:</label>
      <div className="personal-field">
        <input id="address" type="text"
          name="address"
          value={ state.fields.address }
          placeholder="Maria de Molina Street, 54, 28006 Madrid, Spain"
          onChange={ onChange }
        >
        </input>
        <span className="validation">{state.errors.address}</span>
      </div>
    </div>
    <div className="form-row">
      <label>Telephone number:</label>
      <div className="personal-field">
        <input type="text"
          name="number"
          placeholder="+34..."
          value={ state.fields.number }
          onChange={ onChange }
        >
        </input>
        <span className="validation">{state.errors.number}</span>
      </div>
      <label>Email:</label>
      <div className="personal-field">
        <input type="email"
          name="email"
          placeholder="....@..."
          value={ state.fields.email }
          onChange={ onChange }
        >
        </input>
        <span className="validation">{state.errors.email}</span>
      </div>
    </div>
    <div className="form-row">
      <label>Date of Birth:</label>
      <div className="personal-field">
        <input type="text"
          name="birthday"
          placeholder="MM-DD-YYYY"
          value={ state.fields.birthday }
          onChange={ onChange }></input>
        <span className="validation">{state.errors.birthday}</span>
      </div>
      <label>Nationality:</label>
      <div className="personal-field">
        <input type="text"
          name="nationality"
          value={ state.fields.nationality }
          onChange={ onChange }
        >
        </input>
        <span className="validation">{state.errors.nationality}</span>
      </div>
    </div>
    <input id="save" type="submit" value="Save" 
      onClick={ onClick } />
  </form>
);

InformationForm.propTypes = {
  state: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired
};

export default InformationForm;