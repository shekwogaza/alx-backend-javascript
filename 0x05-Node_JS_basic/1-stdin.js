// Prompt the user for their name
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for user input from stdin
process.stdin.on('data', (data) => {
    // Output the user's name when input is received
    process.stdout.write(`Your name is: ${data}`);
});

// Handle the end of the input stream
process.stdin.on('end', () => {
    // Notify the user that the software is closing
    process.stdout.write('This important software is now closing\n');
});
