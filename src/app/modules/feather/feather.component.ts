import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fi',
  templateUrl: 'feather.component.html',
  styleUrls: ['feather.component.css']
})

export class FeatherComponent implements OnInit {
  @Input() public name: string;

  ngOnInit() {
    if (!this.name) { throw new Error('Missing name for Feather Component'); }
  }

}
