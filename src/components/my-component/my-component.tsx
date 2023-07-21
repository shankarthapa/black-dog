import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }
  constructor() {
    console.log('init of component');
  }

  render() {
    return (
      <div class="container">Hello, World! I'm {this.getText()}
        <input type='button' value="WORLD is here" />
        <input type='button' value="world version 2" />
      </div>
    );
  }
}
