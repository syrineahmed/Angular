import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ProductSService} from "../services/product-s.service";
import {ConsumerProductService} from "../services/consumer-product.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private ps:ProductSService , private consp:ConsumerProductService,private route:Router) { //router yatik navigate by url
  }
  registerForm:FormGroup=new FormGroup({
    id:new FormControl('',[Validators.required]),
    title:new FormControl('',[Validators.required, Validators.minLength(5)]),
    price:new FormControl('',[Validators.required, Validators.min(0)]),
    quantity:new FormControl('',[Validators.required, Validators.min(0)]),
    like:new FormControl('',[Validators.required, Validators.min(0)])
  })

  save(){

    console.log(this.registerForm.value)
   // this.ps.addproduct(this.registerForm.value as any) najoutiw fl statique khtr taw nhbo f dynaliqye
    this.consp.AddProduct(this.registerForm.value as any ).subscribe(
      //ki taml whda brk par defaut next
      ()=>this.route.navigateByUrl('/product') //tetaaked mn approuting bl esm
    )
  }
  reset(){
    this.registerForm.reset()
  }
}
