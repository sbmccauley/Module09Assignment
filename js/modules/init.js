async function fetchUsers() {
    try {
        const response = await fetch('/data/employees.json'); 
        const users = await response.json();
        console.log(`this is ${users}`)
        return users['employees']
   
    } catch (error) {
        console.error(error);
    }

}
fetchUsers();

export {fetchUsers}