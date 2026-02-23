import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeaderService } from '../../services/header.service';
import { Header } from '../../interfaces/header.interface';
import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { BeamService } from '../../services/beam.service';
import { User } from '../../interfaces/user.interface';
import { BeamDto } from '../../interfaces/beam.dto';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'la-header-dialog',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './header-dialog.html',
})
export class HeaderDialog {
  visible = false;
  beams: BeamDto[] = [];


header: Header = {
  date: '',
  product: '',
  quantity: 1,
  lifting_points: 1,
  max_load: 0,
  unit_load: 0,
  operation: '',
  beam_capacity: 0,
  beam: { id: 0 }
};

constructor(
  private headerService: HeaderService,
  private beamService: BeamService,
  public authService: AuthService
) {
  this.headerService.openDialog$.subscribe(() => {
    this.visible = true;
    this.loadData();
  });
}

submit() {
  this.headerService.create(this.header).subscribe({
    next: saved => {
      console.log('Header saved', saved);

      this.headerService.confirm(saved);

      this.visible = false;
    },
    error: err => {
      console.error('Error creating header', err);
    }
  });
}
loadData() {
  const token = this.authService.getToken();
  

  if (token) {
    const payload = JSON.parse(atob(token.split('.')[1]));

  }

  this.beamService.getAll().subscribe(beams => {
    this.beams = beams;
    if (beams.length > 0) {
      this.header.beam.id = beams[0].id;
    }
  });
}

  close() {
    this.visible = false;
  }
}
