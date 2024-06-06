document.getElementById('ageForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const currentYear = new Date().getFullYear();

    const persons = [
        { name: document.getElementById('name1').value, year: parseInt(document.getElementById('year1').value) },
        { name: document.getElementById('name2').value, year: parseInt(document.getElementById('year2').value) },
        { name: document.getElementById('name3').value, year: parseInt(document.getElementById('year3').value) }
    ];

    persons.forEach(person => {
        person.age = currentYear - person.year;
    });

    persons.sort((a, b) => a.year - b.year);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <p>Pessoa mais velha: ${persons[0].name} - ${persons[0].age} anos</p>
        <p>Segunda pessoa mais velha: ${persons[1].name} - ${persons[1].age} anos</p>
        <p>Terceira pessoa mais velha: ${persons[2].name} - ${persons[2].age} anos</p>
    `;
});