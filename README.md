README.md

## How to use this project

-   Open the whole project in vscode.
-   run yarn to install dependencies
-   run `yarn compile:watch` - you want this to continue to run through the following steps
-   open two files side-by-side in the editor, source JSX or TSX on left, output javascript on right.
-   Example:
    -   ON LEFT: `src/exampleSimplest/quote.js`
    -   ON RIGHT: `compiled/exampleSimplest/quote.js`
-   make changes to the JSX source code on the left-hand side, and save.
-   (your `yarn compile:watch` process should create the compiled javascript immediately.)
-   observe the corresponding changes in the compiled javascript on the right-hand side.
-   optionally, run `yarn format-output` to add more whitespace to the files in the compiled directory, for readability.
-   Set up a side-by-side view in vscode of your source on the left and the generated javascript on the right.

## Things to try

-   make a component which returns ONLY intrinsic elements such as div, h1, p, etc.
    -   give some of those components some attributes (e.g. className or title)
-   add a button, with an onClick handler (which just console logs)
-   give the component a classname
-   in a tsx file, add a new component that has an interface specifying its props. Note how the interface and type annotation are completely removed from the generated javascript.
-   all the stuff you'd normally do with JSX.
