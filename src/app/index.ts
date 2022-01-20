import Generator, {GeneratorOptions} from 'yeoman-generator';
import yosay from 'yosay';

export interface Answers {
  name?: string;
  title?: string;
}

module.exports = class AWLGenerator extends Generator {

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
        type: "input",
        name: "title",
        message: "Page title",
      }
    ]);
  }

  async writing(): Promise<void> {
    this.fs.copyTpl(
      this.templatePath('index.html'),
      this.destinationPath(`${this.#answers.name}/index.html`),
      { title: this.#answers.title }
    );
  }

  async install(): Promise<void> {
    this.log('Nice, see you later.')
  }
}