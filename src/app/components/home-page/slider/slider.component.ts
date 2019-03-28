import { Component, OnInit} from '@angular/core';

declare var Swiper: any;
@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
    constructor() { 
        
    }
   
    
    ngOnInit() {
        var swiper_badge_sub = new Swiper('.home_slide', {
            slidesPerView: 1,
            speed: 500,
            // effect:'fade',
            spaceBetween: 10,
    //        simulateTouch:false,
            pagination: '.swiper-pagination',
            autoplay: 5000,
            paginationClickable: true,
            // nextButton: '.swiper-button-next',
            // prevButton: '.swiper-button-prev'
        });
    };

}
