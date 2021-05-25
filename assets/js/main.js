'use strict';

window.addEventListener('DOMContentLoaded', () => {
    /*<----- Presentation slider ----->*/
    const presentationSlider = tns({
        container: '.presentation__content-slider',
        navContainer: '.presentation__content-pagination',
        controlsContainer: '.presentation__content-controls'
    })

    /*<----- Presentation sidebar ----->*/
    const arrowsDown = document.querySelector('.presentation .arrows-down');
    let sidebarBtnClicks = 0;

    document.querySelector('.presentation__sidebar-btn').addEventListener('click', () => {
        document.querySelector('.presentation__sidebar').classList.toggle('sidebar_active');
        arrowsDown.classList.toggle('arrows_hidden');
        sidebarBtnClicks++;
        arrowsDown.classList.toggle('arrows_show-anim', sidebarBtnClicks % 2 === 0);
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
          mapDotArrowUp = 'dot_arrow-up',
          mapItemVisible = 'item_visible';

    mapDots.forEach((item, i) => {
        mapDots[i].addEventListener('mouseenter', () => {
            [].forEach.call(mapDots, (dot) => {
                dot.classList.remove(mapDotArrowUp);
            });
            [].forEach.call(mapItems, (item) => {
                item.classList.remove(mapItemVisible);
            });

            mapDots[i].classList.add(mapDotArrowUp);
            mapItems[i].classList.add(mapItemVisible);
        })
    })

    /*<----- Map elements position ----->*/
    const mapBlock = document.querySelector('.map__block');

    if (mapBlock.clientWidth <= 990) {
        mapDots.forEach((item, i) => {
            if (mapDots[i].classList.contains('map__dot')) {
                mapDots[3].setAttribute('data-top', '1.34');
                mapDots[4].setAttribute('data-top', '2.7');
                mapDots[5].setAttribute('data-top', '1.32');
                mapDots[7].setAttribute('data-top', '1.36');
            }
        })

        mapItems.forEach((item, i) => {
            if (mapItems[i].classList.contains('map__item')) {
                mapItems[1].setAttribute('data-left', '25');
                mapItems[2].setAttribute('data-left', '6.85');
                mapItems[3].setAttribute('data-top', '2.82');
                mapItems[3].setAttribute('data-left', '4.83');
                mapItems[4].setAttribute('data-left', '3.3');
                mapItems[5].setAttribute('data-top', '2.7');
                mapItems[5].setAttribute('data-left', '2.355');
                mapItems[6].setAttribute('data-left', '1.905');
                mapItems[7].setAttribute('data-top', '2.89');
                mapItems[7].setAttribute('data-left', '1.455');
            }
        })
    }

    if (mapBlock.clientWidth <= 768) {
        mapItems.forEach((item, i) => {
            mapItems[i].removeAttribute('data-top');
            mapItems[i].removeAttribute('data-left');
            for (let n = 1; n < 9; n++) mapItems[i].classList.remove(`item-${n}`);
        })
    }

    function calcMapElementsPosition(element) {
        element.forEach((elem, i) => {
            element[i].style.top = (mapBlock.offsetHeight / elem.dataset.top).toFixed(0) + 'px';

            if (element[i].hasAttribute('data-right')) {
                element[i].style.right = (mapBlock.offsetWidth / elem.dataset.right).toFixed(0) + 'px';
            } else {
                element[i].style.left = (mapBlock.offsetWidth / elem.dataset.left).toFixed(0) + 'px';
            }
        })
    }

    calcMapElementsPosition(mapDots);
    calcMapElementsPosition(mapItems);

    /*<----- Map item conditions ----->*/
    mapItems.forEach((item, i) => {
        mapItems[i].addEventListener('click', () => {
            mapItems[i].querySelector('.map__conditions').classList.toggle('conditions_visible');
            mapItems[i].querySelector('.map .arrows-down').classList.toggle('arrows_hidden');
        })
    })
})