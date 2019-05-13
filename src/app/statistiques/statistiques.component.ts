import { Component, OnInit, Input } from '@angular/core';
import { StageService } from '../services/stage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-statistiques',
  templateUrl: './statistiques.component.html',
  styleUrls: ['./statistiques.component.scss']
})
export class StatistiquesComponent implements OnInit {
  @Input() pays: string;
  @Input() promotion: string;
  @Input() type: string;

  stages: any[];
  stagesSubscription: Subscription;
  listePays: string[];
  listePromo: string[];

  constructor(private stageService: StageService) {
  }


  ngOnInit() {
    this.stagesSubscription = this.stageService.stagesSubject.subscribe(
      (stages: any[]) => {
        this.stages = stages;
      }
    );
    this.pays = 'tous';
    this.promotion = 'tous';
    this.type = 'Stage';
    this.stageService.emitStageSubject();
    this.listePays = [];
    this.refreshPays();
    this.listePromo = [];
    this.refreshPromo();
  }
  addStage(pays: string,depart: Date,fin: Date,type_mobilite: string,ville: string,satisfaction_pays: string, satisfaction_enseignement: string, satisfaction_vie: string,reussite: string,ressenti: string, promotion: string,universite:string) {
    this.stageService.addStage(pays,depart,fin,type_mobilite,ville,satisfaction_pays,satisfaction_enseignement, satisfaction_vie ,reussite,ressenti,promotion,universite);
  }

  refreshPays(){
    for (var i = 0; i != this.stages.length; i++){
      var ajouter = true;
      for (var j = 0; j < i; j++){
        if(this.stages[i].pays === this.stages[j].pays){
          ajouter = false;
          break;
        }
      }
      if(ajouter){
        this.listePays.push(this.stages[i].pays);
      }
    }
  }

  refreshPromo(){
    for (var i = 0; i != this.stages.length; i++){
      var ajouter = true;
      for (var j = 0; j < i; j++){
        if(this.stages[i].promotion === this.stages[j].promotion){
          ajouter = false;
          break;
        }
      }
      if(ajouter){
        this.listePromo.push(this.stages[i].promotion);
      }
    }
  }

  getReussite() {
    var i = 0;
    var reussite = 0;
    this.stages.forEach(stage => {
      if((this.pays === 'tous' || this.pays === stage.pays) && (this.promotion === 'tous' || this.promotion == stage.promotion) && this.type === stage.type_mobilite){
      i += 1;
      if (stage.reussite === 'Oui'){
        reussite += 1;
      }
    }
    });
    if (i === 0){
      return '0 résultats';
    }
    return reussite/i;
  }
  getSatisfactionEnseign() {
    var i = 0;
    var satisfaction = 0;
    this.stages.forEach(stage => {
      if((this.pays === 'tous' || this.pays === stage.pays) && (this.promotion === 'tous' || this.promotion == stage.promotion) && this.type === stage.type_mobilite){
      i += 1;
      satisfaction += parseInt(stage.satisfaction_enseignement)||0;
    }
    });
    if (i === 0){
      return '0 résultats';
    }
    return satisfaction/i;
  }
  getSatisfactionPays() {
    var i = 0;
    var satisfaction = 0;
    this.stages.forEach(stage => {
      if((this.pays === 'tous' || this.pays === stage.pays) && (this.promotion === 'tous' || this.promotion == stage.promotion) && this.type === stage.type_mobilite){
      i += 1;
      satisfaction += parseInt(stage.satisfaction_pays)||0;
    }
    });
    if (i === 0){
      return '0 résultats';
    }
    return satisfaction/i;
  }
 getSatisfactionVie() {
    var i = 0;
    var satisfaction = 0;
    this.stages.forEach(stage => {
      if((this.pays === 'tous' || this.pays === stage.pays) && (this.promotion === 'tous' || this.promotion == stage.promotion) && this.type === stage.type_mobilite){
      i += 1;
      satisfaction += parseInt(stage.satisfaction_vie)||0;
    }
    });
    if (i === 0){
      return '0 résultats';
    }
    return satisfaction/i;
  }

  getNbr(){
    var i = 0;
    this.stages.forEach(stage => {
      if((this.pays === 'tous' || this.pays === stage.pays) && (this.promotion === 'tous' || this.promotion == stage.promotion) && this.type === stage.type_mobilite){
        i += 1;
      }
    });
    return i;
  }
}
