const fetchDate = async () => {
    try {
        const response = await fetch('https://fdnd.directus.app/items/women_in_tech');

        if (!response.ok) throw new Error('Could not find item');

        const data = await response.json();
        const women = data.data;

        women.forEach(women => {
            console.log(women);
            let womenHTML =
                `<li>
                <a href="${women.href}" target="_blank">
                <h3>${women.name}</h3>
                </a>
                </li>`;
        })

        // const filteredWomen = women.map(woman => ({
        //     id: woman.id,
        //     naam: woman.name,
        //     afkorting: woman.short_name,
        //     period: woman.period,
        //     image: woman.image
        // })).sort((a, b) => a.period.localeCompare(b.period));
            // .sort((a, b) => a.period.localeCompare(b.period));
        // https://www.youtube.com/watch?v=CTHhlx25X-U  JS SORTING


    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


fetchDate();
