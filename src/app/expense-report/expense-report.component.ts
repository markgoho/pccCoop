import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-expense-report',
  templateUrl: './expense-report.component.html',
  styleUrls: ['./expense-report.component.scss']
})
export class ExpenseReportComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      expense: this.initExpense({}),
      expenses: this.fb.array([]),
    })
  }

  initExpense(expense) {
    return this.fb.group({
      date: [expense.date || '', Validators.required],
      description: [expense.description || '', Validators.required],
      cost: [expense.cost || ''],
      receipt: [expense.receipt || ''],
    })
  }

  onSubmit() {}

}
