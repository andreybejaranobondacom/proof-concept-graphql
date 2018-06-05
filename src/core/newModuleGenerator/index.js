const fs = require('fs');
const path = require('path');
const readline = require('readline');

const basePath = path.resolve(__dirname, '../../modules');

const logger = {
  log(message) {
    console.log(message);
  },
  warn(message) {
    console.warn('\x1b[33m%s\x1b[0m', message);
  },
  info(message) {
    console.info('\x1b[34m%s\x1b[0m', message);
  },
  error(message) {
    console.error('\x1b[31m%s\x1b[0m', message);
  }
};

class Module {
  hasDirectory(moduleUrl) {
    try {
      fs.lstatSync(moduleUrl);
      return true;
    } catch (error) {
      return false;
    }
  }

  createDirectory(moduleUrl) {
    try {
      fs.mkdirSync(moduleUrl);
      return true;
    } catch (error) {
      return false;
    }
  }

  createFiles(directoryUrl, files) {
    try {
      for (const file of files) {
        fs.appendFileSync(`${directoryUrl}/${file.fileName}`, file.content);
      }
      return true;
    } catch (error) {
      return false;
    }
  }

  createModule() {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    rl.question('Entry name of new Module: ', (nameModule) => {
      nameModule.toLowerCase();
      const hasDirectory = this.hasDirectory(`${basePath}/${nameModule}`);
      if (hasDirectory) {
        logger.warn(`\n ${nameModule} Module exist, change or verify name and run again! \n`);
        process.exit(0);
      }
      const directoryCreated = this.createDirectory(`${basePath}/${nameModule}`);
      if (!directoryCreated) {
        logger.error('\n Error for create Module, change or verify name and run again! \n');
        process.exit(0);
      }

      const files = this.FilesContent(path.resolve(__dirname, './module'));
      const result = this.createFiles(`${basePath}/${nameModule}`, files);
      if (result) {
        logger.info(`\n Module "${nameModule}" created, Ready Go to ${basePath}/${nameModule} \n`);
        this.createTest(nameModule);
      }

      rl.close();
    });
  }

  createTest(nameModule) {
    try {
      const basePath = path.resolve(__dirname, '../../../test');
      const hasDirectory = this.hasDirectory(`${basePath}/${nameModule}`);
      if (hasDirectory) {
        logger.warn(`\n ${nameModule} Module exist, change or verify name and run again! \n`);
        process.exit(0);
      }
      this.createDirectory(`${basePath}/${nameModule}`);

      const files = this.FilesContent(path.resolve(__dirname, './test'));

      for (const file of files) {
        file.content = file.content.replace(/<%nameModule%>/g, nameModule);
      }

      const result = this.createFiles(`${basePath}/${nameModule}`, files);
      if (result) {
        logger.info(`\n test "${nameModule}" created, Ready Go to ${basePath}/${nameModule} \n`);
      }
    } catch (error) {
      return false;
    }
  }

  FilesContent(directoryUrl) {
    try {
      const files = fs.readdirSync(directoryUrl);
      let filesContent = [];
      for (const index in files) {
        filesContent[index] = {
          fileName: files[index],
          content: this.readFile(`${directoryUrl}/${files[index]}`)
        };
      }
      return filesContent;
    } catch (error) {
      return false;
    }
  }

  readFile(file) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      return content;
    } catch (error) {
      return error;
    }
  }
}

const NewModule = new Module();

NewModule.createModule();
