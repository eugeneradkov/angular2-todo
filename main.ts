/// <reference path="../node_modules/angular2/ts/typings/node/node.d.ts"/>
/// <reference path="../node_modules/angular2/typings/browser.d.ts"/>

import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser'

@Component({
selector: 'todo-app',
template: `<h1>{{title}}</h1>
    <ul>
        <li>Журнал пропусков</li>
    </ul>`
})

class AppComponent {
title: string;

constructor (){
    this.title = 'Учетный журнал'
}
}
bootstrap(AppComponent);