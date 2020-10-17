import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Student } from '../../model/student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  loading = false;
  formSubmitted = false;
  errorMsg = '';
  formControls = null;
  student: Student = null;

  studentForm = this.formBuilder.group({
    id: [10],
    sname: ['', Validators.required],
    address: ['', [Validators.required]],
    standard: ['', Validators.required],
    contact: ['', [Validators.required], [Validators.max, 10], [Validators.min, 10]],
    active: [false, Validators.required]
  });

  constructor(private formBuilder: FormBuilder) { }

  onResetClick(): void {
    this.studentForm.reset();
  }

  onSubmit(): void {
    this.formSubmitted = true;
    if (!this.studentForm.valid){
      this.errorMsg = 'Invalid form values! Please input the required values.';
    }
    console.log(this.studentForm);
  }

  ngOnInit(): void {
    this.formControls = [{
      name: 'id',
      fieldLabel: 'ID',
      type: 'hidden',
      cls: 'form-control',
      value: 101,
      hidden: true
    }, {
      name: 'sname',
      fieldLabel: 'Name',
      type: 'text',
      cls: 'form-control',
      placeHolder: 'Enter Student Name'
    }, {
      name: 'address',
      fieldLabel: 'Address',
      type: 'textarea',
      cls: 'form-control',
      placeHolder: 'Enter Address'
    }, {
      name: 'standard',
      fieldLabel: 'Standard',
      type: 'select',
      cls: 'form-control',
      value: '-1',
      collection: [{
        key: 'LKG',
        value: 'LKG'
      }, {
        key: 'UKG',
        value: 'UKG'
      }, {
        key: 'ST-1',
        value: 'Standard 1'
      }, {
        key: 'ST-2',
        value: 'Standard 2'
      }, {
        key: 'ST-3',
        value: 'Standard 3'
      }, {
        key: 'ST-4',
        value: 'Standard 4'
      }, {
        key: 'ST-5',
        value: 'Standard 5'
      }],
      displayField: 'value',
      valueField: 'key'
    }, {
      name: 'contact',
      fieldLabel: 'Contact',
      type: 'number',
      cls: 'form-control',
      placeHolder: 'Enter Contact'
    }, {
      name: 'active',
      fieldLabel: 'Active',
      type: 'checkbox',
      value: false
    }];
  }

}
