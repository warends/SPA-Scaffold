var helpers = (() => {
    function removeClass (elems, classNames) {
        for (var i = 0; i < elems.length; i++) {
            elems[i].classList.remove(classNames);
        }
    }

    function addClass (elem, className) {
        elem.classList.add(className);
    }

    return {
        addClass: addClass,
        removeClass: removeClass
    }
})();
