import { Component } from '@angular/core';
import { MakeApiCallService } from '../services/make-api-call.service';
import { ApiRequest } from '../interface/api-request.model';

@Component({
  selector: 'app-compare-response',
  imports: [],
  templateUrl: './compare-response.component.html',
  styleUrl: './compare-response.component.css'
})
export class CompareResponseComponent {

  leftResponse: any;
  rightResponse: any;

  temp: ApiRequest = {
    "method": "GET",
    "url": "https://guard.usa.cloud.watchguard.com/cloud/platform/accounts/GetAccountInfo",
    "params": "account_id=ACC-4163180&include_parent=true",
    "headers": {
      "cookie": "myCookieInfo",
      "origin": "https://usa.cloud.watchguard.com",
      "Wgc-api-context-id:": "%7B%22context_id%22%3A%22%22%7D"
    },
    "body": ""
  }

  constructor(private apiService: MakeApiCallService) { }

  getApiinfo(apiInfo1: any, apiInfo2: any) {
    console.log(apiInfo1, apiInfo2)
    console.log("making api call:")

    this.apiService.makeApiRequest(this.temp).subscribe((data) => {
      this.leftResponse = data;
      console.log(this.leftResponse)
    });
  }
}
