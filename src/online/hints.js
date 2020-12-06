import snippets from './snippets.json';

/**
 * 采用 snippets 实现提示
 */
export function fromSnippets() {
  return {
    // triggerCharacters: ['.'],
    provideCompletionItems(model, position) {
      let wordToComplete = '';
      let wordAtPosition = model.getWordAtPosition(position); // getWordUntilPosition()
      if (wordAtPosition) {
        wordToComplete = wordAtPosition.word;
      }
      if (!wordToComplete || wordToComplete === ' ') {
        // no snippets when suggestions have been triggered by space
        return undefined;
      }

      const suggestions = [];
      for (const name in snippets) {
        if (Object.prototype.hasOwnProperty.call(snippets, name)) {
          const element = snippets[name];
          if (element.prefix.startsWith(wordToComplete)) {
            suggestions.push({
              label: element.prefix,
              insertText: element.body.join ? element.body.join('\n') : element.body,
              documentation: element.description ? element.description : name,
              kind: 25, // CompletionItemKind.Snippet
              insertTextRules: 4 // CompletionItemInsertTextRule.InsertAsSnippet
            });
          }
        }
      }
      return { suggestions };
    }
  };
}
