import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/products/models/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServesService } from '../../services/serves.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css'],
})
export class AdminProductsComponent implements OnInit {
  Products: Product[] = [];
  categories: string[] = [];
  loading: boolean = false; //!spinner
  base64: any = '';
  form!: FormGroup;
  constructor(private service: ServesService, private build: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.build.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      category: ['', [Validators.required]],
    });

    this.getProducts();
    this.getCategories();
  }

  getProducts() {
    this.loading = true; //!spinner
    this.service.getAllProducts().subscribe(
      (res: any) => {
        this.Products = res;
        this.loading = false; //!spinner
        // console.log(res);
      },
      (error) => {
        this.loading = false; //!spinner
        alert(error);
      }
    );
  }

  getCategories() {
    this.service.getAllCategories().subscribe(
      (res: any) => {
        this.categories = res;
        // console.log(res);
      },
      (error) => {
        alert(error);
      }
    );
  }

  getSelectedCategores(event: any) {
    this.form.get('category')?.setValue(event.target.value);
  }

  addProdect() {
    const model = this.form.value;
    this.service.createProduct(model).subscribe((res:any) =>{
      this.Products.push(res)
      // alert("added product successfully"); 
    })
  }

  getImagePath(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.base64 = reader.result;
      this.form.get('image')?.setValue(this.base64);
    };
  }


  update(item:any){
    this.form.patchValue({
      title:item.title,
      price: item.price,
      description: item.description,
      image: item.image,
      category: item.category,
    })
    this.base64=item.image
  }

  updateMyProduct(){
    const item = this.form.value;
    this.service.UpdateProduct(item).subscribe((res:any)=>{
      this.Products=res;
    })
  }
}
