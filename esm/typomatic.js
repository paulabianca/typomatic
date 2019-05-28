class Typomatic {
  constructor(element, options) {
    this.element = element;
    this.options = Typomatic.customise(options);

    this.element.classList.add('typomatic');
    this.cursor = document.createElement('span');
    this.cursor.className = 'cursor';
    this.element.appendChild(this.cursor);

    this.queue = [];
  }

  static customise(options) {
    var source = {
      speed: 90
    };
    for (var i in options) {
      source[i] = options[i];
    }
    return source;
  }

  add(event) {
    this.queue.push(event);
  }
  next() {
    var event = this.queue.shift();
    if (typeof event === 'function') {
      event(this.next.bind(this));
    }
  }
  type(text, speed) {
    var event = (done) => {
      var typing = document.createElement('span');
      typing.className = 'typing';
      this.cursor.classList.remove('blink');
      this.element.insertBefore(typing, this.cursor);

      var tag, segment;
      var i = 0;

      var animate = () => {
        if (segment === text) {
          this.cursor.classList.add('blink');
          return done();
        }
        segment = text.slice(0, ++i);
        typing.innerHTML = segment;
        var char = segment.slice(-1);
        if (char === '<') tag = true;
        if (char === '>') tag = false;
        if (tag) return animate();
        window.setTimeout(
          animate,
          speed || this.options.speed
        );
      }

      animate();
    }

    this.add(event);
    return this;
  }
  exec(code) {
    var event = (done) => {
      code();
      return done();
    }

    this.add(event);
    return this;
  }
  done() {
    return this.next();
  }
}

export default Typomatic;
