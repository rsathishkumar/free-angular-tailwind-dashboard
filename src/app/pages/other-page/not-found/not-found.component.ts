import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GridShapeComponent } from '../../../shared/components/common/grid-shape/grid-shape.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-not-found',
  imports: [
    CommonModule,
    FormsModule,
    GridShapeComponent,
    RouterModule,
  ],
  templateUrl: './not-found.component.html',
  styles: ``
})
export class NotFoundComponent {
  currentYear: number = new Date().getFullYear();

  contact = {
    name: '',
    email: '',
    subject: '',
    message: '',
  };

  submitted = false;

  onSubmit(): void {
    this.submitted = true;
  }
}
