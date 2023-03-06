// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  ${answers.description}

  ##Description 
  ${answers.description}

  ## Table of Contents 
  * Installation 
  ${answers.installation}
  * Usage 
  ${answers.usage}
  * License 
  ${answers.answerslicense}
  * Contributing 
  ${answers.contributing}
  * Tests 
  * Questions


`;
}

module.exports = generateMarkdown;
