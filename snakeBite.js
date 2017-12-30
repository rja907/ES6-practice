class Monster {
  constructor(options) {
    this.health = 100;
    this.name = options.name;
  }
}

class Snake extends Monster {
  constructor(options) {
    super(options);
  }
  bite(prey) {
    return (prey.health -= 10);
  }
}

const snek = new Snake({ name: 'Cobra' });
const snake = new Snake({ name: 'Mamba' });
