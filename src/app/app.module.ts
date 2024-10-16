import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppRoutingModule } from './app-routing.module';
import { JwtInterceptor, ErrorInterceptor, appInitializer } from './_helpers';
import { AccountService } from './_services';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';  // Import NgbModule for Bootstrap components


import { AppComponent } from './app.component';
import { AlertComponent } from './_components';
import { HomeComponent } from './home';
import { LandingPageComponent } from './landing-page'; // Correct path
import { TeamMemberComponent } from './team-member/about-us.component';
import { CampaignComponent } from './campaign/campaign.component';
import { AdminModule } from './admin/admin.module';
import { CreateCampaignComponent } from './create campaign';
import { RouterModule } from '@angular/router';
import { CreateEventComponent } from './events/create-event.component'; // Import your component
import { CampaignDetailsComponent } from './campaign/campaign-details.component';

import { BenefeciariesComponent } from './home/benefeciaries/benefeciaries.component';
import { DashboardSwitchComponent } from './dashboard-switch/dashboard-switch.component';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRoutingModule,
        NgbModule, 
        AdminModule,
        RouterModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LandingPageComponent,
        TeamMemberComponent,
        CampaignComponent, 
        CreateCampaignComponent,
        CreateEventComponent,
        CampaignDetailsComponent,

        //home dashboard
        BenefeciariesComponent,

        // Dashboard role switcher
        DashboardSwitchComponent
    ],
    providers: [
        { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [AccountService] },
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        // fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }