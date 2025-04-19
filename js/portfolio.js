// DOM Elements
const portfolioGrid = document.querySelector('.portfolio-masonry');
const filterButtons = document.querySelectorAll('.filter-btn');
const loadMoreBtn = document.getElementById('loadMoreBtn');
const portfolioModal = document.querySelector('.portfolio-modal');
const modalContent = document.querySelector('.modal-content');
const modalClose = document.querySelector('.modal-close');

// Variables
let visibleItems = 6;
const itemsToLoad = 3;
let filteredData = [...portfolioData];

// Initialize Portfolio Grid
function initPortfolio() {
    renderPortfolioItems();
    setupFilterButtons();
    setupLoadMoreButton();
    setupModalEvents();
}

// Render Portfolio Items
function renderPortfolioItems(filter = 'all') {
    if (!portfolioGrid) return;
    
        // Filter data
        filteredData = filter === 'all' 
        ? [...portfolioData] 
        : portfolioData.filter(item => item.category === filter || item.tags.includes(filter));
    
    // Clear grid
    portfolioGrid.innerHTML = '';
    
    // Render items
    const itemsToShow = filteredData.slice(0, visibleItems);
    
    itemsToShow.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = `portfolio-item ${item.category}`;
        portfolioItem.setAttribute('data-aos', 'fade-up');
        portfolioItem.setAttribute('data-aos-delay', '100');
        
        portfolioItem.innerHTML = `
            <div class="portfolio-image">
                <img src="${item.thumbnail}" alt="${item.title}">
                <div class="portfolio-overlay">
                    <div class="portfolio-actions">
                        <a href="javascript:void(0)" class="portfolio-action-btn view-project" data-id="${item.id}">
                            <i class="fas fa-eye"></i>
                        </a>
                        <a href="${item.link}" class="portfolio-action-btn" target="_blank">
                            <i class="fas fa-link"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="portfolio-content">
                <div class="portfolio-category">${item.category.replace('-', ' ')}</div>
                <h3 class="portfolio-title">${item.title}</h3>
            </div>
        `;
        
        portfolioGrid.appendChild(portfolioItem);
    });
    
    // Update load more button visibility
    updateLoadMoreButton();
    
    // Setup view project buttons
    setupViewProjectButtons();
}

// Setup Filter Buttons
function setupFilterButtons() {
    if (!filterButtons.length) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Reset visible items
            visibleItems = 6;
            
            // Filter and render items
            const filter = button.getAttribute('data-filter');
            renderPortfolioItems(filter);
        });
    });
}

// Setup Load More Button
function setupLoadMoreButton() {
    if (!loadMoreBtn) return;
    
    loadMoreBtn.addEventListener('click', () => {
        visibleItems += itemsToLoad;
        renderPortfolioItems(getActiveFilter());
    });
}

// Update Load More Button Visibility
function updateLoadMoreButton() {
    if (!loadMoreBtn) return;
    
    if (visibleItems >= filteredData.length) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-flex';
    }
}

// Get Active Filter
function getActiveFilter() {
    const activeButton = document.querySelector('.filter-btn.active');
    return activeButton ? activeButton.getAttribute('data-filter') : 'all';
}

// Setup View Project Buttons
function setupViewProjectButtons() {
    const viewButtons = document.querySelectorAll('.view-project');
    
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectId = parseInt(button.getAttribute('data-id'));
            openProjectModal(projectId);
        });
    });
}

// Open Project Modal
function openProjectModal(projectId) {
    const project = portfolioData.find(item => item.id === projectId);
    
    if (!project || !portfolioModal) return;
    
    // Populate modal content
    const modalMainImage = modalContent.querySelector('.main-image img');
    const modalThumbnails = modalContent.querySelector('.image-thumbnails');
    const modalTitle = modalContent.querySelector('.project-title');
    const modalCategory = modalContent.querySelector('.project-category');
    const modalDescription = modalContent.querySelector('.project-description');
    const modalClient = modalContent.querySelector('.client');
    const modalDate = modalContent.querySelector('.date');
    const modalTools = modalContent.querySelector('.tools');
    const modalLink = modalContent.querySelector('.project-link');
    
    modalMainImage.src = project.images[0];
    modalMainImage.alt = project.title;
    
    modalThumbnails.innerHTML = '';
    project.images.forEach((image, index) => {
        const thumbnail = document.createElement('div');
        thumbnail.className = `modal-thumbnail ${index === 0 ? 'active' : ''}`;
        thumbnail.innerHTML = `<img src="${image}" alt="${project.title} ${index + 1}">`;
        
        thumbnail.addEventListener('click', () => {
            modalMainImage.src = image;
            modalContent.querySelectorAll('.modal-thumbnail').forEach(thumb => thumb.classList.remove('active'));
            thumbnail.classList.add('active');
        });
        
        modalThumbnails.appendChild(thumbnail);
    });
    
    modalTitle.textContent = project.title;
    modalCategory.textContent = project.category.replace('-', ' ');
    modalDescription.textContent = project.description;
    modalClient.textContent = project.client;
    modalDate.textContent = project.date;
    modalTools.textContent = project.tools;
    modalLink.href = project.link;
    
    // Open modal
    portfolioModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Setup Modal Events
function setupModalEvents() {
    if (!portfolioModal) return;
    
    // Close modal on X button click
    if (modalClose) {
        modalClose.addEventListener('click', closeProjectModal);
    }
    
    // Close modal on outside click
    portfolioModal.addEventListener('click', (e) => {
        if (e.target === portfolioModal) {
            closeProjectModal();
        }
    });
    
    // Close modal on ESC key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && portfolioModal.classList.contains('active')) {
            closeProjectModal();
        }
    });
}

// Close Project Modal
function closeProjectModal() {
    portfolioModal.classList.remove('active');
    document.body.style.overflow = '';
}

// Initialize on DOM Content Loaded
document.addEventListener('DOMContentLoaded', initPortfolio);

