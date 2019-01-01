import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Rental } from './rental.model'

@Injectable()
export class RentalService {

  rentals: Rental[] = [{
    id: "1",
    title: "Central Apartment",
    city: "New York",
    street: "Times Sqaure",
    category: "apartment",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 3,
    description: "Very good apartment",
    dailyRate: 34,
    shared: false,
    createdAt: "24/12/2018"
  },
  {
    id: "2",
    title: "Central 2",
    city: "San Francisco",
    street: "32. street",
    category: "condo",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 2,
    description: "Very nice ",
    dailyRate: 12,
    shared: true,
    createdAt: "24/12/2018"
  },
  {
    id: "2",
    title: "Apartment 3",
    city: "Budapest",
    street: "Nagymező utca",
    category: "condo",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 2,
    description: "Very good traffic",
    dailyRate: 334,
    shared: true,
    createdAt: "14/01/2017"
  },
  {
    id: "4",
    title: "Central Apartment 4",
    city: "Berlin",
    street: "Haupt strasse",
    category: "house",
    image: "http://via.placeholder.com/350x250",
    bedrooms: 9,
    description: "Very nice apartment",
    dailyRate: 33,
    shared: true,
    createdAt: "01/01/2019"
  }];

  public geRentalById(id: string): Observable<Rental> {
    return new Observable<Rental>((observer) => {
      setTimeout(()=>{
        const foundRental = this.rentals.find((rental) => rental.id === id)
        observer.next(foundRental),500
      });
    })
  }

  public getRentals(): Observable<Rental[]> {
    const rentalObservable: Observable<Rental[]> = new Observable((observer) => {
      setTimeout(() => observer.next(this.rentals), 2000)
      //  just for trial 
      //  setTimeout(() => observer.error('ERROR!!!'), 5000)
      setTimeout(() => observer.complete(), 6000)
    }
    );
    return rentalObservable;
  }
}