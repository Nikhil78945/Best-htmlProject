document.addEventListener('DOMContentLoaded', function () {
    let Input = document.getElementById('searchInput');
    let Button = document.getElementById('searchButton');
    let Results = document.getElementById('searchResults');

    Button.addEventListener('click', function () {
        let searchTerm = Input.value;

// THAT IS REQUEST FOR SHOW RESULT 
        let  results = searchData(searchTerm);

        displayResults(results);
    });

    function searchData(searchTerm) {
// THIS IS OUR DATA
        let niks = [
            'Lucky',
            'Sahil',
            'Samir',
            'Ayush',
            'Nikhil',
            'Yash',
            'Virat',
            'Jay',
            'Tanmay',
            'Atharv',
            'Ratnesh',
            'David',
            'William',
            'Yogesh Sir',
            'Priya',
            'Prachi',
            'Aastha',
        ];

        let filteredResults = niks.filter(item =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
        );

        return filteredResults;
    }


    function displayResults(results) {
        Results.innerHTML = '';

        if (results.length === 0) {
            Results.innerHTML = 'No Student Found.';
            return;
        }

        let ul = document.createElement('ul');

        results.forEach(result => {
            let li = document.createElement('li');
            li.textContent = result;
            ul.appendChild(li);
        });

        Results.appendChild(ul);
    }
});
