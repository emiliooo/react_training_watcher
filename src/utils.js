export function isValidNumber(e) {
    if (isNaN(parseInt(e.key, 10))) return e.preventDefault();
    else return false;
}