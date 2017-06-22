$(document).ready(function () {
    var currentUrl = window.location.href;
    var urlTokens = currentUrl.split('/');
    var n = urlTokens.length;
    var pageName = urlTokens[n-1];

    var prefix = '../';
    if(pageName === 'index.html')
        prefix = '';

    var content = '<div id="fool"> <h3><a target="_blank" href="https://www.linkedin.com/in/stefano-gelsomino/"><span>Site by</span> <span>Stefano Gelsomino</span> </a></h3> </div> <div id="follow"> <a target="_blank" href="https://www.linkedin.com/in/stefano-gelsomino/"> <img src="'+ prefix + 'img/linkedin.png"/> </a> </div> <div id="foor"> <h3>2017</h3> </div>';
    $('.footer').html(content);
});