const fs = require('fs');
const os = require('os');
const path = require('path');
const chalk = require('chalk');

const savePassword = (genPass) => {
  fs.open(
    path.join(__dirname, '../', 'passwords.txt'),
    'a',
    666,
    async (e, id) => {
      fs.write(id, genPass + os.EOL, null, 'utf-8', () => {
        fs.close(id, () => {
          console.log(chalk.green('- 🔥 The Password Save to passwords.txt!'));
        });
      });
    }
  );
};

module.exports = { savePassword };
