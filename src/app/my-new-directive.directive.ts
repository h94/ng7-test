import { Directive , Input, EventEmitter , Output, AfterViewInit , ElementRef , OnChanges , SimpleChanges} from '@angular/core';
import { of } from 'rxjs';

@Directive({
  selector: '[appMyNewDirective]'
})
export class MyNewDirectiveDirective implements AfterViewInit, OnChanges {
  private el: HTMLElement ;
  @Input ('appMyNewDirective') option: any;

  @Output() toggle = new EventEmitter<any>();

  constructor(et: ElementRef) {
    console.log('appMyNewDirective');
    et.nativeElement.style.backgroundColor = 'yellow';
    console.log(et.nativeElement);
   }
   ngAfterViewInit(): void {
    console.log(this.el);
    console.log(this.option);
   }
   ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    if (!changes.option.firstChange) {
      this.toggle.emit(100 * changes.option.previousValue);

     }
   }
}
