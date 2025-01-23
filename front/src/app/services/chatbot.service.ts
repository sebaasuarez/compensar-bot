// src/app/chatbot/services/chatbot.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatbotService {
  // Ajusta la URL a la de tu backend real
  private baseUrl = 'http://localhost:3000/api/chatbot';

  constructor(private http: HttpClient) {}

  createSession(): Observable<{ sessionId: string }> {
    return this.http.post<{ sessionId: string }>(`${this.baseUrl}/session`, {});
  }

  sendMessage(sessionId: string, message: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/send-message`, {
      sessionId,
      message
    });
  }
}
