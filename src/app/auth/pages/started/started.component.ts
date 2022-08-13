import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-started',
  templateUrl: './started.component.html',
  styleUrls: ['./started.component.css']
})
export class StartedComponent implements OnInit {
  
  display: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  showDialog() {
      this.display = true;
  }

}
