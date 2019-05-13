import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { StageService } from '../services/stage.service';

@Component({
  selector: 'app-partager',
  templateUrl: './partager.component.html',
  styleUrls: ['./partager.component.scss']
})
export class PartagerComponent implements OnInit {

  constructor(private stageService: StageService,
    private router: Router) { }

    
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log(form.value)
    const pays = form.value['pays'];
    const depart = form.value['depart'];
    const fin = form.value['fin'];
    const type_mobilite = form.value['type_mobilite'];
    const ville = form.value['ville'];
    const satisfaction_pays = form.value['satisfaction_pays'];
    const satisfaction_enseignement = form.value['satisfaction_enseignement'];
    const satisfaction_vie = form.value['satisfaction_vie'];
    const reussite = form.value['reussite'];
    const ressenti = form.value['ressenti'];
    const promotion = form.value['promotion'];
    const universite = form.value['universite'];
    this.stageService.addStage(pays,depart,fin,type_mobilite,ville,satisfaction_pays,satisfaction_enseignement, satisfaction_vie ,reussite,ressenti,promotion,universite);
    this.router.navigate(['/stages']);
  }

    
}