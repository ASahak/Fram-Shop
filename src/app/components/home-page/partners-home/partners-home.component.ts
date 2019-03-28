import { Component, OnInit } from '@angular/core';
declare var Swiper: any;
@Component({
    selector: 'app-partners-home',
    templateUrl: './partners-home.component.html',
    styleUrls: ['./partners-home.component.scss']
})
export class PartnersHomeComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        var swiper_rev = new Swiper('.swiper_partners_home', {
            slidesPerView: 8,
            autoplay: 1000,
            speed: 1500,
            autoplayDisableOnInteraction: false,
            paginationClickable: true,
            spaceBetween: 8,
            breakpoints: {
                480: {
                    slidesPerView: 2
                },
                767: {
                    slidesPerView: 5
                },
                991: {
                    slidesPerView: 6
                }
            },
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev'


        });

    }

}
