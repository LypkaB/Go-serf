window.addEventListener('DOMContentLoaded', () => {
    /*<----- Presentation slider ----->*/
    const presentationSlider = tns({
        container: '.presentation__content-slider',
        navContainer: '.presentation__content-pagination',
        controlsContainer: '.presentation__content-controls'
    })

    /*<----- Presentation sidebar ----->*/
    const arrowsPresentation = document.querySelector('.presentation__arrows');
    let sidebarBtnClicks = 0;

    document.querySelector('.presentation__sidebar-btn').addEventListener('click', () => {
        document.querySelector('.presentation__sidebar').classList.toggle('sidebar_active');
        arrowsPresentation.classList.toggle('arrows_hidden');
        sidebarBtnClicks++;
        arrowsPresentation.classList.toggle('arrows_show-anim', sidebarBtnClicks % 2 === 0);
    })

    /*<----- Adaptive for slider map ----->*/
    const mapPresentation = document.querySelectorAll('.presentation__content-map svg');

    if (document.querySelector('body').clientHeight >= 940) {
        mapPresentation.forEach((item, i) => {
            mapPresentation[i].setAttribute('height', '700');
        })
    }
})