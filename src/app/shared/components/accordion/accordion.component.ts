import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
  @Input() title?: string;
  @Input() imageUrl: string | null = null;

  @Output() readonly openAccordion = new EventEmitter<boolean>()

  isOpen: boolean = false;

  changeIsOpen() {
    this.isOpen = !this.isOpen;
    this.openAccordion.emit(this.isOpen);
  }
}
