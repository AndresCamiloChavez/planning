import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../../services/socket.service';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { StorageService } from '../../../core/storage/storage.service';
import {
  AngularFirestore,
  AngularFirestoreDocument,
} from '@angular/fire/compat/firestore';
import { User } from '../../../models/user';

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
    private storageService: StorageService,
    private afs: AngularFirestore
  ) {}

  ngOnInit(): void {
    this.socketService.getSocket().connect();
  }
  send() {
    this.socketService.getSocket().emit('mensaje', 'desde angular');
  }

  login() {
    let userLogin: User = {
      username: '',
      email: '',
      photo: '',
      uid: '',
      vote: 0
    };
    this.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((value) => {
        const userCollection = this.afs.collection<User>('users');
        this.afs
          .collection<User>('users', (ref) =>
            ref.where('uid', '==', value.user?.uid ?? 1)
          )
          .valueChanges()
          .subscribe((users) => {
            if (!(users.length > 0)) {
             userLogin = {
                uid: value.user?.uid ?? '1',
                email: value.user?.email ?? 'noEmail@email.com',
                username: value.user?.displayName ?? 'anonymous',
                vote: 0,
                photo:
                  value.user?.photoURL ??
                  'https://icon-library.com/images/icon-person/icon-person-4.jpg',
              };
              userCollection.add(userLogin);
            }
            this.storageService.store('user', btoa(JSON.stringify(userLogin)));
          });
        this.router.navigate(['/auth/started']);
      });
  }
}
