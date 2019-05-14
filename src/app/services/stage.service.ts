import { Subject } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export class StageService {
   stagesSubject = new Subject<any[]>();
    private stages = [
        {
            id: 1,
            nom: 'Bouysse',
            prenom: 'Antoine',
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
            promotion: 'SI3',
            universite: 'Université'
        },
        {
            id: 2,
            nom: 'Bouysse',
            prenom: 'Antoine',
            pays: 'Canada',
            depart: new Date(),
            fin: new Date,
            type_mobilite: 'Stage',
            ville: 'Montreal',
            satisfaction_pays: '5',
            satisfaction_enseignement: '4',
            satisfaction_vie: '4',
            reussite: 'Oui',
            ressenti: 'Montreal est une très belle ville, les gens sont très acceuillants',
            promotion: 'SI3',
            universite: 'Université'
        },
        {
            id: 3,
            nom: 'Bouysse',
            prenom: 'Antoine',
            pays: 'Togo',
            depart: new Date(),
            fin: new Date,
            type_mobilite: 'Semestre',
            ville: 'Lomé',
            satisfaction_pays: '2',
            satisfaction_enseignement: '1',
            satisfaction_vie: '1',
            reussite: 'Oui',
            ressenti: 'C T NUL',
            promotion: 'MAM4',
            universite: 'Université'
        },
        {
            id: 2,
            nom: 'Bouysse',
            prenom: 'Antoine',
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
            promotion: 'ELEC4',
            universite: 'Université'
        },
        {
            id: 2,
            nom: 'Bouysse',
            prenom: 'Antoine',
            pays: 'Chine',
            depart: new Date(),
            fin: new Date,
            type_mobilite: 'Semestre',
            ville: 'Pekin',
            satisfaction_pays: '4',
            satisfaction_enseignement: '4',
            satisfaction_vie: '3',
            reussite: 'Non',
            ressenti: 'Ching chong',
            promotion: 'SI4',
            universite: 'Université'
        },

    ];
    
    addStage(nom: string, prenom: string,pays: string,depart: Date,fin: Date,type_mobilite: string,ville: string,satisfaction_pays: string,satisfaction_enseignement: string,satisfaction_vie: string,reussite: string,ressenti: string, promotion: string,universite:string) {
      const stageObject = {
        id: 0,
        nom: '',
        prenom: '',
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
        stageObject.nom = nom;
        stageObject.prenom = prenom;
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
        stageObject.universite= universite;
        this.stages.push(stageObject);
        this.emitStageSubject();
        console.log(this.stages)
        console.log(reussite,type_mobilite)
    }
    emitStageSubject() {
        this.stagesSubject.next(this.stages.slice());
        
      }
    
  }