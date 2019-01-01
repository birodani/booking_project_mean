import {NgModule, Pipe} from '@angular/core';
import { RentalComponent } from './rental.component';
import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { CommonModule } from '@angular/common';
import {RentalService } from './shared/rental.service';
import { RentalRoutingModule } from './rental-routing.module';
import { RentalDetailComponent } from './rental-detail/rentail-detail.component';
import { HttpClientModule } from '@angular/common/http';
import {NgPipesModule} from 'ngx-pipes';




@NgModule({
    declarations: [
        RentalComponent,
        RentalListComponent,
        RentalListItemComponent,
        RentalDetailComponent
    ],
    imports: [
        CommonModule,
        RentalRoutingModule,
        HttpClientModule,
        NgPipesModule
    ],
    providers: [
        RentalService
    ]
})
export class RentalModule { }