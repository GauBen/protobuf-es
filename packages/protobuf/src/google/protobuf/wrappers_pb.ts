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

// @generated by protoc-gen-es v1.3.0 with parameter "bootstrap_wkt=true,ts_nocheck=false,target=ts"
// @generated from file google/protobuf/wrappers.proto (package google.protobuf, syntax proto3)
/* eslint-disable */

import type { PartialMessage, PlainMessage } from "../../message.js";
import { Message } from "../../message.js";
import { proto3 } from "../../proto3.js";
import type { JsonReadOptions, JsonValue, JsonWriteOptions } from "../../json-format.js";
import { ScalarType } from "../../field.js";
import type { FieldList } from "../../field-list.js";
import type { BinaryReadOptions } from "../../binary-format.js";
import { protoInt64 } from "../../proto-int64.js";

/**
 * Wrapper message for `double`.
 *
 * The JSON representation for `DoubleValue` is JSON number.
 *
 * @generated from message google.protobuf.DoubleValue
 */
export class DoubleValue extends Message<DoubleValue> {
  /**
   * The double value.
   *
   * @generated from field: double value = 1;
   */
  value = 0;

  constructor(data?: PartialMessage<DoubleValue>) {
    super();
    proto3.util.initPartial(data, this);
  }

  override toJson(options?: Partial<JsonWriteOptions>): JsonValue {
    return proto3.json.writeScalar(ScalarType.DOUBLE, this.value, true)!;
  }

  override fromJson(json: JsonValue, options?: Partial<JsonReadOptions>): this {
    try {
      this.value = proto3.json.readScalar(ScalarType.DOUBLE, json);
    } catch (e) {
      let m = `cannot decode message google.protobuf.DoubleValue from JSON"`;
      if (e instanceof Error && e.message.length > 0) {
        m += `: ${e.message}`
      }
      throw new Error(m);
    }
    return this;
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.protobuf.DoubleValue";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 1 /* ScalarType.DOUBLE */ },
  ]);

  static readonly fieldWrapper = {
    wrapField(value: number): DoubleValue {
      return new DoubleValue({value});
    },
    unwrapField(value: DoubleValue): number {
      return value.value;
    }
  };

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DoubleValue {
    return new DoubleValue().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DoubleValue {
    return new DoubleValue().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DoubleValue {
    return new DoubleValue().fromJsonString(jsonString, options);
  }

  static equals(a: DoubleValue | PlainMessage<DoubleValue> | undefined, b: DoubleValue | PlainMessage<DoubleValue> | undefined): boolean {
    return proto3.util.equals(DoubleValue, a, b);
  }
}

/**
 * Wrapper message for `float`.
 *
 * The JSON representation for `FloatValue` is JSON number.
 *
 * @generated from message google.protobuf.FloatValue
 */
export class FloatValue extends Message<FloatValue> {
  /**
   * The float value.
   *
   * @generated from field: float value = 1;
   */
  value = 0;

  constructor(data?: PartialMessage<FloatValue>) {
    super();
    proto3.util.initPartial(data, this);
  }

  override toJson(options?: Partial<JsonWriteOptions>): JsonValue {
    return proto3.json.writeScalar(ScalarType.FLOAT, this.value, true)!;
  }

  override fromJson(json: JsonValue, options?: Partial<JsonReadOptions>): this {
    try {
      this.value = proto3.json.readScalar(ScalarType.FLOAT, json);
    } catch (e) {
      let m = `cannot decode message google.protobuf.FloatValue from JSON"`;
      if (e instanceof Error && e.message.length > 0) {
        m += `: ${e.message}`
      }
      throw new Error(m);
    }
    return this;
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.protobuf.FloatValue";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 2 /* ScalarType.FLOAT */ },
  ]);

  static readonly fieldWrapper = {
    wrapField(value: number): FloatValue {
      return new FloatValue({value});
    },
    unwrapField(value: FloatValue): number {
      return value.value;
    }
  };

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FloatValue {
    return new FloatValue().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FloatValue {
    return new FloatValue().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FloatValue {
    return new FloatValue().fromJsonString(jsonString, options);
  }

  static equals(a: FloatValue | PlainMessage<FloatValue> | undefined, b: FloatValue | PlainMessage<FloatValue> | undefined): boolean {
    return proto3.util.equals(FloatValue, a, b);
  }
}

/**
 * Wrapper message for `int64`.
 *
 * The JSON representation for `Int64Value` is JSON string.
 *
 * @generated from message google.protobuf.Int64Value
 */
export class Int64Value extends Message<Int64Value> {
  /**
   * The int64 value.
   *
   * @generated from field: int64 value = 1;
   */
  value = protoInt64.zero;

  constructor(data?: PartialMessage<Int64Value>) {
    super();
    proto3.util.initPartial(data, this);
  }

  override toJson(options?: Partial<JsonWriteOptions>): JsonValue {
    return proto3.json.writeScalar(ScalarType.INT64, this.value, true)!;
  }

  override fromJson(json: JsonValue, options?: Partial<JsonReadOptions>): this {
    try {
      this.value = proto3.json.readScalar(ScalarType.INT64, json);
    } catch (e) {
      let m = `cannot decode message google.protobuf.Int64Value from JSON"`;
      if (e instanceof Error && e.message.length > 0) {
        m += `: ${e.message}`
      }
      throw new Error(m);
    }
    return this;
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.protobuf.Int64Value";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 3 /* ScalarType.INT64 */ },
  ]);

  static readonly fieldWrapper = {
    wrapField(value: bigint): Int64Value {
      return new Int64Value({value});
    },
    unwrapField(value: Int64Value): bigint {
      return value.value;
    }
  };

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Int64Value {
    return new Int64Value().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Int64Value {
    return new Int64Value().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Int64Value {
    return new Int64Value().fromJsonString(jsonString, options);
  }

  static equals(a: Int64Value | PlainMessage<Int64Value> | undefined, b: Int64Value | PlainMessage<Int64Value> | undefined): boolean {
    return proto3.util.equals(Int64Value, a, b);
  }
}

/**
 * Wrapper message for `uint64`.
 *
 * The JSON representation for `UInt64Value` is JSON string.
 *
 * @generated from message google.protobuf.UInt64Value
 */
export class UInt64Value extends Message<UInt64Value> {
  /**
   * The uint64 value.
   *
   * @generated from field: uint64 value = 1;
   */
  value = protoInt64.zero;

  constructor(data?: PartialMessage<UInt64Value>) {
    super();
    proto3.util.initPartial(data, this);
  }

  override toJson(options?: Partial<JsonWriteOptions>): JsonValue {
    return proto3.json.writeScalar(ScalarType.UINT64, this.value, true)!;
  }

  override fromJson(json: JsonValue, options?: Partial<JsonReadOptions>): this {
    try {
      this.value = proto3.json.readScalar(ScalarType.UINT64, json);
    } catch (e) {
      let m = `cannot decode message google.protobuf.UInt64Value from JSON"`;
      if (e instanceof Error && e.message.length > 0) {
        m += `: ${e.message}`
      }
      throw new Error(m);
    }
    return this;
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.protobuf.UInt64Value";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ]);

  static readonly fieldWrapper = {
    wrapField(value: bigint): UInt64Value {
      return new UInt64Value({value});
    },
    unwrapField(value: UInt64Value): bigint {
      return value.value;
    }
  };

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UInt64Value {
    return new UInt64Value().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UInt64Value {
    return new UInt64Value().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UInt64Value {
    return new UInt64Value().fromJsonString(jsonString, options);
  }

  static equals(a: UInt64Value | PlainMessage<UInt64Value> | undefined, b: UInt64Value | PlainMessage<UInt64Value> | undefined): boolean {
    return proto3.util.equals(UInt64Value, a, b);
  }
}

/**
 * Wrapper message for `int32`.
 *
 * The JSON representation for `Int32Value` is JSON number.
 *
 * @generated from message google.protobuf.Int32Value
 */
export class Int32Value extends Message<Int32Value> {
  /**
   * The int32 value.
   *
   * @generated from field: int32 value = 1;
   */
  value = 0;

  constructor(data?: PartialMessage<Int32Value>) {
    super();
    proto3.util.initPartial(data, this);
  }

  override toJson(options?: Partial<JsonWriteOptions>): JsonValue {
    return proto3.json.writeScalar(ScalarType.INT32, this.value, true)!;
  }

  override fromJson(json: JsonValue, options?: Partial<JsonReadOptions>): this {
    try {
      this.value = proto3.json.readScalar(ScalarType.INT32, json);
    } catch (e) {
      let m = `cannot decode message google.protobuf.Int32Value from JSON"`;
      if (e instanceof Error && e.message.length > 0) {
        m += `: ${e.message}`
      }
      throw new Error(m);
    }
    return this;
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.protobuf.Int32Value";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 5 /* ScalarType.INT32 */ },
  ]);

  static readonly fieldWrapper = {
    wrapField(value: number): Int32Value {
      return new Int32Value({value});
    },
    unwrapField(value: Int32Value): number {
      return value.value;
    }
  };

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Int32Value {
    return new Int32Value().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Int32Value {
    return new Int32Value().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Int32Value {
    return new Int32Value().fromJsonString(jsonString, options);
  }

  static equals(a: Int32Value | PlainMessage<Int32Value> | undefined, b: Int32Value | PlainMessage<Int32Value> | undefined): boolean {
    return proto3.util.equals(Int32Value, a, b);
  }
}

/**
 * Wrapper message for `uint32`.
 *
 * The JSON representation for `UInt32Value` is JSON number.
 *
 * @generated from message google.protobuf.UInt32Value
 */
export class UInt32Value extends Message<UInt32Value> {
  /**
   * The uint32 value.
   *
   * @generated from field: uint32 value = 1;
   */
  value = 0;

  constructor(data?: PartialMessage<UInt32Value>) {
    super();
    proto3.util.initPartial(data, this);
  }

  override toJson(options?: Partial<JsonWriteOptions>): JsonValue {
    return proto3.json.writeScalar(ScalarType.UINT32, this.value, true)!;
  }

  override fromJson(json: JsonValue, options?: Partial<JsonReadOptions>): this {
    try {
      this.value = proto3.json.readScalar(ScalarType.UINT32, json);
    } catch (e) {
      let m = `cannot decode message google.protobuf.UInt32Value from JSON"`;
      if (e instanceof Error && e.message.length > 0) {
        m += `: ${e.message}`
      }
      throw new Error(m);
    }
    return this;
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.protobuf.UInt32Value";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 13 /* ScalarType.UINT32 */ },
  ]);

  static readonly fieldWrapper = {
    wrapField(value: number): UInt32Value {
      return new UInt32Value({value});
    },
    unwrapField(value: UInt32Value): number {
      return value.value;
    }
  };

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UInt32Value {
    return new UInt32Value().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UInt32Value {
    return new UInt32Value().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UInt32Value {
    return new UInt32Value().fromJsonString(jsonString, options);
  }

  static equals(a: UInt32Value | PlainMessage<UInt32Value> | undefined, b: UInt32Value | PlainMessage<UInt32Value> | undefined): boolean {
    return proto3.util.equals(UInt32Value, a, b);
  }
}

/**
 * Wrapper message for `bool`.
 *
 * The JSON representation for `BoolValue` is JSON `true` and `false`.
 *
 * @generated from message google.protobuf.BoolValue
 */
export class BoolValue extends Message<BoolValue> {
  /**
   * The bool value.
   *
   * @generated from field: bool value = 1;
   */
  value = false;

  constructor(data?: PartialMessage<BoolValue>) {
    super();
    proto3.util.initPartial(data, this);
  }

  override toJson(options?: Partial<JsonWriteOptions>): JsonValue {
    return proto3.json.writeScalar(ScalarType.BOOL, this.value, true)!;
  }

  override fromJson(json: JsonValue, options?: Partial<JsonReadOptions>): this {
    try {
      this.value = proto3.json.readScalar(ScalarType.BOOL, json);
    } catch (e) {
      let m = `cannot decode message google.protobuf.BoolValue from JSON"`;
      if (e instanceof Error && e.message.length > 0) {
        m += `: ${e.message}`
      }
      throw new Error(m);
    }
    return this;
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.protobuf.BoolValue";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static readonly fieldWrapper = {
    wrapField(value: boolean): BoolValue {
      return new BoolValue({value});
    },
    unwrapField(value: BoolValue): boolean {
      return value.value;
    }
  };

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BoolValue {
    return new BoolValue().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BoolValue {
    return new BoolValue().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BoolValue {
    return new BoolValue().fromJsonString(jsonString, options);
  }

  static equals(a: BoolValue | PlainMessage<BoolValue> | undefined, b: BoolValue | PlainMessage<BoolValue> | undefined): boolean {
    return proto3.util.equals(BoolValue, a, b);
  }
}

/**
 * Wrapper message for `string`.
 *
 * The JSON representation for `StringValue` is JSON string.
 *
 * @generated from message google.protobuf.StringValue
 */
export class StringValue extends Message<StringValue> {
  /**
   * The string value.
   *
   * @generated from field: string value = 1;
   */
  value = "";

  constructor(data?: PartialMessage<StringValue>) {
    super();
    proto3.util.initPartial(data, this);
  }

  override toJson(options?: Partial<JsonWriteOptions>): JsonValue {
    return proto3.json.writeScalar(ScalarType.STRING, this.value, true)!;
  }

  override fromJson(json: JsonValue, options?: Partial<JsonReadOptions>): this {
    try {
      this.value = proto3.json.readScalar(ScalarType.STRING, json);
    } catch (e) {
      let m = `cannot decode message google.protobuf.StringValue from JSON"`;
      if (e instanceof Error && e.message.length > 0) {
        m += `: ${e.message}`
      }
      throw new Error(m);
    }
    return this;
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.protobuf.StringValue";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static readonly fieldWrapper = {
    wrapField(value: string): StringValue {
      return new StringValue({value});
    },
    unwrapField(value: StringValue): string {
      return value.value;
    }
  };

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): StringValue {
    return new StringValue().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): StringValue {
    return new StringValue().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): StringValue {
    return new StringValue().fromJsonString(jsonString, options);
  }

  static equals(a: StringValue | PlainMessage<StringValue> | undefined, b: StringValue | PlainMessage<StringValue> | undefined): boolean {
    return proto3.util.equals(StringValue, a, b);
  }
}

/**
 * Wrapper message for `bytes`.
 *
 * The JSON representation for `BytesValue` is JSON string.
 *
 * @generated from message google.protobuf.BytesValue
 */
export class BytesValue extends Message<BytesValue> {
  /**
   * The bytes value.
   *
   * @generated from field: bytes value = 1;
   */
  value = new Uint8Array(0);

  constructor(data?: PartialMessage<BytesValue>) {
    super();
    proto3.util.initPartial(data, this);
  }

  override toJson(options?: Partial<JsonWriteOptions>): JsonValue {
    return proto3.json.writeScalar(ScalarType.BYTES, this.value, true)!;
  }

  override fromJson(json: JsonValue, options?: Partial<JsonReadOptions>): this {
    try {
      this.value = proto3.json.readScalar(ScalarType.BYTES, json);
    } catch (e) {
      let m = `cannot decode message google.protobuf.BytesValue from JSON"`;
      if (e instanceof Error && e.message.length > 0) {
        m += `: ${e.message}`
      }
      throw new Error(m);
    }
    return this;
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.protobuf.BytesValue";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "value", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
  ]);

  static readonly fieldWrapper = {
    wrapField(value: Uint8Array): BytesValue {
      return new BytesValue({value});
    },
    unwrapField(value: BytesValue): Uint8Array {
      return value.value;
    }
  };

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): BytesValue {
    return new BytesValue().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): BytesValue {
    return new BytesValue().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): BytesValue {
    return new BytesValue().fromJsonString(jsonString, options);
  }

  static equals(a: BytesValue | PlainMessage<BytesValue> | undefined, b: BytesValue | PlainMessage<BytesValue> | undefined): boolean {
    return proto3.util.equals(BytesValue, a, b);
  }
}

