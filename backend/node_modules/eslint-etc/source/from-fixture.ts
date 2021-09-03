/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/eslint-etc
 */

import { TSESLint as eslint } from "@typescript-eslint/experimental-utils";

export function fromFixture(
  fixture: string
): eslint.InvalidTestCase<never, never>;

export function fromFixture(
  fixture: string,
  invalidTestCase: {
    output: string;
  }
): eslint.InvalidTestCase<never, never>;

export function fromFixture<
  TMessageIds extends string,
  TOptions extends unknown[]
>(
  fixture: string,
  invalidTestCase: Omit<
    eslint.InvalidTestCase<TMessageIds, TOptions>,
    "code" | "errors"
  >
): eslint.InvalidTestCase<TMessageIds, TOptions>;

export function fromFixture<
  TMessageIds extends string,
  TOptions extends unknown[]
>(
  fixture: string,
  invalidTestCase: Omit<
    eslint.InvalidTestCase<TMessageIds, TOptions>,
    "code" | "errors"
  > = {}
): eslint.InvalidTestCase<TMessageIds, TOptions> {
  return {
    ...invalidTestCase,
    ...parseFixture(fixture),
  };
}

function parseFixture<TMessageIds extends string>(fixture: string) {
  const errorRegExp = /^(\s*)(~+)\s*\[(\w+)\s*(.*?)\]\s*$/;
  const lines: string[] = [];
  const errors: eslint.TestCaseError<TMessageIds>[] = [];
  fixture.split("\n").forEach((line) => {
    const match = line.match(errorRegExp);
    if (match) {
      const column = match[1].length + 1;
      const endColumn = column + match[2].length;
      const { length } = lines;
      errors.push({
        column,
        data: JSON.parse(match[4] || "{}"),
        endColumn,
        endLine: length,
        line: length,
        messageId: match[3] as TMessageIds,
      });
    } else {
      lines.push(line);
    }
  });
  return {
    code: lines.join("\n"),
    errors,
  };
}
