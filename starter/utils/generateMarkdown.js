// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.description}

  ##Description 
  ${description}
  ##Table of Contents 
  * Installation 
  ${installation}
  * Usage 
  ${usage}
  * License 
  ${license}
  * Contributing 
  ${contributing}
  * Tests 
  * Questions


`;
}

module.exports = generateMarkdown;
