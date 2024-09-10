import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  result: string | null = null;

  principleInterst=new FormGroup({
    principal:new FormControl(''),
    rate:new FormControl(''),
    time:new FormControl('')

  });
  onSubmit() {
    console.log("Form has been submitted");
    const { principal, rate, time } = this.principleInterst.value;

    // Convert string values to numbers
    const principalNum = Number(principal);
    const rateNum = Number(rate);
    const timeNum = Number(time);
    // Ensure that the conversion was successful
   
      const interest = (principalNum * rateNum * timeNum) / 100;
      this.result = `Interest: ${interest.toFixed(2)}`;
    }


}
