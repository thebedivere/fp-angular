import {Component, View} from 'angular2/core';

@Component({
  selector: 'test'
})

@View({
  templateUrl: 'test.html'
})

export class Test {

  constructor() {
    console.info('Test Component Mounted Successfully');
  }

}
