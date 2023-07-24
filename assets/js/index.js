const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            question: 'What is your name?', 
            name: 'usersName'
        },
        {
            question: 'Where are you located?',
            name: 'location'
        },
        {
            question: 'Tell me about yourself...',
            name: 'bio'
        },
        {
            question: 'What is your linkedin URL?',
            name: 'linkedInURL'
        },
        {
            question: 'What is your gitHub URL?',
            name: 'gitHubURL'
        }
    ])
    .then(function(response){
        const htmlcode = '';


        fs.writeFile('output.html', JSON.stringify(response), (err) =>
        err ? console.error(err) : console.log('Success!'))
    })
    
    //use a series of prompts
        //name
        //location
        //bio
        //linkedinURL
        //GitHub URL

    //Use string template literals to generate string version of HTML document
    //fs.writeFile index.html file 