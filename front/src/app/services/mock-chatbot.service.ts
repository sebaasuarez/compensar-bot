

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

interface MockResponse {
    intents: string[];
    botReply: string;
  }
  
  interface MockData {
    responses: MockResponse[];
  }
  
  @Injectable({
    providedIn: 'root'
  })
export class MockChatbotService {
    private mockData: MockData | null = null;

    constructor(private http: HttpClient) {}
  
    /**
     * Carga el JSON de assets/mockConversation.json (solo una vez).
     * Retorna un Observable<void> cuando ya esté listo.
     */
    loadMockData(): Observable<void> {
      if (this.mockData) {
        // Si ya cargamos antes, no repetimos
        return of(undefined);
      }
  
      return this.http.get<MockData>('assets/mockConversation.json')
        .pipe(
          map((data) => {
            this.mockData = data;
            console.log(this.mockData);
          }),
          catchError((err) => {
            console.error('Error conectado al servicio de IBM:', err);
            // Retornamos un Observable vacío para no romper la app
            return of(undefined);
          })
        );
    }
  
    /**
     * "Envía" mensaje al bot (mock). Busca en el JSON la mejor coincidencia
     * y retorna la respuesta encontrada.
     */
    sendMessage(userMessage: string): string {
      if (!this.mockData) {
        return 'Lo siento, al parecer tenemos unas fallas técnicas que estamos resolviendo lo más pronto posible para que sigamos conversando para ayudarte a resolver todas tus dudas.';
      }
  
      const userMsgLower = userMessage.toLowerCase();
      for (const item of this.mockData.responses) {
        // Revisamos si en 'item.intents' aparece una palabra incluida
        if (item.intents.some(intent => userMsgLower.includes(intent.toLowerCase()))) {
          return item.botReply;
        }
      }
      return 'Actualmente me encuentro en etapa de entrenamiento, es posible que no logre entender lo que me preguntas. Te prometo que pronto estaré mucho más entrenado para resolver todas tus inquietudes.';
    }
}
