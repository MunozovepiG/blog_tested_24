import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentfulService } from 'src/app/services/contentful.service';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Document } from '@contentful/rich-text-types';


@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {
  blogPost: any = {};
  thumbnailUrl: string | null = null;

  constructor(private route: ActivatedRoute, private contentfulService: ContentfulService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const postId = params['id'];
      this.contentfulService.getBlogPostById(postId).subscribe(
        post => {
          this.blogPost = post;

          // Check if blog post has thumbnail and thumbnail has id
          if (this.blogPost.fields.thumbnail && this.blogPost.fields.thumbnail.sys && this.blogPost.fields.thumbnail.sys.id) {
            const thumbnailId = this.blogPost.fields.thumbnail.sys.id;

            // Fetch the corresponding thumbnail asset
            this.contentfulService.getAssetById(thumbnailId).subscribe(
              asset => {
                if (asset) {
                  this.thumbnailUrl = 'https:' + asset.fields.file.url;
                } else {
                  console.error(`Thumbnail asset not found for blog post with ID ${postId}`);
                }
              },
              error => console.error(`Error fetching thumbnail asset for blog post with ID ${postId}:`, error)
            );
          }
        },
        error => console.error(`Error fetching blog post with ID ${postId}:`, error)
      );
    });
  }

  // Convert rich text to HTML
  public convertRichTextToHtml(richText: Document): string {
    if (richText === undefined || richText === null || richText.nodeType !== 'document') {
      return '<p>Error</p>';
    }
    return documentToHtmlString(richText);
  }
}
