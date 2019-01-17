export const isEmpty = (data) => {
    if (!data) { return true }
    else { return false }
}

export const isValidName = (data) => {
    if (data.match(/^[a-zA-Z ]*$/)) { return true}
    else { return false }
}

export const isEmailValid = (email) => {
    //var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
    if (email.includes('@')) { return true }
    else { return false }
}

export const isValidNumber = (number) => {
    const regEx = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    if (regEx.test(number)) { return true }
    else { return false }
}

export const isValidDate = (date) => {
    var pat = new RegExp(/(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.](19|20)\d\d/);
    if (pat.test(date)) { return true }
    else { return false }
}