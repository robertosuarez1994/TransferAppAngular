import { Component } from '@angular/core';
import {ProductService} from './services/product.service'

interface  myData{
  obj: Object
}

@Component({
  selector: 'tp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tp';
  
  private products:Array<any> = [];
  private branchOffices:Array<any> = [];
  private stocks:Array<any> = [];
  
  private transferFrom ={
    branchOffice:String,
    product:String
  }

  private transfersTo:Array<any> = [{
    branchOffice:String,
    stock:Number,
    weight:String
  }];
  


  constructor(private productService:ProductService){}

  ngOnInit(){ 
    this.GetProducts();
    this.GetBranchOffices();
    this.GetStocks();
  }
  
  addTransfer(){
    this.transfersTo.push({
      branchOffice:String,
      stock:Number,
      weight:String
    });
  }

  removeTransfer(i){
    this.transfersTo.splice(i,1);
  }

  transfer(){
    let branchFrom = this.transferFrom.branchOffice
    let product = this.transferFrom.product
    let transferObj = {}
    for (let t of this.transfersTo){
      if(t.weight == "gr"){
        t.stock = t.stock / 1000;
      }
      transferObj = {
        branchFrom_id : branchFrom,
        branchTo_id : t.branchOffice,
        product_id  : product,
        stock : t.stock,
      }
      
      this.productService.patchStocks(transferObj)
    }
    this.GetStocks();
  }

  public Actualizar(){
    this.GetStocks();
  }

  public GetProducts(){
    this.productService.getProducts().subscribe((data:Array<any>)=>{this.products = data;})
  }
  public GetBranchOffices(){
    this.productService.getBranchOffices().subscribe((data:Array<any>)=>{this.branchOffices  = data;})
  }
  public GetStocks(){
    this.productService.getStocks().subscribe((data:Array<any>)=>{this.stocks = data;})
  }
}
