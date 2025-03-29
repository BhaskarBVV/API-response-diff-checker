import { Component, ViewChild } from '@angular/core';
import { ApiRequestComponent } from './api-request/api-request.component';
import { CompareResponseComponent } from './compare-response/compare-response.component';

@Component({
  selector: 'app-root',
  imports: [ApiRequestComponent, CompareResponseComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'api-diff-viewer';
  @ViewChild('leftApi') leftApi!: ApiRequestComponent;
  @ViewChild('rightApi') rightApi!: ApiRequestComponent;
  @ViewChild('compareResponse') compareResponse!: CompareResponseComponent

  leftRequestData: any;
  rightRequestData: any;

  compareResponses() {
    this.leftRequestData = this.leftApi.getRequestData();
    this.rightRequestData = this.rightApi.getRequestData();
    this.compareResponse.getApiinfo(this.leftRequestData, this.rightRequestData)
  }

}
