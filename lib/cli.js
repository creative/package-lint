/**
 * This file exposes package-lint to the command line interface.
 */

/**
 * Node process exit codes.
 */
const EXIT_CODES = {
  SUCCESS: 0,
  UNCAUGHT_EXCEPTION: 1,
  PARSE_ERROR: 3,
  EVAL_FAILURE: 4,
};

class CLI {
  /**
   * Executes package-lint from the CLI.
   * @param {*} argv - The command line arguments.
   * @returns {number} The status code upon completion or failure.
   */
  static execute(argv) {
    return EXIT_CODES.SUCCESS;
  }
}

module.exports = { CLI };
