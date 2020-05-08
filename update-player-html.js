const fs  = require('fs');

const originFilePath = "jsav-exercise-player/player.html";
const destinationFilePath = "jsav-palyer-application-test-server/public/jsav-player/player.html";

try {
  console.log('Reading origin file', originFilePath);
  var originPlayerHTML = fs.readFileSync(originFilePath, 'utf-8');
  console.log('Reading destination file', destinationFilePath);
  var destPlayerHTML = fs.readFileSync(destinationFilePath, 'utf-8');
} catch (err) {
  console.warn('Failed reading file', err);
}

try {
  console.log('Getting body tags content');
  const catchBodyRegExp = /<body>[\s\S]*(.*?)<\/body>/
  var bodyOriginalHTML = catchBodyRegExp.exec(originPlayerHTML)[0]
  var bodyDestinationHTML = catchBodyRegExp.exec(destPlayerHTML)[0]
} catch (err) {
  console.warn('Failed getting body tag content', err);
}

try {
  console.log('Writing destination file', destinationFilePath);
  const newDestinationFile = destPlayerHTML.split(bodyDestinationHTML).join(bodyOriginalHTML);
  fs.writeFileSync(destinationFilePath, newDestinationFile);
} catch (err) {
  console.warn('Failed writing to file', err);
}
