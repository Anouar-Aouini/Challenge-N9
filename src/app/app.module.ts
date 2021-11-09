import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ArticlesComponent } from './articles/articles.component';
import { ErrorsComponent } from './errors/errors.component';
import { SallesListComponent } from './salles-list/salles-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SalleComponent } from './salle/salle.component';

const appRoutes: Routes = [
  { path: "", redirectTo:"/articles",pathMatch:"full" },
  { path: "articles", component: ArticlesComponent },
  { path: "salles", component: SallesListComponent },
  {path:"salles/:id",component:SalleComponent},
  { path: "404", component: ErrorsComponent},
  { path: "**", redirectTo:"/404"}
];
@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
    ErrorsComponent,
    SallesListComponent,
    SalleComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
