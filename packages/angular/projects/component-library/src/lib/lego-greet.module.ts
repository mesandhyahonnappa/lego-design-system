import { NgModule } from '@angular/core';
import { LegoGreet } from './stencil-generated/components';

@NgModule({
  declarations: [LegoGreet],
  exports: [LegoGreet],
})
export class LegoGreetModule {}