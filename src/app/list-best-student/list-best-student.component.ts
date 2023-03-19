import { Component, OnInit } from '@angular/core';
import { RestoService } from '../resto.service'

@Component({
  selector: 'app-list-best-resto',
  templateUrl: './list-best-resto.component.html',
  styleUrls: ['./list-best-resto.component.css']
})
export class ListBestRestoComponent  {

  constructor(private RestoS: RestoService) { }
  collection: any = [];
  ngOnInit(): void {

    this.RestoS.getList().subscribe(result => {

      //Array.of converts object into array
      this.collection = Array.of(result);
    })
  }
  deleteResto(item) {
    this.collection.splice(item - 1, 1)
    this.RestoS.deleteResto(item).subscribe(result => {
      console.warn("result", result)
      //we call the below code to get updated list
      this.RestoS.getList().subscribe(result => {
        //Array.of converts object into array
        this.collection = Array.of(result);
        //console.warn(this.collection[0])
      })
    })
  }

}
