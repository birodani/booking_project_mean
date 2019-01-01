import { Component, OnInit, Input } from '@angular/core';
import { RentalService } from '../shared/rental.service';
import { log } from 'util';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'app-rental-list-item',
  templateUrl: './rental-list-item.component.html',
  styleUrls: ['./rental-list-item.component.scss']
})
export class RentalListItemComponent implements OnInit {

  @Input()
  public rental: Rental;

  constructor() { }

  ngOnInit() {  
    console.log(this.rental._id);
  }

}
