// Copyright (C) 2021 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
esid: sec-arraybuffer.prototype.transfertofixedlength
description: >
  ArrayBuffer.prototype.transferToFixedLength is not a constructor function.
info: |
  ArrayBuffer.prototype.transferToFixedLength ( [ newLength ] )

  17 ECMAScript Standard Built-in Objects:
    Built-in function objects that are not identified as constructors do not
    implement the [[Construct]] internal method unless otherwise specified
    in the description of a particular function.
features: [resizable-arraybuffer, arraybuffer-transfer]
---*/

assert.sameValue(
  Object.prototype.hasOwnProperty.call(ArrayBuffer.prototype.transferToFixedLength, 'prototype'),
  false
);

var arrayBuffer = new ArrayBuffer(8);
assert.throws(TypeError, function() {
  new arrayBuffer.transfer();
});
