const prettierrc = require('@sourcegraph/prettierrc')
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:jsdoc/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'prettier',
    'prettier/@typescript-eslint',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:unicorn/recommended',
    'plugin:jest-dom/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  globals: {
    globalThis: false, // false means not writable
  },
  plugins: ['ban', 'jsdoc', 'react', 'react-hooks', 'etc', 'rxjs', 'jest-dom', 'jsx-a11y'],
  settings: {
    react: {
      version: 'detect',
    },
    jsdoc: {
      mode: 'typescript',
    },
  },
  reportUnusedDisableDirectives: true,
  rules: {
    'arrow-body-style': 'error',
    'arrow-parens': ['error', 'as-needed'],
    'ban/ban': [
      'error',
      {
        name: ['*', 'forEach'],
        message: 'Use a for-of loop instead',
      },
      {
        name: ['describe', 'only'],
        message: "Don't forget to remove .only before committing",
      },
      {
        name: ['it', 'only'],
        message: "Don't forget to remove .only before committing",
      },
      {
        name: ['test', 'only'],
        message: "Don't forget to remove .only before committing",
      },
      {
        name: ['jest', 'fn'],
        message: 'Use sinon.spy(() => undefined) instead',
      },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'lodash',
            importNames: ['isArray'],
            message: 'Use Array.isArray instead.',
          },
        ],
      },
    ],
    'callback-return': 'error',
    complexity: 'off',
    'constructor-super': 'error',
    curly: 'error',
    'dot-notation': 'error',
    eqeqeq: 'error',
    'eol-last': 'error',
    'guard-for-in': 'error',
    'linebreak-style': 'off',
    'max-classes-per-file': 'off',
    'new-parens': 'error',
    'newline-per-chained-call': 'off',
    'no-bitwise': 'off',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-console': 'off',
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-debugger': 'error',
    'no-duplicate-imports': 'error',
    'no-empty': 'error',
    'no-else-return': ['error', { allowElseIf: false }],
    'no-eval': 'error',
    'no-extra-bind': 'error',
    'no-extra-semi': 'off',
    'no-fallthrough': 'off',
    'no-floating-decimal': 'error',
    'no-inner-declarations': 'off',
    'no-invalid-this': 'off',
    'no-irregular-whitespace': 'error',
    'no-lonely-if': 'error',
    'no-magic-numbers': 'off',
    'no-multiple-empty-lines': ['error', { max: 1 }],
    'no-new-wrappers': 'error',
    'no-redeclare': 'off',
    'no-sparse-arrays': 'error',
    'no-sync': ['error', { allowAtRootLevel: true }],
    'no-template-curly-in-string': 'error',
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-unneeded-ternary': ['error', { defaultAssignment: false }],
    'no-unsafe-finally': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-concat': 'error',
    'no-useless-constructor': 'off', // Crashes
    'no-var': 'error',
    'no-void': 'error',
    'object-shorthand': 'error',
    'one-var': ['error', 'never'],
    'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
    'prefer-const': ['error', { destructuring: 'all' }],
    'prefer-object-spread': 'error',
    'prefer-promise-reject-errors': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'off',
    quotes: ['error', prettierrc.singleQuote ? 'single' : 'double', { avoidEscape: true }], // So autofixes use the right quote style
    radix: 'error',
    'require-await': 'error',
    'spaced-comment': ['error', 'always', { line: { markers: ['/'] } }], // Don't error on TypeScript triple-slash comments
    'sort-imports': 'off', // Conflicts with TypeScript and is not fully autofixable.
    'use-isnan': 'error',
    'valid-typeof': 'off',
    yoda: 'error',

    // Imports
    'import/extensions': ['error', 'never'],
    'import/no-deprecated': 'warn',
    'import/no-unused-modules': 'error',
    'import/no-cycle': 'off', // Too slow
    'import/no-self-import': 'error',
    'import/no-dynamic-require': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-duplicates': 'error',
    'import/no-default-export': 'error',
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
        pathGroups: [
          {
            pattern: '@sourcegraph/**',
            group: 'external',
            position: 'after',
          },
        ],
        pathGroupsExcludedImportTypes: [],
      },
    ],

    // JSDoc
    'jsdoc/require-returns': 'off',
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-param': 'off',
    'jsdoc/no-bad-blocks': 'error',
    'jsdoc/check-indentation': 'error',
    'jsdoc/check-tag-names': [
      'error',
      {
        // Used by typedoc
        definedTags: ['hidden', 'internal'],
      },
    ],

    // Rules for React
    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'react/button-has-type': 'error',
    'react/display-name': 'off',
    'react/forbid-dom-props': ['error', { forbid: ['style'] }],
    'react/jsx-boolean-value': ['error', 'always'],
    'react/jsx-curly-brace-presence': 'error',
    'react/jsx-fragments': ['error', 'syntax'],
    'react/jsx-key': 'error',
    'react/jsx-no-bind': 'off',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-target-blank': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'warn',
    'react/no-deprecated': 'warn',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': ['off', { ignoreStateless: true }], // too many existing violations :/
    'react/no-redundant-should-component-update': 'error',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
    'react/no-unsafe': ['error', { checkAliases: true }],
    'react/no-unused-state': 'error',
    'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/void-dom-elements-no-children': 'error',
    'react/prop-types': 'off', // Not needed with TypeScript

    // Rules for RxJS
    'rxjs/no-ignored-observable': 'error',
    'rxjs/no-ignored-subscription': 'error',
    'rxjs/no-async-subscribe': 'error',
    'rxjs/no-nested-subscribe': 'error',
    'rxjs/no-unbound-methods': 'error',
    'rxjs/throw-error': 'error',
    'rxjs/no-internal': 'error',
    'rxjs/no-subclass': 'error',
    'rxjs/no-unsafe-catch': 'error',
    'rxjs/no-subject-unsubscribe': 'error',

    'etc/throw-error': 'error',
    'etc/no-deprecated': 'warn',

    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/prefer-regexp-exec': 'off',
    // These are error by default for JS too
    '@typescript-eslint/no-unsafe-call': 'warn',
    '@typescript-eslint/no-unsafe-member-access': 'warn',
    '@typescript-eslint/no-unsafe-return': 'warn',
    '@typescript-eslint/no-unsafe-assignment': 'warn',

    'unicorn/filename-case': ['error', { cases: { camelCase: true, pascalCase: true, kebabCase: true } }],
    'unicorn/no-process-exit': 'off',
    'unicorn/no-null': 'off', // DOM API often works with null
    'unicorn/no-fn-reference-in-iterator': 'off', // we use filter(isDefined) a lot
    'unicorn/no-reduce': 'off',
    'unicorn/no-useless-undefined': 'off', // conflicts with TypeScript
    'unicorn/prefer-number-properties': 'off',
    'unicorn/custom-error-definition': 'off', // false positives: https://github.com/sindresorhus/eslint-plugin-unicorn/issues/753
    'unicorn/no-nested-ternary': 'off', // if-elseif-else ternaries are commonly needed in JSX and formatted well by Prettier
    'id-length': [
      'error',
      {
        min: 3,
        properties: 'never',
        exceptions: [
          // valid
          'to',
          'as',
          'id',
          'it', // BDD testing
          // NodeJS standard library
          'fs',
          'os',
          // conventionally used for import * as H from 'history' to not conflict with the global history
          'H',
          // allow `distinctUntilChanged((a, b) => isEqual(a, b))`,
          // which is extremely common and necessary to maintain type safety.
          'a',
          'b',
          // caught by prevent-abbreviations below, avoid double-flagging
          'e',
          'i',
          'ch',
        ],
      },
    ],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        checkShorthandImports: false,
        replacements: {
          e: {
            event: true,
            error: true,
            end: true, // as in e2e
          },
          i: { index: true },
          idx: { index: true },
          ch: { character: true },
          j2d: { goToDefinition: true },
          pos: { position: true },
          opt: { options: true, option: true },
          cmd: { command: true },
          cmds: { commands: true },
          loc: { location: true },
          ext: { extension: true },
          expr: { expression: true },
          sub: { subscription: true },
          subs: { subscriptions: true },
          rect: { rectangle: true },
          obs: { observable: true, observer: true },
          resp: { response: true },
          // When saving a document in a variable, we usually don't mean the the global document,
          // but an extension API text document. Avoid shadowing suffixes.
          doc: { document: false, textDocument: true },
          // Never needed in our codebase, better to have an autofix for directory
          dir: { direction: false },
          // The meaning of rev vs ref is a common source of confusion.
          // Spelling it out makes it clear.
          rev: { revision: true },
          // Allow since it's a React term
          props: false,
        },
        whitelist: {
          args: true, // arguments is special
          fs: true, // NodeJS standard library
        },
      },
    ],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      rules: {
        '@typescript-eslint/adjacent-overload-signatures': 'error',
        '@typescript-eslint/array-type': 'error',
        '@typescript-eslint/await-thenable': 'error',
        '@typescript-eslint/ban-types': [
          'error',
          {
            extendDefaults: true,
            types: {
              // We have custom helpers to deal with checking properties of the `object` type.
              object: false,
              // The empty interface {} is often used for React components that accept no props,
              // which is a lot easier to understand than accepting `object` or `Record<never, never>`
              // and has no real diadvantages.
              '{}': false,
            },
          },
        ],
        '@typescript-eslint/naming-convention': [
          'off',
          {
            // Properties and destructured variables often can't be controlled by us if the API is external.
            // Event logging, `__typename` etc don't follow conventions enforceable here.
            // We also need to allow implementing external interface methods, e.g. UNSAFE_componentWillReceiveProps().
            selector: 'default',
            format: null,
          },
          {
            // Helps e.g. Go engineers who are used to lowercase unexported types.
            selector: 'typeLike',
            format: ['PascalCase'],
            leadingUnderscore: 'allow',
            trailingUnderscore: 'allow',
          },
        ],
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          { allowExpressions: true, allowTypedFunctionExpressions: true, allowHigherOrderFunctions: true },
        ],
        '@typescript-eslint/explicit-member-accessibility': ['error', { overrides: { constructors: 'no-public' } }],
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/interface-name-prefix': 'off',
        '@typescript-eslint/member-delimiter-style': 'off',
        '@typescript-eslint/member-ordering': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/no-empty-function': ['error', { allow: ['arrowFunctions'] }],
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/no-extraneous-class': 'error',
        '@typescript-eslint/no-for-in-array': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true }],
        '@typescript-eslint/no-misused-new': 'error',
        '@typescript-eslint/no-misused-promises': 'warn',
        '@typescript-eslint/no-non-null-assertion': 'warn',
        '@typescript-eslint/no-unnecessary-condition': 'off', // False positives, reenable when fixed
        '@typescript-eslint/consistent-type-assertions': [
          'warn',
          { assertionStyle: 'as', objectLiteralTypeAssertions: 'never' },
        ],
        '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
        '@typescript-eslint/no-base-to-string': 'error',
        '@typescript-eslint/no-parameter-properties': 'off',
        '@typescript-eslint/no-require-imports': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-unnecessary-type-assertion': 'warn',
        // Switch to error when all cases are fixed
        '@typescript-eslint/no-unsafe-call': 'warn',
        '@typescript-eslint/no-unsafe-member-access': 'warn',
        '@typescript-eslint/no-unsafe-return': 'warn',
        '@typescript-eslint/no-unsafe-assignment': 'warn',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            varsIgnorePattern: '.*', // TS already enforces this
            args: 'after-used',
            ignoreRestSiblings: true,
          },
        ],
        // no-use-before-define goes against the top-to-bottom rule and TypeScript protects against most temporal deadzone bugs.
        // https://dzone.com/articles/the-stepdown-rule
        '@typescript-eslint/no-use-before-define': 'off',
        '@typescript-eslint/no-useless-constructor': 'error',
        '@typescript-eslint/no-var-requires': 'error',
        '@typescript-eslint/prefer-as-const': 'error',
        '@typescript-eslint/prefer-for-of': 'error',
        'unicorn/no-for-loop': 'off',
        '@typescript-eslint/prefer-string-starts-ends-with': 'error',
        'unicorn/prefer-starts-ends-with': 'off',
        '@typescript-eslint/prefer-function-type': 'error',
        '@typescript-eslint/prefer-includes': 'error',
        'unicorn/prefer-includes': 'off',
        '@typescript-eslint/prefer-namespace-keyword': 'error',
        '@typescript-eslint/prefer-optional-chain': 'error',
        '@typescript-eslint/prefer-nullish-coalescing': 'off', // https://github.com/typescript-eslint/typescript-eslint/issues/1265
        '@typescript-eslint/type-annotation-spacing': 'off',
        '@typescript-eslint/triple-slash-reference': 'error',
        '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true, allowBoolean: true }],
        '@typescript-eslint/return-await': 'error',
        '@typescript-eslint/unbound-method': 'error',
        '@typescript-eslint/unified-signatures': 'error',

        'jsdoc/no-types': 'error',
        'jsdoc/no-undefined-types': 'off',
        'jsdoc/require-param-type': 'off',
        'jsdoc/require-returns-type': 'off',
        'jsdoc/valid-types': 'off',

        'import/no-unresolved': 'off',
        'import/default': 'off',
        'import/named': 'off',
        'import/namespace': 'off',
        'import/no-deprecated': 'off',

        'react/no-direct-mutation-state': 'off',
        'react/jsx-no-undef': 'off',

        'jsx-a11y/no-onchange': 'off', // Deprecated due to better browser support
        'jsx-a11y/no-autofocus': 'off', // Rule can't account for cases where autofocus can be expected
        'jsx-a11y/accessible-emoji': 'off', // Deprecated due to better browser support

        'no-undef': 'off',
        'no-dupe-class-members': 'off',
        'require-await': 'off',
      },
    },
    {
      files: '*.d.ts',
      rules: {
        'no-var': 'off',
        '@typescript-eslint/explicit-member-accessibility': 'off',
        'unicorn/prevent-abbreviations': 'off',
        'id-length': 'off',
        'import/no-default-export': 'off',
      },
    },
    {
      files: '*.@(test|story).ts?(x)',
      rules: {
        'react/jsx-no-bind': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/button-has-type': 'off',
        'rxjs/no-ignored-subscription': 'warn',
        'unicorn/consistent-function-scoping': 'off',
      },
    },
    {
      files: '*.test.tsx',
      rules: {
        // False positive on react-test-renderer act()
        '@typescript-eslint/no-floating-promises': 'off',
        // False positive https://github.com/sindresorhus/eslint-plugin-unicorn/issues/751
        'unicorn/prefer-flat-map': 'off',
      },
    },
  ],
}
