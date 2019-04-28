/**
 * @fileoverview MAIN Script exporting the function lex
 * @author Jakob Wagner
 */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------
require('debug').enable('zion-lexer:*,-zion-lexer:code-path');
import { fscheck } from 'zion-commons';

import { Lexer } from './Lexer';

// ------------------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------------------

function optionDefaults(): any {
  return {
    fromPath: true, // By default input is read from Path
  };
}

// ------------------------------------------------------------------------------
// Public Interface
// ------------------------------------------------------------------------------

export function lex(input: string, options?: any) {
  if (!options) {
    options = optionDefaults();
  }
  let code: string;

  if (options.fromPath) {
    code = fscheck.codeFromPath(input);
  } else {
    code = input;
  }

  const lexer = new Lexer(code);
  return lexer.execute();
}

export { Token } from './Token';
export { TokenType } from './tokentype';
