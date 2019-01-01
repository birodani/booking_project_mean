import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';


@Component({
    selector: 'app-rental-detail',
    templateUrl: './rental-detail.component.html',
    styleUrls: ['./rental-detail.component.scss']
})
export class RentalDetailComponent implements OnInit {

    public rentalId;
    public currentRental:Rental;

    constructor(private activatedRoute: ActivatedRoute, private rentalService: RentalService) {   
    }

    ngOnInit(){
        this.activatedRoute.params.subscribe(
            (params) => this.getRentalById( params['rentalId'])
        )
    }

    getRentalById(rentalId: string) {
        this.rentalService.geRentalById(rentalId).subscribe(
            (rental) => this.currentRental=rental
        )
    }
}