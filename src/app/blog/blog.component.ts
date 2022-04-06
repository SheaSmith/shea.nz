import { Component, OnInit } from '@angular/core';
import { StyleManager } from '../services/theming.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

  loading = true;

  constructor() {
    const styleManager = new StyleManager();
    styleManager.setStyle('theme', 'blog.css').subscribe(() => this.loading = false);
  }

  ngOnInit(): void {
  }

}
