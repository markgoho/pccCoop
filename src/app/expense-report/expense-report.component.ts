import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-expense-report',
  templateUrl: './expense-report.component.html',
  styleUrls: ['./expense-report.component.scss']
})
export class ExpenseReportComponent implements OnInit {
  form: FormGroup;
  needsReceipt = false;

  constructor(private fb: FormBuilder) {}

  async ngOnInit() {
    await this.createForm();
    this.form.get('expense.cost')!.valueChanges.subscribe((cost: number) => {
      console.log(cost);
      if (cost >= 7500) {
        this.needsReceipt = true;
      }
    });
  }

  createForm() {
    this.form = this.fb.group({
      expense: this.initExpense({}),
      expenses: this.fb.array([])
    });
  }

  initExpense(expense) {
    return this.fb.group({
      date: [expense.date || '', Validators.required],
      description: [expense.description || '', Validators.required],
      cost: [expense.cost || ''],
      receipt: [expense.receipt || '']
    });
  }

  onSubmit() {}
}
