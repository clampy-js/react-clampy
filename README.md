# @clampy-js/react-clampy

> React component that clamps the content of an element by adding an ellipsis to it if the content inside is too long.

[![NPM](https://img.shields.io/npm/v/@clampy-js/react-clampy.svg)](https://www.npmjs.com/package/@clampy-js/react-clampy) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

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
