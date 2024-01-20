import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogPosts: any[] = [];

  constructor(private contentfulService: ContentfulService) { }

// Inside BlogListComponent
ngOnInit(): void {
  this.contentfulService.getBlogPosts().subscribe(
    posts => this.blogPosts = posts,
    error => console.error('Error fetching blog posts in BlogListComponent:', error)
  );
}

}
