
var app = (() => {
    document.addEventListener('DOMContentLoaded', () => {
        //console.log('dom loaded');
        var content = document.getElementById('content');
        
        router.getPage('GET', 'home')
            .then(function(data){
                content.innerHTML = data;
            }).catch(function(err){
                console.log(err);
            });
    });



})();
