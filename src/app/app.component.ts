import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent  {
    title = 'fram-shop';
    constructor(
        private titleService: Title,
        private router:ActivatedRoute, 
        public currentRouter:Router
      ) {
        setTimeout(()=>{
            this.titleService.setTitle(this.router.snapshot.children[0].data['title'])
        }, 0)
        currentRouter.events.subscribe( (event) => {
            if (event instanceof NavigationEnd) {
                setTimeout(()=>{
                    this.titleService.setTitle(this.router.snapshot.children[0].data['title'])
                }, 0)
            }
        })

    }

}
