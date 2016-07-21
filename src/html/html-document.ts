/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import * as dom5 from 'dom5';
import {ASTNode} from 'parse5';

import {Document, DocumentInit} from '../parser/document';

/**
 * The ASTs of the HTML elements needed to represent Polymer elements.
 */

export interface HtmlVisitor {
  (node: ASTNode): void;
}

export class HtmlDocument extends Document<ASTNode, HtmlVisitor> {
  type = 'html';

  visit(visitors: HtmlVisitor[]) {
    dom5.nodeWalk(this.ast, (node) => {
      visitors.forEach((visitor) => visitor(node));
      return false;
    })
  }
}
