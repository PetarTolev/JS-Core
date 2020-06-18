function solve(data, criteria) {
    let [prop, val] = criteria.split('-');
    let filteredEmployee = JSON.parse(data).filter(p => p[prop] === val);

    for (let i = 0; i < filteredEmployee.length; i++) {
        console.log(`${i}. ${filteredEmployee[i].first_name} ${filteredEmployee[i].last_name} - ${filteredEmployee[i].email}`);
    }
}