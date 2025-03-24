const fetchDate = async () => {
    try {
        const response = await fetch('https://fdnd.directus.app/items/women_in_tech');

        if (!response.ok) throw new Error('Could not find item');

        const data = await response.json();
        const women = data.data;

        const filteredWomen = women.map(woman => ({
            id: woman.id,
            naam: woman.name,
            afkorting: woman.short_name,
            period: woman.period
        })).sort((a, b) => a.period.localeCompare(b.period));

            // .sort((a, b) => a.period.localeCompare(b.period));
        // https://www.youtube.com/watch?v=CTHhlx25X-U  JS SORTING
        populateTable(filteredWomen);
    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

const populateTable = (womenData) => {
    const tableBody = document.querySelector('#womenTable tbody');
    tableBody.innerHTML = '';  // Clear any existing data

    womenData.forEach(woman => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${woman.id}</td>
            <td>${woman.naam}</td>
            <td>${woman.afkorting}</td>
            <td>${woman.period}</td>
        `;

        tableBody.appendChild(row);
    });
}

fetchDate();
