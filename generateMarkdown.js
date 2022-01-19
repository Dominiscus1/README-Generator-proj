// Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT') {
    return "https://img.shields.io/static/v1?label=License&message=MIT&color=blue&?style=plastic&link=" + renderLicenseLink(license);
  } else if (license === 'Apache') {
    return "https://img.shields.io/static/v1?label=License&message=Apache&color=green&?style=plastic&link=" + renderLicenseLink(license);
  } else {
    return "";
  }
}
// Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return "https://choosealicense.com/licenses/mit/";
  } else if (license === 'Apache') {
    return "https://choosealicense.com/licenses/apache-2.0/";
  } else {
    return "";
  }
}

// Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `# License
  ## The Licenses We Used [${license}](${renderLicenseLink(license)})`
  }
// Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
[![License Badge](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})
  ## Table of Contents
  - [Description](#Description)
  - [Installations](#Installations)
  - [Usage](#Usage)
  - [Technologies](#Technologies)
  - [Preview](#Preview)
  - [Contributors](#Contributors)
  - [License](#License)
  - [Questions](#Questions)
  ## Description
  ${data.description}
  
  ## Installations
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Technologies
  ${data.tech}

  ## Preview
  ${data.preview}

  ## Contributors
  ${data.contributors}

  ## License
  [![License Badge](${renderLicenseBadge(data.license)})](${renderLicenseLink(data.license)})
  This application uses ${data.license} license. 
  </br>
`;
}

module.exports = generateMarkdown;