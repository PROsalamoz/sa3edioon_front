import { Component, OnInit } from '@angular/core';
import { HideAndDispalyService } from 'src/app/services/hide-and-dispaly.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 
  constructor(public carsoule: HideAndDispalyService) { }

  ngOnInit(): void {
  }

}
