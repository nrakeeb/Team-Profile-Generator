const inquirer = require('inquirer');
const fs = require('fs');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const questions = [
    // Employee role
    {
        type: 'list',
        message: 'What is your team member\'s role? ',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern'],
        validate: roleInput => {
            if (roleInput) {
                return true;
            } else {
                console.log('Please select a role to continue')
                return false;
            }
        }
    },
    // Employee name
    {
        type: 'input',
        message: 'What is your employee\'s name? ',
        name: 'name',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter an employee name to continue');
                return false;
            }
        }

    },
    // Employee id
    {
        type: 'input',
        message: 'What is your employee\'s id?',
        name: 'id',
        validate: idInput => {
            if (idInput) {
                return true;
            } else {
                console.log('Please enter an employee id to continue');
                return false;
            }
        }

    },
    // Employee email
    {
        type: 'input',
        message: 'What is your employee\'s email? ',
        name: 'email',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Please enter an employee email to continue');
                return false;
            }
        }
    },
]

