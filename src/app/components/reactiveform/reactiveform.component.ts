import { Component } from '@angular/core';
import {
  FormArray,
  FormControl,
  FormGroup,
  NgForm,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss'],
})
export class ReactiveformComponent {
  course = [
    { name: 'javascript', value: 'javascript' },
    { name: 'jQuery', value: 'jQuery' },
    { name: 'Angular', value: 'Angular' },
  ];
  gender = [{ value: 'Male' }, { value: 'Female' }, { value: 'Others' }];
  myReactiveForm!: FormGroup;

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      loginDetails: new FormGroup({
        username: new FormControl(null, [Validators.required]),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      course: new FormControl('javascript', Validators.required),
      gender: new FormControl('Male', Validators.required),
    });
  }

  onSubmit() {
    console.log(this.myReactiveForm);
  }

  onReset() {
    this.myReactiveForm.reset();
  }

  //NotAllowedName = ['nawaz', 'ahaan', 'ayaz'];
}
