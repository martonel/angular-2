import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { observable, Observable } from 'rxjs';
import { Hero } from './model/hero';
import { FootballService } from './service/football.service';
import { HeroService } from './service/hero.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myFirstAngularApp';
  myHero: Hero;
  listObservable: Observable<any>;

  constructor(
    private fService: FootballService,
    private hService: HeroService,
    public router: Router
  ){

    this.listObservable = hService.getAll();
    /*
    this.hService.getAll().forEach(value =>{
      console.log("All hero: ",value)
    });
    this.hService.getOne(1).forEach(value =>{
      console.log("First hero: ",value)
    });

    this.hService.add({id:10,name:"Jack",address:"BP",superpower:"biking"})
      .forEach(value =>{
      console.log("Added hero: ",value)
    });
    
    this.hService.update({id:1,name:"Lucy",address:"BP",superpower:"biking"}).forEach(value =>{
      console.log("Updated hero: ",value)
    });

    this.hService.remove(2).forEach(value =>{
      console.log("Removed hero: ",value)
    });*/
  

  }


  setHero(hero:Hero):void{
    this.myHero=hero;
  }

}


