import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-started',
  templateUrl: './started.component.html',
  styleUrls: ['./started.component.css']
})
export class StartedComponent implements OnInit {
  
  display: boolean = false;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  showDialog() {
      this.display = true;
  }
  craeteRoom(){
    this.router.navigate(['/home/room']);
  }

}
