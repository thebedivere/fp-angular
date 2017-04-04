import {Component, View} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {Test} from 'test';

@Component({
  selector: 'main'
})

@View({
  directives: [Test],
  template: `
    <test></test>
  `
})

class Main {

}

bootstrap(Main);
