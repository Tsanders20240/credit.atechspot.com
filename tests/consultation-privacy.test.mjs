import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

for (const path of ['consultation.html', 'credit/consultation.html']) {
  test(`${path} is a free education page without sensitive-data collection`, () => {
    const html = readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
    assert.doesNotMatch(html, /<form\b/i);
    assert.doesNotMatch(html, /scheduler\.zoom\.us/i);
    assert.match(html, /annualcreditreport\.com/i);
    assert.match(html, /credit-repair service/i);
    assert.match(html, /unavailable/i);
  });
}
