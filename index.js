// This application display a message containing three variables. Create a .env according to .env.sample :-)

require('dotenv').config();

console.log(
  `I am ${process.env.MY_NAME}, wilder in ${process.env.MY_CITY}, and I love ${process.env.MY_LANGUAGE}`
);
