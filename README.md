### Angular-Material
In this Tutorial, We will create a static website using Angular Materials framework.

[Click here for Video Tutorials !](https://www.youtube.com/watch?v=Tua9Cbw_YgU&list=PLp0TENYyY8lF1I4EgKLcwRvxy820BgWpd)

#### Objective:
This setup will be used in building more advance desktop, progressive web apps and mobile apps.

Angular Material framework provide all necessary tools to develop comprehensive, modern UI components.
Angular Material UI elements are very fast, consistent, small in size and provide a uniform look across web, mobile and desktop applications.

#### Setup: 
https://material.angular.io/

#### Step 1:
npm install --save @angular/material @angular/cdk

#### Step 2:
npm install --save @angular/animations

Note: @angular/animations uses the WebAnimation API that isn't supported by all browsers yet. If you want to support Material component animations in these browsers, you'll have to include a polyfill.
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [BrowserAnimationsModule],
  ...
})
export class PizzaPartyAppModule { }
If you don't want to add another dependency to your project, you can use the NoopAnimationsModule.
import {NoopAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  ...
  imports: [NoopAnimationsModule],
  ...
})
export class PizzaPartyAppModule { }

#### Step 3:
Import the component modules
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule],
  exports: [MatButtonModule, MatCheckboxModule],
})
export class MyOwnCustomMaterialModule { }

#### Step 4:
Add this to styles.css or copy over css files to your assets directory

@import "~@angular/material/prebuilt-themes/indigo-pink.css";

#### Step 5:
Gesture Support
npm install --save hammerjs

#### Step 6:
(Optional): Add Material Icons
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

note: In case of developing for offline desktop apps, it's recommended to download Google Material Icons to assets directory and use SVGIcon instead.
