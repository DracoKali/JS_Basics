let students = ([
    { name: 'Remy', cohort: 'Jan' },
    { name: 'Genevieve', cohort: 'March' },
    { name: 'Chuck', cohort: 'Jan' },
    { name: 'Osmund', cohort: 'June' },
    { name: 'Nikki', cohort: 'June' },
    { name: 'Boris', cohort: 'June' }
]);
for (let x in students) {
   let name = students[x].name;
   let cohort = students[x].cohort;
   console.log(' Name: ${name}, Cohort: ${cohort} ');
}

let users = {
    employees: [
        { 'first_name': 'Miguel', 'last_name': 'Jones' },
        { 'first_name': 'Ernie', 'last_name': 'Bertson' },
        { 'first_name': 'Nora', 'last_name': 'Lu' },
        { 'first_name': 'Sally', 'last_name': 'Barkyoumb' }
    ],
    managers: [
        { 'first_name': 'Lillian', 'last_name': 'Chambers' },
        { 'first_name': 'Gordon', 'last_name': 'Poe' }
    ]
};

for(let u in users){
    let line = 1;
    console.log(u.toUpperCase());
    for(let e in users[u]){
        let FirstName = users[u][e].first_name;
        let LastName = users[u][e].last_name;
        let NameLength = FirstName.length + LastName.length;
        console.log(`${line} - ${FirstName} ${LastName} - ${NameLength}`);
        line++;

    }

}