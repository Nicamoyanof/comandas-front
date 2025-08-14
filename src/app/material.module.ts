import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatListModule } from '@angular/material/list';
import { DialogModule } from '@angular/cdk/dialog';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {
  MAT_DIALOG_DATA,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatDialogModule,
  MatDialogRef,
} from '@angular/material/dialog';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSortModule} from '@angular/material/sort';
import {MatTabsModule} from '@angular/material/tabs';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';
import '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
// import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import {MatGridListModule} from '@angular/material/grid-list';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
// import { MatGoogleMapsAutocompleteComponent } from '@angular-material-extensions/google-maps-autocomplete';
// import { NgxSpinner, NgxSpinnerModule } from 'ngx-spinner';
// import { NgxColorsModule } from 'ngx-colors';


@NgModule({
  declarations: [],
  imports: [CommonModule],
  exports: [
    MatTooltipModule,
    MatExpansionModule,
    MatIconModule,
    MatSidenavModule,
    MatBadgeModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatMenuModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatDividerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatRadioModule,
    DragDropModule,
    MatListModule,
    DialogModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatButtonToggleModule,
    MatDialogModule,
    MatStepperModule,
    MatSortModule,
    MatTabsModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatToolbarModule,
    MatGridListModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: { hasBackdrop: true } },
    {
      provide: MAT_DIALOG_DATA,
      useValue: {}
    },
    {
      provide: MatDialogRef,
      useValue: {},
    },
  ],

})
export class MaterialModule {}
