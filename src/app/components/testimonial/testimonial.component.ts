import { Component, OnInit } from '@angular/core';
import { TestiHideService } from 'src/app/services/testi-hide.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {

  constructor(public test: TestiHideService) { }

  ngOnInit(): void {
  }

}
