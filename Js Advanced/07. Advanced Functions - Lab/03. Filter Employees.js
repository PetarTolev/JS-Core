function solve(data, criteria){
    let [command, value] = criteria.split('-')

    let filteredEmployees = JSON.parse(data).filter(function(employee) {
        return employee[command] === value;
    })

    for (let i = 0; i < filteredEmployees.length; i++) {
        let name = filteredEmployees[i]['first_name'] + ' ' + filteredEmployees[i]['last_name']
        let email = filteredEmployees[i]['email'];

        console.log(`${i}. ${name} - ${email}`);   
    }
}