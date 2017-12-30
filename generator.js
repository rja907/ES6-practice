class Comment {
  constructor(content, children) {
    this.content = content;
    this.children = children;
  }
  *[Symbol.iterator]() {
    yield this.content;
    for (let child of children) {
      yield* child;
    }
  }
}
const values = [];
const children = [
  new Comment('good', []),
  new Comment('bad', []),
  new Comment('ok', [])
];
const tree = new Comment('Great! :D', children);

for (let value of children) {
  values.push(value);
}
