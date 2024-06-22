import textContainsWords from "./textContainsWords";

/**
 * @deprecated Use textContainsWords instead
 */
export default function multiwordSearch(_text: string, _words: string) {
  return textContainsWords(_text, _words);
}
