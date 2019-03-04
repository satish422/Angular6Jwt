import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatToolbarModule, MatTableModule  } from '@angular/material';
import { MatCardModule, MatFormFieldModule, MatProgressSpinnerModule, MatInputModule } from '@angular/material';

@NgModule({
imports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule,
     MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatTableModule ],
exports: [CommonModule, MatToolbarModule, MatButtonModule, MatCardModule,
     MatFormFieldModule, MatProgressSpinnerModule, MatInputModule, MatTableModule ],
})
export class CustomMaterialModule { }