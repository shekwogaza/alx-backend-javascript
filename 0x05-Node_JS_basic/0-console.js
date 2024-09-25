/**
 * Logs a message to the console.
 * 
 * @param {string} message - The message to log.
 * @returns {void}
 */
const displayMessage = (message) => {
    console.log(message); // Output the message to the console
};

/**
 * Exports the displayMessage function for use in other modules.
 * 
 * @module displayMessage
 * @function
 */
module.exports = displayMessage; // Default export of the displayMessage function
