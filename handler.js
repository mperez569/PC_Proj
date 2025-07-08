document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
                
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
                
        lastScrollY = currentScrollY;
    });

    // Product card animations
    const productCards = document.querySelectorAll('.product-card');
            
    productCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05) translateY(-10px)';
        });
                
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) translateY(0)';
        });
    });

            // Add to cart functionality
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
            
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
                    
                    // Create success feedback
            const originalText = this.textContent;
            this.textContent = 'Added!';
            this.style.background = 'linear-gradient(45deg, #00ff88, #00d4ff)';
                    
            setTimeout(() => {
                this.textContent = originalText;
                this.style.background = 'linear-gradient(45deg, #00d4ff, #ff0080)';
            }, 1500);
                    
            // Add cart animation (you can expand this)
            const cartIcon = document.querySelector('.cart-icon');
            cartIcon.style.animation = 'bounce 0.5s ease';
                    
            setTimeout(() => {
                cartIcon.style.animation = '';
            }, 500);
        });
    });

            // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
            
    searchBtn.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // Implement search logic here
            console.log('Searching for:', searchTerm);
        }
    });

    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            searchBtn.click();
        }
    });

            // Filter functionality placeholder
    const filterOptions = document.querySelectorAll('.filter-option input');
            
        filterOptions.forEach(filter => {
            filter.addEventListener('change', function() {
                // Implement filtering logic here
                console.log('Filter changed:', this.name, this.value, this.checked);
            });
        });
    });