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

    if (window.screen.height >= 940) {
        mapPresentation.forEach((item, i) => {
            mapPresentation[i].setAttribute('height', '700');
        })
    }

    /*<----- Map dots hover ----->*/
    const mapDots = document.querySelectorAll('.map__dot'),
          mapItems = document.querySelectorAll('.map__item'),
          mapItemVisible = 'item_visible',
          mapDotArrowUp = 'dot_arrow-up';

    mapDots.forEach((item, i) => {
        mapDots[i].addEventListener('mouseenter', () => {
            [].forEach.call(mapItems, (item) => {
                item.classList.remove(mapItemVisible);
            });
            [].forEach.call(mapDots, (dot) => {
                dot.classList.remove(mapDotArrowUp);
            });

            mapItems[i].classList.add(mapItemVisible);
            mapDots[i].classList.add(mapDotArrowUp);
        })
    })
})