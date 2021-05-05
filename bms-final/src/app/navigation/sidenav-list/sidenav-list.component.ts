import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit {

  @Output() closeSidenav = new EventEmitter<void>();
  constructor(private authService: AuthService) { }
  
  isAuth: boolean = false;
  authSubscription: Subscription;

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(authStatus => {
      this.isAuth = authStatus;
    })
  }

  onLogout() {
    this.onClose();
    this.authService.logout();
  }



  onClose() {
    this.closeSidenav.emit();
  }
}
