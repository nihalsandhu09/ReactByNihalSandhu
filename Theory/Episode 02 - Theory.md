## Namaste React Course by Akshay Saini

# _Episode 02 - Igniting Our App_

## Q: What is `npm`?

A: `npm` is the world's largest Software Registry. The registry contains over 800,000 code packages. Open-source developers use `npm` to share software.

npm is lots of things:

- `npm` is the package manager for Node.js. It was created in 2009 as an open source project to help JavaScript developers easily share packaged modules of code.

- The `npm` Registry is a public collection of packages of open-source code for` Node.js, front-end web apps, mobile apps, robots, routers`, and countless other needs of the JavaScript community.
- `npm` alternative is `yarn`

### How to initialize `npm`?

```
npm init
```

`npm init -y` can be used to skip the setup step, `npm` takes care of it and creates the `package.json` json file automatically , but without configurations.

- `npm` is the command line client that allows developers to install and publish those packages.

## Q: What is `Parcel/Webpack`? Why do we need it?

A: `Parcel` and `webpack` are the bundlers used mostly for `JavaScript` or `Typescript` code that helps you to `minify, clean, and make your code compact` so that it becomes easier to send a request or receive the response from the server when it usually takes you to transfer multiple files without using any bundler for loading the page of your application. Both of these bundlers substantially reduce the time it takes for the transfer of data and files to the server from the application. Along with that both bundlers parcel and webpack remove the unnecessary comments, new lines, any kind of block delimiters, and white spaces while the functionality of the code remains unchanged.

Use of `Parcel/Webpack`:
Module bundlers are the way to organize and combine many files of JavaScript code into one file. A JavaScript bundler can be used when your project becomes too large for a single file or when you're working with libraries that have multiple dependencies.

### installation commands:

- Install:

```
npm install -D parcel
```

`-D` is used for development and as a development dependency.

- Parcel Commands :
  - For development build:
  ```
  npx parcel <entry_point>
  ```
  - For production build :
  ```
  npx parcel build <entry_point>
  ```

## Q: Why is `.parcel-cache` folder?

A: `cache folder` (or `.parcel-cache in parcel v2`) stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch. It's a key reason why parcel can be so fast in development mode.

## Q: What is `npx`?

A: `npx` stands for `Node Package eXecute`. It is simply an `npm` package runner. It allows developers to execute any Javascript Package available on the npm registry without even installing it. npx is installed automatically with npm version 5.2.

## Q: What is difference between `dependencies vs devDependencies`?

A: `"dependencies"` : Packages required by your application in production. `"devDependencies"` : Packages that are only needed for local development and testing.

## Q: What is Tree Shaking? in Parcel?

A: `Tree shaking`, also known as `dead code elimination`, is the practice of `removing unused code in your production build`. It's important to ship as little code to your end-users as possible. By statically analyzing our source code, we can determine what's not being used and exclude it from our final bundle.

## Q: What is Hot Module Replacement?

A: `Hot Module Replacement (HMR)` exchanges, adds, or removes modules while an application is running, without a full reload. This can significantly speed up development in a few ways: Retain application state which is lost during a full reload. Save valuable development time by only updating what's changed.

## Q: List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.

### Parcel features:

- Dev Build - parcel provides us develop build
- Local Server - parcel also provides us a local server, which can be used to see live changes in our application.
- HMR = Hot Module Replacement - exchanges, adds, or removes modules while an application is running, without a full reload

and some of more cool features of Parcel are:

- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different Build for dev and prod bundles

## Q: What is `.gitignore`? What should we add and not add into it?

A: gitignore file tells Git which files to ignore when committing your project to the GitHub repository. gitignore is located in the root directory of your repo. / will ignore directories with the name.

In our code we shouldn't add the files, which we can re-generate in future e.g, `node_modules`, `dist` etc.

## Q: What is the difference between `package.json` and `package-lock.json` files?

A: Both of these files have the same format, and perform similar functions in the root of a project. The difference is that `package-lock. json` cannot be published, and it will be ignored if found in any place other than the root project.

The package. json is used for more than dependencies - like defining project properties, description, author & license information, scripts, etc. The package-lock. json is solely used to lock dependencies to a specific version number.

## Q: Why should I not modify `package-lock.json`?

A: It is a generated file and is not designed to be manually edited. Its purpose is to track the entire tree of dependencies (including dependencies of dependencies) and the exact version of each dependency. You should commit `package-lock.json` to your code repository

You should avoid updating the `package.json` manually since it could break the synchronization between `package.json` and `package-lock. json`.

## Q: What is `node_modules`? Is it a good idea to push that on git?

A: The `node_modules` folder contains generated code. This is not code you've written and you should never make any updates to the files inside Node modules because there's a pretty good chance they'll get overwritten next time you install some modules.

It is better to not commit the `node_modules` folder, and instead add it to your `.gitignore` file.

Here are all the reasons why you shouldn't commit it: The node_modules folder has a massive size (up to Gigabytes). It is easy to recreate the node_modules folder via packages. json

## Q: What is the `dist` folder?

A: The `/dist` stands for distributable. The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications.

Parcel's default directory for your output is named dist . The --dist-dir public tag defines the output folder for your production files and is named public to avoid confusion with the dist default directory.

## Q: What is `browserlists`?

A: Browserslist defines and shares the list of target browsers between various frontend build tools.

// My take on this

# What is npm? npm (Node Package Manager) is the default package manager for Node.js. It allows you to install, manage, and share packages (libraries) that help you add functionality to your projects. It also handles dependencies, making it easier to manage third-party code.

# What is Parcel/Webpack? Why do we need it? Parcel and Webpack are bundlers. They take your project's various assets (HTML, JavaScript, CSS, etc.) and bundle them into a smaller, optimized version for the browser. We need bundlers to:

Optimize performance by reducing file size and managing dependencies.
Compile new languages like TypeScript or JSX into plain JavaScript.
Enable features like Hot Module Replacement (HMR).
Why is .parcel-cache? The .parcel-cache folder is used by Parcel to store intermediate build results, allowing for faster rebuilds when files change. It caches assets to avoid processing them multiple times unless necessary.

# What is npx? npx is a tool that comes with npm. It allows you to execute packages without needing to install them globally. For example, you can use npx to run a package from the npm registry without globally installing it.

What is the difference between dependencies vs devDependencies?

dependencies: These are the libraries required for your project to run in production.
devDependencies: These are the tools or libraries only needed during development (like testing frameworks or build tools).
What is Tree Shaking? Tree shaking is a process used by bundlers (like Webpack or Parcel) to remove unused code from the final bundle. It helps optimize the output by reducing the size of the code sent to the browser.

# What is Hot Module Replacement (HMR)? HMR is a feature in bundlers like Webpack and Parcel that allows you to update modules in a web application without requiring a full reload. This speeds up development by reflecting changes immediately in the browser.

# List down your favorite 5 superpowers of Parcel and describe any 3 of them in your own words:

Zero configuration: Parcel works out of the box with minimal setup, so you don’t have to configure anything to get started.
Hot Module Replacement (HMR): As explained earlier, HMR lets you update code without a full page reload.
Automatic code splitting: Parcel automatically splits your code to optimize loading speed, breaking it into chunks only when needed.
Faster builds: Parcel uses caching to speed up build times.
Tree shaking: It automatically removes unused code.
Zero configuration means you don’t need to write complex configuration files like you would in Webpack. Parcel takes care of it.
Automatic code splitting allows your website to load faster by only loading what's necessary.
Faster builds save you time by caching files, which speeds up re-builds.

# What is .gitignore? What should we add and not add into it? .gitignore is a file that tells Git which files or directories to ignore (not track). You should add:

Temporary files (e.g., node_modules/, dist/)
Sensitive information (e.g., API keys, environment variables)
Avoid adding files critical to the project’s operation (like src/, configuration files).

# What is the difference between package.json and package-lock.json files?

package.json: Contains metadata about the project, including dependencies and scripts.
package-lock.json: Ensures that the exact versions of dependencies (and sub-dependencies) are installed, locking down the dependency tree.
Why should I not modify package-lock.json? Modifying package-lock.json manually can break the consistency of your project's dependencies, leading to potential errors when collaborating with others or when deploying.

# What is node_modules? Is it a good idea to push that on Git? The node_modules folder contains the installed dependencies for your project. It's not a good idea to push it to Git because:

It's large in size and not necessary in the repository.
Dependencies are specified in package.json and can be installed via npm install.

# What is the dist folder? The dist folder is where the output of your build process goes. It contains the final optimized files (like bundled JavaScript) that are ready for production.

# What is browserlists? browserslist is a tool that helps configure the target browsers for your project (e.g., which versions of browsers your code should support). It helps in ensuring compatibility with various browsers.

# Read about different bundlers: vite, webpack, parcel

Vite: A fast build tool optimized for modern web projects with features like instant server start and faster HMR.
Webpack: A highly configurable bundler with a wide range of plugins and loaders, suitable for large, complex projects.
Parcel: A zero-configuration bundler with built-in features like HMR, tree shaking, and faster builds.

# Read about ^ (caret) and ~ (tilde):

^ (caret): Allows updates to the highest version within a major version range (e.g., ^1.2.3 allows updates to 1.x.x).
~ (tilde): Allows updates to the highest version within a minor version range (e.g., ~1.2.3 allows updates to 1.2.x).
Read about Script types in HTML (MDN Docs): In HTML, different script types allow you to specify how JavaScript files are executed (e.g., type="module" for ES modules, defer for delayed execution). You can read more about script types here.
