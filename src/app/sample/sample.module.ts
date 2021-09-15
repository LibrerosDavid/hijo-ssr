import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [SampleComponent],
  imports: [
    CommonModule,
    FormsModule,

  ],
  exports :[
    SampleComponent
  ]
  

})
export class SampleModule { }
