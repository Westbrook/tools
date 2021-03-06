/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   paper-button.js
 */

interface PaperButtonElement extends Polymer.Element, PaperButtonBehavior {

  /**
   * If true, the button should be styled with a shadow.
   */
  raised: boolean|null|undefined;
  _calculateElevation(): void;
}

declare global {

  interface HTMLElementTagNameMap {
    "paper-button": PaperButtonElement;
  }
}

export {};
