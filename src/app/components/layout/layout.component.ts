import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MasterComponent } from '../master/master.component';
import { FormsModule, } from '@angular/forms';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterOutlet,MasterComponent,RouterLink, RouterLinkActive,FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
 router = inject(Router)
  onLogout() {
    this.router.navigateByUrl("/login");
    localStorage.removeItem("empErpUser")
 }
}
