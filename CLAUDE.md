# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- **Run app**: `npm start` (executes `node index.js`)
- **Run tests**: `npm test` (executes `node test.js`)

## Architecture

This is a minimal Node.js learning project with no external dependencies.

- `index.js` — exports utility functions (`greet`, `add`, `multiply`, `subtract`) and runs examples when executed directly
- `test.js` — simple custom test runner that imports from `index.js` and validates each function using a `test(name, actual, expected)` helper
