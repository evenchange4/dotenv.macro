// @flow
import dotenv from 'dotenv';
import dotenvExpand from 'dotenv-expand';
import { createMacro } from 'babel-plugin-macros';
// import printAST from 'ast-pretty-print';
// console.log(printAST(referencePath.parentPath))

function valueExpression(
  t: any,
  { name, value }: { name: string, value: string },
): any {
  return t.logicalExpression(
    '||',
    t.logicalExpression(
      '&&',
      t.logicalExpression(
        '&&',
        t.identifier('process'),
        t.memberExpression(t.identifier('process'), t.identifier('env')),
      ),
      t.memberExpression(t.identifier('process.env'), t.identifier(name)),
    ),
    t.valueToNode(value),
  );
}

let cacheDotenv;

function dotenvMacro({
  references,
  babel: { types: t },
}: {
  references: { default: any },
  babel: { types: any },
}): void {
  // Note: Load dotenv file
  if (!cacheDotenv) {
    cacheDotenv = dotenv.config();
    dotenvExpand(cacheDotenv);
  }
  const { default: defaultEnvs = [], ...destructureEnv } = references;

  // Case 1: import env from 'dotenv.macro'
  defaultEnvs.forEach(referencePath => {
    if (referencePath.parentPath.type === 'MemberExpression') {
      const { name } = referencePath.parentPath.node.property;
      const value = process.env[name];
      referencePath.parentPath.replaceWith(valueExpression(t, { name, value }));
    } else {
      const parsedAst = Object.keys(cacheDotenv.parsed).map(name => {
        const value = (process.env: any)[name];
        return t.objectProperty(
          t.stringLiteral(name),
          valueExpression(t, { name, value }),
        );
      });
      referencePath.replaceWith(t.objectExpression(parsedAst));
    }
  });

  // Case 2: import { PORT } from 'dotenv.macro'
  Object.values(destructureEnv).forEach((referencePaths: any) => {
    referencePaths.forEach(referencePath => {
      const { name } = referencePath.node;
      const value = (process.env: any)[referencePath.node.name];
      referencePath.replaceWith(valueExpression(t, { name, value }));
    });
  });
}

export default createMacro(dotenvMacro);
