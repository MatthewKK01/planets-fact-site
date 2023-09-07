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
  @Input() public HeaderPlanets: Planet[] | undefined;
  active: boolean = false;
  constructor(private router: Router, private route: ActivatedRoute) { }
  name: string = "";

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
  }

  getPlanetClass(planetName: string): string {
    switch (planetName) {
      case 'mercury':
        return 'bg-[#419EBB]';
      case 'venus':
        return 'bg-[#EDA249]';
      case 'earth':
        return 'bg-[#6D2ED5]';
      case 'mars':
        return 'bg-[#D14C32]';
      case 'jupiter':
        return 'bg-[#D83A34]';
      case 'saturn':
        return 'bg-[#CD5120]';
      case 'uranus':
        return 'bg-[#1EC1A2]';
      case 'neptune':
        return 'bg-[#2D68F0]';
      default:
        return 'bg-none';
    }
  }


  navigate(url: string) {
    this.router.navigate(['planets', url.toLowerCase()]);
    this.active = false;
  }
  openMenu() {
    this.active = !this.active
  }

}
