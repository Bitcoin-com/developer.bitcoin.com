---
title: BITBOX Typescript Support
author: Gabriel Cardona
publishedAt: 2018-07-06
updatedAt: 2018-07-06
---

In this article I will demonstrate how to get started with TypeScript using the BITBOX scaffolding tool for Node.js. To enable TypeScript some minor modifications to the generated code are required, each shown in this article. All of the code used in this tutorial can be found [on github](https://github.com/Bitcoin-com/bitbox-ts-example).

### Purpose

Unit testing and statically typed programming languages can help reduce the number of errors and bugs when writing software, and this can be especially important when building cryptocurrency related applications. To this end, Bitcoin.com recently updated their [BITBOX JavaScript SDK](https://developer.bitcoin.com/bitbox.html) to include TypeScript type definition files (aka \*d.ts files). A new folder named “typings” was added to the [project’s repo](https://github.com/Bitcoin-com/bitbox-javascript-sdk) which contain all of the type definition files to enable this TypeScript development support.

![BITBOX + TypeScript](/images/bitbox-plus-typescript.png)

### Goal

The goal for this article will be to show how to enable TypeScript types for BITBOX. We will utilize the existing BITBOX scaffolding system to create a new project and then show how to make the required updates so that the types can be accessed during development.

### Prerequisites

- Have a basic understanding of Node.js, npm, TypeScript. If you don’t yet know what TypeScript is then just know it can be used to fill two primary roles in a JavaScript development project:
  - It can provide an optional type system for JavaScript.
  - It can provide planned features from future JavaScript editions to current JavaScript engines
- Install BITBOX SDK globally using `npm install -g bitbox-sdk` (visit [https://developer.bitcoin.com/bitbox/docs/getting-started.html](https://developer.bitcoin.com/bitbox/docs/getting-started.html) for more details).
- You must have a recent version of Node.js installed (8.11.x or higher) TypeScript installed via `npm install -g typescript`
- Visual Studio Code is the recommended IDE for feature rich TypeScript tooling and debugging support, but other may work as well.

### Tutorial

Create a new project using `bitbox new <project-name> --scaffold node` which will leverage the existing BITBOX tooling to setup a new Node.js project directory with a `package.json` file and other template files.

![new BITBOX nodeJS project](/images/new-bitbox-node.png)

Initiate TypeScript for the project by typing `tsc --init` within the project directory. This will generate a file called `tsconfig.ts` which will contain many configurable options for your TypeScript project. We’ll update the “libs” property to equal `[“es2015”]` as shown in the capture below. This will allow use of Promises (used heavily by BITBOX sdk) within our TypeScript code by including the ES2015 (aka., EcmaScript 6) library.

![tsconfig](/images/tsconfig.png)

Add `@types/node` as a dependency to the package.json file as shown in the image below. Then run `npm install`.

![add typings](/images/add-typings-dep.png)

Rename `index.js` to `index.ts` so that the IDE and TypeScript compiler can recognize the file as a TypeScript file instead of a JavaScript file.

The import statements need to be updated for TypeScript to match the following:

![import interface](/images/import-bitbox-interface.png)

Now we can access the BITBOX namespaces, methods, and properties through our IDE as illustrated in the following screen capture:

![bitbox namespaces](/images/bitbox-namespaces.png)

We can also see the expected inputs and outputs for each available method, as well as a strongly typed return type (i.e., `Promise<AddressDetailsResult>`). This `AddressDetailsResult` return type can imported into the project with it’s relevant properties and types readily available during development.

![address details return type](/images/address-details-return.png)

Since the details method can also return an array of address details, we cast with `<AddressDetailsResult>` so the IDE and compiler knows we are expecting a single `AddressDetailsResult` object. We can see all of the properties associated with this object when we go to use our new `details` variable.

![address details string](/images/addrStr.png)

Finally we compile the index.ts file using `tsc index.ts --lib ‘es2015’` which generates `index.js` file within the same directory, then run the newly created `index.js` file to verify the code functions.

![typescript project complete](/images/ts-done.png)

### Summary

TypeScript is a powerful superset of Javascript which adds optional typing and improves the developer experience. With BITBOX’s typings you can hit the ground running w/ no further setup.

This post was written by [James Cramer](https://twitter.com/James_Cramer).
