import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Router } from '@angular/router';
import { StageService } from '../services/stage.service';

@Component({
  selector: 'app-edit-stages',
  templateUrl: './edit-stages.component.html',
  styleUrls: ['./edit-stages.component.scss']
})
export class EditStagesComponent implements OnInit {

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
    const satisfaction = form.value['satisfaction'];
    const reussite = form.value['reussite'];
    const ressenti = form.value['ressenti'];
    this.stageService.addStage(pays,depart,fin,type_mobilite,ville,satisfaction,reussite,ressenti);
    this.router.navigate(['/stages']);
  }

}
