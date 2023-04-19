async function fetchEmployees() {
    try {
        const response = await fetch('/data/employees.json'); 
       
        const employees = await response.json();
        console.log(`This is ${employees}`)
        for (let employee of employees) {
            tbody.innerHTML += 
            `
            <tr>
                <td>${employee.id}</td>
                <td>${employee.name}</td>
                <td>${employee.extension}</td>
                <td><a href="mailto:${employee.email}">${employee.email}</a></td>
                <td>${employee.department}</td>
                <td><button class="btn btn-sm btn-danger delete">X</button></td>
            </tr>
            `
        } 
    } catch (error) {
        console.error(error);
    }

}
// fetchEmployees().then();

export {fetchEmployees}