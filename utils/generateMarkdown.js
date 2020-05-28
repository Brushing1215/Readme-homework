
const makeBadge =(license)=>{
 return `![badge](https://img.shields.io/badge/License-${encodeURI(license)}-orange)`
}
const generateMarkdown=(data)=> {
  return `
# ${data.title} ${makeBadge(data.license)}
  
## Table of Contents

* [How to install](#install)  
* [Project Description](#description)
* [Project usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#contact)
  
### Install  
To install this project use this command:  
\`\`\`  
${data.install}
\`\`\`  
### Description
${data.description}
### Usage
${data.usage}
### License
${data.license}
### Contributing
How to contribute to project:
${data.contributing}
### Test
How to test project:  
\`\`\`
${data.test}
\`\`\`

### Contact
If you have question please email the developer at [${data.email}](${data.email})
`;
}

module.exports = generateMarkdown;
