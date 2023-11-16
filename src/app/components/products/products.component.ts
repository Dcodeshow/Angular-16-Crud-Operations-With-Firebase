import { Component, ElementRef, ViewChild } from '@angular/core';
import { ProductservicesService } from 'src/app/appServices/productservices.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  fetching: boolean = false;
  editMode: boolean = true;
  indexNumber: number = 0;
  @ViewChild('Id') id!: ElementRef;
  @ViewChild('Name') name!: ElementRef;
  @ViewChild('Price') price!: ElementRef;
  constructor(private _productservices: ProductservicesService) {}
  ProductList = this._productservices.getProductTitle();
  product: any[] = [
    // {
    //   id: 'P1',
    //   name: 'Laptop',
    //   price: 30000,
    // },
    // {
    //   id: 'P2',
    //   name: 'Mobile',
    //   price: 10000,
    // },
    // {
    //   id: 'P3',
    //   name: 'Tv',
    //   price: 1500,
    // },
  ];
  AddProduct(id: any, product: any, price: any) {
    if (
      id.value.length > 0 &&
      product.value.length > 0 &&
      price.value.length > 0
    ) {
      if (this.editMode) {
        this.product.push({
          id: id.value,
          name: product.value,
          price: price.value,
        });
      } else {
        this.product[this.indexNumber] = {
          id: id.value,
          name: product.value,
          price: price.value,
        };
        this.editMode = true;
        this.id.nativeElement.value = '';
        this.name.nativeElement.value = '';
        this.price.nativeElement.value = '';
      }
    }
  }

  onDelete(del: any) {
    if (confirm('Are you sure you want to delete this')) {
      this.product.splice(del, 1);
      this.SaveProduct();
    }
  }

  SaveProduct() {
    this._productservices.uploadProduct(this.product).subscribe();
  }

  FetchProduct() {
    this.fetching = true;
    this._productservices.fetchProduct().subscribe((res) => {
      const data = JSON.stringify(res);
      this.product = JSON.parse(data);
      console.log(this.product);
      this.fetching = false;
    });
  }

  ngOnInit(): void {
    this.FetchProduct();
  }

  onEdit(index: any) {
    this.editMode = false;
    this.indexNumber = index;
    this.id.nativeElement.value = this.product[index].id;
    this.name.nativeElement.value = this.product[index].name;
    this.price.nativeElement.value = this.product[index].price;
  }
}
