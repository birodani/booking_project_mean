import { Component, OnInit, Input } from '@angular/core';
import { RentalService } from '../shared/rental.service';

@Component({
  selector: 'app-rental-list-item',
  templateUrl: './rental-list-item.component.html',
  styleUrls: ['./rental-list-item.component.scss']
})
export class RentalListItemComponent implements OnInit {

  @Input()
  currentRental: any;

  constructor() { }

  ngOnInit() {  }

}
