/**
 * @fileoverview MAIN Script exporting the function lex
 * @author Jakob Wagner
 */

// ------------------------------------------------------------------------------
// Requirements
// ------------------------------------------------------------------------------
require('debug').enable('zion-lexer:*,-zion-lexer:code-path');
import * as fs from 'fs';
import { fscheck } from './util/fscheck';

import { Lexer } from './Lexer';

import * as path from 'path';

// ------------------------------------------------------------------------------
// Helpers
// ------------------------------------------------------------------------------

function codeFromPath(filePath: string): string {
  if (fscheck.isFile(path.join(__dirname, filePath))) {
    return fs.readFileSync(path.join(__dirname, filePath), 'utf8');
  } else {
    throw new Error('Not a file');
  }
}

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
    code = codeFromPath(input);
  } else {
    code = input;
  }

  const lexer = new Lexer(code);
  return lexer.execute();
}
