import fs from 'fs'
import inquirer from 'inquirer'
import generateHTML from './generateHTML.js'

// Your application should prompt the user for information like their name, location, bio, LinkedIn URL, and GitHub URL. Feel free to add any additional prompts you think of.

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'location',
        message: "What's your location?"
    },
    {
        type: 'input',
        name: 'bio',
        message: 'Tell me about yourself.'
    },
    {
        type: 'input',
        name: 'linkedinURL',
        message: "What's your LinkedIn URL?"
    },
    {
        type: 'input',
        name: 'githubURL',
        message: "What's your Github URL?"
    }
])
    .then((answers) => {
        console.log(answers)
        const html = generateHTML(answers)
        console.log(html)

        fs.writeFile('./portfolio.html', html, (err) => {
            if (err) throw err

            console.log('HTML saved!')
        })
    })
    .catch(err => console.log(err))
