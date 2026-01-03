document.addEventListener('DOMContentLoaded', () => {
    // 1. Get the boat ID from the URL
    const params = new URLSearchParams(window.location.search);
    const boatId = parseInt(params.get('id'), 10);

    // 2. Find the correct boat object from the 'boats' array (loaded from data.js)
    const boat = boats.find(b => b.id === boatId);

    const detailsContainer = document.querySelector('.details-container');
    const mainTitle = document.querySelector('title');

    // 3. If no boat is found, show an error message
    if (!boat) {
        detailsContainer.innerHTML = '<h1>Lancha não encontrada</h1><p>O link que você acessou parece estar quebrado. Por favor, <a href="index.html">volte para a página inicial</a> e tente novamente.</p>';
        mainTitle.textContent = "Lancha não encontrada | OceanLife";
        return;
    }

    // 4. If boat is found, populate the page
    // Update page title
    mainTitle.textContent = `${boat.title} | OceanLife`;

    // Get elements
    const imageEl = document.getElementById('boat-image');
    const tagContainerEl = document.getElementById('boat-tag-container');
    const titleEl = document.getElementById('boat-title');
    const passengersEl = document.getElementById('boat-passengers');
    const sizeEl = document.getElementById('boat-size');
    const descriptionEl = document.getElementById('boat-description');
    const priceEl = document.getElementById('boat-price');

    // Populate elements
    imageEl.src = boat.image;
    imageEl.alt = boat.title;
    titleEl.textContent = boat.title;
    passengersEl.textContent = boat.passengers;
    sizeEl.textContent = boat.size;
    descriptionEl.textContent = boat.description;
    priceEl.textContent = boat.price;

    // Handle the tag (it might not exist)
    if (boat.tag) {
        const tagEl = document.createElement('span');
        tagEl.className = `fleet-tag ${boat.tagClass}`;
        tagEl.textContent = boat.tag;
        tagContainerEl.appendChild(tagEl);
    }

    // --- RACHÔMETRO LOGIC ---
    const decrementBtn = document.getElementById('btn-decrement');
    const incrementBtn = document.getElementById('btn-increment');
    const personCountEl = document.getElementById('person-count');
    const pricePerPersonEl = document.getElementById('price-per-person-value');

    let currentPeople = boat.passengers; // Start with max people
    const maxPeople = boat.passengers;
    // Convert price string "1.500" to a number 1500
    const boatPrice = parseFloat(boat.price.replace(/\./g, '').replace(',', '.'));

    const updateCalculator = () => {
        // Update display
        personCountEl.textContent = currentPeople;

        // Calculate and update price per person
        const pricePerPerson = boatPrice / currentPeople;
        pricePerPersonEl.textContent = pricePerPerson.toLocaleString('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

        // Disable/enable buttons
        decrementBtn.disabled = currentPeople === 1;
        incrementBtn.disabled = currentPeople === maxPeople;
    };

    incrementBtn.addEventListener('click', () => {
        if (currentPeople < maxPeople) {
            currentPeople++;
            updateCalculator();
        }
    });

    decrementBtn.addEventListener('click', () => {
        if (currentPeople > 1) {
            currentPeople--;
            updateCalculator();
        }
    });

    // Initial calculation on page load, starting with 2 people
    updateCalculator();
});
