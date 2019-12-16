#!/usr/bin/env node

const argumentator = require ('argumentator');
const clipboardy = require ('clipboardy');
const chalk = require ('chalk');
const createFiglets = require ('./createFiglets');

function copyFiglets (figlets) {
  clipboardy.writeSync (figlets);
  console.log (chalk.green ('Copied your figlet to clipboard 🦄!'));
}

function disableConsole () {
  console.log = () => null;
  console.error = () => null;
  console.warn = () => null;
  console.info = () => null;
}

const context = argumentator ([
  {
    flags: '--silent',
    description: 'Disables console output',
    action: disableConsole,
  },
  {
    flags: '--copy',
    description: 'Copies created figlets',
  },
]);

const notEmpty = e => !!e && e.length > 0;
const texts = context.texts.filter (notEmpty);

createFiglets (texts).then (a => a.join ('\n')).then (figlets => {
  console.log (figlets);
  if (context.copy) copyFiglets(figlets)
});
