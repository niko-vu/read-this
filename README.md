function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Badges](#badges)
  - [How to Contribute](#contributing)
  - [Tests](#tests)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ![Screenrecording of the application.](/assets/screenrecording.webm)
  ## Credits
  ${data.credits}
  ## License
  ${data.license}
  ## Badges
  ## Contributing
  ${data.contribution}
  ## Tests
  ${data.tests}
  `;
}