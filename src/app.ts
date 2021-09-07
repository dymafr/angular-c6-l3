import {Component, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

// Il faut importer notre directive afin de la déclarer dans le module :
import {SurlignerDirective} from './shared/surligner.directive';


@Component({
  selector: 'my-app',
  template: `
    <span monSurlignage>Je suis surligné</span>
  `,
})

export class AppComponent {
  constructor() {}
}

// Ne pas oublier de déclarer notre directive dans le module :
@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, SurlignerDirective ],
  bootstrap: [ AppComponent ] 
})
export class AppModule {}