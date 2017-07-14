'use strict'
var DEPLOY_BASE_URL = 'http://technotes.getforge.io/'; 
$(document).ready(function () {

    var currentURL = window.location.href;
    var elements = currentURL.split('/');
    var n = elements.length;
    var pageName = elements[n-1];

    var prefixDir = '../';
    var prefixArticle = '';
    if (pageName === 'index.html' || currentURL === DEPLOY_BASE_URL) {
        console.log('if statement was executed...');
        prefixDir = '';
        prefixArticle = 'articles/';
    }

    console.log('>>> prefixDir='+prefixDir+" and prefixArticle="+prefixArticle+" current pageName="+pageName);
    
        var headerContent = '<h1><a href="' + prefixDir + 'index.html">Technotes</a></h1>' +
                      '<nav><ul id="barb"><li><button id="b1b"><a href="'+ prefixArticle +'http.html">HTTP</a></button></li>' +
                                         '<li><button id="b2b"><a href="'+ prefixArticle +'ansible.html">Ansible</a></button></li>' +
                                         '<li><button id="b3b"><a href="'+ prefixArticle +'go.html">Go</a></button></li>' +
                                         '<li><button id="b4b"><a href="'+ prefixArticle +'spring.html">Spring</a></button></li>' +
                                         '<li><button id="b5b"><a href="'+ prefixArticle +'spring_data.html">Spring Data</a></button></li>' +
                                         '<li><button id="b9b"><a href="'+ prefixArticle +'spring_cloud.html">Spring Cloud</a></button></li>' +
                                         '<li><button id="b6b"><a href="'+ prefixArticle +'tdd.html">TDD</a></button></li>' +
                                         '<li><button id="b7b"><a href="'+ prefixArticle +'python.html">Python</a></button></li>' +
                                         '<li><button id="b8b"><a href="'+ prefixArticle +'jenkins.html">Jenkins</a></button></li></ul></nav>';

    $('#header').html(headerContent);

    var linkedinIcon = prefixDir + 'img/linkedin.png';

    var footerContent = '<div id="fool"> <h3><a target="_blank" href="https://www.linkedin.com/in/stefano-gelsomino/"><span>Site by</span> <span>Stefano Gelsomino</span> </a></h3>' +
                        ' </div> <div id="follow"> <a target="_blank" href="https://www.linkedin.com/in/stefano-gelsomino/"> <img src="%placeholder%"/> </a> </div> ' +
                        '<div id="foor"> <h3>2017</h3> </div>';

    footerContent = footerContent.replace('%placeholder%', linkedinIcon);

    $('.footer').html(footerContent);
});

/* DROP-DOWN-MENU */

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

/***********************************************************************************************/