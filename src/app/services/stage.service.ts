import { Subject } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export class StageService {
   stagesSubject = new Subject<any[]>();
    private stages = [
        {
            id: 1,
            nom: 'Bouysse',
            prenom: 'Antoine',
            pays: 'Allemagne',
            depart: new Date(),
            fin: new Date,
            type_mobilite: 'Stage',
            ville: 'Munich',
            satisfaction_pays: '3',
            satisfaction_enseignement: '4',
            satisfaction_vie: '2',
            reussite: 'Oui',
            ressenti: 'Bonne ambiance au sein de l\'entreprise',
            promotion: 'SI3',
            universite: 'Amazon'
        },
        {
            id: 2,
            nom: 'Plante',
            prenom: 'Gabriel',
            pays: 'Canada',
            depart: new Date(),
            fin: new Date,
            type_mobilite: 'Stage',
            ville: 'Montreal',
            satisfaction_pays: '5',
            satisfaction_enseignement: '4',
            satisfaction_vie: '4',
            reussite: 'Oui',
            ressenti: 'Montreal est une très belle ville, les gens sont très acceuillants.',
            promotion: 'SI3',
            universite: 'Apple'
        },
        {
            id: 3,
            nom: 'Romanet',
            prenom: 'Raphaël',
            pays: 'Togo',
            depart: new Date(),
            fin: new Date,
            type_mobilite: 'Semestre',
            ville: 'Lomé',
            satisfaction_pays: '2',
            satisfaction_enseignement: '1',
            satisfaction_vie: '1',
            reussite: 'Oui',
            ressenti: 'Ville atypique mais très charmante.',
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
            universite: 'Uber'
        },
        {
            id: 2,
            nom: 'Lucas',
            prenom: 'Aubron',
            pays: 'Chine',
            depart: new Date(),
            fin: new Date,
            type_mobilite: 'Semestre',
            ville: 'Pekin',
            satisfaction_pays: '4',
            satisfaction_enseignement: '4',
            satisfaction_vie: '3',
            reussite: 'Non',
            ressenti: 'Spécialités culinaires en tout genre, je recommande pour les aventuriers de la gastronomie.',
            promotion: 'SI4',
            universite: 'Université'
        },
        {
          id: 2,
          nom: 'Jupin',
          prenom: 'Alicia',
          pays: 'Chine',
          depart: new Date(),
          fin: new Date,
          type_mobilite: 'Semestre',
          ville: 'Pekin',
          satisfaction_pays: '3',
          satisfaction_enseignement: '4',
          satisfaction_vie: '2',
          reussite: 'Non',
          ressenti: 'J\'ai eu la chance d\'assister à la célébration du nouvel an chinois',
          promotion: 'SI4',
          universite: 'Université'
      },
      {
        id: 2,
        nom: 'Polte',
        prenom: 'Julien',
        pays: 'Chine',
        depart: new Date(),
        fin: new Date,
        type_mobilite: 'Semestre',
        ville: 'Pekin',
        satisfaction_pays: '4',
        satisfaction_enseignement: '4',
        satisfaction_vie: '3',
        reussite: 'Non',
        ressenti: 'Spécialités culinaires en tout genre, je recommande pour les aventuriers de la gastronomie.',
        promotion: 'BAT4',
        universite: 'Université'
    },
    {
      id: 2,
      nom: 'Margre',
      prenom: 'Augustine',
      pays: 'Croatie',
      depart: new Date(),
      fin: new Date,
      type_mobilite: 'Stage',
      ville: 'Zagreb',
      satisfaction_pays: '5',
      satisfaction_enseignement: '3',
      satisfaction_vie: '3',
      reussite: 'Non',
      ressenti: 'Séjour très enrichissant, culture très surprenante aux premiers abords.',
      promotion: 'MAM4',
      universite: 'Starbuck'
  },
  {
    id: 2,
    nom: 'Diou',
    prenom: 'Celine',
    pays: 'Etats-Unis',
    depart: new Date(),
    fin: new Date,
    type_mobilite: 'Semestre',
    ville: 'Washington',
    satisfaction_pays: '3',
    satisfaction_enseignement: '5',
    satisfaction_vie: '1',
    reussite: 'Non',
    ressenti: 'Très bon enseignement.',
    promotion: 'SI4',
    universite: 'Université'
},
{
  id: 2,
  nom: 'Margaro',
  prenom: 'Celia',
  pays: 'Espagne',
  depart: new Date(),
  fin: new Date,
  type_mobilite: 'Semestre',
  ville: 'Barcelone',
  satisfaction_pays: '3',
  satisfaction_enseignement: '1',
  satisfaction_vie: '4',
  reussite: 'Non',
  ressenti: 'Un petit peu ennuyant malgré un très bon acceuil.',
  promotion: 'MAM4',
  universite: 'Université'
},
{
  id: 2,
  nom: 'Deril',
  prenom: 'Marc',
  pays: 'Allemagne',
  depart: new Date(),
  fin: new Date,
  type_mobilite: 'Stage',
  ville: 'Berlin',
  satisfaction_pays: '4',
  satisfaction_enseignement: '3',
  satisfaction_vie: '5',
  reussite: 'Oui',
  ressenti: 'très bonne bière et acceuil très chaleureux!',
  promotion: 'ELEC5',
  universite: 'Arcelor Mittal'
},
{
  id: 2,
  nom: 'Sam',
  prenom: 'Sam',
  pays: 'Italie',
  depart: new Date(),
  fin: new Date,
  type_mobilite: 'Stage',
  ville: 'Pekin',
  satisfaction_pays: '3',
  satisfaction_enseignement: '3',
  satisfaction_vie: '5',
  reussite: 'Oui',
  ressenti: 'Pays surprenant de par sa diversité de cultures.',
  promotion: 'SI4',
  universite: 'Entreprise a'
},
{
  id: 2,
  nom: 'Jopet',
  prenom: 'Frederic',
  pays: 'Japon',
  depart: new Date(),
  fin: new Date,
  type_mobilite: 'Stage',
  ville: 'Tokyo',
  satisfaction_pays: '3',
  satisfaction_enseignement: '5',
  satisfaction_vie: '2',
  reussite: 'Non',
  ressenti: 'Les temples sont magnifiques.',
  promotion: 'GE3',
  universite: 'Entreprise'
},
{
  id: 2,
  nom: 'Lupin',
  prenom: 'Marcel',
  pays: 'France',
  depart: new Date(),
  fin: new Date,
  type_mobilite: 'Semestre',
  ville: 'Paris',
  satisfaction_pays: '5',
  satisfaction_enseignement: '3',
  satisfaction_vie: '1',
  reussite: 'Non',
  ressenti: 'Très belle université.',
  promotion: 'GB4',
  universite: 'Université'
},
{
  id: 2,
  nom: 'Lebon',
  prenom: 'François',
  pays: 'Chine',
  depart: new Date(),
  fin: new Date,
  type_mobilite: 'Stage',
  ville: 'Pekin',
  satisfaction_pays: '4',
  satisfaction_enseignement: '4',
  satisfaction_vie: '3',
  reussite: 'Non',
  ressenti: 'Spécialités culinaires en tout genre, je recommande pour les aventuriers de la gastronomie.',
  promotion: 'SI4',
  universite: 'Entreprise'
}
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