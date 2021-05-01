import { HideAndDispalyService } from 'src/app/services/hide-and-dispaly.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
 
  constructor(public carousel:HideAndDispalyService) { }

  ngOnInit(): void {
  }

}
