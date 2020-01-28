import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BladeElementComponent } from "./blade-element/blade-element.component";
import { BladesContainerComponent } from './blades-container/blades-container.component';

@NgModule({
  imports: [CommonModule],
  declarations: [BladeElementComponent, BladesContainerComponent],
  exports: [BladeElementComponent, BladesContainerComponent]
})
export class BladeModule {}
