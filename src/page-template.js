

const generateCards = employeeList => {
    let icon = '';
    let addtlInfo = '';

    return employeeList.map((employee) => {
        if (employee.role == "Manager") {
            icon = `<i class="fa-solid fa-mug-hot"></i>`;
            addtlInfo = `Office number: ${employee.officeNumber}`;
        }
        else if (employee.role == "Engineer") {
            icon = `<i class="fa-solid fa-glasses"></i>`;
            addtlInfo = `GitHub: <a href="https://www.github.com/${employee.github}/" target="_blank">${employee.github}</a>`;
        }
        else if (employee.role == "Intern") {
            icon = `<i class="fa-solid fa-graduation-cap"></i>`;
            addtlInfo = `School: ${employee.school}`;
        }

        return `
        <div class="card bg-light m-3" style="width: 20rem;">
            <div class="card-header bg-info text-white">
                <h2>${employee.name}</h2>
                <h4>${icon} ${employee.role}</h4>
            </div>
            <div class="card-body px-3 py-5">
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">ID: ${employee.id}</li>
                    <li class="list-group-item">
                        Email: <a href="mailto:${employee.email}">${employee.email}</a>
                    </li>
                    <li class="list-group-item">${addtlInfo}</li>
                </ul>
            </div>
        </div>
        `
    })
    .join('');
}

module.exports = employeeList => {
    // create base html

    return `
    <!DOCTYPE html>
    <html lang="en">
    
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Team Builder</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
            <link rel="stylesheet" href=https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css>
            <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
            <link rel="stylesheet" href="style.css">
        </head>
    
        <body>
            <header class="p-4 bg-secondary text-white text-center">
                <h1>Our Team</h1>
            </header>
    
            <section id="employee-cards" class="d-flex flex-wrap mx-auto p-5 justify-content-center">
                ${generateCards(employeeList)}
            </section>
        </body>
    </html>
    `;
    
};