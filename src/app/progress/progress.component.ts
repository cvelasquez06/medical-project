import {Component, Input, OnInit} from '@angular/core';
import {ProgressService} from '../service/progress.service';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  status = false;

  constructor(private progress: ProgressService) { }

  ngOnInit() {
    this.progress.statusProgress.subscribe(loading => this.status = loading );
  }

}
