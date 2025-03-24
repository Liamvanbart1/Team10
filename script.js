fetch('./vrouwen.json')
    .then(response => response.json()) // Convert the response to JSON
    .then(data => console.log(data)) // Use the data
    .catch(error => console.error('Error loading JSON:', error)); // Handle errors
