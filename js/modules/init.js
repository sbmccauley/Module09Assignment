async function fetchEmployees() {
    try {
        const response = await fetch('/data/employees.json'); 
        const employees = await response.json();
        for (let employee of employees) {
            tbody.innerHTML += 
            `
            <tr>
                <td>${employee[0]}</td>
                <td>${employee[1]}</td>
                <td>${employee[2]}</td>
                <td><a href="mailto:${employee[3]}">${employee[3]}</a></td>
                <td>${employee[4]}</td>
                <td><button class="btn btn-sm btn-danger delete">X</button></td>
            </tr>
            `
        } 
    } catch (error) {
        console.error(error);
    }

}
fetchEmployees();

export {fetchEmployees}