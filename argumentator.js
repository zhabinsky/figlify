#!/usr/bin/env node
require ('console.table');
const chalk = require ('chalk');

const createContext = userArguments => {
  const allArguments = [
    ...toArray (userArguments),
    {
      flags: `--m,--manual,--manual,--man`,
      description: 'Shows all available CLI arguments',
      action: () => table (allArguments) && process.exit (),
    },
  ];
  const context = {};
  const atLeastOne = e => e.length > 0;
  allArguments.forEach (declaration => {
    const args = process.argv.slice (2);
    const contains = c =>
      atLeastOne (
        Array.isArray (c)
          ? c.map (e => contains (e)).filter (e => !!e)
          : args.filter (e => e === c)
      );
    const {flags, action = () => ({}), value = {}} = declaration;
    if (!flags) throw Error ('Flags not specified');
    if (contains (flags.split (',')))
      Object.assign (context, action () || {}, value);
  });
  return context;
};

module.exports = createContext;

function table (userArguments) {
  const table = userArguments.map (item => {
    const {flags = '?', description = '?'} = item;
    return {
      [chalk.blue ('Flags:')]: chalk.green (flags.split (',').join (', ')),
      [chalk.blue ('Description:')]: description,
    };
  });
  console.table (table);
  return true;
}

function toArray (a) {
  if (Array.isArray (a)) return a;
  return [a];
}
