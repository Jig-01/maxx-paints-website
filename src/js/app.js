/* =========================================================
   MAXX PAINTS — MAIN INTERACTIONS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       NAVBAR SCROLL
    ===================================================== */

    const navbar = document.querySelector(".navbar");

    if (navbar) {

        const handleNavbarScroll = () => {

            if (window.scrollY > 20) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }

        };

        handleNavbarScroll();

        window.addEventListener(
            "scroll",
            handleNavbarScroll,
            { passive: true }
        );

    }


    /* =====================================================
       SCROLL REVEAL ANIMATIONS
    ===================================================== */

    const revealElements = document.querySelectorAll(
        ".section-heading, " +
        ".category-card, " +
        ".product-card, " +
        ".why-card, " +
        ".trust-card, " +
        ".visual-cta-inner, " +
        ".contact-cta-inner"
    );

    revealElements.forEach((element, index) => {

        element.classList.add("reveal");

        /*
         * Small stagger between cards
         */
        if (index % 4 === 1) {
            element.classList.add("reveal-delay-1");
        }

        if (index % 4 === 2) {
            element.classList.add("reveal-delay-2");
        }

        if (index % 4 === 3) {
            element.classList.add("reveal-delay-3");
        }

    });


    const revealObserver = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (!entry.isIntersecting) return;

                entry.target.classList.add("is-visible");

                observer.unobserve(entry.target);

            });

        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }
    );


    revealElements.forEach(element => {
        revealObserver.observe(element);
    });


    /* =====================================================
       PRODUCTS MEGA MENU
       OPEN = PRODUCTS CLICK
       CLOSE = ANYWHERE OUTSIDE
    ===================================================== */

    const productsTrigger =
        document.querySelector(
            "[data-products-trigger], .products-trigger, .nav-products"
        );

    const megaMenu =
        document.querySelector(
            "[data-mega-menu], .mega-menu, .products-mega-menu"
        );


    if (productsTrigger && megaMenu) {

        const closeMegaMenu = () => {

            megaMenu.classList.remove("is-open");
            productsTrigger.classList.remove("is-open");

            productsTrigger.setAttribute(
                "aria-expanded",
                "false"
            );

        };


        const openMegaMenu = () => {

            megaMenu.classList.add("is-open");
            productsTrigger.classList.add("is-open");

            productsTrigger.setAttribute(
                "aria-expanded",
                "true"
            );

        };


        productsTrigger.addEventListener("click", (event) => {

            event.preventDefault();
            event.stopPropagation();

            const isOpen =
                megaMenu.classList.contains("is-open");

            if (isOpen) {
                closeMegaMenu();
            } else {
                openMegaMenu();
            }

        });


        /*
         * IMPORTANT:
         * Clicking anywhere INSIDE the mega menu
         * should NOT close it.
         */
        megaMenu.addEventListener("click", (event) => {
            event.stopPropagation();
        });


        /*
         * Clicking anywhere else on the page
         * closes the mega menu.
         */
        document.addEventListener("click", (event) => {

            if (
                !megaMenu.contains(event.target) &&
                !productsTrigger.contains(event.target)
            ) {
                closeMegaMenu();
            }

        });


        /*
         * ESC key closes it too.
         */
        document.addEventListener("keydown", (event) => {

            if (event.key === "Escape") {
                closeMegaMenu();
            }

        });


        /*
         * When navigating to another link,
         * close menu first.
         */
        megaMenu.querySelectorAll("a").forEach(link => {

            link.addEventListener("click", () => {
                closeMegaMenu();
            });

        });

    }

});

document.addEventListener("DOMContentLoaded", () => {

    const animatedSections = document.querySelectorAll(
        ".animate-on-scroll"
    );

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                } else {
                    // Remove class when section leaves viewport
                    // so animation can run again
                    entry.target.classList.remove("is-visible");
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    animatedSections.forEach((section) => {
        observer.observe(section);
    });

});


document.addEventListener("DOMContentLoaded", () => {

    const searchToggle = document.getElementById("searchToggle");
    const searchOverlay = document.getElementById("searchOverlay");
    const searchClose = document.getElementById("searchClose");
    const searchInput = document.getElementById("siteSearch");
    const searchResults = document.getElementById("searchResults");

    if (!searchToggle || !searchOverlay || !searchInput) {
        return;
    }

    const searchData = [

        {
            title: "Interior Paints",
            description: "Explore premium interior paints for beautiful and durable walls.",
            url: "/products.html#interior-paints",
            keywords: "interior paint interior paints wall colour home paint"
        },

        {
            title: "Exterior Paints",
            description: "Exterior paint solutions designed for attractive and protected surfaces.",
            url: "/products.html#exterior-paints",
            keywords: "exterior paint exterior paints outdoor wall paint"
        },

        {
            title: "Wall Putty",
            description: "Wall preparation solutions for smooth and beautiful finishes.",
            url: "/products.html#wall-putty",
            keywords: "wall putty putty wall preparation smooth wall"
        },

        {
            title: "Primers",
            description: "Primer solutions designed to prepare surfaces before painting.",
            url: "/products.html#primers",
            keywords: "primer primers wall primer paint primer"
        },

        {
            title: "Distemper",
            description: "Reliable distemper solutions for interior wall finishes.",
            url: "/products.html#distemper",
            keywords: "distemper wall distemper interior"
        },

        {
            title: "Products",
            description: "Explore the complete range of Maxx Paints products.",
            url: "/products.html",
            keywords: "products paint products maxx paints catalogue"
        },

        {
            title: "About Maxx Paints",
            description: "Learn more about Maxx Paints, our story, values and vision.",
            url: "/about.html",
            keywords: "about company maxx paints story values"
        },

        {
            title: "Blogs",
            description: "Explore paint, colour and home improvement ideas.",
            url: "/blogs.html",
            keywords: "blogs articles paint colours home improvement"
        },

        {
            title: "Careers",
            description: "Explore career opportunities at Maxx Paints.",
            url: "/careers.html",
            keywords: "career jobs employment work maxx paints"
        },

        {
            title: "Contact Us",
            description: "Get in touch with Maxx Paints for enquiries and support.",
            url: "/contact.html",
            keywords: "contact enquiry support dealer maxx paints"
        }

    ];


    function openSearch() {

        searchOverlay.classList.add("active");

        searchOverlay.setAttribute("aria-hidden", "false");

        document.body.classList.add("search-open");

        setTimeout(() => {
            searchInput.focus();
        }, 150);

    }


    function closeSearch() {

        searchOverlay.classList.remove("active");

        searchOverlay.setAttribute("aria-hidden", "true");

        document.body.classList.remove("search-open");

        searchInput.value = "";

        showDefaultResults();

    }


    function showDefaultResults() {

        searchResults.innerHTML = `
            <div class="search-default">

                <span>Popular Searches</span>

                <div class="search-tags">

                    <button type="button" data-search="Interior Paints">
                        Interior Paints
                    </button>

                    <button type="button" data-search="Exterior Paints">
                        Exterior Paints
                    </button>

                    <button type="button" data-search="Wall Putty">
                        Wall Putty
                    </button>

                    <button type="button" data-search="Primer">
                        Primer
                    </button>

                </div>

            </div>
        `;

    }


    function performSearch(query) {

        const searchTerm = query.trim().toLowerCase();

        if (!searchTerm) {

            showDefaultResults();

            return;

        }


        const results = searchData.filter(item => {

            const searchableText = `
                ${item.title}
                ${item.description}
                ${item.keywords}
            `.toLowerCase();

            return searchableText.includes(searchTerm);

        });


        if (!results.length) {

            searchResults.innerHTML = `
                <div class="no-results">

                    <div class="no-results-icon">⌕</div>

                    <h3>No results found</h3>

                    <p>
                        Try searching for paints, primers, wall putty,
                        products or colours.
                    </p>

                </div>
            `;

            return;

        }


        searchResults.innerHTML = results.map(item => `

            <a href="${item.url}" class="search-result">

                <div class="search-result-content">

                    <span class="search-result-title">
                        ${item.title}
                    </span>

                    <span class="search-result-description">
                        ${item.description}
                    </span>

                </div>

                <span class="search-result-arrow">
                    →
                </span>

            </a>

        `).join("");

    }


    searchToggle.addEventListener("click", (event) => {

        event.stopPropagation();

        openSearch();

    });


    searchClose.addEventListener("click", closeSearch);


    searchOverlay.addEventListener("click", (event) => {

        if (event.target === searchOverlay) {
            closeSearch();
        }

    });


    searchInput.addEventListener("input", () => {

        performSearch(searchInput.value);

    });


    document.addEventListener("keydown", (event) => {

        if (event.key === "Escape") {

            closeSearch();

        }

    });


    document.addEventListener("click", (event) => {

        const searchButton = event.target.closest("[data-search]");

        if (!searchButton) {
            return;
        }

        const value = searchButton.dataset.search;

        searchInput.value = value;

        performSearch(value);

    });

});

