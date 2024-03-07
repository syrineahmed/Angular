import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  login=new FormControl('syrine',Validators.required)
  pwd=new FormControl('',Validators.required)
 //besh nliw nkhdmo b form grp ntasti alihom lkol mbdhhom msh bl kaba bl kaba

  registerForm:FormGroup=new FormGroup({
   // login:new FormControl('syrine',[Validators.required, Validators.minLength(3)]), hedhy ki thbe par defaut tokhrj maktoub syrine
    login:new FormControl('',[Validators.required, Validators.minLength(6)]),

    pwd:new FormControl('',[Validators.required , Validators.pattern('[a-z0-9]*')  ]) //yekble ken miniscule o chiifre
  })



  save(){
   // console.log(this.login.value) hne yafichilk fl console jst value
    //console.log(this.pwd.value)
  /* hedhy ki thbda form adia
   console.log(this.login) // kn tkhlihom haaka yafichilk fl console houma shnoa nature teihom ol hajt eli tjn tarfha
    console.log(this.pwd)*/
    console.log(this.registerForm.value)
  }
  reset(){
    this.registerForm.reset()
  }
}
