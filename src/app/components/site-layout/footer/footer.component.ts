import { Component, OnInit } from '@angular/core';
import { HideFooterService } from 'src/app/services/hide-footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public footer:HideFooterService) { }

  ngOnInit(): void {
  }

}
