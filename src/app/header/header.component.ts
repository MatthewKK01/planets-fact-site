import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Planet } from 'src/models/Planets';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Input() public HeaderPlanets: any;
  constructor(private router: Router) { }

  navigate(url: any) {
    this.router.navigate(['planets', url]);
  }

}
