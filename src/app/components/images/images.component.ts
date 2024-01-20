import { Component, OnInit } from '@angular/core';
import { ContentfulService } from 'src/app/services/contentful.service';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {
  imageUrls: string[] = [];

  constructor(private contentfulService: ContentfulService) {}

  ngOnInit(): void {
    this.contentfulService.getAssets().subscribe(
      (assets) => {
        this.imageUrls = assets.map((asset) => 'https:' + asset.fields.file.url);
      },
      (error) => {
        console.error('Error fetching assets:', error);
      }
    );
  }
}

