window.onscroll = function showHeader() {
    var header = document.querySelector('.main-header');
    if(window.pageYOffset > 200){
        header.classList.add('header_fixed');
    } else{
        header.classList.remove('header_fixed');
    }
}