// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.until
description: >
  Appropriate error thrown when argument cannot be converted to a valid string
  or object for TimeZone
features: [BigInt, Symbol, Temporal]
---*/

const instance = new Temporal.ZonedDateTime(0n, new Temporal.TimeZone("UTC"));

const rangeErrorTests = [
  [null, "null"],
  [true, "boolean"],
  ["", "empty string"],
  [1, "number that doesn't convert to a valid ISO string"],
  [19761118, "number that would convert to a valid ISO string in other contexts"],
  [1n, "bigint"],
];

for (const [timeZone, description] of rangeErrorTests) {
  assert.throws(RangeError, () => instance.until({ year: 2020, month: 5, day: 2, timeZone }), `${description} does not convert to a valid ISO string`);
}

const typeErrorTests = [
  [Symbol(), "symbol"],
  [{}, "object not implementing time zone protocol"],
  [new Temporal.Calendar("iso8601"), "calendar instance"],
];

for (const [timeZone, description] of typeErrorTests) {
  assert.throws(TypeError, () => instance.until({ year: 2020, month: 5, day: 2, timeZone }), `${description} is not a valid object and does not convert to a string`);
}
