import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import './s3-list.component.css';


@Component({
  selector: 'app-s3-list',
  templateUrl: './s3-list.component.html',
  styleUrls: ['./s3-list.component.css']
})
export class S3ListComponent implements OnInit {

  treeView: SorRecordModule;

  constructor(private httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  ngOnInit(): void {
    setInterval(() => {
      console.log('calling rest service .....');

      this.httpClient.get<SorRecordModule>('http://localhost:9000/api/v1/s3/list', { observe: 'response' })
        .subscribe(response => {
          console.log('received response')
          console.log(response.body)
          this.treeView = response.body;

          this.fireMe();
        });
    }, 5000);

 }

 fireMe(): void {
   console.log('doc loaded ....')
   var toggler = document.getElementsByClassName("caret");
   var i;

   console.log(toggler.length);

   for (i = 0; i < toggler.length; i++) {
     toggler[i].addEventListener("click", function() {
       this.parentElement.querySelector(".nested").classList.toggle("active");
       this.classList.toggle("caret-down");
     });
   }

}

}

export class SorRecordModule { 
  key: string;
  value: string;
  parentBucket: string;
  keys: SorRecordModule[];
  otherBuckets: Map<String, SorRecordModule>;
}
