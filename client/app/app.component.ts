import { AppService } from './app.service';
import { Component } from '@angular/core';



@Component({
    selector: "my-app",
    templateUrl: 'app/app.component.html',
    providers: [AppService]
    
})

export class AppComponent{
  
    
}