import { AfterViewInit, Component, OnInit } from '@angular/core';

declare var $;

@Component({
  selector: 'app-bootstrap-components',
  templateUrl: './bootstrap-components.component.html',
  styleUrls: ['./bootstrap-components.component.scss']
})
export class BootstrapComponentsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
    
  }

  ngAfterViewInit() {
    $(function () {
      $('.example-popover').popover({
        container: 'body'
      })
    })

    $(function () {
      $('[data-toggle="tooltip"]').tooltip()
    })

    // var elms = document.getElementsByTagName("*");
    // var n = elms.length;
    // for(var i = 0; i < n; i ++) {
    //     if(window.getComputedStyle(elms[i]).cursor == "pointer") {
    //       elms[i]['style'].cursor = "url(/assets/cursors/link.cur), auto";
    //     }
    // }
  }

}
