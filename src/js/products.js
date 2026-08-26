/* =========================================================
   MAXX PAINTS
   PRODUCT CATALOGUE
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
   Add / edit products here only.
   ========================================================= */

const products = [

    {
        id: "distemper",
        name: "Maxx Acrylic Distemper",
        slug: "maxx-acrylic-distemper",

        brand: "magpa",
        brandName: "MAGPA",

        category: "distemper",
        categoryName: "Distemper",

        image: distemperImage,

        description:
            "A smooth and economical wall finish designed for attractive and durable interior surfaces."
    },


    {
        id: "emulsion",
        name: "Aura Luxury Emulsion",
        slug: "aura-luxury-emulsion",

        brand: "multimaxx",
        brandName: "MULTIMAXX",

        category: "interior",
        categoryName: "Interior Paints",

        image: emulsionImage,

        description:
            "A refined interior paint designed to provide beautiful walls with a smooth and lasting finish."
    },


    {
        id: "primer",
        name: "Prime Water Base Primer",
        slug: "prime-water-base-primer",

        brand: "maxx",
        brandName: "MAXX",

        category: "primer",
        categoryName: "Primers",

        image: primerImage,

        description:
            "A dependable base coat that prepares the surface for a smoother and more durable paint finish."
    },


    {
        id: "snow-white",
        name: "Snow White",
        slug: "snow-white",

        brand: "magpa",
        brandName: "MAGPA",

        category: "cement",
        categoryName: "Cement Paints",

        image: snowWhiteImage,

        description:
            "A bright cement-based finish designed for attractive and durable surface protection."
    },


    {
        id: "wall-putty",
        name: "Wall Putty",
        slug: "wall-putty",

        brand: "multi-maxx",
        brandName: "MULTI MAXX",

        category: "putty",
        categoryName: "Wall Putty",

        image: wallPuttyImage,

        description:
            "A smooth surface preparation solution that creates an ideal base for the final coat of paint."
    },


    {
        id: "wall-maxx",
        name: "Wall Maxx",
        slug: "wall-maxx",

        brand: "magpa",
        brandName: "MAGPA",

        category: "emulsion",
        categoryName: "Acrylic Emulsion",

        image: wallMaxxImage,

        description:
            "A smooth surface preparation solution that creates an ideal base for the final coat of paint."
    },


    {
        id: "smart-coat",
        name: "Smart Coat",
        slug: "Smart-Coat",

        brand: "magpa",
        brandName: "MAGPA",

        category: "emulsion",
        categoryName: "Acrylic Emulsion",

        image: smartCoatImage,

        description:
            "A smooth surface preparation solution that creates an ideal base for the final coat of paint."
    },


    {
        id: "maxx-cem",
        name: "Maxx Cem",
        slug: "Maxx-Cem",

        brand: "magpa",
        brandName: "MAGPA",

        category: "cement",
        categoryName: "Cement Paints",

        image: maxxCemImage,

        description:
            "A smooth surface preparation solution that creates an ideal base for the final coat of paint."
    },


    {
        id: "white-cement",
        name: "White Cement",
        slug: "White-Cement",

        brand: "magpa",
        brandName: "MAGPA",

        category: "cement",
        categoryName: "Cement Paints",

        image: whiteCementImage,

        description:
            "A smooth surface preparation solution that creates an ideal base for the final coat of paint."
    }


];


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
   FILTER STATE
   ========================================================= */

const filterState = {

    categories: [],

    brands: []

};


/* =========================================================
   CATEGORY / BRAND FILTER INPUTS
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
   INITIAL PRODUCT COUNT
   ========================================================= */

if (heroProductCount) {

    heroProductCount.textContent =
        products.length;

}


/* =========================================================
   NORMALIZE VALUES
   ========================================================= */

function normalize(value) {

    return String(value || "")
        .trim()
        .toLowerCase();

}


/* =========================================================
   READ URL FILTER
   ---------------------------------------------------------
   Example:
   /products.html?category=interior
   ========================================================= */

function readURLFilters() {

    const params =
        new URLSearchParams(window.location.search);

    const category =
        normalize(params.get("category"));

    const brand =
        normalize(params.get("brand"));


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
   APPLY URL FILTERS TO CHECKBOXES
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
   GET FILTERED PRODUCTS
   ========================================================= */

function getFilteredProducts() {

    return products.filter(product => {

        const productCategory =
            normalize(product.category);

        const productBrand =
            normalize(product.brand);


        const categoryMatch =
            filterState.categories.length === 0 ||
            filterState.categories.includes(productCategory);


        const brandMatch =
            filterState.brands.length === 0 ||
            filterState.brands.includes(productBrand);


        return categoryMatch && brandMatch;

    });

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
        `/product/${product.slug}.html`;


    card.setAttribute(
        "aria-label",
        `View ${product.name}`
    );


    card.style.animationDelay =
        `${index * 70}ms`;


    card.innerHTML = `

        <div class="product-image">

            <span class="product-badge">
                ${product.categoryName}
            </span>

            <img
                src="${product.image}"
                alt="${product.name} - ${product.brandName}"
                loading="lazy"
            >

        </div>


        <div class="product-info">

            <span class="product-brand">
                ${product.brandName}
            </span>


            <h3 class="product-name">
                ${product.name}
            </h3>


            <p class="product-description">
                ${product.description}
            </p>


            <div class="product-link">

                <span class="product-link-text">
                    View Product
                </span>

                <span class="product-arrow">
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


    productsGrid.hidden =
        count === 0;

}


/* =========================================================
   FILTER COUNTS
   ---------------------------------------------------------
   Shows how many products belong to each category/brand.
   ========================================================= */

function updateFilterCounts() {

    const categoryCounts = {};

    const brandCounts = {};


    products.forEach(product => {

        const category =
            normalize(product.category);

        const brand =
            normalize(product.brand);


        categoryCounts[category] =
            (categoryCounts[category] || 0) + 1;


        brandCounts[brand] =
            (brandCounts[brand] || 0) + 1;

    });


    document
        .querySelectorAll("[data-category-count]")
        .forEach(element => {

            const category =
                normalize(
                    element.dataset.categoryCount
                );


            element.textContent =
                categoryCounts[category] || 0;

        });


    document
        .querySelectorAll("[data-brand-count]")
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
            .filter(input => input.checked)
            .map(input => normalize(input.value));


    filterState.brands =
        Array.from(brandInputs)
            .filter(input => input.checked)
            .map(input => normalize(input.value));


    updateURL();


    renderProducts();

}


/* =========================================================
   UPDATE URL
   ---------------------------------------------------------
   Keeps filters shareable/bookmarkable.
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


    categoryInputs.forEach(
        input => {
            input.checked = false;
        }
    );


    brandInputs.forEach(
        input => {
            input.checked = false;
        }
    );


    updateURL();

    renderProducts();

}


/* =========================================================
   CATEGORY / BRAND EVENTS
   ========================================================= */

categoryInputs.forEach(input => {

    input.addEventListener(
        "change",
        updateFilterState
    );

});


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

if (mobileFilterToggle && productFilters) {

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
    .querySelectorAll("[data-filter-toggle]")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const group =
                    button.closest(".filter-group");


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
                    options.style.display === "none";


                options.style.display =
                    isHidden ? "" : "none";


                if (icon) {

                    icon.textContent =
                        isHidden ? "−" : "+";

                }

            }
        );

    });


/* =========================================================
   INITIALIZE
   ========================================================= */

readURLFilters();

syncCheckboxes();

renderProducts();


/* =========================================================
   OPTIONAL GLOBAL ACCESS
   ---------------------------------------------------------
   Useful later if product data needs to be reused.
   ========================================================= */

window.MAXX_PRODUCTS =
    products;