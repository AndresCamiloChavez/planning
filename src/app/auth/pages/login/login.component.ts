import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../../services/socket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private socketService: SocketService) { }

  ngOnInit(): void {
    this.socketService.getSocket().connect();
  }
  send(){
    this.socketService.getSocket().emit('mensaje', 'desde angular')
  }
}
