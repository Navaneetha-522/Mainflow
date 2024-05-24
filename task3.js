document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('recipe-form');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('recipe-name').value.trim();
        const category = document.getElementById('recipe-category').value;
        const ingredients = document.getElementById('recipe-ingredients').value.trim();
        const instructions = document.getElementById('recipe-instructions').value.trim();

        if (!name || !category || !ingredients || !instructions) {
            alert('Please fill in all fields.');
            return;
        }

        addRecipe(name, category, ingredients, instructions);
        form.reset();
    });

    const nav = document.querySelector('nav ul');
    const toggleButton = document.createElement('button');
    toggleButton.textContent = 'Menu';
    toggleButton.classList.add('menu-toggle');

    toggleButton.addEventListener('click', () => {
        nav.classList.toggle('open');
    });

    document.querySelector('header').insertBefore(toggleButton, nav);
});

function addRecipe(name, category, ingredients, instructions) {
    const section = document.getElementById(category);
    const article = document.createElement('article');

    const h3 = document.createElement('h3');
    h3.textContent = name;

    const pIngredients = document.createElement('p');
    pIngredients.innerHTML = `<strong>Ingredients:</strong> ${ingredients}`;

    const pInstructions = document.createElement('p');
    pInstructions.innerHTML = `<strong>Instructions:</strong> ${instructions}`;

    article.appendChild(h3);
    article.appendChild(pIngredients);
    article.appendChild(pInstructions);

    section.appendChild(article);
}
