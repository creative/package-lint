#!/usr/bin/env node

const { CLI } = require('../lib/cli');

process.exit = CLI.execute(process.argv);
