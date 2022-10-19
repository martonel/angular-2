import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Hero } from '../model/hero';
import { HeroService } from '../service/hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero:Hero;
  constructor(
      private ar:ActivatedRoute,
      private hService:HeroService
    ) {
    this.ar.params.subscribe(param =>{
      this.hService.getOne(param['id']).forEach(hero => {
        this.hero = hero;
      });
    });
   }


  ngOnInit(): void {
  }

}
