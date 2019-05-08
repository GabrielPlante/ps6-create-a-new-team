import { Component, OnInit, Input } from '@angular/core';
import { AppareilService } from '../services/appareil.service';
import { StageService } from '../services/stage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.scss']
})
export class StagesComponent implements OnInit {
  @Input() pays: string;
  @Input() dateDepart: Date;
  @Input() dateFin: Date;
  @Input() mobilite: string;
  @Input() ville: string;
  @Input() satisfaction: string;
  @Input() ressenti: string;
  @Input() reussite: string;
  @Input() index: number;
  @Input() id: number;
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
  getReussite() {
    return this.reussite;
  }
  getColor() {

    if(this.reussite === 'Oui') {

      return 'green';

    } else if(this.reussite === 'Non') {

      return 'red';

    }
  

  }
  

}
