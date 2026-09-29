/* =========================================================
   MAXX PAINTS — NAVBAR
   Mobile menu + Products mega menu
   ========================================================= */

document.addEventListener("click", (event) => {

    /* =====================================================
       MOBILE MENU
       ===================================================== */

    const mobileButton =
        event.target.closest(".mobile-menu-button");

    if (mobileButton) {

        const navigation =
            document.querySelector(".desktop-navigation");

        if (!navigation) return;

        event.preventDefault();
        event.stopPropagation();

        const isOpen =
            navigation.classList.toggle("menu-active");

        mobileButton.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        mobileButton.setAttribute(
            "aria-label",
            isOpen ? "Close Menu" : "Open Menu"
        );

        return;
    }


    /* =====================================================
       PRODUCTS MEGA MENU
       ===================================================== */

    const productsTrigger =
        event.target.closest(".products-trigger");

    if (productsTrigger) {

        const productsMenu =
            productsTrigger.closest(".has-megamenu");

        if (!productsMenu) return;

        event.preventDefault();
        event.stopPropagation();

        const isOpen =
            productsMenu.classList.toggle("menu-open");

        productsTrigger.setAttribute(
            "aria-expanded",
            String(isOpen)
        );

        return;
    }


    /* =====================================================
       NAVIGATION LINK
       Close mobile menu after clicking a normal link
       ===================================================== */

    const navLink =
        event.target.closest(
            ".desktop-navigation a:not(.products-trigger)"
        );

    if (navLink) {

        const navigation =
            document.querySelector(".desktop-navigation");

        const mobileButton =
            document.querySelector(".mobile-menu-button");

        if (navigation) {
            navigation.classList.remove("menu-active");
        }

        if (mobileButton) {

            mobileButton.setAttribute(
                "aria-expanded",
                "false"
            );

            mobileButton.setAttribute(
                "aria-label",
                "Open Menu"
            );
        }

        return;
    }


    /* =====================================================
       CLICK OUTSIDE
       ===================================================== */

    const navigation =
        document.querySelector(".desktop-navigation");

    const mobileButtonElement =
        document.querySelector(".mobile-menu-button");

    if (
        navigation &&
        navigation.classList.contains("menu-active") &&
        !event.target.closest(".site-header")
    ) {

        navigation.classList.remove("menu-active");

        if (mobileButtonElement) {

            mobileButtonElement.setAttribute(
                "aria-expanded",
                "false"
            );

            mobileButtonElement.setAttribute(
                "aria-label",
                "Open Menu"
            );
        }
    }

});