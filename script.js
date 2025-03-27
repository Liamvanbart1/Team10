const fetchDate = async () => {
    try {
        const response = await fetch('https://fdnd.directus.app/items/women_in_tech');

        if (!response.ok) throw new Error('Could not find item');

        const data = await response.json();
        const women = data.data;
        const imageBaseURL = "https://fdnd.directus.app/assets/";
        const lists = document.querySelectorAll(".horizontal-scroll");
        const popoverContainer = document.getElementById("popover-container")
        
        const sections = {
            "way back": lists[0],
            "web pioneer": lists[1],
            "web maturity": lists[2],
            "web weirdness": lists[3],
            "web talent": lists[3]
        };
        const sectionCounters = {
            "way back": 0,
            "web pioneer": 0,
            "web maturity": 0,
            "web weirdness": 0,
            "web talent": 12
        };

        women.forEach(women => {
            let popoverId = `popover-${women.id}`;
            let imageURL = imageBaseURL + women.image;

            // Create the button to trigger the popover
            let button = document.createElement("button");
            button.setAttribute("popovertarget", popoverId);
                        button.innerHTML = `<img src="${imageURL}" alt="${women.name}" class="PillarImage">`;

            // Create the popover
            let popover = document.createElement("div");
            popover.id = popoverId;
            popover.setAttribute("popover", "");
            popover.classList.add("InformationPopOver");
            popover.innerHTML = `
                <img src="${imageURL}" alt="${women.name}">
                <div class="popover-text">
                <h2>${women.name}</h2>
                <div class="popover-tags">
                    <p class="popover-tag-styling">${women.period}</p>
                    <p class="popover-tag-styling">${women.country_code}</p>
                </div>
                <p>${women.tagline}</p>
                </div>
            `;

            if (sections[women.period]) {
                let listItems = sections[women.period].querySelectorAll("li");
                let count = sectionCounters[women.period];

                if (listItems[count]) {
                    listItems[count].appendChild(button);
                }
                sectionCounters[women.period]++;
            }

            popoverContainer.appendChild(popover);
        });


    } catch (error) {
        console.error('Error fetching data:', error);
    }
}

fetchDate();





// let audio = document.getElementById("scrollSound");

// window.addEventListener("scroll", () => {
//   if (audio.paused) {
//     audio.play();
//   }
// });