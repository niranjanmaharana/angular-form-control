import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() formControls: any;
  @Input() component: any;

  constructor() { }

  ngOnInit(): void {
    // debugger;
  }

  onSubmit(): void {
    this.component.onSubmit();
  }

  getValue(form): string {
    return JSON.stringify(form);
  }
}
