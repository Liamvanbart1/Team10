fetch('./vrouwen.json')
    .then(response => response.json()) // Convert the response to JSON
    .then(data => console.log(data)) // Use the data
    .catch(error => console.error('Error loading JSON:', error)); // Handle errors


async function fetchData() {
    const url = "https://fdnd.directus.app/items/women_in_tech";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const json = await response.json();
        console.log(json);
    } catch (error) {
        console.error('Error loading JSON:', error);
    }
}

fetchData();
