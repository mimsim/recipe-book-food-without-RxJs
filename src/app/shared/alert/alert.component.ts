import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @Input() message: string;
  @Output() close = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  onClose(){
    this.close.emit();
  }

}
