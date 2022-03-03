let data = [
    {
        name: 'John',
        age:  '20'
    },
    {
        name: 'Henry',
        age:  '30'
    },
    {
        name: 'Jay',
        age:  '25'
    },
    {
        name: 'David',
        age:  '27'
    },
    {
        name: 'Sam',
        age:  '22'
    },
    {
        name: 'Will',
        age:  '28'
    },
];

const info = document.querySelector("#info");

let details = data.map(function (item) {
    return '<div>' + item.name + '<div>';
})

info.innerHTML = details.join('\n');