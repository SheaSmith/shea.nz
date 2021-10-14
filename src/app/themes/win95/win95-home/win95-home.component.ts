import { AfterViewChecked, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Home } from 'src/app/models/home';

declare var $: any;

@Component({
  selector: 'win95-home',
  templateUrl: './win95-home.component.html',
  styleUrls: ['./win95-home.component.scss']
})
export class Win95HomeComponent implements OnInit, AfterViewChecked {

  @ViewChild('lightbox')
  lightbox: ElementRef;

  @Input()
  home: Home;

  currentImage = '';

  constructor() { }

  ngOnInit(): void {
  }

  imageClick($event) {
    const target = $event.target || $event.srcElement || $event.currentTarget;
    this.currentImage = target.attributes.src.nodeValue;
    
    console.log(this.lightbox)
    $(this.lightbox.nativeElement).modal();
  }

  cursors = {
    'default': {
      url: '/assets/win95/cursors/arrow.png',
      coords: '2 4'
    },
    'e-resize': {
      url: '/assets/win95/cursors/e-resize.png',
      coords: '16 16'
    },
    'ew-resize': {
      url: '/assets/win95/cursors/e-resize.png',
      coords: '16 16'
    },
    'help': {
      url: '/assets/win95/cursors/help.png',
      coords: '2 4'
    },
    'move': {
      url: '/assets/win95/cursors/all-scroll.png',
      coords: '16 16'
    },
    'all-scroll': {
      url: '/assets/win95/cursors/all-scroll.png',
      coords: '16 16'
    },
    'context-menu': {
      url: '/assets/win95/cursors/arrow.png',
      coords: '2 4'
    },
    'n-resize': {
      url: '/assets/win95/cursors/n-resize.png',
      coords: '16 16'
    },
    'ne-resize': {
      url: '/assets/win95/cursors/ne-resize.png',
      coords: '16 16'
    },
    'nesw-resize': {
      url: '/assets/win95/cursors/ne-resize.png',
      coords: '16 16'
    },
    'ns-resize': {
      url: '/assets/win95/cursors/n-resize.png',
      coords: '16 16'
    },
    'nw-resize': {
      url: '/assets/win95/cursors/nw-resize.png',
      coords: '16 16'
    },
    'nwse-resize': {
      url: '/assets/win95/cursors/nw-resize.png',
      coords: '16 16'
    },
    'no-drop': {
      url: '/assets/win95/cursors/no-drop.png',
      coords: '16 16'
    },
    'not-allowed': {
      url: '/assets/win95/cursors/no-drop.png',
      coords: '16 16'
    },
    'pointer': {
      url: '/assets/win95/cursors/link.png',
      coords: '10 9'
    },
    'progress': {
      url: '/assets/win95/cursors/progress.png',
      coords: '2 4'
    },
    's-resize': {
      url: '/assets/win95/cursors/n-resize.png',
      coords: '16 16'
    },
    'se-resize': {
      url: '/assets/win95/cursors/nw-resize.png',
      coords: '16 16'
    },
    'sw-resize': {
      url: '/assets/win95/cursors/ne-resize.png',
      coords: '16 16'
    },
    'w-resize': {
      url: '/assets/win95/cursors/e-resize.png',
      coords: '16 16'
    },
    'wait': {
      url: '/assets/win95/cursors/busy.png',
      coords: '16 16'
    }
  }

  ngAfterViewChecked() {
    var elms = document.getElementsByTagName("*");
    var n = elms.length;
    for (var i = 0; i < n; i++) {
      if (this.cursors[window.getComputedStyle(elms[i]).cursor] != null) {
        const cursor = this.cursors[window.getComputedStyle(elms[i]).cursor];
        elms[i]['style'].cursor = `url(${cursor.url}) ${cursor.coords}, ${window.getComputedStyle(elms[i]).cursor}`;
      }
    }
  }

}
