import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
/*
export class IssueService {
  uri = 'http://localhost:3000';
  constructor(private http: HttpClient) {
  }
  addIssue(title, responsible, description, severity) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity
    };
    return this.http.post(`${this.uri}/issues/add`, issue);
  }
  getIssues() {
    return this.http.get(`${this.uri}/issues`);
  }
  getIssueById(id) {
    return this.http.get(`${this.uri}/issues/${id}`);
  }
  updateIssue(id, title, responsible, description, severity, status) {
    const issue = {
      title: title,
      responsible: responsible,
      description: description,
      severity: severity,
      status: status
    };
    return this.http.post(`${this.uri}/issues/update/${id}`, issue);
  }
  deleteIssue(id) {
    return this.http.get(`${this.uri}/issues/delete/${id}`);
  }
}
*/

export class StageService {
    private url='http://localhost:3000/api/semestres';
    stagesSubject = new Subject<any[]>();
    private stages = [];

    //constructor(private http: HttpClient){
    //}

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
      this.http.get(this.url).subscribe(evt => this.stages.push(evt));
      this.emitStageSubject();
      console.log(this.stages)
      console.log(reussite,type_mobilite)
    }
    emitStageSubject() {
        this.stagesSubject.next(this.stages.slice());
    }
  }
  