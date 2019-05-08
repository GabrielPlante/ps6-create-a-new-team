import { Component, OnInit } from '@angular/core';
import { StageService } from '../services/stage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.scss']
})
export class StatistiquesComponent implements OnInit {
  stages: any[];
  stagesSubscription: Subscription;

  constructor(private stageService: StageService) { }

  ngOnInit() {
    this.stagesSubscription = this.stageService.stagesSubject.subscribe(
      (stages: any[]) => {
        this.stages = stages;
      }
    );
    this.stageService.emitStageSubject();
  }
  addStage(pays: string,depart: Date,fin: Date,type_mobilite: string,ville: string,satisfaction: string,reussite: string,ressenti: string) {
    this.stageService.addStage(pays, depart, fin, type_mobilite, ville, satisfaction, reussite, ressenti);
  }
  getReussite() {
    var i = 0;
    var reussite = 0;
    this.stages.forEach(stage => {
      i += 1;
      if (stage.reussite === 'oui'){
        reussite += 1;
      }
    });
    return reussite/i;
  }
}
