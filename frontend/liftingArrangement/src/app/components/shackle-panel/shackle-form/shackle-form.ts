import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

interface Brand {
  id: number;
  name: string;
}

@Component({
  selector: 'app-shackle-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './shackle-form.html',
})
export class ShackleFormComponent implements OnInit {

  form!: FormGroup;
  brands: Brand[] = [];
  
  constructor(
  private fb: FormBuilder,
  private http: HttpClient,
  private router: Router
  ) {}

  ngOnInit(): void {
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

    this.loadBrands();
  }

  loadBrands() {
    this.http.get<Brand[]>('http://localhost:8080/brands')
      .subscribe({
        next: (data) => {
          this.brands = data;
        },
        error: () => console.error('Error loading brands')
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
  volver() {
  this.router.navigate(['/app']);
  }
}