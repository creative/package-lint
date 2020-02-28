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
   * @returns {number} The status code upon completion or failure.
   */
  static execute() {
    return EXIT_CODES.SUCCESS;
  }
}

module.exports = { CLI };
