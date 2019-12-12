#!/usr/bin/env node

const argumentator = require ('./argumentator');
const clipboardy = require ('clipboardy');
const chalk = require ('chalk');
const figlet = require ('figlet');

function disableConsole () {
  console.log = () => null;
  console.error = () => null;
  console.warn = () => null;
  console.info = () => null;
}

const context = argumentator ([
  {
    flags: '--S,--s,--silent,--Silent',
    description: 'Disables console output',
    action: disableConsole,
  },
  {
    flags: '--copy,--cp',
    description: 'Executes pbcopy with the result',
    value: {copy: true},
  },
]);

function getText () {
  const text = process.argv[2];
  if (!text || text.trim ().length === 0 || text.indexOf ('--') !== -1) {
    console.error (chalk.red ('Error: Supply text as first parameter'));
    process.exit (1);
  }
  return text;
}

function createFiglet (text) {
  return new Promise ((res, rej) => {
    figlet (text, (err, data) => {
      if (err || !data) return rej (err);
      res (data);
    });
  });
}

const {copy = false} = context;
const text = getText ();

createFiglet (text)
  .then (compiled => {
    console.log (compiled);
    if (copy) {
      clipboardy.writeSync (compiled);
      console.log (chalk.green ('Copied your figlet to clipboard 🦄!'));
    }
  })
  .catch (err => {
    console.error (err);
    console.error (chalk.red ('Error: Could not create figlet'));
  });
