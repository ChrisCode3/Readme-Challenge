// function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
  

  ### Description 
  ${answers.description}




  ## Table of Contents 
   * [Installation](#Installation)
   * [Usage](#Usage)  
   * [Contributing](#Contributing)
   * [Tests](#Tests)
   * [License](#License)
   * [GitHub](#GitHub)
   * [E-mail](#E-mail)





  ## Installation 
   ${answers.Installation}
  ## Usage 
   ${answers.usage}
  ## Contributing 
   ${answers.contributing}
  ## Tests 
   ${answers.Tests}
  ## License 
  ${answers.license}
  ## GitHub 
  ${answers.github}
  ## E-mail
  ${answers.email}

  ### Do you have any questions ?

`;
}

module.exports = generateMarkdown;
