// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.plaindatetime
description: >
  Appropriate error thrown when argument cannot be converted to a valid string
  or object for Calendar
features: [BigInt, Symbol, Temporal]
---*/

const rangeErrorTests = [
  [null, "null"],
  [true, "boolean"],
  ["", "empty string"],
  [1, "number that doesn't convert to a valid ISO string"],
  [1n, "bigint"],
];

for (const [arg, description] of rangeErrorTests) {
  assert.throws(RangeError, () => new Temporal.PlainDateTime(2000, 5, 2, 15, 23, 30, 987, 654, 321, arg), `${description} does not convert to a valid ISO string`);
}

const typeErrorTests = [
  [Symbol(), "symbol"],
  [{}, "plain object that doesn't implement the protocol"],
  [new Temporal.TimeZone("UTC"), "time zone instance"],
  [Temporal.Calendar, "Temporal.Calendar, object"],
];

for (const [arg, description] of typeErrorTests) {
  assert.throws(TypeError, () => new Temporal.PlainDateTime(2000, 5, 2, 15, 23, 30, 987, 654, 321, arg), `${description} is not a valid object and does not convert to a string`);
}
