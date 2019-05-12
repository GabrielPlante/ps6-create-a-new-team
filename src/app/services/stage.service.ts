import { Subject } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export class StageService {
   stagesSubject = new Subject<any[]>();
    private stages = [
        {
            id: 1,
            pays: 'France',
            depart: new Date(),
            fin: new Date,
            type_mobilite: 'Stage',
            ville: 'Arnas',
            satisfaction_pays: '3',
            satisfaction_enseignement: '4',
            satisfaction_vie: '2',
            reussite: 'Oui',
            ressenti: 'c t bien',
            promotion: 'SI3'
        },
        {
            id: 2,
            pays: 'Canada',
            depart: new Date(),
            fin: new Date,
            type_mobilite: 'Stage',
            ville: 'Vancouver',
            satisfaction_pays: '4',
            satisfaction_enseignement: '4',
            satisfaction_vie: '3',
            reussite: 'Non',
            ressenti: 'beau froid et raté',
            promotion: 'ELEC4'
        },

    ];
    
    addStage(pays: string,depart: Date,fin: Date,type_mobilite: string,ville: string,satisfaction_pays: string,satisfaction_enseignement: string,satisfaction_vie: string,reussite: string,ressenti: string, promotion: string) {
      const stageObject = {
        id: 0,
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
        promotion: ''
      };
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
        stageObject.id = this.stages[(this.stages.length - 1)].id + 1;
        stageObject.promotion = promotion;
        this.stages.push(stageObject);
        this.emitStageSubject();
        console.log(this.stages)
        console.log(reussite,type_mobilite)
    }
    emitStageSubject() {
        this.stagesSubject.next(this.stages.slice());
        
      }
    
  }
  