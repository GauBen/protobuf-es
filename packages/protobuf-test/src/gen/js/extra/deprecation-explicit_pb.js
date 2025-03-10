// Copyright 2021-2023 Buf Technologies, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

// @generated by protoc-gen-es v1.3.0 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file extra/deprecation-explicit.proto (package spec, syntax proto3)
/* eslint-disable */

import { proto3 } from "@bufbuild/protobuf";

/**
 * The entire enum is deprecated
 *
 * @generated from enum spec.DeprecatedEnum
 * @deprecated
 */
export const DeprecatedEnum = proto3.makeEnum(
  "spec.DeprecatedEnum",
  [
    {no: 0, name: "DEPRECATED_ENUM_A", localName: "A"},
    {no: 1, name: "DEPRECATED_ENUM_B", localName: "B"},
  ],
);

/**
 * Only a single enum value is deprecated
 *
 * @generated from enum spec.DeprecatedValueEnum
 */
export const DeprecatedValueEnum = proto3.makeEnum(
  "spec.DeprecatedValueEnum",
  [
    {no: 0, name: "DEPRECATED_VALUE_ENUM_UNSPECIFIED", localName: "UNSPECIFIED"},
    {no: 1, name: "DEPRECATED_VALUE_ENUM_DEPRECATED_VALUE", localName: "DEPRECATED_VALUE"},
  ],
);

/**
 * The entire message is deprecated
 *
 * @generated from message spec.DeprecatedMessage
 * @deprecated
 */
export const DeprecatedMessage = proto3.makeMessageType(
  "spec.DeprecatedMessage",
  () => [
    { no: 1, name: "field", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * A single field of this message is deprecated
 *
 * @generated from message spec.DeprecatedFieldMessage
 */
export const DeprecatedFieldMessage = proto3.makeMessageType(
  "spec.DeprecatedFieldMessage",
  () => [
    { no: 1, name: "deprecated_field", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "current_field", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

