import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product} from "../model/product";
import {ProductSService} from "../services/product-s.service";
import {ConsumerProductService} from "../services/consumer-product.service";



@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {
  id!:number
    p!:Product
    listProduct:Product[]=[]
  constructor(private Act:ActivatedRoute,private ps:ProductSService , private consP:ConsumerProductService) { //nrecupreiw fl id ml route //SERVICE PREDEFINI ACTIVATED ROUTE
  }




   ngOnInit(){
    this.id=this.Act.snapshot.params['id'] //snap ycapturlik l id
     //  this.p=this.ps.listProduct[this.id]
  this.consP.getProductById(this.id).subscribe(
    (data)=>this.p=data
  )


   }
}
/*getall
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProduct()
      .subscribe(products => this.listproducts = products);
  }
    deleteProduct(id: number): void {
    this.productService.deleteProduct(id)
      .subscribe(() => {
        // Remove the deleted product from the products array
        this.products = this.products.filter(product => product.id !== id);
      });
  }

 */
