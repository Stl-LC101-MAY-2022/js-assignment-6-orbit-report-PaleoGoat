import { Component, OnInit, Input } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {

	@Input() satellites: Satellite[];

	autoUpdatedSatTypes: string[] = [];

  constructor() { }

  ngOnInit() {
  }

  countByType(type: string): number {
	let count = 0;
	if (this.satellites) {
	  for (let i = 0; i < this.satellites.length; i++) {
		 if (this.satellites[i].type === type) {
			count++;
		 }
	  }
	}
	return count;
 }


  mkTypeArr(): string[] {
	let satTypeArr: string[] = [];
	for (let i = 0; i < this.satellites.length; i++) {
		if (!satTypeArr.includes(this.satellites[i].type)) {
			satTypeArr.push(this.satellites[i].type);
		}
	}
	console.log(satTypeArr);
		return satTypeArr;
  }
 }


