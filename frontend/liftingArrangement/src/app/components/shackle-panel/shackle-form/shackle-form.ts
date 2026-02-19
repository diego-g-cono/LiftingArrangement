import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-shackle-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './shackle-form.html',
})
export class ShackleFormComponent {

  form!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.form = this.fb.group({
      working_load: ['', Validators.required],
      code: ['', Validators.required],
      e: ['', Validators.required],
      b: ['', Validators.required],
      b1: ['', Validators.required],
      a: ['', Validators.required],
      d2: ['', Validators.required],
      weight: ['', Validators.required],
      brand_id: ['', Validators.required],
      c: ['', Validators.required],
    });
  }

  save() {
    if (this.form.invalid) return;

    this.http.post('http://localhost:8080/shackles', this.form.value)
      .subscribe({
        next: () => {
          alert('Shackle creado correctamente');
          this.form.reset();
        },
        error: () => alert('Error al crear shackle')
      });
  }
}