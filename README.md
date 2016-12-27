# eslint-config-mfb-node [![Build Status](https://travis-ci.org/MyFoodBag/eslint-config-mfb-node.svg?branch=master)](https://travis-ci.org/MyFoodBag/eslint-config-mfb-node)

[My Food Bag](https://github.com/MyFoodBag)'s [ESLint](http://eslint.org/) configuration for Node.js code.

## Installation

```
npm install --save-dev eslint-config-mfb-node
```

Add `"extends": "mfb-node"` to your `.eslintrc`.

## Git hooks

You can add a pre-commit [hook](https://www.atlassian.com/git/tutorials/git-hooks/) that will check your code before you commit it.

A bash script, `pre-commit.sh`, is provided with this repository that you can optionally enable by linking to it from the root directory of your project like this:

```bash
$ ln -s ../../pre-commit.sh .git/hooks/pre-commit
```

n.b. This will not run in Source Tree for OS X due to [an issue](https://jira.atlassian.com/browse/SRCTREE-3126) with Source Tree.
