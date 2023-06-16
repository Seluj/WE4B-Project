import { Component } from '@angular/core';
import {Router, RouterEvent} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WE4B-Project';
  currentUrl: string | undefined;

  constructor(private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof RouterEvent) {
        this.currentUrl = event.url;
      }
    });
  }
}
