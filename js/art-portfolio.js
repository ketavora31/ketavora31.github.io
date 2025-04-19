// Art Portfolio JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS Animation
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
    
    // Initialize Swiper Slider
    const artSwiper = new Swiper('.art-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 30,
            }
        }
    });
    
    // Art Tabs Functionality
    const artTabBtns = document.querySelectorAll('.art-tab-btn');
    const artTabPanes = document.querySelectorAll('.art-tab-pane');
    
    artTabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            artTabBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get tab ID
            const tabId = this.getAttribute('data-tab');
            
            // Hide all tab panes
            artTabPanes.forEach(pane => pane.classList.remove('active'));
            
            // Show selected tab pane
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // Art Modal Functionality
    const artViewBtns = document.querySelectorAll('.art-view-btn');
    const artModal = document.querySelector('.art-modal');
    const artModalClose = document.querySelector('.art-modal-close');
    const artModalContent = document.querySelector('.art-modal-content');
    
    artViewBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const artId = this.getAttribute('data-art-id');
            const artwork = artData.find(item => item.id === artId);
            
            if (!artwork) return;
            
            // Populate modal content
            artModalContent.innerHTML = `
                <div class="art-modal-gallery">
                    <div class="art-modal-main-image">
                        <img src="${artwork.image}" alt="${artwork.title}">
                    </div>
                </div>
                <div class="art-modal-info">
                    <div class="art-modal-header">
                        <div class="art-modal-category">${artwork.category}</div>
                        <h2 class="art-modal-title">${artwork.title}</h2>
                    </div>
                    <div class="art-modal-description">
                        <p>${artwork.description}</p>
                    </div>
                    <div class="art-modal-details">
                        <div class="detail-item">
                            <span class="detail-label">Medium</span>
                            <span class="detail-value">${artwork.medium}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Dimensions</span>
                            <span class="detail-value">${artwork.dimensions}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Year</span>
                            <span class="detail-value">${artwork.year}</span>
                        </div>
                        <div class="detail-item">
                            <span class="detail-label">Status</span>
                            <span class="detail-value">${artwork.status}</span>
                        </div>
                    </div>
                </div>
            `;
            
            // Show modal
            artModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close modal
    if (artModalClose) {
        artModalClose.addEventListener('click', function() {
            artModal.classList.remove('active');
            document.body.style.overflow = '';
        });
    }
    
    // Close on outside click
    artModal.addEventListener('click', function(e) {
        if (e.target === artModal) {
            artModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
    
    // Handle cursor effects for art items
    const artCards = document.querySelectorAll('.art-card');
    
    if (cursor && cursorFollower) {
        artCards.forEach(card => {
            card.addEventListener('mouseenter', () => {
                cursor.classList.add('image-hover');
                cursorFollower.classList.add('image-hover');
            });
            
            card.addEventListener('mouseleave', () => {
                cursor.classList.remove('image-hover');
                cursorFollower.classList.remove('image-hover');
            });
        });
    }
});
