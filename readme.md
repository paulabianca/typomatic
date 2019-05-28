## typomatic

#### Installation

`npm install typomatic`<br/>

or

```html
<script src="typomatic.min.js"></script>
```

#### Usage

```javascript
import Typomatic from 'typomatic';

const typomatic = new Typomatic(element, {
  speed: 90 // typing speed (number)
});

typomatic
  .type('<em>Hello</em> Typomatic!')
  .exec(() => alert('Type slower!'))
  .type('\nOK. <em>Goodbye.</em>', 300)
  .done()
```

###### Methods

**type(text, speed)**<br/>
*The speed parameter is optional, in case you want a certain string to have a different typing speed than the default one.*

**exec(code)**<br/>
*Takes a function as an argument.*

**done()**<br/>
*You must call this method at the end of the queue.*
