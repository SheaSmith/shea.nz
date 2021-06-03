import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
  title = 'PersonalWebsite';

  cursors = {
    'default': {
      url: '/assets/cursors/arrow.png',
      coords: '2 4'
    },
    'e-resize': {
      url: '/assets/cursors/e-resize.png',
      coords: '16 16'
    },
    'ew-resize': {
      url: '/assets/cursors/e-resize.png',
      coords: '16 16'
    },
    'help': {
      url: '/assets/cursors/help.png',
      coords: '2 4'
    },
    'move': {
      url: '/assets/cursors/all-scroll.png',
      coords: '16 16'
    },
    'all-scroll': {
      url: '/assets/cursors/all-scroll.png',
      coords: '16 16'
    },
    'context-menu': {
      url: '/assets/cursors/arrow.png',
      coords: '2 4'
    },
    'n-resize': {
      url: '/assets/cursors/n-resize.png',
      coords: '16 16'
    },
    'ne-resize': {
      url: '/assets/cursors/ne-resize.png',
      coords: '16 16'
    },
    'nesw-resize': {
      url: '/assets/cursors/ne-resize.png',
      coords: '16 16'
    },
    'ns-resize': {
      url: '/assets/cursors/n-resize.png',
      coords: '16 16'
    },
    'nw-resize': {
      url: '/assets/cursors/nw-resize.png',
      coords: '16 16'
    },
    'nwse-resize': {
      url: '/assets/cursors/nw-resize.png',
      coords: '16 16'
    },
    'no-drop': {
      url: '/assets/cursors/no-drop.png',
      coords: '16 16'
    },
    'not-allowed': {
      url: '/assets/cursors/no-drop.png',
      coords: '16 16'
    },
    'pointer': {
      url: '/assets/cursors/link.png',
      coords: '10 9'
    },
    'progress': {
      url: '/assets/cursors/progress.png',
      coords: '2 4'
    },
    's-resize': {
      url: '/assets/cursors/n-resize.png',
      coords: '16 16'
    },
    'se-resize': {
      url: '/assets/cursors/nw-resize.png',
      coords: '16 16'
    },
    'sw-resize': {
      url: '/assets/cursors/ne-resize.png',
      coords: '16 16'
    },
    'w-resize': {
      url: '/assets/cursors/e-resize.png',
      coords: '16 16'
    },
    'wait': {
      url: '/assets/cursors/busy.png',
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
