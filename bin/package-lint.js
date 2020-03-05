#!/usr/bin/env node

const { CLI } = require('../lib/cli');

process.exitCode = CLI.execute(process.argv);
