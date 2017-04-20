import { AppService } from './app.service';
import { Component, OnInit} from '@angular/core';

@Component({
    selector: "member-list",
    templateUrl: 'app/member-list.component.html',
    providers: [AppService]
})
export class MemberListComponent {
   members: Array<any>;
    name: string;
    surname: String;
    age: number;
    group: String;
    
      constructor(private memService: AppService){
       memService.getMembers().subscribe(members => {
           this.members = members;
       })
       
    }


  /*  addMember(){
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
        
    }*/
    viewMember(id){
        console.log('in component with ' + id);
        
        this.memService.viewMember(id);
       
            
        }
    
    removeMember(id){
       this.memService.removeMember(id)
       .subscribe(data => {
        console.log('Successful Delete' + data);
        
       })

         
        
    }
  
  

  
}