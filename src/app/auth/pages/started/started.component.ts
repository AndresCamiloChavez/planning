import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';
import { Room } from '../../../models/room';
import { StorageService } from '../../../core/storage/storage.service';

@Component({
  selector: 'app-started',
  templateUrl: './started.component.html',
  styleUrls: ['./started.component.css']
})
export class StartedComponent implements OnInit {
  
  display: boolean = false;
  constructor(private router: Router, private socketService: SocketService,private storageService:  StorageService) { }

  ngOnInit(): void {
    this.socketService.getSocket().connect();
  }

  showDialog() {
      this.display = true;
  }
  craeteRoom(){
    const room: Room = {
      code: 'ABC123',
      users: [
        JSON.parse(atob(this.storageService.retrieve('user')))
      ]
    }
    this.socketService.socket.emit('createRoom', room );
    // this.router.navigate(['/home/room']);
  }

}
