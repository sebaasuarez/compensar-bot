import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

// Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { ChatbotService } from '../services/chatbot.service';
import { MockChatbotService } from '../services/mock-chatbot.service';


@Component({
  selector: 'app-chatbot-window',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
  ],
  templateUrl: './chatbot-window.component.html',
  styleUrl: './chatbot-window.component.scss'
})
export class ChatbotWindowComponent implements OnInit  {

  sessionId: string | null = null;
  messages: { sender: 'user' | 'bot'; text: string }[] = [];
  userInput = '';
  isLoading = false;
  isChatOpen = false;

  toggleChat(): void {
    this.isChatOpen = !this.isChatOpen;
  }

  constructor(private chatbotService: ChatbotService, private mockChatbotService: MockChatbotService) {}

  ngOnInit(): void {
    this.chatbotService.createSession().subscribe({
      next: (res) => {
        this.sessionId = res.sessionId;
      },
      error: (err) => {
        console.error('Error creando sesión:', err);
      }
    });

    this.mockChatbotService.loadMockData().subscribe({
      next: () => {
        console.log('Mock data loaded!');
      }
    });
  }

  sendMessage(): void {
    if (!this.userInput.trim()) return;
    this.messages.push({ sender: 'user', text: this.userInput });
    
    const userMsg = this.userInput;
    this.userInput = '';
    this.isLoading = true;

    // Simulamos "procesar" un momento
    setTimeout(() => {
      const botReply = this.mockChatbotService.sendMessage(userMsg);
      this.messages.push({ sender: 'bot', text: botReply });
      this.isLoading = false;
    }, 500);
  }

  // sendMessage(): void {
  //   console.log('sendMessage');
  //   // if (!this.userInput.trim() || !this.sessionId) {
  //   //   return;
  //   // }

  //   this.messages.push({ sender: 'user', text: this.userInput });
  //   const message = this.userInput;
  //   this.userInput = '';
  //   this.isLoading = true;

  //   console.log(this.messages);

  //   // Llamada al endpoint de send-message
  //   this.chatbotService.sendMessage(this.sessionId = '', message).subscribe({
  //     next: (response) => {

  //       const watsonOutput = response?.output?.generic || [];
  //       watsonOutput.forEach((out: any) => {
  //         this.messages.push({
  //           sender: 'bot',
  //           text: out.text || JSON.stringify(out)
  //         });
  //       });
  //       this.isLoading = false;
  //     },
  //     error: (err) => {
  //       console.error('Error enviando mensaje:', err);
  //       this.isLoading = false;
  //     }
  //   });
  // }

  chatFontSize = 14;

  increaseFont(): void {
    this.chatFontSize += 2;
  }

  decreaseFont(): void {
    if (this.chatFontSize > 6) {
      this.chatFontSize -= 2;
    }
  }

  closeChat(): void {
    this.isChatOpen = false;
  }

}
