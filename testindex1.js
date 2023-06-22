// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

console.log(generateMarkdown);

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?',
        // Title questions[0]
    'Provide a brief description explaining what this project is and your motivation for this project, why you built it, and what you might have solved or learned.',
        // Description questions[1]
    'What do you need to do to install this project using a step-by-step description?',
        // Installation instructions questions[2]
    'How do you use this application?',
        // Usage information questions[3]
    'List your collaborators, tutorials referenced, and any third-party assets used (if applicable).',
        // Credits questions[4]
    'What license are you using?',
        // License questions[5]
    'Provide guidelines for how other developers might contribute to this application or package (optional).',
        // Contribution guidelines questions[6]
    'Write examples on how to run tests (if applicable).',
        // Test instructions questions[7]
];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    const readme = 'README';
    const filename = `${readme}.md`;
    fs.writeFile(filename, (data, generateMarkdown), (err) => err ? console.log(err) : console.log('Success!')
    );

    // fs.writeFile(filename, JSON.stringify(data, generateMarkdown, 'utf-8'), (err) => err ? console.log(err) : console.log('Success!')
    // );

    // fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) => err ? console.log(err) : console.log('Success!')
    // );
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[0],
        },
        {
            type: 'input',
            name: 'description',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[2],
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[3],
        },
        {
            type: 'input',
            name: 'credits',
            message: questions[4],
        },
        {
            type: 'input',
            name: 'license',
            message: questions[5],
        },
        {
            type: 'input',
            name: 'contribution',
            message: questions[6],
        },
        {
            type: 'input',
            name: 'tests',
            message: questions[7],
        },
    ])

    .then((data) => {
        const filename = `${data.title.toLowerCase().split(' ').join('')}.json`;
        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) => err ? console.log(err) : console.log('Success!')
        );
        writeToFile();
    });
}

// Function call to initialize app
init();