import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { InputTextModule } from 'primeng/inputtext';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { UniversiteModule } from './features/universite/universite.module';
import { HttpClientModule } from '@angular/common/http'; 
import { FormsModule } from '@angular/forms';
import { AddUpdateChambreComponent } from './pages/chambre/add-update-chambre/add-update-chambre.component';
import { GetDeleteChambreComponent } from './pages/chambre/get-delete-chambre/get-delete-chambre.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LayoutComponent } from './pages/shared/layout/layout.component';
import { NavigationComponent } from './pages/shared/navigation/navigation.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { StepsModule } from 'primeng/steps';
import { DialogModule } from 'primeng/dialog';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { ProgressBarModule } from 'primeng/progressbar';
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    HeaderComponent, 
    FooterComponent, 
    NavigationComponent, 
    LayoutComponent,
    DashboardComponent,
    AppComponent,
    HomeComponent,
    GetDeleteChambreComponent,
    AddUpdateChambreComponent
  ],
  imports: [
    TagModule,
    TableModule,
    ReactiveFormsModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    InputTextModule,
    BrowserModule,
    AppRoutingModule,
    NgSelectModule,
    ButtonModule,
    AutoCompleteModule,
    UniversiteModule,
    ConfirmDialogModule,
    StepsModule,
    DialogModule,
    FormsModule
  ],
  providers: [DialogService,ConfirmationService, MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
