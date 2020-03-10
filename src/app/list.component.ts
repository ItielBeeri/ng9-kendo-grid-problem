import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  template: `
    <kendo-grid>
        <kendo-grid-checkbox-column>
            <ng-template kendoGridSelectAllCheckbox>
            </ng-template>
        </kendo-grid-checkbox-column>
    </kendo-grid>
  `,
  styles: []
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
