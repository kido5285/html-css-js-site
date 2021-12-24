document.querySelector('.hamburger').onclick = () => {
    let elem = document.querySelector('.hamburger');
    let nav = document.querySelector('.mob-nav-items')
    if(elem.classList.contains('hamburger-active')){
        elem.classList.remove('hamburger-active');
        nav.style.top = '-100%'
    } else {
        elem.classList.add('hamburger-active');
        nav.style.top = 'calc(0% + 73px)'
    }
}

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function() {    
    if(isScrolledIntoView($('#home_sec'))){
        $('#fir').css('display', 'block');
        $('#sec').css('display', 'none');
        $('#thir').css('display', 'none');
    } else if(isScrolledIntoView($('#about_sec'))){
        $('#fir').css('display', 'none');
        $('#sec').css('display', 'block');
        $('#thir').css('display', 'none');
    } else if(isScrolledIntoView($('#service_sec'))){
        $('#fir').css('display', 'none');
        $('#sec').css('display', 'none');
        $('#thir').css('display', 'block');
    } else {
        $('#fir').css('display', 'none');
        $('#sec').css('display', 'none');
        $('#thir').css('display', 'none');
    }
});