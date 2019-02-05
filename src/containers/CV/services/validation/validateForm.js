import {
  isEmpty, isValidDate, isValidName, isValidNumber, isEmailValid 
} from './validator';

export const validateForm = (fields) => {
  const data = {
    errors: {},
    isFormValid: true
  };

  if (isEmpty(fields.name)) {
    data.isFormValid = false;
    data.errors.name = '*Please enter your name.';
  }

  if (isEmpty(fields.lastName)) {
    data.isFormValid = false;
    data.errors.lastName = '*Please enter your last name.';
  }

  if (typeof fields.name !== 'undefined') {
    if (!isValidName(fields.name)) {
      data.isFormValid = false;
      data.errors.name = '*Please enter alphabet characters only.';
    }
  }
  if (typeof fields.lastName !== 'undefined') {
    if (!isValidName(fields.lastName)) {
      data.isFormValid = false;
      data.errors.lastName = '*Please enter alphabet characters only.';
    }
  }

  if (isEmpty(fields.email)) {
    data.isFormValid = false;
    data.errors.email = '*Please enter your email.';
  }

  if (typeof fields.email !== 'undefined') {
    if (!isEmailValid(fields.email)) {
      data.isFormValid = false;
      data.errors.email = '*Please enter valid email.';
    }
  }

  if (isEmpty(fields.number)) {
    data.isFormValid = false;
    data.errors.number = '*Please enter your mobile number.';
  }

  if (typeof fields.number !== 'undefined') {
    if (!isValidNumber(fields.number)) {
      data.isFormValid = false;
      data.errors.number = '*Please enter valid mobile number.';
    }
  }

  if (isEmpty(fields.address)) {
    data.isFormValid = false;
    data.errors.address = '*Please enter your address.';
  }

  if (isEmpty(fields.birthday)) {
    data.isFormValid = false;
    data.errors.birthday = '*Please enter your birthday.';
  }

  if (typeof fields.birthday !== 'undefined') {
    if (!isValidDate(fields.birthday)) {
      data.isFormValid = false;
      data.errors.birthday = '*Please enter a valid format.';
    }
  }

  if (isEmpty(fields.nationality)) {
    data.isFormValid = false;
    data.errors.nationality = '*Please enter your nationality.';
  }

  return data;
};