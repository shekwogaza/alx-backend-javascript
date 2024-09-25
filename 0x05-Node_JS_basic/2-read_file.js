const fs = require('fs');

/**
 * Counts students from a CSV database file and logs the results.
 * 
 * @param {string} dataPath - The path to the CSV file containing student data.
 * @throws Will throw an error if the database cannot be loaded.
 */
const countStudents = (dataPath) => {
    // Check if the file exists
    if (!fs.existsSync(dataPath)) {
        throw new Error('Cannot load the database');
    }

    // Check if the path is a file
    if (!fs.statSync(dataPath).isFile()) {
        throw new Error('Cannot load the database');
    }

    // Read and process the file contents
    const fileLines = fs.readFileSync(dataPath, 'utf-8')
        .trim()
        .split('\n');

    const studentGroups = {};
    const dbFieldNames = fileLines[0].split(',');
    const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

    // Process each line in the file, starting from the second line
    for (const line of fileLines.slice(1)) {
        const studentRecord = line.split(',');
        const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
        const field = studentRecord[studentRecord.length - 1];

        // Initialize the group if it doesn't exist
        if (!studentGroups[field]) {
            studentGroups[field] = [];
        }

        // Map student properties to their values
        const studentEntries = studentPropNames.map((propName, idx) => [propName, studentPropValues[idx]]);
        studentGroups[field].push(Object.fromEntries(studentEntries));
    }

    // Calculate the total number of students
    const totalStudents = Object.values(studentGroups)
        .reduce((total, group) => total + group.length, 0);

    console.log(`Number of students: ${totalStudents}`);

    // Log the number of students in each field
    for (const [field, group] of Object.entries(studentGroups)) {
        const studentNames = group.map((student) => student.firstname).join(', ');
        console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
    }
};

module.exports = countStudents;
