import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './Components/UserSection/homepage/homepage.component';
import { LoginComponent } from './Components/UserSection/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './Components/UserSection/registration/registration.component';
import { CropComponent } from './Components/UserSection/crop/crop.component';
import { SigninComponent } from './Components/AdminSection/signin/signin.component';
//import { Token } from '@angular/compiler';
import { TokenInterceptorService } from 'Service/token-interceptor.service';
import { JwtModule } from '@auth0/angular-jwt';
import { CroponsaleComponent } from './Components/UserSection/croponsale/croponsale.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddCroponsaleComponent } from './Components/UserSection/add-croponsale/add-croponsale.component';
import { ToastrModule } from 'ngx-toastr';
import { AdminPageComponent } from './Components/AdminSection/admin-page/admin-page.component';
import { AddcropComponent } from './Components/AdminSection/addcrop/addcrop.component';
import { DealerviewComponent } from './Components/DealerSection/dealerview/dealerview.component';
import { PaymentComponent } from './Components/DealerSection/payment/payment.component';
import { PagenotfoundComponent } from './Components/pagenotfound/pagenotfound.component';
import { UserstatusComponent } from './Components/AdminSection/userstatus/userstatus.component';
import { AdminpageComponent } from './Components/AdminSection/adminpage/adminpage.component';
import { UpdateuserComponent } from './Components/UserSection/updateuser/updateuser.component';
import { DealerpageComponent } from './Components/DealerSection/dealerpage/dealerpage.component';
import { FarmerpageComponent } from './Components/UserSection/farmerpage/farmerpage.component';
import { UpdateDealerComponent } from './Components/DealerSection/update-dealer/update-dealer.component';



export function tokengetter() {
  return localStorage.getItem("jwt");
}

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    RegistrationComponent,
    CropComponent,
    SigninComponent,
    CroponsaleComponent,
    AddCroponsaleComponent,
    AdminPageComponent,
    AddcropComponent,
    DealerviewComponent,
    PaymentComponent,
    PagenotfoundComponent,
    UserstatusComponent,
    AdminpageComponent,
    UpdateuserComponent,
    DealerpageComponent,
    FarmerpageComponent,
    UpdateDealerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokengetter,
        allowedDomains: ["localhost:7214"],
        disallowedRoutes: []
      }
    })
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
