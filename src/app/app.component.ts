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
  private transfersTo:Array<any> = [{
    branchOffice:String,
    stock:Number,
    weight:String
  }];
  private transferFrom={
    branchOffice:String,
    product:String,
  }


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
    console.log(this.transfersTo);
    console.log(this.transferFrom);
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
