import { Component } from '@angular/core';
import {Router, RouterEvent} from "@angular/router";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  currentUrl: string | undefined;

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof RouterEvent) {
        this.currentUrl = event.url;
      }
    });
  }
}
