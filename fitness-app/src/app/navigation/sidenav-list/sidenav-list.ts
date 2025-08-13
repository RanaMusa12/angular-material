import {
  Component,
  EventEmitter,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';

import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav-list',
  standalone: false,
  templateUrl: './sidenav-list.html',
  styleUrl: './sidenav-list.css',
})
export class SidenavList implements OnInit, OnDestroy {
  isAuth: boolean = false;
  authSubscription!: Subscription;

  constructor(private authService: AuthService) {}

  @Output() closeSidenav = new EventEmitter<void>();

  onClose() {
    this.closeSidenav.emit();
  }

  ngOnInit(): void {
    this.authSubscription = this.authService.authChange.subscribe(
      (authStatus) => {
        this.isAuth = authStatus;
      }
    );
  }

   onLogout(){
    this.authService.logout();
  }


  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }
}
