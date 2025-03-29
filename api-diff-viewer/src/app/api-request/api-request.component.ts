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
  methods = ['GET', 'POST', 'PUT', 'DELETE'];
  method = 'GET';
  url = '';

  @Input() instanceId: string = '';
  params = [{ enabled: true, key: '', value: '' }];
  headers = [{ enabled: true, key: '', value: '' }];
  body = '';
}
