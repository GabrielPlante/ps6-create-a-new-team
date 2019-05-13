import { Subject } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class StageService {
    private url='http://localhost:4000/semestres';
    private http :HttpClient;
    stagesSubject = new Subject<any[]>();
    private stages;
    
    addStage(nom: string, prenom:string, pays: string,depart: Date,fin: Date,type_mobilite: string,ville: string,satisfaction_pays: string,satisfaction_enseignement: string,satisfaction_vie: string,reussite: string,ressenti: string, promotion: string,universite:string) {
      const stageObject = {
        prenom: '',
        nom: '',
        pays: '',
        depart: new Date,
        fin: new Date,
        type_mobilite: '',
        ville: '',
        satisfaction_pays: '',
        satisfaction_enseignement: '',
        satisfaction_vie: '',
        reussite: '',
        ressenti: '',
        promotion: '',
        universite: ''
      };
      stageObject.prenom = prenom;
      stageObject.nom = nom;
      stageObject.pays = pays;
      stageObject.depart = depart;
      stageObject.fin = fin;
      stageObject.type_mobilite = type_mobilite;
      stageObject.ville = ville;
      stageObject.satisfaction_pays = satisfaction_pays;
      stageObject.satisfaction_enseignement = satisfaction_enseignement;
      stageObject.satisfaction_vie = satisfaction_vie;
      stageObject.reussite = reussite;
      stageObject.ressenti = ressenti;
      stageObject.promotion = promotion;
      stageObject.universite= universite;
      this.http.post(this.url,stageObject);
      this.http.get(this.url).subscribe(evt => this.stages.add(evt));
      this.emitStageSubject();
      console.log(this.stages)
      console.log(reussite,type_mobilite)
    }
    emitStageSubject() {
        this.stagesSubject.next(this.stages.slice());
    }
  }
  