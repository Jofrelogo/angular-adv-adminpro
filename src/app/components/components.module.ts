import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@Angular/forms";

import { ChartsModule } from 'ng2-charts';

//Componentes
import { IncrementadorComponent } from './incrementador/incrementador.component';
import { DonaComponent } from './dona/dona.component';

@NgModule({
  declarations: [IncrementadorComponent, DonaComponent],
  exports: [
    IncrementadorComponent,
    DonaComponent,
  ],
  imports: [
    ChartsModule,
    CommonModule,
    FormsModule,
  ],
  
})
export class ComponentsModule { }
