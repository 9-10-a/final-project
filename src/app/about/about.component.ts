import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  tiles = [
    {name: 'WELCOME TO SWEAT LOG',
    area: 'We are CodeFive, a group of proactive',
    content: 'and like-minded coders with a desire',
    loves: 'to impact the future of coding.',
    cols: 4, rows: 2, color: '#D9EDD9'},
    {name: 'DONNA CAMPBELL',
    area: 'Houston, Texas',
    content: 'Favourite exercise: Horseback Riding',
    loves: 'Loves: Fishing and playing with her grandchildren',
    cols: 2, rows: 2, color: '#FFCC3B'},
    {name: 'CLIFF MCCALL',
    area: 'Houston, Texas',
    content: 'Favourite exercise: Weight-training',
    loves: 'Loves: Watching action movies & coding',
    cols: 2, rows: 2, color: '#E8540C'},
    {name: 'REGINA CLIFFORD',
    area: 'Jeddah, Saudi Arabia',
    content: 'Favourite exercise: Swimming & pilates',
    loves: 'Loves: Playing the piano',
    cols: 4, rows: 2, color: '#FFCC3B'},
    {name: 'TABITHA',
    area: 'Houston, Texas',
    content: 'Favourite exercise: Running',
    loves: 'Loves: Going out to eat',
    cols: 2, rows: 2, color: '#E8540C'},
    {name: 'WILL HARRIS',
    area: 'Redding, California',
    content: 'Favourite exercise: Cycling',
    loves: 'Loves: Coding & watching action movies',
    cols: 2, rows: 2, color: '#FFCC3B'},
  ];


  constructor() {}

  ngOnInit() {}
}
