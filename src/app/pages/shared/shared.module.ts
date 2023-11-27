import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from "../dashboard/dashboard.component";
import { SharedRoutingModule } from "./shared-routing.module";
import {ConfirmationService, MessageService} from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { DialogModule } from "primeng/dialog";

@NgModule({
    declarations: [
        HeaderComponent, 
        FooterComponent, 
        NavigationComponent, 
        LayoutComponent,
        DashboardComponent],
    imports: [
        CommonModule,
        SharedRoutingModule,
        
    ],
    providers: [DialogService,ConfirmationService, MessageService],

})
export class SharedModule { }