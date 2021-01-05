/* eslint-disable */
const name = 'wes'
const middle = "topher"
const last = `bos`

const sentence = 'she\'s so cool' // "she's so cool"
const sentence2 = "she's so cool" // "she's so cool"
const sentence3 = "she's so \"cool\""; // "she's so "cool""

const sentence4 = `she's so cool` // "she's so cool"

const song = 'ohh \
\
ya\
\
I like\
\
pizza\
'
// "ohh yaI likepizza"

const song2 = `ohh

ya

I like

pizza`
/*
"ohh

ya

I like

pizza"
*/

// concatenation - two or more strings combined into one
const hello = "hello my name is " + name + ". Nice to meet you"
            // "hello my name is wes. Nice to meet you"

const hello2 = `hello my name is ${name}. Nice to meet you. I am ${1 + 100} years old`


const html = `
  <div>
    <h2>${name}</h2>
    <p>${hello}</p>
  </div>
`

console.log(html)

document.body.innerHTML = html
