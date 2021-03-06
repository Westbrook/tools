/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   paper-inky-focus-behavior.js
 */

declare namespace Polymer {

  /**
   * `Polymer.PaperInkyFocusBehavior` implements a ripple when the element has
   * keyboard focus.
   */
  interface PaperInkyFocusBehavior extends IronButtonState, IronControlState, PaperRippleBehavior, PaperInkyFocusBehaviorImpl {
    _createRipple(): any;
    _focusedChanged(receivedFocusFromKeyboard: any): void;
  }

  const PaperInkyFocusBehavior: object;
}

declare function _focusedChanged(): void;

declare function _createRipple(): any;

export {};
