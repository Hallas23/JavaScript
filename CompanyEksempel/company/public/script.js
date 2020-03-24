setOnClicks();
update();

function update() {
    document.querySelector('#companies').innerHTML = '';
    document.querySelector('#employees').innerHTML = '';
    document.querySelector('#createPicker').innerHTML = '';
    for (let input of document.querySelectorAll('input')) input.value = '';

    getCompanies();
    getEmployees();
}

async function getCompanies() {
    const [template, companyResponse] = await Promise.all([fetch('/company.hbs'), fetch('/company')]);
    const [templateText, companies] = await Promise.all([template.text(), companyResponse.json()]);
    const compiledTemplate = Handlebars.compile(templateText);
    let companiesHTML = '';
    let optionsHTML = '';
    companies.forEach(company => {
        companiesHTML += compiledTemplate({
            name: company.name,
            hours: company.hours,
            employees: company.employees
        });
        optionsHTML += '<option data="' + company._id + '">' + company.name + '</option>';
    });
    document.querySelector('#companies').innerHTML = companiesHTML;
    document.querySelector('#createPicker').innerHTML = optionsHTML;
    $('.selectpicker').selectpicker('refresh');
}

async function getEmployees() {
    const [template, employeeResponse] = await Promise.all([fetch('/employee.hbs'), fetch('/employee')]);
    const [templateText, employees] = await Promise.all([template.text(), employeeResponse.json()]);
    const compiledTemplate = Handlebars.compile(templateText);
    let employeeHTML = '';
    employees.forEach(employee => {
        employeeHTML += compiledTemplate({
            name: employee.name,
            title: employee.title,
            wage: employee.wage,
            company: employee.company ? employee.company.name : ''
        });
    });
    document.querySelector('#employees').innerHTML = employeeHTML;
}

function setOnClicks() {
    document.querySelector('#submitCompany').onclick = () => {
        const msg = {
            name: document.querySelector('#compName').value,
            hours: document.querySelector('#compHours').value,
        };
        fetch('/company', {
            method: "POST",
            body: JSON.stringify(msg),
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => {
                if (response.status >= 400)
                    throw new Error(response.status);
                else
                    update();
                return response.json();
            })
            .then(resultat => console.log(`Resultat: %o`, resultat))
            .catch(fejl => console.log('Fejl: ' + fejl));
    };

    document.querySelector('#submitEmployee').onclick = () => {
        const msg = {
            name: document.querySelector('#empName').value,
            title: document.querySelector('#empTitle').value,
            wage: document.querySelector('#empWage').value,
            companyId: document.querySelector('option:checked').getAttribute('data'),
            employmentDate: Date.now(),
        };
        fetch('/employee', {
            method: "POST",
            body: JSON.stringify(msg),
            headers: {'Content-Type': 'application/json'}
        })
            .then(response => {
                if (response.status >= 400)
                    throw new Error(response.status);
                else
                    update();
                return response.json();
            })
            .then(resultat => console.log(`Resultat: %o`, resultat))
            .catch(fejl => console.log('Fejl: ' + fejl));
    };
}
