import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

for (const path of ['consultation.html', 'credit/consultation.html']) {
  test(`${path} does not put customer details in a URL`, () => {
    const html = readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
    assert.doesNotMatch(html, /<form\b[^>]*method=["']get["']/i);
    assert.doesNotMatch(html, /name=["'](?:firstName|lastName|email|phone|message)["']/i);
    assert.match(html, /https:\/\/scheduler\.zoom\.us\/a-plus-techucation\/30-mins-with-a-plus/);
    assert.match(html, /do not include a Social Security number/i);
  });
}
