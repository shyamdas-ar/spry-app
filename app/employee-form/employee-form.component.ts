import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class EmployeeFormComponent {
  onSubmit(form: any) {
    console.log(form.value);
  }
}

