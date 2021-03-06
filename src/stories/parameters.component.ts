import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-storybook-parameter-component',
    template: `
        <p *ngIf="parameters === undefined || parameters.length == 0; else parameterList">This component does not accept any parameters</p>
        <ng-template #parameterList>
            <ul>
                <li *ngFor="let parameter of parameters">
                    <strong>{{ parameter.name }}</strong>&nbsp;<em>({{ parameter.type }})</em>:
                    <span [innerHTML]="parameter.value"></span>
                </li>
            </ul>
        </ng-template>
    `,
    styles: [],
})

export default class ParametersComponent {
    @Input() parameters;
}
