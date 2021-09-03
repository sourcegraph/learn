/**
 * @license Use of this source code is governed by an MIT-style license that
 * can be found in the LICENSE file at https://github.com/cartant/eslint-etc
 */

import { expect } from "chai";
import { stripIndent } from "common-tags";
import { fromFixture } from "./from-fixture";

describe("fromFixture", () => {
  it("should create an invalid test with a message ID", () => {
    const test = fromFixture(
      stripIndent`
        const name = "alice";
                     ~~~~~~~ [whoops]
      `
    );
    expect(test).to.have.property("code", `const name = "alice";`);
    expect(test).to.have.property("errors");
    expect(test.errors).to.deep.equal([
      {
        column: 14,
        data: {},
        endColumn: 21,
        endLine: 1,
        line: 1,
        messageId: "whoops",
      },
    ]);
  });

  it("should create an invalid test with options", () => {
    const test = fromFixture(
      stripIndent`
        const name = "alice";
                     ~~~~~~~ [whoops]
      `,
      {
        filename: "test.ts",
        output: stripIndent`
          const name = 'alice';
        `,
      }
    );
    expect(test).to.have.property("code", `const name = "alice";`);
    expect(test).to.have.property("errors");
    expect(test.errors).to.deep.equal([
      {
        column: 14,
        data: {},
        endColumn: 21,
        endLine: 1,
        line: 1,
        messageId: "whoops",
      },
    ]);
    expect(test).to.have.property("filename", "test.ts");
    expect(test).to.have.property("output", "const name = 'alice';");
  });

  it("should create an invalid test with multiple errors", () => {
    const test = fromFixture(
      stripIndent`
        const name = "alice";
                     ~~~~~~~ [first]
              ~~~~ [second]
        const role = 'engineer';
        ~~~~~ [third]
      `
    );
    expect(test).to.have.property(
      "code",
      stripIndent`
      const name = "alice";
      const role = 'engineer';
    `
    );
    expect(test).to.have.property("errors");
    expect(test.errors).to.deep.equal([
      {
        column: 14,
        data: {},
        endColumn: 21,
        endLine: 1,
        line: 1,
        messageId: "first",
      },
      {
        column: 7,
        data: {},
        endColumn: 11,
        endLine: 1,
        line: 1,
        messageId: "second",
      },
      {
        column: 1,
        data: {},
        endColumn: 6,
        endLine: 2,
        line: 2,
        messageId: "third",
      },
    ]);
  });

  it("should create an invalid test with data", () => {
    const test = fromFixture(
      stripIndent`
        const name = "alice";
              ~~~~ [whoops { "identifier": "name" }]
      `
    );
    expect(test).to.have.property("code", `const name = "alice";`);
    expect(test).to.have.property("errors");
    expect(test.errors).to.deep.equal([
      {
        column: 7,
        data: {
          identifier: "name",
        },
        endColumn: 11,
        endLine: 1,
        line: 1,
        messageId: "whoops",
      },
    ]);
  });

  it("should support data that contains punctuation", () => {
    const punctuation = "[]{}()";
    const test = fromFixture(
      stripIndent`
        const name = "alice";
              ~~~~ [whoops { "value": "${punctuation}" }]
      `
    );
    expect(test).to.have.property("code", `const name = "alice";`);
    expect(test).to.have.property("errors");
    expect(test.errors).to.deep.equal([
      {
        column: 7,
        data: {
          value: punctuation,
        },
        endColumn: 11,
        endLine: 1,
        line: 1,
        messageId: "whoops",
      },
    ]);
  });
});
