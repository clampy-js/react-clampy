# @clampy-js/react-clampy

React component that clamps the content of an element by adding an ellipsis to it if the content inside is too long.

[![Build Status](https://img.shields.io/travis/clampy-js/react-clampy.svg)](https://travis-ci.org/clampy-js/react-clampy)
[![GitHub issues](https://img.shields.io/github/issues/clampy-js/react-clampy.svg)](https://github.com/clampy-js/react-clampy/issues)
[![GitHub license](https://img.shields.io/npm/l/@clampy-js/react-clampy)](https://github.com/clampy-js/react-clampy/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dt/@clampy-js/react-clampy.svg)](https://www.npmjs.com/package/@clampy-js/react-clampy)

It uses [@clampy-js/clampy](https://github.com/clampy-js/clampy) library (a fork of [Clamp.js](https://github.com/josephschmitt/Clamp.js)) behind the scene to apply the ellipsis.

It automatically re-clamps itself when the element or the browser window change size.

## Install

```bash
npm install --save @clampy-js/react-clampy
```

## Usage

```jsx
import React, { Component } from 'react'

import Clampy from '@clampy-js/react-clampy'

class Clampy extends Component {
  render () {
    return (
      <Clampy clampSize="2">My long text to clamp</Clampy>
    )
  }
}
```

## License

MIT © [alexandremoore](https://github.com/alexandremoore)
