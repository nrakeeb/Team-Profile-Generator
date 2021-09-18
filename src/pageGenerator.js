const Manager = require("../lib/Manager");

function generate(managerArray, engineerArray, internArray) {
    return `
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Members</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <header id="header">
            <h1>Team Members</h1>
        </header>
        <main class="d-md-flex flex-wrap justify-content-evenly">`
        + generateManagers(managerArray) + generateEngineers(engineerArray) + generateInterns(internArray) +
        `
        </main>
    </body>
</html>`
}

function generateManagers(managerArray) {
    let markup = ''
    managerArray.forEach(element => {
        markup += `
        <div class="card" style="width: 18rem;">
            <div class="card-header">Manager: ${element.name}</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${element.id}</li>
                <li class="list-group-item">Email: ${element.email}</li>
                <li class="list-group-item">Office number: ${element.officeNumber}</li>
            </ul>
        </div>
        `
    });
    return markup;
}

function generateEngineers(engineerArray) {
    let markup = ''
    engineerArray.forEach(element => {
        markup += `
        <div class="card" style="width: 18rem;">
            <div class="card-header">Engineer: ${element.name}</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${element.id}</li>
                <li class="list-group-item">Email: ${element.email}</li>
                <li class="list-group-item">Github: ${element.github}</li>
            </ul>
        </div>
        `
    });
    return markup;
}

function generateInterns(internArray) {
    let markup = ''
    internArray.forEach(element => {
        markup += `
        <div class="card" style="width: 18rem;">
            <div class="card-header">Intern: ${element.name}</div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID: ${element.id}</li>
                <li class="list-group-item">Email: ${element.email}</li>
                <li class="list-group-item">School: ${element.school}</li>
            </ul>
        </div>
        `
    });
    return markup;
}

module.exports = {
    generate,
}