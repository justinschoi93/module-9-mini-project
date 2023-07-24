const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt({
        question: ''
    })

    //use a series of prompts
        //name
        //location
        //bio
        //linkedinURL
        //GitHub URL

    //Use string template literals to generate string version of HTML document
    //fs.writeFile index.html file 