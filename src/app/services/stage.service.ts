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
            satisfaction: '3',
            reussite: 'oui',
            ressenti: 'c t bien'
        },
        {
            id: 2,
            pays: 'Canada',
            depart: new Date(),
            fin: new Date,
            type_mobilite: 'Stage',
            ville: 'Vancouver',
            satisfaction: '4',
            reussite: 'non',
            ressenti: 'beau froid et raté'
        },

    ];
    
    addStage(pays: string,depart: Date,fin: Date,type_mobilite: string,ville: string,satisfaction: string,reussite: string,ressenti: string) {
      const stageObject = {
        id: 0,
        pays: '',
        depart: new Date,
        fin: new Date,
        type_mobilite: '',
        ville: '',
        satisfaction: '',
        reussite: '',
        ressenti: ''
      };
        stageObject.pays = pays;
        stageObject.depart = depart;
        stageObject.fin = fin;
        stageObject.type_mobilite = type_mobilite;
        stageObject.ville = ville;
        stageObject.satisfaction = satisfaction;
        stageObject.reussite = reussite;
        stageObject.ressenti = ressenti;
        stageObject.id = this.stages[(this.stages.length - 1)].id + 1;
        this.stages.push(stageObject);
        this.emitStageSubject();
        console.log(this.stages)
        console.log(reussite,type_mobilite)
    }
    emitStageSubject() {
        this.stagesSubject.next(this.stages.slice());
        
      }
    
  }
  