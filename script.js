// JavaScript for the furniture moving company landing page

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Get all links with hash
    const links = document.querySelectorAll('a[href^="#"]');
    
    // Add smooth scroll behavior to each link
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === "#") return;
            
            e.preventDefault();
            
            const targetElement = document.querySelector(href);
            if (targetElement) {
                // Scroll smoothly to the target
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add scroll animation for elements
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.service-card, .feature, .gallery-item, .testimonial');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;
            
            // Add animation class when element comes into view
            if (elementPosition < screenHeight * 0.9) {
                element.classList.add('animate');
            }
        });
    };

    // Run animation check on scroll
    window.addEventListener('scroll', animateOnScroll);
    
    // Run once on page load
    animateOnScroll();

    // Add active class to contact buttons on hover
    const contactButtons = document.querySelectorAll('.btn-whatsapp, .btn-call');
    contactButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.classList.add('active');
        });
        
        button.addEventListener('mouseleave', function() {
            this.classList.remove('active');
        });
    });
    
    // Add "click to call" notification for mobile
    const phoneButtons = document.querySelectorAll('a[href^="tel:"]');
    if(/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        phoneButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Show feedback that we're initiating a call
                const originalText = this.innerHTML;
                this.innerHTML = '<i class="fas fa-phone-alt"></i> جاري الاتصال...';
                
                // Reset text after a delay
                setTimeout(() => {
                    this.innerHTML = originalText;
                }, 3000);
            });
        });
    }
    
    // Add WhatsApp message template
    const whatsappButtons = document.querySelectorAll('a[href^="https://wa.me"]');
    whatsappButtons.forEach(button => {
        // Add message parameter to WhatsApp link
        const currentHref = button.getAttribute('href');
        if (!currentHref.includes('text=')) {
            const newHref = currentHref + '?text=' + encodeURIComponent('السلام عليكم، أرغب في الاستفسار عن خدمات نقل العفش لديكم.');
            button.setAttribute('href', newHref);
        }
    });
    
    // FAQ section accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');
            
            // Close all FAQ items
            document.querySelectorAll('.faq-item').forEach(item => {
                item.classList.remove('active');
            });
            
            // Toggle the clicked FAQ item
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });
});

// Add a simple fade-in animation for page load
window.addEventListener('load', function() {
    document.body.classList.add('page-loaded');
});
