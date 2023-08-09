import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css'],
})
export class SelectComponent {
  @Input() title: string = '';
  @Input() data: any[] = [];
  @Input() select: string='';

  
  @Output() selectedData=new EventEmitter();
  constructor() {}
  ngOnInit(): void {}

  detectChange(event: any) {
    this.selectedData.emit(event);
  }
}
