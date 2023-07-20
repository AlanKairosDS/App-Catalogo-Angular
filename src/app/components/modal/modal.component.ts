import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() header: string | undefined;
  @Input() image: string | undefined;
  @Input() message: string | undefined;
  @Input() buttonSuccess: boolean | undefined;
  @Input() msgButtonSuccess: string | undefined;
  @Input() buttonError: boolean | undefined;
  @Input() msgButtonError: string | undefined;

  constructor() {}
}
