// Copyright (C) 2021 Igalia, S.L. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
esid: sec-temporal.zoneddatetime.prototype.withtimezone
description: Time zone strings with UTC offset fractional part are not confused with time fractional part
features: [Temporal]
---*/

const instance = new Temporal.ZonedDateTime(0n, "UTC");
const timeZone = "2021-08-19T17:30:45.123456789+01:46[+01:45:30.987654321]";

const result = instance.withTimeZone(timeZone);
assert.sameValue(result.timeZoneId, "+01:45:30.987654321", "Time zone string determined from bracket name");
