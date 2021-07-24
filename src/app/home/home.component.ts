import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @ViewChild('lightbox')
  lightbox: ElementRef;

  currentImage = '';

  constructor() { }

  ngOnInit() {
  }

  imageClick($event) {
    const target = $event.target || $event.srcElement || $event.currentTarget;
    this.currentImage = target.attributes.src.nodeValue;
    
    console.log(this.lightbox)
    $(this.lightbox.nativeElement).modal();
  }

}
