import { Component } from '@angular/core';
import {Stage} from "../Models/stage";
import {ServiceService} from "../service.service";

@Component({
  selector: 'app-consulter-stage',
  templateUrl: './consulter-stage.component.html',
  styleUrls: ['./consulter-stage.component.css']
})
export class ConsulterStageComponent {
  idddd!:number
  liststage: Stage[] = []

  //injection de service
  constructor(private s: ServiceService) {
  }

  //remplir listproduct avec la liste du service
  ngOnInit() {
    this.s.getStage().subscribe({   //bsh njmo n accediw lezm subscribe feha 3 choix next / error / complete oala 3
      next: (data) => this.liststage = data,
      error: (error) => console.log(error),
      complete: () => console.log('done')


    })
  }

  supp(id: number) {
    this.s.DeleteStage(id).subscribe( //kaed ytfaskh mais ki nrefrshi me yfaskhch leezmna halll
        () => this.ngOnInit() //pardefaut ki nhl ngoninit ytlansa awl haja hedhy tnahy refraichement ytfaskh toul
    )
  }

}
