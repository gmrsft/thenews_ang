import { Component, OnInit } from '@angular/core';
import { ApiconsumService } from '../../apiconsum.service';

@Component({
  selector: 'app-apiconsum',
  templateUrl: './apiconsum.component.html',
  styleUrls: ['./apiconsum.component.css']
})
export class ApiconsumComponent implements OnInit {
  posts: any[] = [];

  constructor(private apiconsumService: ApiconsumService) {}

  ngOnInit(): void {
    this.apiconsumService.getPosts().subscribe(posts => {
      this.posts = posts;
    });
  }
}
