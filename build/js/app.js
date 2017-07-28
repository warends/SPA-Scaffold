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
                    console.log(this);
                });
            });
        });
    }

    //request with vanilla JS
    function getPage(method, url) {
        var pageString = './views/' + url + '.html';
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, pageString);
            xhr.onload = function () {
                if (this.status >= 200 && this.status < 300) {
                    resolve(xhr.response);
                } else {
                    reject({
                        status: this.status,
                        statusText: xhr.statusText
                    });
                }
            };
            xhr.onerror = function () {
                reject({
                    status: this.status,
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
        //console.log('dom loaded');
        var content = document.getElementById('content');

        router.getPage('GET', 'home').then(function (data) {
            content.innerHTML = data;
        }).catch(function (err) {
            console.log(err);
        });
    });
}();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHBlcnMuanMiLCJtb2RhbC5qcyIsInJvdXRlci5qcyIsImFwcC5qcyJdLCJuYW1lcyI6WyJoZWxwZXJzIiwicmVtb3ZlQ2xhc3MiLCJlbGVtcyIsImNsYXNzTmFtZXMiLCJpIiwibGVuZ3RoIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkQ2xhc3MiLCJlbGVtIiwiY2xhc3NOYW1lIiwiYWRkIiwibW9kYWwiLCJpbml0IiwiYnRuIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwib3Blbk1vZGFsIiwiY2xvc2UiLCJjbG9zZU1vZGFsIiwiZWxlbWVudCIsInRhcmdldCIsImdldEF0dHJpYnV0ZSIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJkaXNwbGF5IiwicGFyZW50TW9kYWwiLCJnZXRDbG9zZXN0Iiwic2VsZWN0b3IiLCJwYXJlbnROb2RlIiwibWF0Y2hlcyIsInJvdXRlciIsImxvYWRQYWdlIiwicGFnZSIsInBhZ2VTdHJpbmciLCIkIiwiZmFkZU91dCIsIl90aGlzIiwibG9hZCIsInJlcyIsInN0YXR1cyIsInhociIsImZhZGVJbiIsImNvbnNvbGUiLCJsb2ciLCJnZXRQYWdlIiwibWV0aG9kIiwidXJsIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJYTUxIdHRwUmVxdWVzdCIsIm9wZW4iLCJvbmxvYWQiLCJyZXNwb25zZSIsInN0YXR1c1RleHQiLCJvbmVycm9yIiwic2VuZCIsImFwcCIsImNvbnRlbnQiLCJ0aGVuIiwiZGF0YSIsImlubmVySFRNTCIsImNhdGNoIiwiZXJyIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFVBQVcsWUFBTTtBQUNqQixhQUFTQyxXQUFULENBQXNCQyxLQUF0QixFQUE2QkMsVUFBN0IsRUFBeUM7QUFDckMsYUFBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUlGLE1BQU1HLE1BQTFCLEVBQWtDRCxHQUFsQyxFQUF1QztBQUNuQ0Ysa0JB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RUFHT0UsS0FIUCxDQUdhLFVBQVNDLEdBQVQsRUFBYTtBQUNsQnJCLG9CQUFRQyxHQUFSLENBQVlvQixHQUFaO0FBQ0gsU0FMTDtBQU1ILEtBVkQ7QUFjSCxDQWZTLEVBQVYiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGhlbHBlcnMgPSAoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQ2xhc3MgKGVsZW1zLCBjbGFzc05hbWVzKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBlbGVtc1tpXS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBhZGRDbGFzcyAoZWxlbSwgY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBhZGRDbGFzczogYWRkQ2xhc3MsXHJcbiAgICAgICAgcmVtb3ZlQ2xhc3M6IHJlbW92ZUNsYXNzXHJcbiAgICB9XHJcbn0pKCk7XHJcbiIsInZhciBtb2RhbCA9IChmdW5jdGlvbigpe1xyXG4gICAgZnVuY3Rpb24gaW5pdCgpe1xyXG4gICAgICAgIHZhciBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubW9kYWwtb3BlbicpO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBidG4ubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBidG5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XHJcbiAgICAgICAgICAgICAgICBvcGVuTW9kYWwodGhpcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm1vZGFsLWJveC1jbG9zZScpO1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjbG9zZS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGNsb3NlW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgICAgICAgICAgY2xvc2VNb2RhbCh0aGlzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvcGVuTW9kYWwoZWxlbWVudCl7XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLXRhcmdldCcpLFxyXG4gICAgICAgICAgICBtb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldCk7XHJcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2xvc2VNb2RhbCh0YXJnZXQpe1xyXG4gICAgICAgIHZhciBwYXJlbnRNb2RhbCA9IGdldENsb3Nlc3QodGFyZ2V0LCAnLm1vZGFsLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIHBhcmVudE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgIHBhcmVudE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIGdldENsb3Nlc3QgPSBmdW5jdGlvbihlbGVtLCBzZWxlY3Rvcikge1xyXG4gICAgICAgIGZvciAoIDsgZWxlbSAmJiBlbGVtICE9PSBkb2N1bWVudDsgZWxlbSA9IGVsZW0ucGFyZW50Tm9kZSApIHtcclxuICAgICAgICAgICAgaWYgKCBlbGVtLm1hdGNoZXMoIHNlbGVjdG9yICkgKSByZXR1cm4gZWxlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBpbml0OiBpbml0LFxyXG4gICAgICAgIG9wZW5Nb2RhbDogb3Blbk1vZGFsLFxyXG4gICAgICAgIGNsb3NlTW9kYWw6IGNsb3NlTW9kYWxcclxuICAgIH1cclxufSkoKTtcclxuIiwiXHJcbnZhciByb3V0ZXIgPSAoKCkgPT4ge1xyXG5cclxuICAgIC8vbG9hZCBwYWdlIHZpYSBhamF4IHdpdGggSnF1ZXJ5LiBjaGVjayBmb3IgaHJlZiBhbmQgZmluZCBmaWxlIGFjY29yZGluZ2x5XHJcbiAgICBmdW5jdGlvbiBsb2FkUGFnZShwYWdlKSB7XHJcbiAgICAgICAgdmFyIHBhZ2VTdHJpbmcgPSAnLi92aWV3cy8nICsgcGFnZSArICcuaHRtbCc7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwYWdlU3RyaW5nKTtcclxuICAgICAgICAkKCcjY29udGVudCcpLmZhZGVPdXQoJzgwMCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgICQodGhpcykubG9hZChwYWdlU3RyaW5nLCBmdW5jdGlvbiAocmVzLCBzdGF0dXMsIHhocikge1xyXG4gICAgICAgICAgICAgICAgJChfdGhpcykuZmFkZUluKCc4MDAnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9yZXF1ZXN0IHdpdGggdmFuaWxsYSBKU1xyXG4gICAgZnVuY3Rpb24gZ2V0UGFnZShtZXRob2QsIHVybCkge1xyXG4gICAgICAgIHZhciBwYWdlU3RyaW5nID0gJy4vdmlld3MvJyArIHVybCArICcuaHRtbCc7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICB4aHIub3BlbihtZXRob2QsIHBhZ2VTdHJpbmcpO1xyXG4gICAgICAgICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXR1cyA+PSAyMDAgJiYgdGhpcy5zdGF0dXMgPCAzMDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeGhyLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dDogeGhyLnN0YXR1c1RleHRcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiB0aGlzLnN0YXR1cyxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0dXNUZXh0OiB4aHIuc3RhdHVzVGV4dFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy8gZ2V0UGFnZSgnR0VUJywgJ2h0dHA6Ly9leGFtcGxlLmNvbScpXHJcbiAgICAvLyAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgLy8gfSlcclxuICAgIC8vIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ1RoZXJlIHdhcyBhbiBlcnJvciAnICsgZXJyLnN0YXR1c1RleHQpO1xyXG4gICAgLy8gfSk7XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbG9hZFBhZ2U6IGxvYWRQYWdlLFxyXG4gICAgICAgIGdldFBhZ2U6IGdldFBhZ2VcclxuICAgIH1cclxuXHJcbn0pKCk7XHJcbiIsIlxyXG52YXIgYXBwID0gKCgpID0+IHtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnZG9tIGxvYWRlZCcpO1xyXG4gICAgICAgIHZhciBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKTtcclxuICAgICAgICBcclxuICAgICAgICByb3V0ZXIuZ2V0UGFnZSgnR0VUJywgJ2hvbWUnKVxyXG4gICAgICAgICAgICAudGhlbihmdW5jdGlvbihkYXRhKXtcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gZGF0YTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goZnVuY3Rpb24oZXJyKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSk7XHJcblxyXG5cclxuXHJcbn0pKCk7XHJcbiJdfQ==
