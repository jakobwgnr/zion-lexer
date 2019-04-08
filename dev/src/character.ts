export const Character = {
  /* tslint:disable:no-bitwise */

  isLineTerminator(char: string): boolean {
    const cp: number = char.charCodeAt(0);
    return cp === 0x0a || cp === 0x0d || cp === 0x2028 || cp === 0x2029;
  },

  isLineTerminatorSequence(char1: string, char2: string): boolean {
    const cp1: number = char1.charCodeAt(0);
    const cp2: number = char2.charCodeAt(0);
    return cp1 === 0x0d && cp2 === 0x0a;
  },

  isCobolWordStart(char: string): boolean {
    const cp: number = char.charCodeAt(0);
    return (
      (cp >= 0x41 && cp <= 0x5a) || // A..Z
      (cp >= 0x61 && cp <= 0x7a) || // a..z
      (cp >= 0x30 && cp <= 0x39) || // 0..9
      cp === 0x28
    ); // (
  },

  isCobolWordPart(char: string): boolean {
    const cp: number = char.charCodeAt(0);
    return (
      (cp >= 0x41 && cp <= 0x5a) || // A..Z
      (cp >= 0x61 && cp <= 0x7a) || // a..z
      (cp >= 0x30 && cp <= 0x39) || // 0..9
      cp === 0x2d || // - (Dash)
      cp === 0x28 || // (
      cp === 0x29 || // )
      cp === 0x3a
    ); // :
  },

  isNumberIndicator(char: string): boolean {
    const cp: number = char.charCodeAt(0);
    return (
      cp === 0x2b || cp === 0x2d // + (Plus)
    ); // - (Minus)
  },

  isStringIndicator(char: string): boolean {
    const cp: number = char.charCodeAt(0);
    return (
      cp === 0x27 || cp === 0x22 // ' (Quote)
    ); // " (Double-Quote)
  },

  isOpeningBracket(char: string): boolean {
    const cp: number = char.charCodeAt(0);
    return cp === 0x28; // (
  },

  isClosingBracket(char: string): boolean {
    const cp: number = char.charCodeAt(0);
    return cp === 0x29; // )
  },

  isDecimalDigit(char: string): boolean {
    const cp: number = char.charCodeAt(0);
    return cp >= 0x30 && cp <= 0x39; // 0..9
  },
  isCobolTerminator(char: string): boolean {
    const cp: number = char.charCodeAt(0);
    return cp === 0x2e; // .
  },

  isNumeric(char: string): boolean {
    return !isNaN(Number(char));
  },

  isNumericDecimalIndicator(char: string): boolean {
    const cp: number = char.charCodeAt(0);
    return (
      cp === 0x2e || cp === 0x2c // . or ,
    );
  },

  isCobolAritmeticOperator(char: string): boolean {
    const cp: number = char.charCodeAt(0);
    return (
      cp === 0x2a || // *
      cp === 0x2b || // +
      cp === 0x2f || // /
      cp === 0x3d || // =
      cp === 0x3e || // >
      cp === 0x3c || // <
      cp === 0x2d
    ); // -
  },
  isWhiteSpace(char: string): boolean {
    const cp: number = char.charCodeAt(0);
    return (
      cp === 0x20 || // SPACE
      cp === 0x09 || // <TAB>
      cp === 0x0b || // <VT> Line Tabulation
      cp === 0x0c || // FORM FEED (FF)
      cp === 0xa0 || // <NBSP> NO-BREAK SPACE
      // 	ZERO WIDTH NO-BREAK SPACE - U+FEFF & Any other Unicode “Space_Separator” code point
      (cp >= 0x1680 &&
        [
          0x1680,
          0x2000,
          0x2001,
          0x2002,
          0x2003,
          0x2004,
          0x2005,
          0x2006,
          0x2007,
          0x2008,
          0x2009,
          0x200a,
          0x202f,
          0x205f,
          0x3000,
          0xfeff,
        ].indexOf(cp) >= 0)
    );
  },
};
