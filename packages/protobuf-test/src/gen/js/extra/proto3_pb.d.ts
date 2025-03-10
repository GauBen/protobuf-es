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
// @generated from file extra/proto3.proto (package spec, syntax proto3)
/* eslint-disable */

import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";

/**
 * @generated from enum spec.Proto3Enum
 */
export declare enum Proto3Enum {
  /**
   * @generated from enum value: PROTO3_ENUM_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * @generated from enum value: PROTO3_ENUM_YES = 1;
   */
  YES = 1,

  /**
   * @generated from enum value: PROTO3_ENUM_NO = 2;
   */
  NO = 2,
}

/**
 * @generated from message spec.Proto3PackedMessage
 */
export declare class Proto3PackedMessage extends Message<Proto3PackedMessage> {
  /**
   * @generated from field: repeated double packed_double_field = 101 [packed = true];
   */
  packedDoubleField: number[];

  /**
   * @generated from field: repeated uint32 packed_uint32_field = 102 [packed = true];
   */
  packedUint32Field: number[];

  /**
   * @generated from field: repeated uint64 packed_uint64_field = 103 [packed = true];
   */
  packedUint64Field: bigint[];

  constructor(data?: PartialMessage<Proto3PackedMessage>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "spec.Proto3PackedMessage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Proto3PackedMessage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Proto3PackedMessage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Proto3PackedMessage;

  static equals(a: Proto3PackedMessage | PlainMessage<Proto3PackedMessage> | undefined, b: Proto3PackedMessage | PlainMessage<Proto3PackedMessage> | undefined): boolean;
}

/**
 * @generated from message spec.Proto3UnpackedMessage
 */
export declare class Proto3UnpackedMessage extends Message<Proto3UnpackedMessage> {
  /**
   * @generated from field: repeated double unpacked_double_field = 201 [packed = false];
   */
  unpackedDoubleField: number[];

  /**
   * @generated from field: repeated uint32 unpacked_uint32_field = 202 [packed = false];
   */
  unpackedUint32Field: number[];

  /**
   * @generated from field: repeated uint64 unpacked_uint64_field = 203 [packed = false];
   */
  unpackedUint64Field: bigint[];

  constructor(data?: PartialMessage<Proto3UnpackedMessage>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "spec.Proto3UnpackedMessage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Proto3UnpackedMessage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Proto3UnpackedMessage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Proto3UnpackedMessage;

  static equals(a: Proto3UnpackedMessage | PlainMessage<Proto3UnpackedMessage> | undefined, b: Proto3UnpackedMessage | PlainMessage<Proto3UnpackedMessage> | undefined): boolean;
}

/**
 * @generated from message spec.Proto3UnlabelledMessage
 */
export declare class Proto3UnlabelledMessage extends Message<Proto3UnlabelledMessage> {
  /**
   * @generated from field: repeated double double_field = 1;
   */
  doubleField: number[];

  /**
   * @generated from field: repeated uint32 uint32_field = 2;
   */
  uint32Field: number[];

  /**
   * @generated from field: repeated uint64 uint64_field = 3;
   */
  uint64Field: bigint[];

  constructor(data?: PartialMessage<Proto3UnlabelledMessage>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "spec.Proto3UnlabelledMessage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Proto3UnlabelledMessage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Proto3UnlabelledMessage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Proto3UnlabelledMessage;

  static equals(a: Proto3UnlabelledMessage | PlainMessage<Proto3UnlabelledMessage> | undefined, b: Proto3UnlabelledMessage | PlainMessage<Proto3UnlabelledMessage> | undefined): boolean;
}

/**
 * @generated from message spec.Proto3OptionalMessage
 */
export declare class Proto3OptionalMessage extends Message<Proto3OptionalMessage> {
  /**
   * @generated from field: optional string string_field = 1;
   */
  stringField?: string;

  /**
   * @generated from field: optional bytes bytes_field = 2;
   */
  bytesField?: Uint8Array;

  /**
   * @generated from field: optional spec.Proto3Enum enum_field = 3;
   */
  enumField?: Proto3Enum;

  /**
   * @generated from field: optional spec.Proto3OptionalMessage message_field = 4;
   */
  messageField?: Proto3OptionalMessage;

  constructor(data?: PartialMessage<Proto3OptionalMessage>);

  static readonly runtime: typeof proto3;
  static readonly typeName = "spec.Proto3OptionalMessage";
  static readonly fields: FieldList;

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Proto3OptionalMessage;

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Proto3OptionalMessage;

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Proto3OptionalMessage;

  static equals(a: Proto3OptionalMessage | PlainMessage<Proto3OptionalMessage> | undefined, b: Proto3OptionalMessage | PlainMessage<Proto3OptionalMessage> | undefined): boolean;
}

