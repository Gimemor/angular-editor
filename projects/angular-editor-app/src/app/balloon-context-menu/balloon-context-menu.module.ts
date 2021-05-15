import {NgModule} from '@angular/core';
import { BalloonContextMenuDirective} from './balloon-context-menu.directive';
import {Hotkey, HotkeyModule, HotkeysService} from 'angular2-hotkeys';
``
@NgModule({
  imports: [HotkeyModule],
  exports: [BalloonContextMenuDirective],
  declarations: [BalloonContextMenuDirective],
  providers: [],
})
export class BalloonContextMenuModule {


}
