import { Component, OnInit } from '@angular/core';
import { LocationService } from 'src/app/services/location.service';

@Component({
  selector: 'app-selection-dropdown',
  templateUrl: './selection-dropdown.component.html',
  styleUrls: ['./selection-dropdown.component.scss']
})
export class SelectionDropdownComponent implements OnInit {
  countries: string[] = ['South Africa website', 'United States website', 'Global website'];
  selectedCountry: string = 'United States website'; // Set default value

  constructor(private locationService: LocationService) { }

  ngOnInit(): void {
    this.locationService.getUserLocation()
      .then(userLocation => {
        this.selectedCountry = this.determineSelectedCountry(userLocation);
      })
      .catch(error => {
        console.error('Error getting user location:', error);
        // Handle error if needed
      });
  }

  determineSelectedCountry(userLocation: string): string {
    if (userLocation === 'South Africa') {
      return 'South Africa website';
    } else if (userLocation === 'United States') {
      return 'United States website';
    } else {
      return 'Global website';
    }
  }
}
