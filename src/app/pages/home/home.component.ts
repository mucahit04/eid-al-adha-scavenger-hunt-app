import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../../services/progress.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  locations = [1, 2, 3];
  completed: { [key: string]: boolean } = {};

  constructor(private progress: ProgressService, private router: Router) {}

  async ngOnInit() {
    this.completed = await this.progress.getCompleted();
  }

  goToLocation(locId: number) {
    this.router.navigate(['/location', locId]);
  }
}
