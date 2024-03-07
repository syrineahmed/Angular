import { Component } from '@angular/core';
import {Product} from "../model/product";
import {ProductSService} from "../services/product-s.service";
import {ConsumerProductService} from "../services/consumer-product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  priceMax!:number;
  listProduct:Product[]=[]
    //injection de service
  constructor(private ps:ProductSService ,private consp:ConsumerProductService) {
  }
  //remplir listproduct avec la liste du service
  ngOnInit(){
    this.consp.getProduct().subscribe({   //bsh njmo n accediw lezm subscribe feha 3 choix next / error / complete oala 3
      next:(data)=>this.listProduct=data,
      error:(error)=>console.log(error),
      complete:()=>console.log('done')


    })


   // this.listProduct=this.ps.listProduct
  }
  incremnte(id:number){
    this.listProduct[id].like++; //
  }
  decrementer(id:number){
    this.listProduct[id].quantity--;
  }
  supp(id:number){
    this.consp.DeleteProduct(id).subscribe( //kaed ytfaskh mais ki nrefrshi me yfaskhch leezmna halll
      ()=>this.ngOnInit() //pardefaut ki nhl ngoninit ytlansa awl haja hedhy tnahy refraichement ytfaskh toul
    )
  }

}
