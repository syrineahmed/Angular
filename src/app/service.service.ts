import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Stage} from "./Models/stage";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  getStage(){
    return this.http.get<[Stage]>('http://localhost:3000/stages') //ki le tarfsh shnoa bsh trajaaa thot <any> //ken amlt url nwli nkolo (url)

  }
  getStageById(id: number) {
    return this.http.get<Stage>('http://localhost:3000/stages'+'/'+id); //+'/'+id
  }
  AddStage(s:Stage){
    return this.http.post('http://localhost:3000/stages',s)
  }
  DeleteStage(id: number){
    return this.http.delete('http://localhost:3000/stages'+'/'+id); //+'/'+id
  }

}
