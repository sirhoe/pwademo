import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { IItem } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'pwademo';
  items: Array<IItem>;
  constructor(private apiService: ApiService ) {

  }

  ngOnInit(){
    this.fetchData();
  }
  fetchData() {
    this.apiService.fetch().subscribe((data: Array<IItem>)=> {
  console.log(data);
  this.items = data;
}, (err) => {
  console.log(err);
})}

}
