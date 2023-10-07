import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, RouterLink } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mdcomp1',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    RouterLink,
  ],
  
  templateUrl: './mdcomp1.component.html',
  styleUrls: ['./mdcomp1.component.css']
})

export class Mdcomp1Component {
  route: ActivatedRoute = inject(ActivatedRoute);
  greeting = "Nothing";
  @Input() inputg! : any[];

  //ig="Empty";

  constructor(){
    
    this.greeting=this.route.snapshot.params['greeting'];
  }
}
