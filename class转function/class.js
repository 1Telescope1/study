class Example {
  constructor(name) {
    this.name = name;
  }

  func() {
    console.log(this.name);
  }
}

Example(123);
