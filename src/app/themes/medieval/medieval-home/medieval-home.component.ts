import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Home } from 'src/app/models/home';

export const pageFlippedAnimation = trigger('pageFlipped', [
  state('true', style({
    transform: 'rotateY(-180deg)',
    zIndex: '{{ positiveZIndex }}'
  }), { params: { positiveZIndex: 0 } }),
  state('false', style({
    transform: 'rotateY(0deg)',
    zIndex: '{{ negativeZIndex }}'
  }), { params: { negativeZIndex: 0 } }),
  transition('true => false', [
    animate('2s cubic-bezier(0.645, 0.045, 0.355, 1)', keyframes([
      style({
        transform: 'rotateY(-180deg)',
        zIndex: '{{ positiveZIndex }}'
      }),
      style({
        transform: 'rotateY(-90deg)',
        zIndex: '{{ negativeZIndex }}'
      }),
      style({
        transform: 'rotateY(0deg)',
        zIndex: '{{ negativeZIndex }}'
      })
    ]))
  ]),
  transition('false => true', [
    animate('2s cubic-bezier(0.645, 0.045, 0.355, 1)', keyframes([
      style({
        transform: 'rotateY(0deg)',
        zIndex: '{{ negativeZIndex }}'
      }),
      style({
        transform: 'rotateY(-90deg)',
        zIndex: '{{ negativeZIndex }}'
      }),
      style({
        transform: 'rotateY(-180deg)',
        zIndex: '{{ positiveZIndex }}'
      })
    ]))
  ]),
]);


// This is some hacky BS.
// Basically firefox seems to disregard the z-index when used in conjunction with preserve-3d with >7 elements.
// However this can be solved by using a translateZ, which breaks the visual effect
// Instead we'll create an invisible clickable element and that will capture click events
// This does mean the click target won't 100% align with the actual page, but should be close enough...
export const clickTargetFlip = trigger('clickTargetFlipped', [
  state('true', style({
    transform: 'rotateY(-180deg) translateZ({{ positiveZIndex}}px)',
    zIndex: '{{ positiveZIndex }}'
  }), { params: { positiveZIndex: 0 } }),
  state('false', style({
    transform: 'rotateY(0deg) translateZ({{ negativeZIndex}}px)',
    zIndex: '{{ negativeZIndex }}'
  }), { params: { negativeZIndex: 0 } }),
  transition('true => false', [
    animate('2s cubic-bezier(0.645, 0.045, 0.355, 1)', keyframes([
      style({
        transform: 'rotateY(-180deg) translateZ({{ positiveZIndex}}px)',
        zIndex: '{{ positiveZIndex }}'
      }),
      style({
        transform: 'rotateY(-90deg) translateZ({{ negativeZIndex}}px)',
        zIndex: '{{ negativeZIndex }}'
      }),
      style({
        transform: 'rotateY(0deg) translateZ({{ negativeZIndex}}px)',
        zIndex: '{{ negativeZIndex }}'
      })
    ]))
  ]),
  transition('false => true', [
    animate('2s cubic-bezier(0.645, 0.045, 0.355, 1)', keyframes([
      style({
        transform: 'rotateY(0deg) translateZ({{ negativeZIndex}}px)',
        zIndex: '{{ negativeZIndex }}'
      }),
      style({
        transform: 'rotateY(-90deg) translateZ({{ negativeZIndex}}px)',
        zIndex: '{{ negativeZIndex }}'
      }),
      style({
        transform: 'rotateY(-180deg) translateZ({{ positiveZIndex}}px)',
        zIndex: '{{ positiveZIndex }}'
      })
    ]))
  ]),
]);

@Component({
  selector: 'medieval-home',
  templateUrl: './medieval-home.component.html',
  styleUrls: ['./medieval-home.component.scss'],
  animations: [
    pageFlippedAnimation,
    clickTargetFlip
  ]
})
export class MedievalHomeComponent implements OnInit {

  @Input()
  home: Home;

  animating = false;

  constructor() { }

  ngOnInit(): void {
  }

  displayingIndexes: number[] = [];

  flipPage(index: number) {
    console.log(index, this.animating);
    // if (this.animating) {
    //   return;
    // }

    if (this.displayingIndexes.indexOf(index) == -1) {
      this.displayingIndexes.push(index);
    } else {
      this.displayingIndexes.splice(this.displayingIndexes.indexOf(index), 1);
    }
    this.animating = true;
  }

  shouldFlip(index: number) {
    return this.displayingIndexes.indexOf(index) != -1;
  }

}