import { AppService } from './app.service';
import { AddMemberComponent } from './add-member.component';
import { MemberListComponent } from './member-list.component';
import { AppComponent } from './app.component';
import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }from '@angular/http';
import { FormsModule, ReactiveFormsModule }from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';



const appRoutes: Routes = [
  { path: 'api/member', component: MemberListComponent },
  { path: 'api/add-member', component: AddMemberComponent }
  
];


@NgModule({
    imports:[BrowserModule, HttpModule,FormsModule,RouterModule.forRoot(appRoutes), ReactiveFormsModule],
        declarations:[AppComponent, MemberListComponent, AddMemberComponent],
        providers: [AppService],
    bootstrap: [AppComponent]
})
export class AppModule {}