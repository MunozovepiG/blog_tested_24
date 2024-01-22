// blog-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
  blogPosts: any[] = [];

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.contentfulService.getBlogPosts().subscribe(
      posts => this.blogPosts = posts,
      (error: any) => console.error('Error fetching blog posts in BlogListComponent:', error) // Specify the type of 'error'
    );
  }

  // Inside BlogListComponent
  getPostThumbnailUrl(post: any): Observable<string> {
    const assetId = post.fields.thumbnail.sys.id;
    return this.contentfulService.getAssetById(assetId).pipe(
      map((asset: { fields: { file: { url: string }; }; }) => asset.fields.file.url), // Specify the type of 'url'
      catchError((error: any) => {
        console.error(`Error fetching thumbnail URL for asset with ID ${assetId}:`, error);
        throw error;
      })
    );
  }
}
