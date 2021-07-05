const program = require('commander');
const chalk = require('chalk');
const clipboardy = require('clipboardy');
const pkgJson = require('./package.json');
const { createPassword } = require('./utils/createPassword');
const log = console.log;

program.version(pkgJson.version).description('A Password Generator');

program
  .option('-l, --length <number>', 'specify the length of the password', 8)
  .option('-s, --save', 'save the password in passwords.txt')
  .option('-nn, --no-numbers', 'no numbers in generated password ')
  .option('-ns, --no-symbols', 'no symbols in generated password ')
  .parse();

const { length, numbers, symbols, save } = program.opts();

const generatedPassword = createPassword(length, numbers, symbols);
clipboardy.writeSync(generatedPassword);

log(
  chalk.blue('- 🎉 Your Generated Password: ') + chalk.bold(generatedPassword)
);
log(chalk.yellow('- 🚀 Your Generated Password was save to your clipboard!'));
