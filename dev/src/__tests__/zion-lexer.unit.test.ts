import { Token } from '../Token';
import * as zionLexer from '../zion-lexer';

test('zionLexer.lex throws error on no such file', () => {
  expect(() => {
    zionLexer.lex('/path/to/nowhere/test.txt');
  }).toThrow();
});

test('zionLexer.lex takes a String stdin as input', () => {
  const tokenList: Token[] = zionLexer.lex('      * This is a comment', { fromPath: false });
  const commentToken: Token = tokenList.find(token => token.type === 'Comment') as Token;
  expect(commentToken.type).toBe('Comment');
});

test('zionLexer.lex takes a path as input', () => {
  const tokenList: Token[] = zionLexer.lex('./__tests__/testfiles/comment.cbl');
  const commentToken: Token = tokenList.find(token => token.type === 'Comment') as Token;
  expect(commentToken.type).toBe('Comment');
});
