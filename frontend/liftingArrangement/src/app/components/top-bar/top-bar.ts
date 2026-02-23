import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';
import { CommonModule } from '@angular/common';
import { CheckService } from '../../services/check.service';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'la-top-bar',
  imports: [CommonModule],
  templateUrl: './top-bar.html',
})
export class TopBar implements OnInit { 

  fileMenuOpen = false;
  userMenuOpen = false;
  userName: string | null = null;

  constructor(
    private headerDialog: HeaderService,
    private checkService: CheckService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.userName = this.authService.getUserName();
  }

  toggleFileMenu() {
    this.fileMenuOpen = !this.fileMenuOpen;
    this.userMenuOpen = false;
  }

  toggleUserMenu() {
    this.userMenuOpen = !this.userMenuOpen;
    this.fileMenuOpen = false;
  }

  newProject() {
    this.fileMenuOpen = false;
    this.headerDialog.open();
  }

  check() {
    this.checkService.run();
  }

  logout() {
    this.authService.logout();
    this.userMenuOpen = false;
    this.router.navigate(['/login']);
  }
}