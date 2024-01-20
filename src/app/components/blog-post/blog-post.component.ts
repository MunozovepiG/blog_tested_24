import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  blogPost: any = {};

  constructor(private route: ActivatedRoute, private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const postId = params['id'];
      this.contentfulService.getBlogPostById(postId).subscribe(
        post => this.blogPost = post,
        error => console.error(`Error fetching blog post with ID ${postId}:`, error)
      );
    });
  }
}
