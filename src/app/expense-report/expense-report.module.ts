import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ExpenseReportRoutingModule } from './expense-report-routing.module';
import { ExpenseReportComponent } from './expense-report.component';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    ExpenseReportRoutingModule,
  ],
  declarations: [ExpenseReportComponent],
  exports: [ExpenseReportComponent]
})
export class ExpenseReportModule { }
