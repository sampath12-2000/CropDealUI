import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Components/UserSection/homepage/homepage.component';
import { LoginComponent } from './Components/UserSection/login/login.component';
import { RegistrationComponent } from './Components/UserSection/registration/registration.component';
import { CropComponent } from './Components/UserSection/crop/crop.component';
import { SigninComponent } from './Components/AdminSection/signin/signin.component';
import { CroponsaleComponent } from './Components/UserSection/croponsale/croponsale.component';
import { AuthGuard } from 'src/gaurd/auth-guard.service';
import { AddCroponsaleComponent } from './Components/UserSection/add-croponsale/add-croponsale.component';
import { AddcropComponent } from './Components/AdminSection/addcrop/addcrop.component';
import { DealerviewComponent } from './Components/DealerSection/dealerview/dealerview.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { UserstatusComponent } from './Components/AdminSection/userstatus/userstatus.component';
import { UserStatus } from 'Models/userStatus.model';
import { AdminPageComponent } from './Components/AdminSection/admin-page/admin-page.component';
import { DealerpageComponent } from './Components/DealerSection/dealerpage/dealerpage.component';
import { UpdateuserComponent } from './Components/UserSection/updateuser/updateuser.component';
import { FarmerpageComponent } from './Components/UserSection/farmerpage/farmerpage.component';
import { PaymentComponent } from './Components/DealerSection/payment/payment.component';
import { UpdateDealerComponent } from './Components/DealerSection/update-dealer/update-dealer.component';

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'admin-page', component: AdminPageComponent, canActivate: [AuthGuard] },
  { path: 'dealer-page', component: DealerpageComponent, canActivate: [AuthGuard] },
  { path: 'payment', component: PaymentComponent, canActivate: [AuthGuard] },
  { path: 'farmer-page', component: FarmerpageComponent, canActivate: [AuthGuard] },
  { path: 'update-user', component: UpdateuserComponent, canActivate: [AuthGuard] },
  { path: 'update-dealer', component: UpdateDealerComponent, canActivate: [AuthGuard] },
  { path: 'crop', component: CropComponent, canActivate: [AuthGuard] },
  { path: 'create', component: AddcropComponent, canActivate: [AuthGuard] },
  { path: 'status', component: UserstatusComponent },
  { path: 'this', component: SigninComponent },
  { path: 'onSale', component: CroponsaleComponent, canActivate: [AuthGuard] },
  { path: 'addonsale', component: AddCroponsaleComponent, canActivate: [AuthGuard] },
  { path: 'viewcrops', component: DealerviewComponent, canActivate: [AuthGuard] },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
