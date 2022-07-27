import { NgModule } from '@angular/core';
import { LegoButtonModule } from './lego-button.module';
import { LegoGreetModule } from './lego-greet.module';
import { LegoLinkModule } from './lego-link.module';
import { LegoTextfieldModule } from './lego-textfield.module';


@NgModule({
  imports: [LegoButtonModule, LegoGreetModule, LegoLinkModule, LegoTextfieldModule],
  exports: [LegoButtonModule, LegoGreetModule, LegoLinkModule, LegoTextfieldModule]
})
export class LegoModule {}