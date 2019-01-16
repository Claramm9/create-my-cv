
class FormValidator {
    constructor(errors){
        this.errors = errors;
    }

    isEmpy = (data) => {
        if(data === ''){ return true }
        else { return false }
    }

    isEmailValid = (email) => {
        if(email.includes('@')){ return true }
        else { return false }
    }
    
    isValidNumber = (number) => {
        const regEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        if(regEx.test(number)){ return true }
        else { return false }
    }
}

export default FormValidator;