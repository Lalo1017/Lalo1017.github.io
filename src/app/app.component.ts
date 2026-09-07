import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  
  isAboutVisible = signal(false);
  showElement(val : boolean) {
    this.isAboutVisible.set(val);
  }

}