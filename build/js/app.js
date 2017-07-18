"use strict";

var helpers = function () {
    function removeClass(elems, classNames) {
        for (var i = 0; i < elems.length; i++) {
            elems[i].classList.remove(classNames);
        }
    }

    function addClass(elem, className) {
        elem.classList.add(className);
    }

    return {
        addClass: addClass,
        removeClass: removeClass
    };
}();
'use strict';

var modal = function () {
    function init() {
        var btn = document.querySelectorAll('.modal-open');
        for (var i = 0; i < btn.length; i++) {
            btn[i].addEventListener('click', function (event) {
                openModal(this);
            });
        }

        var close = document.querySelectorAll('.modal-box-close');
        for (var i = 0; i < close.length; i++) {
            close[i].addEventListener('click', function (event) {
                closeModal(this);
            });
        };
    }

    function openModal(element) {
        var target = element.getAttribute('data-target'),
            modal = document.getElementById(target);
        modal.style.display = 'block';
        modal.classList.add('active');
    }

    function closeModal(target) {
        var parentModal = getClosest(target, '.modal-container');
        parentModal.classList.remove('active');
        parentModal.style.display = 'none';
    }

    var getClosest = function getClosest(elem, selector) {
        for (; elem && elem !== document; elem = elem.parentNode) {
            if (elem.matches(selector)) return elem;
        }
        return null;
    };

    return {
        init: init,
        openModal: openModal,
        closeModal: closeModal
    };
}();
'use strict';

var router = function () {

    //load page via ajax with Jquery. check for href and find file accordingly
    function loadPage(page) {
        var pageString = './views/' + page + '.html';
        //console.log(pageString);
        $('#content').fadeOut('800', function () {
            var _this = this;

            $(this).load(pageString, function (res, status, xhr) {
                $(_this).fadeIn('800', function () {
                    if (pageString == './views/crack-code.html') {
                        console.log('safe screen');
                        code.initBtns();
                    }
                });
            });
        });
    }

    //request with vanilla JS
    function getPage(method, url, done) {
        var _this2 = this;

        var pageString = './views/' + utl + '.html';
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, pageString);
            xhr.onload = function () {
                if (_this2.status >= 200 && _this2.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject({
                        status: _this2.status,
                        statusText: xhr.statusText
                    });
                }
            };
            xhr.onerror = function () {
                reject({
                    status: _this2.status,
                    statusText: xhr.statusText
                });
            };
            xhr.send();
        });
    }

    // getPage('GET', 'http://example.com')
    // .then((data) => {
    //     console.log(data);
    // })
    // .catch((err) => {
    //     console.log('There was an error ' + err.statusText);
    // });


    return {
        loadPage: loadPage,
        getPage: getPage
    };
}();
'use strict';

var app = function () {
    document.addEventListener('DOMContentLoaded', function () {
        console.log('dom loaded');
    });
}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMuanMiLCJtb2RhbC5qcyIsInJvdXRlci5qcyIsImFwcC5qcyJdLCJuYW1lcyI6WyJoZWxwZXJzIiwicmVtb3ZlQ2xhc3MiLCJlbGVtcyIsImNsYXNzTmFtZXMiLCJpIiwibGVuZ3RoIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkQ2xhc3MiLCJlbGVtIiwiY2xhc3NOYW1lIiwiYWRkIiwibW9kYWwiLCJpbml0IiwiYnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwib3Blbk1vZGFsIiwiY2xvc2UiLCJjbG9zZU1vZGFsIiwiZWxlbWVudCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5IiwicGFyZW50TW9kYWwiLCJnZXRDbG9zZXN0Iiwic2VsZWN0b3IiLCJwYXJlbnROb2RlIiwibWF0Y2hlcyIsInJvdXRlciIsImxvYWRQYWdlIiwicGFnZSIsInBhZ2VTdHJpbmciLCIkIiwiZmFkZU91dCIsIl90aGlzIiwibG9hZCIsInJlcyIsInN0YXR1cyIsInhociIsImZhZGVJbiIsImNvbnNvbGUiLCJsb2ciLCJjb2RlIiwiaW5pdEJ0bnMiLCJnZXRQYWdlIiwibWV0aG9kIiwidXJsIiwiZG9uZSIsInV0bCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiWE1MSHR0cFJlcXVlc3QiLCJvcGVuIiwib25sb2FkIiwicmVzcG9uc2UiLCJzdGF0dXNUZXh0Iiwib25lcnJvciIsInNlbmQiLCJhcHAiXSwibWFwcGluZ3MiOiI7O0FBQUEsSUFBSUEsVUFBVyxZQUFNO0FBQ2pCLGFBQVNDLFdBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCQyxVQUE3QixFQUF5QztBQUNyQyxhQUFLLElBQUlDLElBQUksQ0FBYixFQUFnQkEsSUFBSUYsTUFBTUcsTUFBMUIsRUFBa0NELEdBQWxDLEVBQXVDO0FBQ25DRixrQkFBTUUsQ0FBTixFQUFTRSxTQUFU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cnMgPSAoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MgKGVsZW1zLCBjbGFzc05hbWVzKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBlbGVtc1tpXS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRDbGFzcyAoZWxlbSwgY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhZGRDbGFzczogYWRkQ2xhc3MsXHJcbiAgICAgICAgcmVtb3ZlQ2xhc3M6IHJlbW92ZUNsYXNzXHJcbiAgICB9XHJcbn0pKCk7XHJcbiIsInZhciBtb2RhbCA9IChmdW5jdGlvbigpe1xyXG4gICAgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgICAgIHZhciBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtb3BlbicpO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBidG4ubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBidG5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgICAgICBvcGVuTW9kYWwodGhpcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLWJveC1jbG9zZScpO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjbG9zZS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGNsb3NlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICAgICAgY2xvc2VNb2RhbCh0aGlzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuTW9kYWwoZWxlbWVudCl7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpLFxyXG4gICAgICAgICAgICBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldCk7XHJcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VNb2RhbCh0YXJnZXQpe1xyXG4gICAgICAgIHZhciBwYXJlbnRNb2RhbCA9IGdldENsb3Nlc3QodGFyZ2V0LCAnLm1vZGFsLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHBhcmVudE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHBhcmVudE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGdldENsb3Nlc3QgPSBmdW5jdGlvbihlbGVtLCBzZWxlY3Rvcikge1xyXG4gICAgICAgIGZvciAoIDsgZWxlbSAmJiBlbGVtICE9PSBkb2N1bWVudDsgZWxlbSA9IGVsZW0ucGFyZW50Tm9kZSApIHtcclxuICAgICAgICAgICAgaWYgKCBlbGVtLm1hdGNoZXMoIHNlbGVjdG9yICkgKSByZXR1cm4gZWxlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBpbml0LFxyXG4gICAgICAgIG9wZW5Nb2RhbDogb3Blbk1vZGFsLFxyXG4gICAgICAgIGNsb3NlTW9kYWw6IGNsb3NlTW9kYWxcclxuICAgIH1cclxufSkoKTtcclxuIiwiXHJcbnZhciByb3V0ZXIgPSAoKCkgPT4ge1xyXG5cclxuICAgIC8vbG9hZCBwYWdlIHZpYSBhamF4IHdpdGggSnF1ZXJ5LiBjaGVjayBmb3IgaHJlZiBhbmQgZmluZCBmaWxlIGFjY29yZGluZ2x5XHJcbiAgICBmdW5jdGlvbiBsb2FkUGFnZShwYWdlKSB7XHJcbiAgICAgICAgdmFyIHBhZ2VTdHJpbmcgPSAnLi92aWV3cy8nICsgcGFnZSArICcuaHRtbCc7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwYWdlU3RyaW5nKTtcclxuICAgICAgICAkKCcjY29udGVudCcpLmZhZGVPdXQoJzgwMCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgICQodGhpcykubG9hZChwYWdlU3RyaW5nLCBmdW5jdGlvbiAocmVzLCBzdGF0dXMsIHhocikge1xyXG4gICAgICAgICAgICAgICAgJChfdGhpcykuZmFkZUluKCc4MDAnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhZ2VTdHJpbmcgPT0gJy4vdmlld3MvY3JhY2stY29kZS5odG1sJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2FmZSBzY3JlZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZS5pbml0QnRucygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL3JlcXVlc3Qgd2l0aCB2YW5pbGxhIEpTXHJcbiAgICBmdW5jdGlvbiBnZXRQYWdlKG1ldGhvZCwgdXJsLCBkb25lKSB7XHJcbiAgICAgICAgdmFyIHBhZ2VTdHJpbmcgPSAnLi92aWV3cy8nICsgdXRsICsgJy5odG1sJztcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHhoci5vcGVuKG1ldGhvZCwgcGFnZVN0cmluZyk7XHJcbiAgICAgICAgICAgIHhoci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeGhyLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogdGhpcy5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8vIGdldFBhZ2UoJ0dFVCcsICdodHRwOi8vZXhhbXBsZS5jb20nKVxyXG4gICAgLy8gLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgIC8vIH0pXHJcbiAgICAvLyAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdUaGVyZSB3YXMgYW4gZXJyb3IgJyArIGVyci5zdGF0dXNUZXh0KTtcclxuICAgIC8vIH0pO1xyXG5cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxvYWRQYWdlOiBsb2FkUGFnZSxcclxuICAgICAgICBnZXRQYWdlOiBnZXRQYWdlXHJcbiAgICB9XHJcblxyXG59KSgpO1xyXG4iLCJcclxudmFyIGFwcCA9ICgoKSA9PiB7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdkb20gbG9hZGVkJyk7XHJcbiAgICB9KTtcclxuXHJcblxyXG59KSgpO1xyXG4iXX0=
