import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 11, name: 'Captain America' },
      { id: 12, name: 'Thor' },
      { id: 13, name: 'Spider-Man' },
      { id: 14, name: 'Iron Man' },
      { id: 15, name: 'Black Widow' },
      { id: 16, name: 'Hulk' },
      { id: 17, name: 'Scarlet Witch' },
      { id: 18, name: 'Hawkeye' },
      { id: 19, name: 'Loki' },
      { id: 20, name: 'Black Panther' },
      { id: 21, name: 'Dr.Strange' },
      { id: 22, name: 'Ant-Man' }
  ];
  return {heroes};
  }

  getId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
