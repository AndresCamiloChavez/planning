import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../../services/socket.service';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { StorageService } from '../../../core/storage/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private socketService: SocketService,
    private auth: AngularFireAuth,
    private router: Router,
    private storageService: StorageService
  ) {}

  ngOnInit(): void {
    this.socketService.getSocket().connect();
  }
  send() {
    this.socketService.getSocket().emit('mensaje', 'desde angular');
  }

  login() {
    this.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((value) => {
        this.storageService.store('user',btoa( JSON.stringify(value.user)));
        this.router.navigate(['/auth/started']);
      });
  }
}
