console.log("JS works");

const characters = document.querySelectorAll('.character');
const overlay = document.getElementById('overlay');
const detailImage = document.getElementById('detailImage');
const detailName = document.getElementById('detailName');
const detailDescription = document.getElementById('detailDescription');

// Open card
characters.forEach(character => {
    character.addEventListener('click', () => {
        detailImage.src = character.dataset.image;
        detailImage.alt = character.dataset.name;
        detailName.textContent = character.dataset.name;
        detailDescription.textContent = character.dataset.description;

        overlay.classList.remove('hidden');
    });
});

// Close card when clicking outside
overlay.addEventListener('click', () => {
    overlay.classList.add('hidden');
});

// Prevent closing when clicking the card itself
document.getElementById('detailCard').addEventListener('click', (e) => {
    e.stopPropagation();
});
