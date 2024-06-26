import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private location: Location
    ) {
    this.platform.backButton.subscribeWithPriority(10, () => {
      if(this.location.isCurrentPathEqualTo('/home')){
        navigator['app'].exitApp();
      } else{
        this.location.back();
      }
    });

    this.platform.ready().then(() => {
      // this.statusBar.styleDefault();
      // this.splashScreen.hide();

      this.checkDarkTheme();
  });
  }

  checkDarkTheme() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    if ( prefersDark.matches ) {
        document.body.classList.toggle( 'dark' );
    }
}
}
