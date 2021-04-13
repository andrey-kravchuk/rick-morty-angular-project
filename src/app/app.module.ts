import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CharacterService } from './services/character.service';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'gender/:id', component: CharactersListComponent},
  {path: 'gender', component: CharactersListComponent},
  {path: 'characters', component: CharactersListComponent},
  {path: '', redirectTo: '/characters', pathMatch: 'full'},
  {path: '**', redirectTo: '/characters', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule
  ],
  providers: [CharacterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
