import { Component, OnInit } from '@angular/core';
import { HeroForm } from './hero-form';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css',
              '../../../assets/forms.css'
  ]
})
export class HeroFormComponent {
  powers = [
  'Enhanced strength during nights with full moons',
  'Superhuman strength, speed, durability and longevity', 
  '"Spider-Sense", SensesWallcrawling, superhuman reflexes, speed', 
  'Genius Intelligence, money, powered exoskeleton', 
  'Master in the covert arts of espionage, infiltration, and subterfuge'];

  model = new HeroForm(22, 'Moon Knight', 'Enhanced strength during nights with full moons', 'Marc Spector');

  submitted = false;

  constructor() { }

  addNewHero() {
    this.model = new HeroForm(42, '', '');
  }

  onSubmit() {
    this.submitted = true;
  }
}
