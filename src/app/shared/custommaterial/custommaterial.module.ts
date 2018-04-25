import { NgModule } from '@angular/core';
import { BrowserAnimationsModule,NoopAnimationsModule } from '@angular/platform-browser/animations';

import { 
        MatButtonModule,
        MatSidenavModule,
        MatExpansionModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatDialogModule,
        MatTabsModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatToolbarModule,
        MatCardModule,
        MatChipsModule,
        MatListModule,
        MatTooltipModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatSortModule,
        MatSnackBarModule,
        MatStepperModule
        } from '@angular/material';
        import {DomSanitizer} from '@angular/platform-browser';
        import {MatIconRegistry} from '@angular/material'
@NgModule({
    imports: [
        BrowserAnimationsModule,
        MatSidenavModule,
        MatExpansionModule,
        NoopAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatDialogModule,
        MatTabsModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatToolbarModule,
        MatCardModule,
        MatChipsModule,
        MatListModule,
        MatTooltipModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatSortModule,
        MatSnackBarModule,
        MatStepperModule
        ],
    exports: [
        BrowserAnimationsModule,
        NoopAnimationsModule,
        MatSidenavModule,
        MatExpansionModule,
        MatButtonModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatTabsModule,
        MatProgressSpinnerModule,
        MatMenuModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatToolbarModule,
        MatCardModule,
        MatChipsModule,
        MatListModule,
        MatTooltipModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatTableModule,
        MatPaginatorModule,
        MatProgressBarModule,
        MatSortModule,
        MatSnackBarModule,
        MatStepperModule
        ]
})
export class ElishCustomMaterialModule { 
    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon(
            'more_vert',
            sanitizer.bypassSecurityTrustResourceUrl('assets/icon/more_vert.svg'));
            iconRegistry.addSvgIcon(
                'facebook',
                sanitizer.bypassSecurityTrustResourceUrl('assets/icon/fb.svg'));
                iconRegistry.addSvgIcon(
                    'linkedin',
                    sanitizer.bypassSecurityTrustResourceUrl('assets/icon/linkedin.svg'));
                    iconRegistry.addSvgIcon(
                        'github',
                        sanitizer.bypassSecurityTrustResourceUrl('assets/icon/github.svg'));
      }
}