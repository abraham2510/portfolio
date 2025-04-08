tailwind.config = {
    theme: {
        extend: {
            keyframes: {
                typing: {
                    '0%': { width: '0ch' },
                    '50%': { width: '10ch' }, // Adjust to match your text length
                    '100%': { width: '0ch' }
                },
                blink: {
                    '0%, 100%': { borderColor: 'transparent' },
                    '50%': { borderColor: 'white' }
                }
            },
            animation: {
                typing: 'typing 4s steps(13) infinite',
                blink: 'blink 0.7s step-end infinite'
            }
        }
    },
    plugins: [],
}


document.addEventListener("DOMContentLoaded", () => {
    const fadeUps = document.querySelectorAll(".fade-up");
    const fadeIns = document.querySelectorAll(".fade-in");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    }, {
      threshold: 0.2
    });
  
    fadeUps.forEach(el => observer.observe(el));
  
    // Apply stagger manually
    fadeIns.forEach((el, i) => {
      el.style.transitionDelay = `${i * 100}ms`;
      observer.observe(el);
    });
  });

  
  document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector("#click");
    const closeIcon = document.querySelector(".lucide-circle-x");
    const mobileMenu = document.querySelector("#mobileMenu");
    const navLinks = document.querySelectorAll("#mobileMenu a"); // selects all <a> in mobile menu
  
    // Initially hide close icon
    closeIcon.style.display = "none";
  
    // Menu open
    menuIcon.addEventListener("click", function () {
      mobileMenu.classList.remove("hidden");
      menuIcon.style.display = "none";
      closeIcon.style.display = "block";
    });
  
    // Menu close
    closeIcon.addEventListener("click", function () {
      mobileMenu.classList.add("hidden");
      menuIcon.style.display = "block";
      closeIcon.style.display = "none";
    });
  
    // Close nav when any nav link is clicked
    navLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        mobileMenu.classList.add("hidden");
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
      });
    });
  });
  



