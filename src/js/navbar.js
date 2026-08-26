const mobileButton =
    document.querySelector(".mobile-menu-button");

const navigation =
    document.querySelector(".desktop-navigation");

const productsTrigger =
    document.querySelector(".products-trigger");

const productsMenu =
    document.querySelector(".has-megamenu");


/* Mobile navigation */

mobileButton?.addEventListener("click", () => {

    const open =
        navigation.classList.toggle("menu-active");

    mobileButton.setAttribute(
        "aria-expanded",
        String(open)
    );

});


/* Products mega menu */

productsTrigger?.addEventListener("click", (event) => {

    event.preventDefault();

    const open =
        productsMenu.classList.toggle("menu-open");

    productsTrigger.setAttribute(
        "aria-expanded",
        String(open)
    );

});


/* Close mobile menu after navigation */

document.querySelectorAll(".nav-link:not(.products-trigger)")
    .forEach(link => {

        link.addEventListener("click", () => {

            navigation.classList.remove("menu-active");

            mobileButton?.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });