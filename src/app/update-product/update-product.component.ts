import { Component } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Product} from "../model/product";
import {ConsumerProductService} from "../services/consumer-product.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent {
  p!:Product
  id!:number
  constructor(private consP:ConsumerProductService,private route:Router,private act:ActivatedRoute ) {}
  registerForm:FormGroup=new FormGroup({
    id:new FormControl('',[Validators.required]),
    title:new FormControl('',[Validators.required, Validators.minLength(5)]),
    price:new FormControl('',[Validators.required, Validators.min(0)]),
    quantity:new FormControl('',[Validators.required, Validators.min(0)]),
    like:new FormControl('',[Validators.required, Validators.min(0)])
  })

  ngOnInit() {
    this.id = this.act.snapshot.params['id']
    this.consP.getProductById(this.id).subscribe(
      (data) => {
        this.p = data
        this.registerForm.patchValue(this.p as any)
      }
    )
  }
    save(){
      this.consP.updateProduct(this.registerForm.value as any ,this.id).subscribe(
        ()=>this.route.navigateByUrl('/product')
      )


  }

}

