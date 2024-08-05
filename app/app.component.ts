
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentTheme = 'theme-client-a';

  onClientChange(client: string) {
    switch (client) {
      case 'ClientA':
        this.currentTheme = 'theme-client-a';
        break;
      case 'ClientB':
        this.currentTheme = 'theme-client-b';
        break;
      case 'ClientC':
        this.currentTheme = 'theme-client-c';
        break;
    }
  }
}
