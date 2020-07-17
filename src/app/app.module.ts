//service module
import { LeaderService } from "./services/leader.service";
import { PromotionService } from "./services/promotion.service";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { DishService } from "./services/dish.service";

//browser module
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

//matial module
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";

//flex layout
import { FlexLayoutModule } from "@angular/flex-layout";

//dialog
import { MatDialogModule } from "@angular/material/dialog";

//form module
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSelectModule } from "@angular/material/select";
import { MatSlideToggleModule } from "@angular/material/slide-toggle";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";

//rxjs module
import { from } from "rxjs";

//hammer module
import "hammerjs";

//page module
import { MenuComponent } from "./menu/menu.component";
import { DishdetialComponent } from "./dishdetial/dishdetial.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { AboutComponent } from "./about/about.component";
import { HomeComponent } from "./home/home.component";
import { ContactComponent } from "./contact/contact.component";
import { LoginComponent } from "./login/login.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetialComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatSelectModule,
    MatSlideToggleModule,
  ],
  providers: [DishService, PromotionService, LeaderService],
  entryComponents: [LoginComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
