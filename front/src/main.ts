import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';

import { appConfig } from './app/app.config';

bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(
        BrowserAnimationsModule, 
        HttpClientModule,
        MatIconModule,
      )
    ]
  }
).catch((err) => console.error(err));
