// Copyright (C) 2022 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.duration.prototype.subtract
description: A number as calendar in relativeTo property bag is converted to a string, then to a calendar
includes: [temporalHelpers.js]
features: [Temporal]
---*/

const instance = new Temporal.Duration(1, 0, 0, 1);

const calendar = 19970327;

const relativeTo = { year: 2019, monthCode: "M11", day: 1, calendar };
const result = instance.subtract(new Temporal.Duration(0, 0, 0, 0, 24), { relativeTo });
TemporalHelpers.assertDuration(result, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, "19970327 is a valid ISO string for relativeTo.calendar");

const numbers = [
  1,
  -19970327,
  1234567890,
];

for (const calendar of numbers) {
  const relativeTo = { year: 2019, monthCode: "M11", day: 1, calendar };
  assert.throws(
    RangeError,
    () => instance.subtract(new Temporal.Duration(0, 0, 0, 0, 24), { relativeTo }),
    `Number ${calendar} does not convert to a valid ISO string for relativeTo.calendar`
  );
}
