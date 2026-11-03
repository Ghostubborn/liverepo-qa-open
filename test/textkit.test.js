import { test } from 'node:test';
import assert from 'node:assert/strict';
import { capitalize, parseDuration, slugify, truncate, wordCount } from '../src/textkit.js';

test('slugify lowercases and joins words with dashes', () => {
  assert.equal(slugify('Hello World'), 'hello-world');
});

test('truncate keeps short text as is', () => {
  assert.equal(truncate('hi', 10), 'hi');
});

test('wordCount counts words', () => {
  assert.equal(wordCount('one two  three'), 3);
});

test('capitalize upper-cases the first letter', () => {
  assert.equal(capitalize('mirasim'), 'Mirasim');
});

test('parseDuration reads single units', () => {
  assert.equal(parseDuration('250ms'), 250);
  assert.equal(parseDuration('30s'), 30_000);
  assert.equal(parseDuration('5m'), 300_000);
  assert.equal(parseDuration('2h'), 7_200_000);
});

test('parseDuration reads combined units', () => {
  assert.equal(parseDuration('1h30m'), 5_400_000);
  assert.equal(parseDuration('2m30s'), 150_000);
});
