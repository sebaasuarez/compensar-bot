import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotWindowComponent } from './chatbot-window/chatbot-window.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    ChatbotWindowComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
