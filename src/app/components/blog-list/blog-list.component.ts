import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogPosts: any[] = [];

  constructor(private contentfulService: ContentfulService) {}

  ngOnInit(): void {
    this.contentfulService.getBlogPosts().subscribe(
      posts => {
        this.blogPosts = posts;

        // Fetch assets
        const assetObservables = this.blogPosts
        .filter(post => post.fields.thumbnail && post.fields.thumbnail.sys.id)
        .map(() => this.contentfulService.getAssets());

        forkJoin(assetObservables).subscribe(
          assets => {
            // Link assets to blog posts
            this.blogPosts.forEach((post, index) => {
              if (post.fields.thumbnail && post.fields.thumbnail.sys.id) {
                const asset = assets[index][0];
                post.fields.thumbnailUrl = 'https:' + asset.fields.file.url;
              }
            });
          },
          error => console.error('Error fetching assets in BlogListComponent:', error)
        );
      },
      error => console.error('Error fetching blog posts in BlogListComponent:', error)
    );
  }
}
