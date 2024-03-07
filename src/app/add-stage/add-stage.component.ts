import { Component } from '@angular/core';
import {ServiceService} from "../service.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-stage',
  templateUrl: './add-stage.component.html',
  styleUrls: ['./add-stage.component.css']
})
export class AddStageComponent {
  constructor(private consS:ServiceService,private route:Router) { //router yatik navigate by url
  }
  registerForm:FormGroup=new FormGroup({
    id:new FormControl('',[Validators.required]),
    titre:new FormControl('',[Validators.required]),
    description:new FormControl('',[Validators.required ]),
    entreprise:new FormControl('',[Validators.required,Validators.minLength(3)]),
    disponible:new FormControl('',[Validators.required])
  })

  save(){

    console.log(this.registerForm.value)
    // this.ps.addproduct(this.registerForm.value as any) najoutiw fl statique khtr taw nhbo f dynaliqye
    this.consS.AddStage(this.registerForm.value as any ).subscribe(
      //ki taml whda brk par defaut next
      ()=>this.route.navigateByUrl('/consulter') //tetaaked mn approuting bl esm
    )
  }
  reset(){
    this.registerForm.reset()
  }

}
