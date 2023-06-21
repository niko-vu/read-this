// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    'What is the title of your project?',
        // Title questions[1]
    'Provide a brief description explaining what this project is and your motivation for this project, why you built it, and what you might have solved or learned.',
        // Description questions[2]
    'What do you need to do to install this project using a step-by-step description?',
        // Installation instructions questions[3]
    'How do you use this application?',
        // Usage information questions[4]
    'List your collaborators, tutorials referenced, and any third-party assets used (if applicable).',
        // Credits questions[5]
    'What license are you using?',
        // License questions[6]
    'Provide guidelines for how other developers might contribute to this application or package (optional).',
        // Contribution guidelines questions[7]
    'Write examples on how to run tests (if applicable).',
        // Test instructions questions[8]
];

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: questions[1],
        },
        {
            type: 'input',
            name: 'description',
            message: questions[2],
        },
        {
            type: 'input',
            name: 'installation',
            message: questions[3],
        },
        {
            type: 'input',
            name: 'usage',
            message: questions[4],
        },
        {
            type: 'input',
            name: 'credits',
            message: questions[5],
        },
        {
            type: 'input',
            name: 'license',
            message: questions[6],
        },
        {
            type: 'input',
            name: 'contribution',
            message: questions[7],
        },
        {
            type: 'input',
            name: 'test',
            message: questions[8],
        },
    ])

    .then((data) => {
        const filename = `${data.title.toLowerCase().split(' ').join('')}.md`;
        fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) => err ? console.log(err) : console.log('Success!')
        );
    });

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    
}

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();