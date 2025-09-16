import { provideRouter } from "@angular/router";
import { routes } from "./app/app.routes";
import { appConfig } from "./app/app.config";
import { bootstrapApplication } from "@angular/platform-browser";
import { Main } from './app/main/main';

bootstrapApplication(Main, appConfig).catch(err => console.error(err));