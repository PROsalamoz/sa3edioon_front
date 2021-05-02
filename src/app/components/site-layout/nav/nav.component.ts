import { Component, OnInit } from '@angular/core';
import { HideHowComponentsService } from 'src/app/services/hide-how-components.service';
import { HideNavbarService } from 'src/app/services/hide-navbar.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 
  constructor(public slider:HideHowComponentsService, public nav:HideNavbarService) { }

  ngOnInit(): void {
  }

}
