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

// @formatter:off

// Comment before syntax.

// @generated by protoc-gen-es v1.3.0 with parameter "ts_nocheck=false,target=js+dts"
// @generated from file extra/comments.proto (package spec, syntax proto3)
/* eslint-disable */

// Comment after syntax.

// Comment before package.

import { proto3 } from "@bufbuild/protobuf";

/**
 * Leading comment for enum.
 *
 * Comment between start of enum and first value.
 *
 * @generated from enum spec.EnumWithComments
 */
export const EnumWithComments = proto3.makeEnum(
  "spec.EnumWithComments",
  [
    {no: 0, name: "VALUE"},
  ],
);

/**
 * Leading comment for deprecated enum
 *
 * @generated from enum spec.DeprecatedEnumWithComment
 * @deprecated
 */
export const DeprecatedEnumWithComment = proto3.makeEnum(
  "spec.DeprecatedEnumWithComment",
  [
    {no: 0, name: "DEPRECATED_ENUM_WITH_COMMENT_A", localName: "A"},
    {no: 1, name: "DEPRECATED_ENUM_WITH_COMMENT_B", localName: "B"},
  ],
);

/**
 * @generated from enum spec.DeprecatedEnumNoComment
 * @deprecated
 */
export const DeprecatedEnumNoComment = proto3.makeEnum(
  "spec.DeprecatedEnumNoComment",
  [
    {no: 0, name: "DEPRECATED_ENUM_NO_COMMENT_A", localName: "A"},
    {no: 1, name: "DEPRECATED_ENUM_NO_COMMENT_B", localName: "B"},
  ],
);

/**
 * Comment before message.
 *
 * @generated from message spec.MessageWithComments
 */
export const MessageWithComments = proto3.makeMessageType(
  "spec.MessageWithComments",
  () => [
    { no: 1, name: "foo", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "value", kind: "scalar", T: 5 /* ScalarType.INT32 */, oneof: "result" },
    { no: 3, name: "error", kind: "scalar", T: 9 /* ScalarType.STRING */, oneof: "result" },
    { no: 4, name: "this_field_has_an_empty_comment", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "this_field_is_deprecated", jsonName: "sdf", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * Comment within empty message.
 *
 * @generated from message spec.EmptyMessageWithComment
 */
export const EmptyMessageWithComment = proto3.makeMessageType(
  "spec.EmptyMessageWithComment",
  [],
);

/**
 * see https://github.com/protocolbuffers/protobuf/blob/master/src/google/protobuf/descriptor.proto
 *
 * @generated from message spec.GoogleCommentExample
 */
export const GoogleCommentExample = proto3.makeMessageType(
  "spec.GoogleCommentExample",
  () => [
    { no: 1, name: "foo", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 2, name: "bar", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
    { no: 3, name: "baz", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "qux", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
    { no: 5, name: "corge", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 6, name: "grault", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ],
);

