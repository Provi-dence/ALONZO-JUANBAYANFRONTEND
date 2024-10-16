import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';
import { Role } from './_models';

// router
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TeamMemberComponent } from './team-member/about-us.component';
import { CampaignComponent } from './campaign/campaign.component';
import { CreateCampaignComponent } from './create campaign/create-campaign.component';
import { NotFoundComponent } from './lost-page/404.page.component';
import { CreateEventComponent } from './events/create-event.component';
import { CampaignDetailsComponent } from './campaign/campaign-details.component'; // Import CampaignDetailsComponent

// home
// beneficiary side
import { BenefeciariesComponent } from './home/benefeciaries/benefeciaries.component';
import { DashboardSwitchComponent } from './dashboard-switch/dashboard-switch.component';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const adminModule = () => import('./admin/admin.module').then(x => x.AdminModule);
const profileModule = () => import('./profile/profile.module').then(x => x.ProfileModule);

const routes: Routes = [
    // Public routes
    { path: '', redirectTo: '/login-register', pathMatch: 'full' },
    { path: 'landing-page', component: LandingPageComponent },
    { path: 'team-member', component: TeamMemberComponent },
    { path: 'campaign', component: CampaignComponent },
    { path: 'create-campaign', component: CreateCampaignComponent },
    { path: 'events', component: CreateEventComponent },
    { path: 'benefeciaries', component: BenefeciariesComponent },

    // Route for campaign details
    { path: 'campaign-details/:id', component: CampaignDetailsComponent },

    // Routes restricted by AuthGuard
    { path: 'dashboard-switch', component: DashboardSwitchComponent, canActivate: [AuthGuard] }, // Protected dashboard-switch route
    { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'profile', loadChildren: profileModule, canActivate: [AuthGuard] },

    // Admin routes
    { path: 'admin', loadChildren: adminModule, canActivate: [AuthGuard], data: { roles: [Role.Admin] } },

    // Lazy-loaded account module (no AuthGuard needed here)
    { path: 'account', loadChildren: accountModule },

    // Catch-all for invalid routes
    { path: '**', redirectTo: '/landing-page', pathMatch: 'full' },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
