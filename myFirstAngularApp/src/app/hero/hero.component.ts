import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { observable,Observable } from 'rxjs';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';



@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit{
  heroList: Observable<any>;
  constructor(
    public hService: HeroService,
    public router: Router) { 

    this.heroList = hService.getAll();
  }
  ngOnInit(): void {
  }

  jumpToHero(hero:Hero): void{
    this.router.navigateByUrl(`/hero/${hero.id}`);
  }

}
