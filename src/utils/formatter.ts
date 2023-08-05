import prettierBabelPlugin from 'prettier/plugins/babel';
import parserYaml from 'prettier/plugins/yaml';
import prettier from 'prettier/standalone';
import xmlFormat from 'xml-formatter';

export type parser = 'json' | 'json5' | 'yaml' | 'xml';
export const format = async (value: string, parser: parser) => {
  if (parser === 'xml') {
    return xmlFormat(value);
  }
  try {
    return await prettier.format(value, {
      parser,
      plugins: [prettierBabelPlugin, parserYaml],
    });
  } catch (e) {
    console.error(e);
  }
  return value;
};
