import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-scrollable-table',
  imports: [FormsModule, NgFor],
  templateUrl: './scrollable-table.component.html',
  styleUrl: './scrollable-table.component.css'
})
export class ScrollableTableComponent {
  @Input() keyValues: { enabled: boolean; key: string; value: string }[] = [];

  addParam() {
    this.keyValues.push({ enabled: true, key: '', value: '' });
  }

  removeParam(index: number) {
    this.keyValues.splice(index, 1);
  }
}
