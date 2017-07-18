var modal = (function(){
    function init(){
        var btn = document.querySelectorAll('.modal-open');
        for(var i = 0; i < btn.length; i++){
            btn[i].addEventListener('click', function(event){
                openModal(this);
            });
        }

        var close = document.querySelectorAll('.modal-box-close');
        for(var i = 0; i < close.length; i++){
            close[i].addEventListener('click', function(event){
                closeModal(this);
            });
        };
    }

    function openModal(element){
        var target = element.getAttribute('data-target'),
            modal = document.getElementById(target);
        modal.style.display = 'block';
        modal.classList.add('active');
    }

    function closeModal(target){
        var parentModal = getClosest(target, '.modal-container');
        parentModal.classList.remove('active');
        parentModal.style.display = 'none';
    }

    var getClosest = function(elem, selector) {
        for ( ; elem && elem !== document; elem = elem.parentNode ) {
            if ( elem.matches( selector ) ) return elem;
        }
        return null;
    }

    return {
        init: init,
        openModal: openModal,
        closeModal: closeModal
    }
})();
