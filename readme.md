## typomatic
[![NPM](https://img.shields.io/npm/v/typomatic.svg)](https://www.npmjs.com/package/typomatic)
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

*Typomatic doesn't add any CSS to your code, inline or otherwise.<br/>
Use the CSS below if you want, or simply copy the classes and style them as you wish.<br/>*

```css
.typomatic .typing {
  white-space: pre-wrap;
}
.typomatic .cursor {
  border-left: 2px solid;
}
.typomatic .cursor.blink {
  -webkit-animation: blink .9s infinite;
          animation: blink .9s infinite;
}

@-webkit-keyframes blink {
    0% { opacity: 0; }
   10% { opacity: 0; }
   20% { opacity: 0; }
   30% { opacity: 0; }
   40% { opacity: 0; }
   50% { opacity: 1; }
   60% { opacity: 1; }
   70% { opacity: 1; }
   80% { opacity: 1; }
   90% { opacity: 1; }
  100% { opacity: 1; }
}

@keyframes blink {
    0% { opacity: 0; }
   10% { opacity: 0; }
   20% { opacity: 0; }
   30% { opacity: 0; }
   40% { opacity: 0; }
   50% { opacity: 1; }
   60% { opacity: 1; }
   70% { opacity: 1; }
   80% { opacity: 1; }
   90% { opacity: 1; }
  100% { opacity: 1; }
}
```


###### Methods

**type(text, speed)**<br/>
*The speed parameter is optional, in case you want a certain string to have a different typing speed than the default one.*

**exec(code)**<br/>
*Takes a function as an argument.*

**done()**<br/>
*You must call this method at the end of the queue.*
