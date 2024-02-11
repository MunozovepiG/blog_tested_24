import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Document } from '@contentful/rich-text-types';

@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss']
})
export class LegalComponent implements OnInit {
  legalPolicies: any[] = [];
  terms: boolean = true;
  privacy: boolean = false;
  disclaimer: boolean = false;

  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.fetchLegalPolicies();
  }

  fetchLegalPolicies(): void {
    this.contentfulService.getLegalPolicies().subscribe(
      (data: any[]) => {
        this.legalPolicies = data;
      },
      (error) => {
        console.error('Error fetching legal policies:', error);
        // Handle error gracefully (e.g., show error message to user)
      }
    );
  }

    // Convert rich text to HTML
    public convertRichTextToHtml(richText: Document): string {
      if (richText === undefined || richText === null || richText.nodeType !== 'document') {
        return '<p>Error</p>';
      }
      return documentToHtmlString(richText);
    }

    showTerms(){
      this.terms = true;
      this.privacy = false;
      this.disclaimer = false;
    }

    showPrivacy(){
      this.terms = false;
      this.privacy = true;
      this.disclaimer = false;
    }

    showDisclaimer(){
      this.terms = false;
      this.privacy = false;
      this.disclaimer = true;
    }
}