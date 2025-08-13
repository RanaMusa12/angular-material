import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header implements OnInit, OnDestroy{

  isAuth :boolean= false;
  authSubscription !: Subscription;

  constructor(private authService: AuthService){}
  @Output() sidenavToggle = new EventEmitter<void>();
  onToggleSidenav(){

    this.sidenavToggle.emit();

  }

  ngOnInit(): void {

    this.authSubscription=this.authService.authChange.subscribe(authStatus => {
      this.isAuth=authStatus;
    });


  }

  onLogout(){
    this.authService.logout();
  }

  ngOnDestroy(): void {
    this.authSubscription.unsubscribe();
  }

}
