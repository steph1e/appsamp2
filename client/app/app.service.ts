import { Response } from '_debugger';
import {Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {

    constructor(private http : Http){}

    getMembers(){
        return this.http.get('/api/member').map(response => response.json());
    }

    addMember(member){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        console.log(member);
        
        return this.http.post("/api/member/",JSON.stringify(member), {headers: headers})
        .map(response => response.json());
    }
    viewMember(id){
        return this.http.get('/api/member' + id)
        .map(response => response.json());
    }
    removeMember(id){
        return this.http.delete('/api/members/' + id)
        .map(response => response.json());
    }

}parseFloat