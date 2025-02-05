import {Component, AfterViewInit, ViewEncapsulation} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShepherdService } from 'angular-shepherd';
import { steps as defaultSteps, defaultStepOptions } from '../../data';

@Component({
    selector: 'app-shepherd',
    templateUrl: './shepherd.component.html',
    styleUrls: ['./shepherd.component.scss'],
    standalone: true,
    encapsulation: ViewEncapsulation.None,
    imports: [CommonModule]
})
export class ShepherdComponent implements AfterViewInit {
    constructor(private shepherdService: ShepherdService) {}

    ngAfterViewInit() {
        this.shepherdService.defaultStepOptions = defaultStepOptions;
        this.shepherdService.modal = true;
        this.shepherdService.confirmCancel = false;
        this.shepherdService.addSteps(defaultSteps);
    }

    startTour() {
        this.shepherdService.start();
    }
}
