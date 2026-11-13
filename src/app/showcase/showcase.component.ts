import { Component } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent {
  appName = 'NBA 2K20 Tools';
  appVersion = 'v1.0.0';
  description = 'Mobile Player Updater for NBA 2K20';
}