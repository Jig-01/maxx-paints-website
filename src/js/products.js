/* =========================================================
   MAXX PAINTS
   PRODUCT CATALOGUE
   ---------------------------------------------------------
   Single source of truth for all products.
   Used by:
   - Products listing page
   - Product filters
   - Product detail pages
   - Related products
   ========================================================= */


/* =========================================================
   PRODUCT IMAGES
   ========================================================= */

import distemperImage from "../assets/images/products/distemper.png";
import emulsionImage from "../assets/images/products/emulsion.png";
import primerImage from "../assets/images/products/primer.png";
import snowWhiteImage from "../assets/images/products/snow-white.png";
import wallPuttyImage from "../assets/images/products/wall-putty.png";
import wallMaxxImage from "../assets/images/products/wall-maxx.png";
import smartCoatImage from "../assets/images/products/smart-coat.png";
import maxxCemImage from "../assets/images/products/maxx-cem.png";
import whiteCementImage from "../assets/images/products/white-cement.png";


/* =========================================================
   PRODUCT DATA
   ---------------------------------------------------------
   IMPORTANT:
   Add / edit products here only.
   ========================================================= */

const products = [

  {
    name: "Maxx Acrylic Distemper",
    slug: "maxx-acrylic-distemper",
    brand: "MAGPA",
    category: "Distemper",
    image: distemperImage,

    tagline: "Smooth, bright and economical walls.",
    description:
      "Maxx Acrylic Distemper is designed to give interior walls a smooth, attractive finish with reliable coverage and lasting colour. An economical choice for homes and everyday painting projects.",

    features: [
      "Smooth Finish",
      "Good Coverage",
      "Easy Application",
      "Bright Colours",
      "Economical Choice",
      "Interior Wall Finish"
    ],

    applications: [
      "Living Rooms",
      "Bedrooms",
      "Dining Areas",
      "Ceilings",
      "Offices",
      "Shops"
    ],

    surfaces: [
      "Cement Plaster",
      "Concrete Walls",
      "Wall Putty",
      "Previously Painted Walls"
    ],

    packs: ["5 KG", "10 KG", "20 KG"],

    applicationSteps: [
      "Clean and prepare the surface.",
      "Repair cracks and surface imperfections.",
      "Apply a suitable wall primer.",
      "Allow the primer to dry completely.",
      "Apply the required coats of distemper."
    ]
  },

  {
    name: "Aura Luxury Emulsion",
    slug: "aura-luxury-emulsion",
    brand: "MULTIMAXX",
    category: "Interior Paints",
    image: emulsionImage,

    tagline: "Where luxury meets high-gloss brilliance.",
    description:
      "MULTIMAXX Aura Luxury Emulsion is a premium water-based paint designed for an ultra-smooth, high-gloss finish with excellent whiteness, shine, coverage and long-lasting protection.",

    features: [
      "High Gloss Finish",
      "Silky Smooth Surface",
      "Maxx Coverage",
      "Maxx Whiteness",
      "Weather Protection",
      "Low VOC",
      "Excellent Washability",
      "Long Lasting Protection"
    ],

    applications: [
      "Living Rooms",
      "Bedrooms",
      "Halls",
      "Offices",
      "Showrooms",
      "Hotels",
      "Premium Homes"
    ],

    surfaces: [
      "Interior Walls",
      "Exterior Walls",
      "Ceilings",
      "Properly Prepared Surfaces"
    ],

    packs: ["1 L", "4 L", "10 L", "20 L"],

    applicationSteps: [
      "Ensure the surface is clean, dry and properly prepared.",
      "Repair cracks and imperfections.",
      "Apply a suitable primer.",
      "Allow the primer to dry completely.",
      "Apply the recommended coats of Aura Emulsion."
    ]
  },

  {
    name: "Prime Water Base Primer",
    slug: "prime-water-base-primer",
    brand: "MAXX",
    category: "Primers",
    image: primerImage,

    tagline: "The right foundation for a better finish.",
    description:
      "MAXX PRIME Water Base Wall Primer provides a strong foundation for decorative coatings. It is designed to improve adhesion, coverage and the overall finish of painted surfaces.",

    features: [
      "Water Based Formula",
      "Strong Adhesion",
      "Good Coverage",
      "Low Odour",
      "Smooth Foundation",
      "Suitable for Interior & Exterior"
    ],

    applications: [
      "Residential Walls",
      "Commercial Buildings",
      "Offices",
      "Apartments",
      "Renovation Projects"
    ],

    surfaces: [
      "Cement Plaster",
      "Concrete",
      "Wall Putty",
      "Interior Walls",
      "Exterior Walls"
    ],

    packs: ["1 L", "4 L", "10 L", "20 L"],

    applicationSteps: [
      "Clean the surface thoroughly.",
      "Remove loose particles and dust.",
      "Repair cracks and imperfections.",
      "Apply primer evenly using brush or roller.",
      "Allow the surface to dry before applying topcoat."
    ]
  },

  {
    name: "Snow White",
    slug: "snow-white",
    brand: "MAGPA",
    category: "Limewash",
    image: snowWhiteImage,

    tagline: "Bright white. Smooth touch. Everyday freshness.",
    description:
      "MAGPA Snow White Limewash is designed to provide a bright white appearance and smooth-touch finish for large-scale wall and surface applications.",

    features: [
      "Bright White Finish",
      "Smooth Touch Finish",
      "Economical Coverage",
      "Easy Application",
      "Suitable for Large Areas"
    ],

    applications: [
      "Residential Exteriors",
      "Commercial Buildings",
      "Institutional Buildings",
      "Large Wall Areas"
    ],

    surfaces: [
      "Masonry Walls",
      "Cement Surfaces",
      "Prepared Exterior Surfaces"
    ],

    packs: ["25 KG"],

    applicationSteps: [
      "Prepare and clean the surface.",
      "Remove loose dust and old material.",
      "Prepare the product as recommended.",
      "Apply evenly over the prepared surface.",
      "Allow sufficient drying time."
    ]
  },

  {
    name: "Wall Putty",
    slug: "wall-putty",
    brand: "MULTI MAXX",
    category: "Wall Putty",
    image: wallPuttyImage,

    tagline: "Create the perfect canvas for your walls.",
    description:
      "MULTIMAXX Wall Putty is designed to create a smooth, strong and uniform surface before painting. Its smooth finish helps create a better base for subsequent paint coats.",

    features: [
      "Smooth Surface",
      "Strong Adhesion",
      "Bright White Finish",
      "Weather Resistant",
      "Helps Reduce Paint Consumption",
      "Easy Application"
    ],

    applications: [
      "New Construction",
      "Home Renovation",
      "Residential Projects",
      "Commercial Projects",
      "Interior Walls",
      "Exterior Walls"
    ],

    surfaces: [
      "Concrete",
      "Plastered Walls",
      "Cement Surfaces",
      "Ceilings"
    ],

    packs: ["1 KG", "40 KG"],

    applicationSteps: [
      "Clean the surface and remove loose material.",
      "Prepare the putty according to recommended procedure.",
      "Apply evenly on the prepared surface.",
      "Allow the coat to dry.",
      "Sand and smooth the surface before painting."
    ]
  },

  {
    name: "Wall Maxx",
    slug: "wall-maxx",
    brand: "MAGPA",
    category: "Acrylic Emulsion",
    image: wallMaxxImage,

    tagline: "A smooth finish with everyday protection.",
    description:
      "MAGPA Wall Maxx Acrylic Emulsion is designed for attractive wall finishes with coverage, water resistance and protection against everyday dust and wear.",

    features: [
      "Maxx Coverage",
      "Soft Touch Finish",
      "Anti-Dust",
      "Water Resistance",
      "Sparkling White",
      "Smooth Finish"
    ],

    applications: [
      "Living Rooms",
      "Bedrooms",
      "Offices",
      "Shops",
      "Commercial Spaces"
    ],

    surfaces: [
      "Cement Plaster",
      "Concrete Walls",
      "Wall Putty",
      "Previously Painted Walls"
    ],

    packs: ["1 L", "4 L", "10 L", "20 L"],

    applicationSteps: [
      "Prepare a clean and dry surface.",
      "Repair cracks and imperfections.",
      "Apply suitable primer.",
      "Allow primer to dry.",
      "Apply the recommended coats of Wall Maxx."
    ]
  },

  {
    name: "Smart Coat",
    slug: "smart-coat",
    brand: "MAGPA",
    category: "Acrylic Emulsion",
    image: smartCoatImage,

    tagline: "Smart choice. Beautiful walls.",
    description:
      "SMART COAT Acrylic Emulsion combines smooth finish, excellent coverage, vibrant colours and reliable protection at an economical price. It is designed primarily for interior walls and can also be used on exterior walls under suitable conditions.",

    features: [
      "Smooth Finish",
      "Excellent Coverage",
      "Vibrant Colours",
      "Low VOC",
      "Water Based",
      "Quick Drying",
      "Easy Brush & Roller Application",
      "Economical"
    ],

    applications: [
      "Living Rooms",
      "Bedrooms",
      "Dining Rooms",
      "Ceilings",
      "Offices",
      "Schools",
      "Hotels",
      "Apartments",
      "Shops",
      "Showrooms"
    ],

    surfaces: [
      "Cement Plaster",
      "Concrete Walls",
      "Wall Putty",
      "Brick Masonry",
      "Interior Walls",
      "Previously Painted Walls",
      "Primed Exterior Walls"
    ],

    packs: ["1 L", "4 L", "10 L", "20 L"],

    applicationSteps: [
      "Clean the surface thoroughly.",
      "Repair cracks and imperfections using wall putty.",
      "Apply one coat of suitable wall primer.",
      "Allow the primer to dry completely.",
      "Apply 2–3 coats of SMART COAT."
    ]
  },

  {
    name: "Maxx Cem",
    slug: "maxx-cem",
    brand: "MAGPA",
    category: "Cement Paints",
    image: maxxCemImage,

    tagline: "Durable cement finish for dependable protection.",
    description:
      "MAXX CEM is a cement-based coating designed to provide a durable, decorative and water-resistant finish for suitable wall surfaces.",

    features: [
      "Plastic Finish",
      "Decorative Finish",
      "Water Resistant",
      "Strong Surface Adhesion",
      "Durable Finish"
    ],

    applications: [
      "Residential Buildings",
      "Commercial Buildings",
      "Exterior Walls",
      "Large Surface Projects"
    ],

    surfaces: [
      "Cement Surfaces",
      "Concrete Walls",
      "Masonry Surfaces"
    ],

    packs: ["20 KG"],

    applicationSteps: [
      "Clean and prepare the surface.",
      "Repair damaged areas.",
      "Prepare the cement paint as recommended.",
      "Apply evenly over the surface.",
      "Allow adequate drying between coats."
    ]
  },

  {
    name: "White Cement",
    slug: "white-cement",
    brand: "MAGPA",
    category: "Decorative White Cement",
    image: whiteCementImage,

    tagline: "A clean, bright foundation for beautiful finishes.",
    description:
      "MAGPA Decorative White Cement provides a bright white base for construction and finishing applications where a clean and uniform appearance is required.",

    features: [
      "Bright White",
      "Smooth Finish",
      "Decorative Application",
      "Uniform Appearance",
      "Versatile Surface Use"
    ],

    applications: [
      "Wall Finishing",
      "Decorative Work",
      "Interior Projects",
      "Construction Applications"
    ],

    surfaces: [
      "Cement Surfaces",
      "Concrete",
      "Masonry"
    ],

    packs: ["25 KG"],

    applicationSteps: [
      "Prepare and clean the surface.",
      "Remove loose particles.",
      "Prepare the material according to recommended practice.",
      "Apply uniformly.",
      "Allow the surface to set and dry properly."
    ]
  }

];

window.MAXX_PRODUCTS = products;


/* =========================================================
   UTILITY
   ========================================================= */

function normalize(value) {

    return String(value || "")
        .trim()
        .toLowerCase();

}


/* =========================================================
   GLOBAL PRODUCT DATA
   ---------------------------------------------------------
   Product detail JS will reuse this.
   No duplicate product database required.
   ========================================================= */

//window.MAXX_PRODUCTS = products;


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const productsGrid =
    document.getElementById("productsGrid");

const productsEmpty =
    document.getElementById("productsEmpty");

const resultCount =
    document.getElementById("resultCount");

const heroProductCount =
    document.getElementById("heroProductCount");

const clearFiltersButton =
    document.getElementById("clearFilters");

const emptyClearFilters =
    document.getElementById("emptyClearFilters");

const mobileFilterToggle =
    document.getElementById("mobileFilterToggle");

const productFilters =
    document.getElementById("productFilters");


/* =========================================================
   FILTER INPUTS
   ========================================================= */

const categoryInputs =
    document.querySelectorAll(
        'input[data-filter="category"]'
    );

const brandInputs =
    document.querySelectorAll(
        'input[data-filter="brand"]'
    );


/* =========================================================
   FILTER STATE
   ========================================================= */

const filterState = {

    categories: [],

    brands: []

};


/* =========================================================
   INITIAL PRODUCT COUNT
   ========================================================= */

if (heroProductCount) {

    heroProductCount.textContent =
        products.length;

}


/* =========================================================
   READ URL FILTERS
   ---------------------------------------------------------
   Example:
   /products.html?category=interior
   /products.html?brand=magpa
   /products.html?category=cement,putty
   ========================================================= */

function readURLFilters() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const category =
        normalize(
            params.get("category")
        );


    const brand =
        normalize(
            params.get("brand")
        );


    if (category) {

        filterState.categories =
            category
                .split(",")
                .map(normalize)
                .filter(Boolean);

    }


    if (brand) {

        filterState.brands =
            brand
                .split(",")
                .map(normalize)
                .filter(Boolean);

    }

}


/* =========================================================
   SYNC CHECKBOXES
   ========================================================= */

function syncCheckboxes() {

    categoryInputs.forEach(input => {

        input.checked =
            filterState.categories.includes(
                normalize(input.value)
            );

    });


    brandInputs.forEach(input => {

        input.checked =
            filterState.brands.includes(
                normalize(input.value)
            );

    });

}


/* =========================================================
   FILTER PRODUCTS
   ========================================================= */

function getFilteredProducts() {

    return products.filter(product => {

        const productCategory =
            normalize(product.category);

        const productBrand =
            normalize(product.brand);


        const categoryMatch =
            filterState.categories.length === 0 ||
            filterState.categories.includes(
                productCategory
            );


        const brandMatch =
            filterState.brands.length === 0 ||
            filterState.brands.includes(
                productBrand
            );


        return categoryMatch && brandMatch;

    });

}


/* =========================================================
   HTML ESCAPE
   ---------------------------------------------------------
   Prevents product data from breaking card markup.
   ========================================================= */

function escapeHTML(value = "") {

    return String(value)

        .replace(/&/g, "&amp;")

        .replace(/</g, "&lt;")

        .replace(/>/g, "&gt;")

        .replace(/"/g, "&quot;")

        .replace(/'/g, "&#039;");
}


/* =========================================================
   PRODUCT URL
   ========================================================= */

function getProductURL(product) {

    return `/product/${product.slug}.html`;

}


/* =========================================================
   PRODUCT CARD
   ========================================================= */

function createProductCard(product, index) {

    const card =
        document.createElement("a");


    card.className =
        "product-card";


    card.href =
        getProductURL(product);


    card.setAttribute(
        "aria-label",
        `View ${product.name}`
    );


    card.style.animationDelay =
        `${index * 70}ms`;


    card.innerHTML = `

        <div class="product-image">

            <span class="product-badge">
                ${escapeHTML(
                    product.categoryName
                )}
            </span>

            <img
                src="${product.image}"
                alt="${escapeHTML(
                    product.name
                )} - ${escapeHTML(
                    product.brandName
                )}"
                loading="lazy"
                decoding="async"
            >

        </div>


        <div class="product-info">

            <span class="product-brand">
                ${escapeHTML(
                    product.brandName
                )}
            </span>


            <h3 class="product-name">
                ${escapeHTML(
                    product.name
                )}
            </h3>


            <p class="product-description">
                ${escapeHTML(
                    product.description
                )}
            </p>


            <div class="product-link">

                <span class="product-link-text">
                    View Product
                </span>

                <span
                    class="product-arrow"
                    aria-hidden="true"
                >
                    →
                </span>

            </div>

        </div>

    `;


    return card;

}


/* =========================================================
   RENDER PRODUCTS
   ========================================================= */

function renderProducts() {

    /*
       product.js is loaded globally through main.js.

       On product detail pages there is no productsGrid,
       so simply stop here.
    */

    if (!productsGrid) {

        return;

    }


    const filteredProducts =
        getFilteredProducts();


    productsGrid.innerHTML = "";


    filteredProducts.forEach(
        (product, index) => {

            productsGrid.appendChild(
                createProductCard(
                    product,
                    index
                )
            );

        }
    );


    updateResultCount(
        filteredProducts.length
    );


    updateEmptyState(
        filteredProducts.length
    );


    updateFilterCounts();

}


/* =========================================================
   RESULT COUNT
   ========================================================= */

function updateResultCount(count) {

    if (!resultCount) {

        return;

    }


    resultCount.textContent =
        count;

}


/* =========================================================
   EMPTY STATE
   ========================================================= */

function updateEmptyState(count) {

    if (!productsEmpty) {

        return;

    }


    productsEmpty.hidden =
        count !== 0;


    if (productsGrid) {

        productsGrid.hidden =
            count === 0;

    }

}


/* =========================================================
   FILTER COUNTS
   ========================================================= */

function updateFilterCounts() {

    const categoryCounts = {};

    const brandCounts = {};


    products.forEach(product => {

        const category =
            normalize(
                product.category
            );


        const brand =
            normalize(
                product.brand
            );


        categoryCounts[category] =
            (categoryCounts[category] || 0) + 1;


        brandCounts[brand] =
            (brandCounts[brand] || 0) + 1;

    });


    document
        .querySelectorAll(
            "[data-category-count]"
        )
        .forEach(element => {

            const category =
                normalize(
                    element.dataset.categoryCount
                );


            element.textContent =
                categoryCounts[category] || 0;

        });


    document
        .querySelectorAll(
            "[data-brand-count]"
        )
        .forEach(element => {

            const brand =
                normalize(
                    element.dataset.brandCount
                );


            element.textContent =
                brandCounts[brand] || 0;

        });

}


/* =========================================================
   UPDATE FILTER STATE
   ========================================================= */

function updateFilterState() {

    filterState.categories =
        Array.from(categoryInputs)

            .filter(input =>
                input.checked
            )

            .map(input =>
                normalize(input.value)
            );


    filterState.brands =
        Array.from(brandInputs)

            .filter(input =>
                input.checked
            )

            .map(input =>
                normalize(input.value)
            );


    updateURL();

    renderProducts();

}


/* =========================================================
   UPDATE URL
   ========================================================= */

function updateURL() {

    const params =
        new URLSearchParams();


    if (filterState.categories.length) {

        params.set(
            "category",
            filterState.categories.join(",")
        );

    }


    if (filterState.brands.length) {

        params.set(
            "brand",
            filterState.brands.join(",")
        );

    }


    const query =
        params.toString();


    const newURL =
        query

            ? `${window.location.pathname}?${query}`

            : window.location.pathname;


    window.history.replaceState(
        {},
        "",
        newURL
    );

}


/* =========================================================
   CLEAR FILTERS
   ========================================================= */

function clearFilters() {

    filterState.categories = [];

    filterState.brands = [];


    categoryInputs.forEach(input => {

        input.checked = false;

    });


    brandInputs.forEach(input => {

        input.checked = false;

    });


    updateURL();

    renderProducts();

}


/* =========================================================
   CATEGORY EVENTS
   ========================================================= */

categoryInputs.forEach(input => {

    input.addEventListener(
        "change",
        updateFilterState
    );

});


/* =========================================================
   BRAND EVENTS
   ========================================================= */

brandInputs.forEach(input => {

    input.addEventListener(
        "change",
        updateFilterState
    );

});


/* =========================================================
   CLEAR BUTTON EVENTS
   ========================================================= */

if (clearFiltersButton) {

    clearFiltersButton.addEventListener(
        "click",
        clearFilters
    );

}


if (emptyClearFilters) {

    emptyClearFilters.addEventListener(
        "click",
        clearFilters
    );

}


/* =========================================================
   MOBILE FILTER DRAWER
   ========================================================= */

if (
    mobileFilterToggle &&
    productFilters
) {

    mobileFilterToggle.addEventListener(
        "click",
        () => {

            const isOpen =
                productFilters.classList.toggle(
                    "active"
                );


            mobileFilterToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }
    );

}


/* =========================================================
   FILTER GROUP COLLAPSE
   ========================================================= */

document
    .querySelectorAll(
        "[data-filter-toggle]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const group =
                    button.closest(
                        ".filter-group"
                    );


                const options =
                    group?.querySelector(
                        ".filter-options"
                    );


                const icon =
                    button.querySelector(
                        ".filter-plus"
                    );


                if (!options) {

                    return;

                }


                const isHidden =
                    options.style.display ===
                    "none";


                options.style.display =
                    isHidden
                        ? ""
                        : "none";


                if (icon) {

                    icon.textContent =
                        isHidden
                            ? "−"
                            : "+";

                }

            }
        );

    });


/* =========================================================
   INITIALIZE PRODUCT PAGE
   ========================================================= */

readURLFilters();

syncCheckboxes();

renderProducts();