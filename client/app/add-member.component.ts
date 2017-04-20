import { log } from 'util';
import {Component } from '@angular/core';
import { AppService } from './app.service';
import { FormGroup } from '@angular/forms';



@Component({
    selector: 'add-member',
    templateUrl: 'app/add-member.html',
    providers:[AppService]
})

export class AddMemberComponent{
// public myForm: FormGroup;
    members: Array<any>;
    name: string;
    surname: String;
    age: number;
    group: String;
    
    constructor(private memService: AppService){


       memService.getMembers().subscribe(response => {
           this.members = response;
       })
    }
   

    addMember(){
        console.log("addMember " + this.name);
        
        var member = {
            name: this.name,
            surname: this.surname,
            age: this.age,
            group: this.group
        }
        this.memService.addMember(member).subscribe(data => {
            console.log('Success' + data);
            this.members.push(member);
            
        })
        
    }
    viewMember(id){
        console.log('in component with ' + id);
        
        this.memService.viewMember(id);
       
            
    }
  
}
    

