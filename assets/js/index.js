const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt({
        question: 'What is your name?', answer
    })
    .prompt({
        question: 'Where are you located?', answer
    })
    .prompt({
        question: 'Tell me about yourself...', answer
    })
    .prompt({
        question: 'What is your linkedin URL?', answer
    })
    .prompt({
        question: 'What is your GitHub URL?', answer
    })
    //use a series of prompts
        //name
        //location
        //bio
        //linkedinURL
        //GitHub URL

    //Use string template literals to generate string version of HTML document
    //fs.writeFile index.html file 