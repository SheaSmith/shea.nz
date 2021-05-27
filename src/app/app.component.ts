import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
  title = 'PersonalWebsite';

  ngAfterViewChecked() {
    // var elms = document.getElementsByTagName("*");
    // var n = elms.length;
    // for (var i = 0; i < n; i++) {
    //   elms[i]['style'].cursor = `url(/assets/cursors/${window.getComputedStyle(elms[i]).cursor}.png), ${window.getComputedStyle(elms[i]).cursor}`;
    // }
  }
}
