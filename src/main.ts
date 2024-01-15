import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { BehaviorSubject } from 'rxjs';
import 'zone.js';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{ name }}!</h1>
    <div *ngIf="donuts.length; then showDonuts; else nothing">
      This is always ignored.
      </div>
      
      <ng-template #showDonuts>
      We have donuts!
      </ng-template>
      
      <ng-template #nothing>
      No donuts here.
      </ng-template>
  `,
})
export class App implements OnInit {

  name = 'Angular';
  donuts!: any[];
  private _mode$: BehaviorSubject<'determinate' | 'indeterminate'> = new BehaviorSubject<'determinate' | 'indeterminate'>('indeterminate');


  ngOnInit(): void {
    this.donuts = [{ name: 'Glazed Fudge', price: 119 }];
    this._mode$.subscribe(val=>console.log(val));
    this._mode$.next('determinate')
    this._mode$.subscribe(val=>console.log(val));


  }
}

bootstrapApplication(App);

