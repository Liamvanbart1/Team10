const fetchDate = async () => {
    try {
        const response = await fetch('https://fdnd.directus.app/items/women_in_tech');

        if (!response.ok) throw new Error('Could not find item');

        const data = await response.json();
        const women = data.data;

        const container = document.getElementById("popoverContainer"); // A wrapper div for all popovers

        const imageBaseURL = " https://fdnd.directus.app/assets/";
        women.forEach(women => {
            console.log(women);
            // Create a unique popover ID
            let popoverId = `popover-${women.id}`;
            let imageURL = imageBaseURL + women.image;

            // Create the button to trigger the popover
            let button = document.createElement("button");
            button.textContent = `Show ${women.name}`;
            button.setAttribute("popovertarget", popoverId);
            button.innerHTML = `
                <img src="${imageURL}" alt="${women.name}">
            `;

            // Create the popover
            let popover = document.createElement("div");
            popover.id = popoverId;
            popover.setAttribute("popover", "");
            popover.classList.add("InformationPopOver");
            popover.innerHTML = `
                <img src="${imageURL}" alt="${women.name}">
                <div>${women.period}</div>
                <p>${women.country_code}</p>
                <h2>${women.name}</h2>
                <p>${women.tagline}</p>
            `;

            // popover.style.positionAnchor = `#${women.id}`;

            // Append the button and popover to the container
            container.appendChild(button);
            container.appendChild(popover);
        })

        // const filteredWomen = women.map(woman => ({
        //     id: woman.id,
        //     naam: woman.name,
        //     afkorting: woman.short_name,
        //     period: woman.period,
        //     image: woman.image
        // })).sort((a, b) => a.period.localeCompare(b.period));
        //     .sort((a, b) => a.period.localeCompare(b.period));
        // https://www.youtube.com/watch?v=CTHhlx25X-U  JS SORTING


    } catch (error) {
        console.error('Error fetching data:', error);
    }
}


fetchDate();
