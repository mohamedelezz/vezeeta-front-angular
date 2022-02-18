import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  myForm?: any;
  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {

    // const Address = this.fb.group({
    //   Governorate: ['', [Validators.required]],
    //   Center: ['', [Validators.required]],
    //   Street: ['', [Validators.required]],
    // })

    this.myForm = this.fb.group({
      doctorName: ['', [Validators.required]],
      // email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$")]],
      // password: ['', [Validators.required, Validators.minLength(8)]],
      discription: ['', [Validators.required] ],
      phone: ['', [Validators.required] ],
      specialization: ['', [Validators.required] ],
      rate: ['', [Validators.required] ],
      fees: ['', [Validators.required] ],
      available: ['', [Validators.required] ],
    })

  }

}
