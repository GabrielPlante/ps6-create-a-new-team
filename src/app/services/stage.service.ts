import { Subject } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export class StageService {
<<<<<<< HEAD
    private url='http://localhost:4000/semestres';
    private http :HttpClient;
    stagesSubject = new Subject<any[]>();
    private stages;
    
    addStage(nom: string, prenom:string, pays: string,depart: Date,fin: Date,type_mobilite: string,ville: string,satisfaction_pays: string,satisfaction_enseignement: string,satisfaction_vie: string,reussite: string,ressenti: string, promotion: string,universite:string) {
      const stageObject = {
        prenom: '',
        nom: '',
=======
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
            ressenti: 'Montreal est une très belle ville, les gens sont très acceuillants, et le pays est très chaleureux. On peux très facilement aller faire du ski à 1h de voiture. Je suis allé voir les chutes du Niagara, c est très beau, je suis aussi allé faire un road trip pendant 5 jours ! Par contre le billet est assez cher et la vie y est plus onéreuse qu en france.',
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
>>>>>>> 5df2330da2abed810024dbcd1f40bc1c13a59c47
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
<<<<<<< HEAD
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
=======
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
>>>>>>> 5df2330da2abed810024dbcd1f40bc1c13a59c47
    }
    emitStageSubject() {
        this.stagesSubject.next(this.stages.slice());
    }
  }
  