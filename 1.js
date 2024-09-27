const menuArea = document.querySelector(".right-click-area");
        const menu = document.querySelector(".right-click-menu");

        menuArea.addEventListener( "contextmenu", event => {
            event.preventDefault();
            menu.style.top = `${event.clientY}px`;
            menu.style.left = `${event.clientX}px`;
            menu.classList.add("active");
            if (`${event.clientX}` >= 1200) {
                menu.style.cssText = "pading: 0"; 
            }
            if (`${event.clientY}` >= 700) {
                menu.style.cssText = "pading: 0"; 
            }
        }, false);

        document.addEventListener("click", event => {
            if (event.button !== 2) {
                menu.classList.remove("active");
                menu.removeAttribute("pading")
            }
        }, false);

        menu.addEventListener("click", event => {
            event.stopPropagation();
        }, false);