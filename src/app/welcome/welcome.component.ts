import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-welcome',
  imports: [RouterLink],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
  title: string = 'satyam';
  username = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.username = this.route.snapshot.params['name'];
  }
  
}
