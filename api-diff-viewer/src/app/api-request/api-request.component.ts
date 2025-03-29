import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';
import { ScrollableTableComponent } from './scrollable-table/scrollable-table.component';

@Component({
  selector: 'app-api-request',
  imports: [FormsModule, ScrollableTableComponent, NgFor],
  templateUrl: './api-request.component.html',
  styleUrl: './api-request.component.css'
})
export class ApiRequestComponent {
  @Input() instanceId: string = '';

  methods = ['GET', 'POST', 'PUT', 'DELETE'];
  method = 'GET';
  url = '';

  params = [{ enabled: true, key: '', value: '' }];
  headers = [{ enabled: true, key: '', value: '' }];
  body = '';

  getRequestData() {
    return {
      method: this.method,
      url: this.url,
      params: this.params.filter(p => p.enabled).map(p => `${p.key}=${p.value}`).join('&'),
      headers: this.headers.filter(h => h.enabled).reduce((acc, h) => ({ ...acc, [h.key]: h.value }), {}),
      body: this.body
    };
  }

}
