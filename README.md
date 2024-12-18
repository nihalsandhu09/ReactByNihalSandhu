# Parcel

- Dev Build
- Local Server
- Refreshing HMR Hot module replacement
- File watching alogrithm written in c++;
- Caching - Faster Builds
- image optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnpostic
- Error Handling
- HTTPs
- Tree Shaking -remove unused code
- different dev and production bundles

// Food ordering app
/\*\*

-
- @returns
- Header
- - - Logo - Nav - Links - Cart
- Body
- --- Search bar - Restaurants Card container - Reataurant card - img - name - cusuine -star rating - delievery time
- Footer
- - Copyright - links - Addresss -contact
-
- \*/

Two types of Export/import

Default export/ import
export default Component
import Component from "path

-- Named Export / import

export conmst Component
import {Component} from "path"

# React hooks

(Normal Js utility function )

- useState() superpowerfull sate variable in react
- useEffect()

# 2 types Routing in web apps

- Client Side Routing
- Server Side Routing

# Redux Tool Kit

- install @reduxjs/toolkit and react-redux
- Build our store
- Connect Our Store to our App
- Slice (cartSlice)
- dispatch(action)
- Selector(Read Data )

# types of testing (developers can do )

- unit Testing you test your react comnponnet in isolation
- Intergration Testing -- testing the intigration of components
- End to End Testing - e2e testing testing the application at when user landing on page and when leave how the user will flow across the app

  # setting up Testing in our app

  Install React Testing Library
  install Jest
  install babel dependicies
  Configure Babel
  Configure Parcel Config file to use disable default babel transpilation
  Jest Configuration npx jest --init
  Install jsdom library
  insta;; @babel/preset-react - to make jsx work in test cases
  include @babel/preset-react add it to out babel.config
  npm install -D @testing-library/jest-dom
  \_\_ undersocre is known as dunder tests
