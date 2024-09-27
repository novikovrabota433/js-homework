const menuArea = document.querySelector("#main");
const menu1 = document.querySelector("#obj1");

        menuArea.addEventListener( "contextmenu", event => {
            event.preventDefault();
            menu1.style.top = `${event.clientY}px`;
            menu1.style.left = `${event.clientX}px`;
            menu1.classList.add("active");
        }, false);

        document.addEventListener("click", event => {
            if (event.button !== 2) {
                menu1.classList.remove("active");
                menu1.removeAttribute("pading")
            }
        }, false);

        menu1.addEventListener("click", event => {
            event.stopPropagation();
        }, false);


        ////////////////////////////////////////// 1


const menu2 = document.querySelector("#obj2");

        menuArea.addEventListener( "contextmenu", event => {
            event.preventDefault();
            menu2.style.top = `${event.clientY}px`;
            menu2.style.left = `${event.clientX}px`;
            menu2.classList.add("active");
        }, false);

        document.addEventListener("click", event => {
            if (event.button !== 2) {
                menu2.classList.remove("active");
                menu2.removeAttribute("pading")
            }
        }, false);

        menu2.addEventListener("click", event => {
            event.stopPropagation();
        }, false);


        ////////////////////////////////////////// 2


const menu3 = document.querySelector("#obj3");

        menuArea.addEventListener( "contextmenu", event => {
            event.preventDefault();
            menu3.style.top = `${event.clientY}px`;
            menu3.style.left = `${event.clientX}px`;
            menu3.classList.add("active");
        }, false);

        document.addEventListener("click", event => {
            if (event.button !== 2) {
                menu3.classList.remove("active");
                menu3.removeAttribute("pading")
            }
        }, false);

        menu3.addEventListener("click", event => {
            event.stopPropagation();
        }, false);


        ////////////////////////////////////////// 3



const menu4 = document.querySelector("#obj4");

        menuArea.addEventListener( "contextmenu", event => {
            event.preventDefault();
            menu4.style.top = `${event.clientY}px`;
            menu4.style.left = `${event.clientX}px`;
            menu4.classList.add("active");
        }, false);

        document.addEventListener("click", event => {
            if (event.button !== 2) {
                menu4.classList.remove("active");
                menu4.removeAttribute("pading")
            }
        }, false);

        menu4.addEventListener("click", event => {
            event.stopPropagation();
        }, false);


        ////////////////////////////////////////// 3










window.addEventListener('load', function () { //все в один блок, т.к. вам же надо получить #obj ?
    var O = document.getElementById('obj3'),
        X = menu1.style.left,
        Y = menu1.style.top,mouseX=0,mouseY=0; //надо  объявлять X/Y здесь, т.к они используются за пределами замыкания обработчика
    window.addEventListener('mousemove', function (ev) {
        ev = window.event || ev; //если window.event определен, то это IE<9, поддерживаем 
        X=ev.pageX;
        Y=ev.pageY;
    });

    function move() { //зачем аргумент ?
        var p = 'px';
        console.log(X,Y);
        O.style.left = X + p;
        O.style.top = Y + p;
        
        setTimeout(move, 1);
    }
    move();

});