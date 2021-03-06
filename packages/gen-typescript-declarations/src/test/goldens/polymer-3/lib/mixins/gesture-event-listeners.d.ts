/**
 * DO NOT EDIT
 *
 * This file was automatically generated by
 *   https://github.com/Polymer/gen-typescript-declarations
 *
 * To modify these typings, edit the source file(s):
 *   lib/mixins/gesture-event-listeners.js
 */


/**
 * Element class mixin that provides API for adding Polymer's cross-platform
 * gesture events to nodes.
 *
 * The API is designed to be compatible with override points implemented
 * in `TemplateStamp` such that declarative event listeners in
 * templates will support gesture events when this mixin is applied along with
 * `TemplateStamp`.
 */
declare function GestureEventListeners<T extends new (...args: any[]) => {}>(base: T): T & GestureEventListenersConstructor;

interface GestureEventListenersConstructor {
  new(...args: any[]): GestureEventListeners;
}

interface GestureEventListeners {

  /**
   * Add the event listener to the node if it is a gestures event.
   *
   * @param node Node to add event listener to
   * @param eventName Name of event
   * @param handler Listener function to add
   */
  _addEventListenerToNode(node: Node, eventName: string, handler: (p0: Event) => void): void;

  /**
   * Remove the event listener to the node if it is a gestures event.
   *
   * @param node Node to remove event listener from
   * @param eventName Name of event
   * @param handler Listener function to remove
   */
  _removeEventListenerFromNode(node: Node, eventName: string, handler: (p0: Event) => void): void;
}

export {};
