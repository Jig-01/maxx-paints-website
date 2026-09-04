/* =========================================================
   MAXX PAINTS
   PRODUCT DETAIL PAGE
   ---------------------------------------------------------
   Uses the single product database from window.MAXX_PRODUCTS.
   SEO + Product Schema + Breadcrumb Schema included.
   ========================================================= */

const products = Array.isArray(window.MAXX_PRODUCTS)
    ? window.MAXX_PRODUCTS
    : [];


/* =========================================================
   CURRENT PRODUCT
   ========================================================= */

const pathname = window.location.pathname;

const filename = pathname
    .split("/")
    .pop()
    .replace(/\.html$/i, "")
    .toLowerCase();

const product = products.find(
    item =>
        String(item.slug || "")
            .toLowerCase() === filename
);


/* =========================================================
   HELPERS
   ========================================================= */

function escapeHTML(value = "") {
    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}


function getProductURL(slug) {
    return `/product/${slug}.html`;
}


function toArray(value) {

    if (Array.isArray(value)) {
        return value.filter(Boolean);
    }

    if (typeof value === "string" && value.trim()) {
        return value
            .split(",")
            .map(item => item.trim())
            .filter(Boolean);
    }

    return [];
}


function getBrand(product) {
    return (
        product.brandName ||
        product.brand ||
        "MAXX PAINTS"
    );
}


function getCategory(product) {
    return (
        product.categoryName ||
        product.category ||
        "Paint"
    );
}


/* =========================================================
   ERROR STATE
   ========================================================= */

function showError() {

    const detail =
        document.querySelector(".product-detail");

    const information =
        document.querySelector(".product-information");

    const related =
        document.querySelector(".related-products");

    const breadcrumb =
        document.querySelector(".product-breadcrumb");

    const error =
        document.querySelector("#productError");

    if (detail) {
        detail.hidden = true;
    }

    if (information) {
        information.hidden = true;
    }

    if (related) {
        related.hidden = true;
    }

    if (breadcrumb) {
        breadcrumb.hidden = true;
    }

    if (error) {
        error.hidden = false;
    }
}


/* =========================================================
   META HELPERS
   ========================================================= */

function setMetaName(name, content) {

    let tag =
        document.querySelector(
            `meta[name="${name}"]`
        );

    if (!tag) {

        tag = document.createElement("meta");

        tag.setAttribute(
            "name",
            name
        );

        document.head.appendChild(tag);
    }

    tag.setAttribute(
        "content",
        content
    );
}


function setMetaProperty(property, content) {

    let tag =
        document.querySelector(
            `meta[property="${property}"]`
        );

    if (!tag) {

        tag = document.createElement("meta");

        tag.setAttribute(
            "property",
            property
        );

        document.head.appendChild(tag);
    }

    tag.setAttribute(
        "content",
        content
    );
}


/* =========================================================
   SEO
   ========================================================= */

function updateSEO(product) {

    if (!product) {
        return;
    }

    const brand = getBrand(product);
    const category = getCategory(product);

    const title =
        `${product.name} | ${brand} | MAXX Paints`;

    const description =
        product.description ||
        `${product.name} by ${brand}. Explore product features, applications and surface recommendations from MAXX Paints.`;

    const canonicalURL =
        `https://www.maxxpaints.com/product/${product.slug}.html`;

    /* Title */

    document.title = title;


    /* Description */

    setMetaName(
        "description",
        description
    );


    /* Robots */

    setMetaName(
        "robots",
        "index, follow, max-image-preview:large"
    );


    /* Open Graph */

    setMetaProperty(
        "og:type",
        "product"
    );

    setMetaProperty(
        "og:title",
        title
    );

    setMetaProperty(
        "og:description",
        description
    );

    setMetaProperty(
        "og:url",
        canonicalURL
    );

    setMetaProperty(
        "og:site_name",
        "MAXX Paints"
    );


    /* OG Image */

    if (product.image) {

        setMetaProperty(
            "og:image",
            new URL(
                product.image,
                window.location.origin
            ).href
        );
    }


    /* Twitter */

    setMetaName(
        "twitter:card",
        "summary_large_image"
    );

    setMetaName(
        "twitter:title",
        title
    );

    setMetaName(
        "twitter:description",
        description
    );

    if (product.image) {

        setMetaName(
            "twitter:image",
            new URL(
                product.image,
                window.location.origin
            ).href
        );
    }


    /* Canonical */

    let canonical =
        document.querySelector(
            'link[rel="canonical"]'
        );

    if (!canonical) {

        canonical =
            document.createElement("link");

        canonical.rel = "canonical";

        document.head.appendChild(
            canonical
        );
    }

    canonical.href =
        canonicalURL;
}


/* =========================================================
   PRODUCT SCHEMA
   ========================================================= */

function addProductSchema(product) {

    if (!product) {
        return;
    }

    const existing =
        document.getElementById(
            "product-schema"
        );

    if (existing) {
        existing.remove();
    }

    const schema = {

        "@context":
            "https://schema.org",

        "@type":
            "Product",

        "name":
            product.name,

        "description":
            product.description || "",

        "image": product.image
            ? [
                new URL(
                    product.image,
                    window.location.origin
                ).href
            ]
            : [],

        "brand": {

            "@type":
                "Brand",

            "name":
                getBrand(product)
        },

        "category":
            getCategory(product),

        "url":
            `https://www.maxxpaints.com/product/${product.slug}.html`
    };


    const script =
        document.createElement("script");

    script.type =
        "application/ld+json";

    script.id =
        "product-schema";

    script.textContent =
        JSON.stringify(
            schema,
            null,
            2
        );

    document.head.appendChild(script);
}


/* =========================================================
   BREADCRUMB SCHEMA
   ========================================================= */

function addBreadcrumbSchema(product) {

    if (!product) {
        return;
    }

    const existing =
        document.getElementById(
            "breadcrumb-schema"
        );

    if (existing) {
        existing.remove();
    }

    const schema = {

        "@context":
            "https://schema.org",

        "@type":
            "BreadcrumbList",

        "itemListElement": [

            {
                "@type":
                    "ListItem",

                "position":
                    1,

                "name":
                    "Home",

                "item":
                    "https://www.maxxpaints.com/"
            },

            {
                "@type":
                    "ListItem",

                "position":
                    2,

                "name":
                    "Products",

                "item":
                    "https://www.maxxpaints.com/products.html"
            },

            {
                "@type":
                    "ListItem",

                "position":
                    3,

                "name":
                    product.name,

                "item":
                    `https://www.maxxpaints.com/product/${product.slug}.html`
            }
        ]
    };


    const script =
        document.createElement("script");

    script.type =
        "application/ld+json";

    script.id =
        "breadcrumb-schema";

    script.textContent =
        JSON.stringify(
            schema,
            null,
            2
        );

    document.head.appendChild(script);
}


/* =========================================================
   BASIC PRODUCT HERO
   ========================================================= */

function renderProduct(product) {

    if (!product) {

        showError();

        return;
    }


    const image =
        document.querySelector(
            "#productImage"
        );

    const brand =
        document.querySelector(
            "#productBrand"
        );

    const category =
        document.querySelector(
            "#productCategory"
        );

    const name =
        document.querySelector(
            "#productName"
        );

    const description =
        document.querySelector(
            "#productDescription"
        );

    const breadcrumb =
        document.querySelector(
            "#breadcrumbProduct"
        );


    /* Image */

    if (image) {

        image.src =
            product.image || "";

        image.alt =
            `${product.name} - ${getBrand(product)} | MAXX Paints`;

        image.loading =
            "eager";

        image.decoding =
            "async";
    }


    /* Brand */

    if (brand) {

        brand.textContent =
            getBrand(product);
    }


    /* Category */

    if (category) {

        category.textContent =
            getCategory(product);
    }


    /* Product name */

    if (name) {

        name.textContent =
            product.name;
    }


    /* Description */

    if (description) {

        description.textContent =
            product.description || "";
    }


    /* Breadcrumb */

    if (breadcrumb) {

        breadcrumb.textContent =
            product.name;
    }


    /* Remaining content */

    renderQuickInfo(product);

    renderProductInformation(product);

    renderRelatedProducts(product);

    updateSEO(product);

    addProductSchema(product);

    addBreadcrumbSchema(product);
}


/* =========================================================
   QUICK INFORMATION
   ========================================================= */

function renderQuickInfo(product) {

    const container =
        document.querySelector(
            "#productQuickInfo"
        );

    if (!container) {
        return;
    }


    const packs =
        toArray(
            product.packs ||
            product.packSizes
        );


    const information = [

        {
            label:
                "BRAND",

            value:
                getBrand(product)
        },

        {
            label:
                "CATEGORY",

            value:
                getCategory(product)
        },

        {
            label:
                "PACK SIZES",

            value:
                packs.length
                    ? packs.join(" · ")
                    : "Available on enquiry"
        }
    ];


    container.innerHTML =
        information
            .map(item => `

                <div class="product-info-item">

                    <span>
                        ${escapeHTML(item.label)}
                    </span>

                    <strong>
                        ${escapeHTML(item.value)}
                    </strong>

                </div>

            `)
            .join("");
}


/* =========================================================
   PRODUCT INFORMATION
   ---------------------------------------------------------
   Supports rich product data but safely falls back
   when optional fields are unavailable.
   ========================================================= */

function renderProductInformation(product) {

    const container =
        document.querySelector(
            "#productInfoGrid"
        );

    if (!container) {
        return;
    }


    const features =
        toArray(product.features);


    const applications =
        toArray(product.applications);


    const surfaces =
        toArray(product.surfaces);


    const steps =
        toArray(
            product.applicationSteps ||
            product.applicationProcess
        );


    const packs =
        toArray(
            product.packs ||
            product.packSizes
        );


    const panels = [];


    /* -----------------------------------------
       FEATURES
    ----------------------------------------- */

    if (features.length) {

        panels.push(`

            <article class="detail-panel detail-features">

                <div class="detail-panel-heading">

                    <span class="detail-number">
                        01
                    </span>

                    <div>

                        <small>
                            PRODUCT BENEFITS
                        </small>

                        <h3>
                            Key Features
                        </h3>

                    </div>

                </div>


                <div class="feature-list">

                    ${features.map(
                        (item, index) => `

                        <div class="feature-item">

                            <span>
                                ${String(index + 1).padStart(2, "0")}
                            </span>

                            <strong>
                                ${escapeHTML(item)}
                            </strong>

                        </div>

                    `).join("")}

                </div>

            </article>

        `);
    }


    /* -----------------------------------------
       APPLICATIONS
    ----------------------------------------- */

    if (applications.length) {

        panels.push(`

            <article class="detail-panel detail-applications">

                <div class="detail-panel-heading">

                    <span class="detail-number">
                        02
                    </span>

                    <div>

                        <small>
                            WHERE IT WORKS
                        </small>

                        <h3>
                            Ideal Applications
                        </h3>

                    </div>

                </div>


                <div class="tag-list">

                    ${applications.map(
                        item => `

                        <span>
                            ${escapeHTML(item)}
                        </span>

                    `).join("")}

                </div>

            </article>

        `);
    }


    /* -----------------------------------------
       SURFACES
    ----------------------------------------- */

    if (surfaces.length) {

        panels.push(`

            <article class="detail-panel detail-surfaces">

                <div class="detail-panel-heading">

                    <span class="detail-number">
                        03
                    </span>

                    <div>

                        <small>
                            SURFACE PREPARATION
                        </small>

                        <h3>
                            Recommended Surfaces
                        </h3>

                    </div>

                </div>


                <div class="surface-list">

                    ${surfaces.map(
                        item => `

                        <div>

                            <span>
                                ✓
                            </span>

                            ${escapeHTML(item)}

                        </div>

                    `).join("")}

                </div>

            </article>

        `);
    }


    /* -----------------------------------------
       PACK SIZES
    ----------------------------------------- */

    if (packs.length) {

        panels.push(`

            <article class="detail-panel detail-packs">

                <div class="detail-panel-heading">

                    <span class="detail-number">
                        04
                    </span>

                    <div>

                        <small>
                            AVAILABLE OPTIONS
                        </small>

                        <h3>
                            Pack Sizes
                        </h3>

                    </div>

                </div>


                <div class="pack-list">

                    ${packs.map(
                        item => `

                        <div class="pack-size">

                            <strong>
                                ${escapeHTML(item)}
                            </strong>

                        </div>

                    `).join("")}

                </div>

            </article>

        `);
    }


    /* -----------------------------------------
       APPLICATION PROCESS
    ----------------------------------------- */

    if (steps.length) {

        panels.push(`

            <article class="detail-panel detail-process">

                <div class="detail-panel-heading">

                    <span class="detail-number">
                        05
                    </span>

                    <div>

                        <small>
                            HOW TO USE
                        </small>

                        <h3>
                            Application Process
                        </h3>

                    </div>

                </div>


                <div class="application-process">

                    ${steps.map(
                        (step, index) => `

                        <div class="process-step">

                            <span>
                                ${String(index + 1).padStart(2, "0")}
                            </span>

                            <p>
                                ${escapeHTML(step)}
                            </p>

                        </div>

                    `).join("")}

                </div>

            </article>

        `);
    }


    /* -----------------------------------------
       PRODUCT OVERVIEW
    ----------------------------------------- */

    panels.push(`

        <article class="detail-panel detail-why">

            <div class="detail-panel-heading">

                <span class="detail-number">
                    ${String(panels.length + 1).padStart(2, "0")}
                </span>

                <div>

                    <small>
                        THE MAXX DIFFERENCE
                    </small>

                    <h3>
                        Why Choose ${escapeHTML(product.name)}?
                    </h3>

                </div>

            </div>


            <p>
                ${escapeHTML(
                    product.longDescription ||
                    product.description ||
                    `${product.name} is part of the MAXX Paints range, created for dependable surface finishing and practical everyday painting requirements.`
                )}
            </p>


            <a
                href="/contact.html"
                class="detail-link"
            >
                Talk to our team
                <span aria-hidden="true">→</span>
            </a>

        </article>

    `);


    container.innerHTML =
        panels.join("");


    /* -----------------------------------------
       UPDATE SECTION INTRO
    ----------------------------------------- */

    const heading =
        document.querySelector(
            ".product-information .section-heading"
        );

    if (heading) {

        const title =
            heading.querySelector("h2");

        const text =
            heading.querySelector("p");

        if (title) {
            title.textContent =
                "Everything You Need to Know";
        }

        if (text) {

            text.textContent =
                `${product.name} — features, applications, recommended surfaces and application guidance.`;
        }
    }
}


/* =========================================================
   RELATED PRODUCTS
   ---------------------------------------------------------
   Priority:
   1. Same category
   2. Same brand
   3. Other products
   ========================================================= */

function renderRelatedProducts(currentProduct) {

    const container =
        document.querySelector(
            "#relatedProducts"
        );

    if (!container) {
        return;
    }


    let related =
        products.filter(
            item =>
                item.slug !==
                    currentProduct.slug &&
                item.category ===
                    currentProduct.category
        );


    /* Same brand fallback */

    if (related.length < 3) {

        const sameBrand =
            products.filter(
                item =>
                    item.slug !==
                        currentProduct.slug &&

                    item.brand ===
                        currentProduct.brand &&

                    !related.some(
                        relatedProduct =>
                            relatedProduct.slug ===
                            item.slug
                    )
            );

        related = [
            ...related,
            ...sameBrand
        ];
    }


    /* Final fallback */

    if (related.length < 3) {

        const others =
            products.filter(
                item =>
                    item.slug !==
                        currentProduct.slug &&

                    !related.some(
                        relatedProduct =>
                            relatedProduct.slug ===
                            item.slug
                    )
            );

        related = [
            ...related,
            ...others
        ];
    }


    related =
        related.slice(0, 3);


    if (!related.length) {

        container.innerHTML = "";

        return;
    }


    container.innerHTML =
        related
            .map(product => `

                <article class="related-product-card">

                    <a
                        href="${getProductURL(product.slug)}"
                        aria-label="View ${escapeHTML(product.name)}"
                    >

                        <div class="related-product-image">

                            <img
                                src="${escapeHTML(product.image || "")}"
                                alt="${escapeHTML(product.name)} - ${escapeHTML(getBrand(product))} | MAXX Paints"
                                loading="lazy"
                                decoding="async"
                            >

                        </div>


                        <div class="related-product-content">

                            <span>
                                ${escapeHTML(
                                    getBrand(product)
                                )}
                            </span>


                            <h3>
                                ${escapeHTML(
                                    product.name
                                )}
                            </h3>


                            <p>
                                ${escapeHTML(
                                    product.tagline ||
                                    product.description ||
                                    ""
                                )}
                            </p>


                            <strong>

                                Explore Product

                                <span aria-hidden="true">
                                    →
                                </span>

                            </strong>

                        </div>

                    </a>

                </article>

            `)
            .join("");
}


/* =========================================================
   INITIALIZE
   ========================================================= */

if (product) {

    renderProduct(product);

} else {

    showError();

}