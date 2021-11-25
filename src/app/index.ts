import Generator, {GeneratorOptions} from 'yeoman-generator';
import yosay from 'yosay';

export interface Answers {
  name?: string;
}

export class AWLGenerator extends Generator {

  #answers: Answers = {};

  constructor(args: string | string[], opts: GeneratorOptions) {
    super(args, opts);
  }

  async initializing(): Promise<void> {
    this.log(yosay('Hello, and welcome to my fantastic generator full of whimsy and bubble gum!'));
  }

  async prompting(): Promise<void> {
    this.#answers = await this.prompt([
      {
        type: "input",
        name: "name",
        message: "Your project name",
      },
      {
        type: "confirm",
        name: "cool",
        message: "Would you like to enable the Cool feature?"
      }
    ]);
  }

  async install(): Promise<void> {
    this.log(`Nice, we you later ${this.#answers.name}.`)
  }
}
