$(document).ready(function() {

    var currentURL = window.location.href;
    var elenco = currentURL.split('/');
    var len = elenco.length;
    var pageName = elenco[len-1];

    var prefixDir = '../';
    var prefixArticle = '';
    if (pageName === 'index.html') {
        prefixDir = '';
        prefixArticle = 'articles/';
    }




        var content = '<h1><a href="' + prefixDir + 'index.html">Architektur und Entwicklung</a></h1>' +
                      '<nav><ul id="barb"><li><button id="b1b"><a href="'+ prefixArticle +'http.html">HTTP</a></button></li>' +
                                         '<li><button id="b2b"><a href="'+ prefixArticle +'ansible.html">Ansible</a></button></li>' +
                                         '<li><button id="b3b"><a href="'+ prefixArticle +'go.html">Go</a></button></li>' +
                                         '<li><button id="b4b"><a href="'+ prefixArticle +'spring.html">Spring</a></button></li>' +
                                         '<li><button id="b5b"><a href="'+ prefixArticle +'spring_data.html">Spring Data</a></button></li>' +
                                         '<li><button id="b9b"><a href="'+ prefixArticle +'spring_cloud.html">Spring Cloud</a></button></li>' +
                                         '<li><button id="b6b"><a href="'+ prefixArticle +'tdd.html">TDD</a></button></li>' +
                                         '<li><button id="b7b"><a href="'+ prefixArticle +'python.html">Python</a></button></li>' +
                                         '<li><button id="b8b"><a href="'+ prefixArticle +'jenkins.html">Jenkins</a></button></li></ul></nav>';

    $('#header').html(content);
});