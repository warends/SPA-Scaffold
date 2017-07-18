
var router = (() => {

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
        var pageString = './views/' + utl + '.html';
        return new Promise((resolve, reject) => {
            var xhr = new XMLHttpRequest();
            xhr.open(method, pageString);
            xhr.onload = () => {
                if(this.status >= 200 && this.status < 300){
                    resolve(xhr.response);
                } else {
                    reject({
                        status: this.status,
                        statusText: xhr.statusText
                    });
                }
            };
            xhr.onerror = () => {
                reject({
                    status: this.status,
                    statusText: xhr.statusText
                });
            }
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
    }

})();
