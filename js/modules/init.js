async function fetchUsers() {
    try {
        const response = await fetch('/data/employees.json'); 
        const users = await response.json();
        console.log(`this is ${users}`)
        return users['employees']
        // for (let user of users) {
        //     tbody.innerHTML += 
        //     `
        //     <tr>
        //         <td>${user.id}</td>
        //         <td>${user.name}</td>
        //         <td>${user.extension}</td>
        //         <td><a href="mailto:${user.email}">${user.employee}</a></td>
        //         <td>${user.department}</td>
        //         <td><button class="btn btn-sm btn-danger delete">X</button></td>
        //     </tr>
        //     `
        // } 
    } catch (error) {
        console.error(error);
    }

}
fetchUsers();

export {fetchUsers}