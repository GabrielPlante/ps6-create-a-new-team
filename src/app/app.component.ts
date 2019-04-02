import { Component} from '@angular/core';
import { AppareilService } from './services/appareil.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isAuth = false;
  
  lastUpdate = new Date();

  appareilOne = 'Machine à laver';

  appareilTwo = 'Frigo';

  appareilThree = 'Ordinateur';

  constructor() {
    setTimeout(
      () => {
        this.isAuth = true;
      }, 4000
    );
  }
  
}
