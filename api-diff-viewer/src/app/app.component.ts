import { Component } from '@angular/core';
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
}
