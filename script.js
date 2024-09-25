// Sample portfolio items
const portfolioItems = [
    { image: '4bf402bac41f0b77b98ce05334a5d2da.jpg', title: 'Creative Design' },
    { image: 'https://via.placeholder.com/400x300', title: 'Brand Identity' },
    { image: 'https://via.placeholder.com/400x300', title: 'Poster Design' },
    { image: 'https://via.placeholder.com/400x300', title: 'Packaging Design' },
    { image: 'https://via.placeholder.com/400x300', title: 'Logo Design' },
    { image: 'https://via.placeholder.com/400x300', title: 'Brochure Design' },
];

// Function to add portfolio items to the page
function addPortfolioItems() {
    const portfolioContainer = document.getElementById('portfolio-items');
    portfolioItems.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'col-md-4 portfolio-item';
        portfolioItem.innerHTML = `
            <img src="${item.image}" alt="${item.title}" class="img-fluid">
            <h5 class="mt-2">${item.title}</h5>
        `;
        portfolioContainer.appendChild(portfolioItem);
    });
}

// Call the function when the page loads
window.onload = addPortfolioItems;

// Change navbar color on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').classList.add('scrolled');
    } else {
        document.querySelector('.navbar').classList.remove('scrolled');
    }
});