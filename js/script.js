// DOM Elements
const header = document.querySelector('.header');
const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelectorAll('.nav-link');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const backToTop = document.querySelector('.back-to-top');
const themeButtons = document.querySelectorAll('.theme-btn');
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

// Initialize AOS Animation Library
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    mirror: false
});

// Header Scroll Effect
function handleHeaderScroll() {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
    menuToggle.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
}

// Close Mobile Menu
function closeMobileMenu() {
    menuToggle.classList.remove('active');
    mobileMenu.classList.remove('active');
    document.body.classList.remove('menu-open');
}

// Active Navigation Link
function setActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', () => {
        let scrollY = window.pageYOffset;
        
        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
                
                mobileNavLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    });
}

// Back to Top Button
function handleBackToTop() {
    if (window.scrollY > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Theme Switcher
const themeToggle = document.querySelector('.theme-toggle');
const themeMenu = document.querySelector('.theme-menu');
const themeOptions = document.querySelectorAll('.theme-option');

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    themeOptions.forEach(option => {
        option.classList.remove('active');
        if (option.getAttribute('data-theme') === theme) {
            option.classList.add('active');
        }
    });
}

function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'default';
    setTheme(savedTheme);
}

// Toggle theme menu
if (themeToggle) {
    themeToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        themeMenu.classList.toggle('active');
    });
}

// Close theme menu when clicking outside
document.addEventListener('click', (e) => {
    if (themeMenu && themeMenu.classList.contains('active') && !themeMenu.contains(e.target)) {
        themeMenu.classList.remove('active');
    }
});

// Theme selection
themeOptions.forEach(option => {
    option.addEventListener('click', () => {
        const theme = option.getAttribute('data-theme');
        setTheme(theme);
        themeMenu.classList.remove('active');
    });
});

// Custom Cursor
function updateCursor(e) {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
    
    cursorFollower.style.left = `${e.clientX}px`;
    cursorFollower.style.top = `${e.clientY}px`;
}

function handleCursorEffects() {
    document.querySelectorAll('a, button, .btn').forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursor.classList.add('button-hover');
            cursorFollower.classList.add('button-hover');
        });
        
        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('button-hover');
            cursorFollower.classList.remove('button-hover');
        });
    });
    
    document.querySelectorAll('img, .image-container').forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursor.classList.add('image-hover');
            cursorFollower.classList.add('image-hover');
        });
        
        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('image-hover');
            cursorFollower.classList.remove('image-hover');
        });
    });
    
    document.querySelectorAll('.nav-link, .social-link').forEach(item => {
        item.addEventListener('mouseenter', () => {
            cursor.classList.add('link-hover');
            cursorFollower.classList.add('link-hover');
        });
        
        item.addEventListener('mouseleave', () => {
            cursor.classList.remove('link-hover');
            cursorFollower.classList.remove('link-hover');
        });
    });
}

// Form Validation
function validateForm(formId) {
    const form = document.getElementById(formId);
    
    if (!form) return;
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        const formElements = form.elements;
        
        for (let i = 0; i < formElements.length; i++) {
            if (formElements[i].type !== 'submit' && formElements[i].hasAttribute('required')) {
                if (!formElements[i].value.trim()) {
                    isValid = false;
                    formElements[i].classList.add('error');
                } else {
                    formElements[i].classList.remove('error');
                }
            }
        }
        
        if (isValid) {
            // Form submission logic would go here
            alert('Form submitted successfully!');
            form.reset();
        } else {
            alert('Please fill in all required fields.');
        }
    });
}

// Skill Progress Animation
function animateSkillProgress() {
    const skillElements = document.querySelectorAll('.progress');
    
    if (skillElements.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const percentage = progressBar.getAttribute('data-percentage');
                progressBar.style.width = `${percentage}%`;
                observer.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });
    
    skillElements.forEach(skill => {
        observer.observe(skill);
    });
}

// Event Listeners
window.addEventListener('scroll', handleHeaderScroll);
window.addEventListener('scroll', handleBackToTop);
window.addEventListener('mousemove', updateCursor);

if (menuToggle) {
    menuToggle.addEventListener('click', toggleMobileMenu);
}

if (backToTop) {
    backToTop.addEventListener('click', scrollToTop);
}

mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    handleHeaderScroll();
    setActiveNavLink();
    initTheme();
    handleCursorEffects();
    validateForm('contactForm');
    animateSkillProgress();
});

// Portfolio Grid Initialization
function initPortfolioGrid() {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    if (!portfolioGrid) return;
    
    // Render initial portfolio items (all items)
    renderPortfolioItems('all');
    
    // Setup filter buttons
    if (filterBtns.length) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Remove active class from all buttons
                filterBtns.forEach(b => b.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get filter value
                const filter = this.getAttribute('data-filter');
                
                // Render filtered items
                renderPortfolioItems(filter);
            });
        });
    }
}

// Render Portfolio Items
function renderPortfolioItems(filter) {
    const portfolioGrid = document.querySelector('.portfolio-grid');
    
    if (!portfolioGrid) return;
    
    // Clear existing items
    portfolioGrid.innerHTML = '';
    
    // Filter items
    const items = filter === 'all' 
        ? portfolioData 
        : portfolioData.filter(item => item.category === filter || item.tags.includes(filter));
    
    // Render items
    items.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = 'portfolio-item';
        portfolioItem.setAttribute('data-category', item.category);
        
        // Create image slider for portfolio item
        const imageSlider = document.createElement('div');
        imageSlider.className = 'portfolio-image-slider';
        
        // Add all images to the slider
        item.images.forEach((image, index) => {
            const slide = document.createElement('div');
            slide.className = `portfolio-slide ${index === 0 ? 'active' : ''}`;
            slide.innerHTML = `<img src="${image}" alt="${item.title} ${index + 1}">`;
            imageSlider.appendChild(slide);
        });
        
        // Add navigation dots if more than one image
        let dotsHTML = '';
        if (item.images.length > 1) {
            dotsHTML = '<div class="slider-dots">';
            for (let i = 0; i < item.images.length; i++) {
                dotsHTML += `<span class="slider-dot ${i === 0 ? 'active' : ''}" data-index="${i}"></span>`;
            }
            dotsHTML += '</div>';
        }
        
        portfolioItem.innerHTML = `
            <div class="portfolio-image">
                <div class="portfolio-slider-container">
                    ${imageSlider.outerHTML}
                    ${dotsHTML}
                </div>
                <div class="portfolio-overlay">
                    <div class="portfolio-actions">
                        <button class="portfolio-action-btn view-project" data-id="${item.id}">
                            <i class="bi bi-eye"></i>
                        </button>
                        <a href="${item.link}" class="portfolio-action-btn" target="_blank">
                            <i class="bi bi-link"></i>
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
        
        // Setup slider functionality for this item
        if (item.images.length > 1) {
            setupItemSlider(portfolioItem, item.images.length);
        }
    });
    
    // Setup view project buttons
    setupViewProjectButtons();
}

// Setup slider for portfolio item
function setupItemSlider(portfolioItem, slideCount) {
    const dots = portfolioItem.querySelectorAll('.slider-dot');
    const slides = portfolioItem.querySelectorAll('.portfolio-slide');
    
    // Auto-rotate slides
    let currentSlide = 0;
    const slideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlider();
    }, 3000);
    
    // Click on dots to change slide
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            currentSlide = parseInt(this.getAttribute('data-index'));
            updateSlider();
            // Reset interval when manually changing slide
            clearInterval(slideInterval);
        });
    });
    
    // Update slider to show current slide
    function updateSlider() {
        slides.forEach((slide, index) => {
            if (index === currentSlide) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
        
        dots.forEach((dot, index) => {
            if (index === currentSlide) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }
    
    // Pause auto-rotation on hover
    portfolioItem.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
}

// Setup View Project Buttons
function setupViewProjectButtons() {
    const viewButtons = document.querySelectorAll('.view-project');
    const portfolioModal = document.querySelector('.portfolio-modal');
    const modalClose = document.querySelector('.modal-close');
    
    if (!viewButtons.length || !portfolioModal) return;
    
    viewButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectId = parseInt(this.getAttribute('data-id'));
            const project = portfolioData.find(item => item.id === projectId);
            
            if (!project) return;
            
            // Populate modal content
            const modalContent = document.querySelector('.modal-content');
            modalContent.innerHTML = `
                <div class="modal-gallery">
                    <div class="modal-main-image">
                        <img src="${project.images[0]}" alt="${project.title}">
                        <div class="slider-controls">
                            <button class="slider-prev"><i class="bi bi-chevron-left"></i></button>
                            <button class="slider-next"><i class="bi bi-chevron-right"></i></button>
                        </div>
                    </div>
                    <div class="modal-thumbnails">
                        ${project.images.map((img, index) => `
                            <div class="modal-thumbnail ${index === 0 ? 'active' : ''}">
                                <img src="${img}" alt="${project.title} ${index + 1}">
                            </div>
                        `).join('')}
                    </div>
                </div>
                                <div class="modal-info">
                    <div class="modal-header">
                        <div class="modal-category">${project.category.replace('-', ' ')}</div>
                        <h2 class="modal-title">${project.title}</h2>
                    </div>
                    <div class="modal-description">
                        <p>${project.description}</p>
                    </div>
                    <div class="modal-details">
                        <div class="detail-item">
                            <span class="detail-label">Client</span>
                            <span class="detail-value">${project.client}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Date</span>
                            <span class="detail-value">${project.date}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Tools</span>
                            <span class="detail-value">${project.tools}</span>
                        </div>
                    </div>
                    <div class="modal-actions">
                        <a href="${project.link}" class="btn btn-primary" target="_blank">View Project</a>
                    </div>
                </div>
            `;
            
            // Setup slider functionality
            const mainImage = modalContent.querySelector('.modal-main-image img');
            const thumbnails = modalContent.querySelectorAll('.modal-thumbnail');
            const prevBtn = modalContent.querySelector('.slider-prev');
            const nextBtn = modalContent.querySelector('.slider-next');
            let currentImageIndex = 0;
            
            // Function to update the displayed image
            function updateImage(index) {
                if (index < 0) index = project.images.length - 1;
                if (index >= project.images.length) index = 0;
                
                currentImageIndex = index;
                
                // Fade out current image
                mainImage.style.opacity = 0;
                
                // Change source and fade in after a short delay
                setTimeout(() => {
                    mainImage.src = project.images[index];
                    mainImage.style.opacity = 1;
                }, 200);
                
                // Update active thumbnail
                thumbnails.forEach((thumb, i) => {
                    if (i === index) {
                        thumb.classList.add('active');
                    } else {
                        thumb.classList.remove('active');
                    }
                });
            }
            
            // Setup thumbnail clicks
            thumbnails.forEach((thumb, index) => {
                thumb.addEventListener('click', function() {
                    updateImage(index);
                });
            });
            
            // Setup prev/next buttons
            if (prevBtn) {
                prevBtn.addEventListener('click', function() {
                    updateImage(currentImageIndex - 1);
                });
            }
            
            if (nextBtn) {
                nextBtn.addEventListener('click', function() {
                    updateImage(currentImageIndex + 1);
                });
            }
            
            // Setup keyboard navigation
            const handleKeyDown = function(e) {
                if (e.key === 'ArrowLeft') {
                    updateImage(currentImageIndex - 1);
                } else if (e.key === 'ArrowRight') {
                    updateImage(currentImageIndex + 1);
                } else if (e.key === 'Escape') {
                    closeModal();
                }
            };
            
            document.addEventListener('keydown', handleKeyDown);
            
            // Function to close modal and clean up
            function closeModal() {
                portfolioModal.classList.remove('active');
                document.body.style.overflow = '';
                document.removeEventListener('keydown', handleKeyDown);
            }
            
            // Show modal
            portfolioModal.classList.add('active');
            document.body.style.overflow = 'hidden';
            
            // Close modal
            if (modalClose) {
                modalClose.addEventListener('click', closeModal);
            }
            
            // Close on outside click
            portfolioModal.addEventListener('click', function(e) {
                if (e.target === portfolioModal) {
                    closeModal();
                }
            });
        });
    });
}

// Add this to your initialization code
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
    initPortfolioGrid();
});
