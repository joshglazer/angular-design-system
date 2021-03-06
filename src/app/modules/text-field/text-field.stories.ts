import { storiesOf, moduleMetadata } from '@storybook/angular';

import { AppTextFieldComponent } from './text-field.component';

import ComponentIntroComponent from '../../../stories/component-intro.component';
import ParametersComponent from '../../../stories/parameters.component';
import ImportsComponent from '../../../stories/imports.component';
import NgModuleComponent from '../../../stories/ngmodule.component';
import { defaultProps } from '../../../../.storybook/helpers';

storiesOf('Components|Text Field', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AppTextFieldComponent, ParametersComponent, ImportsComponent, NgModuleComponent, ComponentIntroComponent],
        }),
    )
    .add('Intro', () => ({
        template: `
            <app-storybook-component-intro-component
                [imports]="imports"
                [parameters]="parameters"
            ></app-storybook-component-intro-component>
        `,
        props: {
            imports: [
                {
                    modules: ['TextFieldModule'],
                    file: '@bellese/angular-design-system',
                    ngmodule: 'imports',
                },
            ],
            parameters: [
                {
                    name: 'title',
                    type: 'string',
                    value: 'Used as the label for the input field',
                },
                {
                    name: 'id',
                    type: 'string',
                    value: 'Used as a unique id for this field',
                },
                {
                    name: 'inputClass',
                    type: 'string',
                    value: 'A class for the input field itself',
                },
                {
                    name: 'labelClass',
                    type: 'string',
                    value: 'A class for the label',
                },
                {
                    name: 'hint',
                    type: 'string',
                    value: 'A value used to display a hint above the text field',
                },
                {
                    name: 'hintClass',
                    type: 'string',
                    value: 'A class for the hint',
                },
                {
                    name: 'dataAutoId',
                    type: 'string',
                    value: 'Use this for testing ID',
                },
                {
                    name: 'userInput',
                    type: 'function',
                    value: 'Tap into the user enter event',
                },
            ]
        }
    }))
    .add('Normal', () => ({
        template: `
            <app-text-field
                title = 'Text Field Title'
                id = 'text-field'
                inputClass = 'ds-c-field--medium'
                labelClass = 'ds-u-color--base'
                hint = 'Text Field Hint'
                hintClass = 'ds-u-color--muted'
                dataAutoId = 'testingID'
                (userInput) = 'handleEvent($event)'>
            </app-text-field>
        `,
        props: defaultProps
    }));