import { Component } from '@angular/core';

@Component({
  selector: 'app-compare-response',
  imports: [],
  templateUrl: './compare-response.component.html',
  styleUrl: './compare-response.component.css'
})
export class CompareResponseComponent {
  getApiinfo(apiInfo1: any, apiInfo2: any) {
    console.log(apiInfo1, apiInfo2)
  }

}
