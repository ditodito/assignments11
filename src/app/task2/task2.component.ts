import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.sass']
})
export class Task2Component implements OnInit {

  elements: number[][] = [
    [
      1,1,1,1,1
    ],
    [
      1,1,1,1,1
    ],[
      1,1,1,1,1
    ],
    [
      1,1,1,1,1
    ],[
      1,1,1,1,1
    ]
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
