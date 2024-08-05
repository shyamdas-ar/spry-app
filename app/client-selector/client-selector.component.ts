
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-client-selector',
  templateUrl: './client-selector.component.html',
  styleUrls: ['./client-selector.component.css']
})
export class ClientSelectorComponent {
  @Output() clientChanged = new EventEmitter<string>();

  onClientChange(event: any) {
    this.clientChanged.emit(event.target.value);
  }
}

