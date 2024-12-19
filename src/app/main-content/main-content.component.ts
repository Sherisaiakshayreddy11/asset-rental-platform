import { Component } from '@angular/core';
import { KENDO_GRID } from '@progress/kendo-angular-grid';
import { Product, Product1, Product2 } from './model';
import { KENDO_ICONS } from '@progress/kendo-angular-icons';
import { KENDO_BUTTONS } from '@progress/kendo-angular-buttons';



@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [KENDO_GRID,KENDO_ICONS,KENDO_BUTTONS],
  templateUrl: './main-content.component.html',
  styleUrl: './main-content.component.scss'
})
export class MainContentComponent {
  
  
  public dataItems:Product[] = [
    {
      assetNumber: 40468,
      assetCategory: 'Light Duty',
      rentalStatus: 'Reserved',
      branch: '04210 - IS Sulphur, LA',
      startDate: '07-25-2023',
      estimatedReturnDate: '08-31-2023',
      cancel: 'Cancel'
    },
    {
      assetNumber:40467 ,
      assetCategory: 'Light Duty',
      rentalStatus: 'Reserved',
      branch: '00141 - HPC Channelview, TX',
      startDate: '07-25-2023',
      estimatedReturnDate: '09-01-2023',
      cancel: 'Cancel'
    },
    {
      assetNumber:4359 ,
      assetCategory: 'Roll Off Straightjob',
      rentalStatus: 'Reserved',
      branch: '00143 - HPC Shell-Deer Park, TX',
      startDate: '07-28-2023',
      estimatedReturnDate: '08-15-2023',
      cancel: 'Cancel'
    },
    {
      assetNumber:4358 ,
      assetCategory: 'Roll Off Straightjob',
      rentalStatus: 'Reserved',
      branch: '00145 - HPC Dow - Houston, TX',
      startDate: '08-02-2023',
      estimatedReturnDate: '08-07-2023',
      cancel: 'Cancel'
    },
    {
      assetNumber:42576 ,
      assetCategory: 'Vacuum Trucks',
      rentalStatus: 'Reserved',
      branch: '00115 - HPC Rockdale, TX',
      startDate: '08-03-2023',
      estimatedReturnDate: '08-25-2023',
      cancel: 'Cancel'
    }

    
  ]

  public listItems:Product1[] = [
    {
      asset:'SR59217' ,
      po: 'W240012251',
      assetCategory: 'Straight Wet Vac Truck',
      rentalStatus: 'Pending',
      browsingBranch: '00143 - HPC Shell-Deer Park, TX',
      startDate: '07-25-2023',
      estimatedReturnDate: '08-31-2023',
      transportationReq: 'Returning to Owning Branch'
    },
    {
      asset:'4374' ,
      po: '',
      assetCategory: 'Roll Off Straightjob',
      rentalStatus: 'Reserved',
      browsingBranch: '04210 - IS Sulphur, LA',
      startDate: '07-28-2023',
      estimatedReturnDate: '09-01-2023',
      transportationReq: 'Returning to Owning Branch'
    },
    {
      asset:'3486' ,
      po: '',
      assetCategory: 'Roll Off Straightjob',
      rentalStatus: 'Pending',
      browsingBranch: '03012 - HPC Lake Charles',
      startDate: '07-28-2023',
      estimatedReturnDate: '08-15-2023',
      transportationReq: 'Deliver to Borrowing Branch'
    },
    {
      asset: '3359',
      po: '',
      assetCategory: 'Roll Off Straightjob',
      rentalStatus: 'Pending',
      browsingBranch: '00145 - HPC Dow - Houston, TX',
      startDate: '08-02-2023',
      estimatedReturnDate: '08-07-2023',
      transportationReq: 'Deliver to Borrowing Branch'
    },
    {
      asset: '3256',
      po: '',
      assetCategory: 'Vacuum Trucks',
      rentalStatus: 'Pending',
      browsingBranch: '00115 - HPC Rockdale, TX',
      startDate: '08-03-2023',
      estimatedReturnDate: '08-25-2023',
      transportationReq: 'Returning to Owning Branch'
    },

    
  ]

  public list:Product2[] = [
    {
      assetCategory:'Straight Wet Vac Truck',
      assetType: 'Straight Wet Vac Truck',
      startDate: '07-25-2023',
      estRtnDate: '08-31-2023',
      qty: 5 ,
      branch: '00143 - HPC Shell-Deer Park, TX',
      requestBy: 'Camerano, Stephen',
      transportationReq: 'Deliver to Borrowing Branch',
      reason: 'One Time Job'
    }
  ]
}
