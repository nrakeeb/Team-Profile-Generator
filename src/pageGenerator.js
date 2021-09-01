const Manager = require("../lib/Manager");

function generate(managerArray, engineerArray, internArray) {
    return `<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Members</title>
        <link rel="stylesheet" href="styles.css">
    </head>
    <body>
        <header>
            <h1>Team Members</h1>
        </header>
        <main class="">`
        + generateManagers(managerArray) + generateEngineers(engineerArray) + generateInterns(internArray) +
        ` <div>
            </div>
        </main>
    </body>
    </html>`
}

function generateManagers(managerArray) {
    let markup = ''
    managerArray.forEach(element => {
        markup += `<div class="test">${element.name}</div>
        <div class="test">${element.id}</div>`
    });
    return markup;
}

function generateEngineers(engineerArray) {
    let markup = ''
    engineerArray.forEach(element => {
        markup += `<div class="test">${element.name}</div>
        <div class="test">${element.id}</div>`
    });
    return markup;
}

function generateInterns(internArray) {
    let markup = ''
    internArray.forEach(element => {
        markup += `<div class="test">${element.name}</div>
        <div class="test">${element.id}</div>`
    });
    return markup;
}

module.exports = {
    generate,
}