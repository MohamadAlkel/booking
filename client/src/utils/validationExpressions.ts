/**
 * Check if a string is empty
 * @param {string} value string variable to be checked
 * @returns {boolean} true if empty
 */
export function isEmpty(value: any): boolean {
    if (value === undefined || value === null) { // undefined or null
        return true;
    } else if (value instanceof Date) { // Date object behave different from normal objects
        return false;
    } else if ((value instanceof Function)) {
        return false;
    } else if ((value instanceof Object) && !(value instanceof Array)) { // Object, not an array
        return Object.keys(value).length < 1;
    } else if (value === false) {
        return true;
    } else if (value.length < 1) { // Array or string
        return true;
    } else {
        return false;
    }
}

/**
 * Check if a number not negative
 * @param {number} value then number to be checked
 * @returns {boolean} true if negative
 */
export function isNegative(value: number): boolean {
    return value && value < 0;
}


/**
 * Verifies a password strength
 * @param {string} newPassword The new password needed to be verified
 * @returns {boolean} true if the password is strong
 * @rules :
 * - Must be at least 8 characters long.
 * - Must include at least one uppercase character.
 * - Must include at least one lowercase character.
 * - Must include at least one number.
 */
export function isStrongPassword(newPassword: string): boolean {
    return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-_]).{8,}$/.test(newPassword);
}


/**
 * Verifies a check-in date
 * @param {Date} checkin The checkin date should be less than chekout
 * @param {Date} checkout The checkout date should be more than chekin
 * @returns {boolean} true if the password is strong.
 */
export function checkDateVal(checkin: Date, checkout: Date): boolean {
    return checkin.getTime() >= checkout.getTime();
}