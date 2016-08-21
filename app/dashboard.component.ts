import { Component, OnInit } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: 'app/dashboard.component.html'
})

export class DashboardComponent implements OnInit{ 
    heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    gotoDetail(hero: Hero): void { /* not implemented yet */}
}
