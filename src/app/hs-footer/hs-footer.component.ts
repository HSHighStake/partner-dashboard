import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-hs-footer',
	templateUrl: './hs-footer.component.html',
	styleUrls: ['./hs-footer.component.css']
})
export class HsFooterComponent implements OnInit {
	currentYear: number = (new Date()).getFullYear()
	
	constructor() {}

	ngOnInit() {}
}
