import { Component, OnInit } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { Subscription } from 'rxjs/Subscription';
import { StageService } from '../services/stage.service';

@Component({
  selector: 'app-stage-view',
  templateUrl: './stage-view.component.html',
  styleUrls: ['./stage-view.component.scss']
})
export class StageViewComponent implements OnInit {
  stages: any[];
  stageSubscription: Subscription;

  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  constructor(private stageService: StageService) { }

  ngOnInit() {
    this.stageSubscription = this.stageService.stagesSubject.subscribe(
      (stages: any[]) => {
        this.stages = stages;
      }
    );
    this.stageService.emitStageSubject();
  }

}
