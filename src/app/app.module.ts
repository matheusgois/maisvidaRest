import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PessoaService } from './shared/pessoa.service';
import { HttpClientModule } from '@angular/common/http';
import { PessoaListComponent } from './pessoa-list/pessoa-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { PessoaEditComponent } from './pessoa-edit/pessoa-edit.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/pessoa-list', pathMatch: 'full' },
  { path: 'pessoa-list', component: PessoaListComponent },
  { path: 'pessoa-add', component: PessoaEditComponent },
  { path: 'pessoa-edit/:id', component: PessoaEditComponent }
]




@NgModule({
  declarations: [
    AppComponent,
    PessoaListComponent,
    PessoaEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule

  ],
  providers: [PessoaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
