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
// @generated from file google/protobuf/field_mask.proto (package google.protobuf, syntax proto3)
/* eslint-disable */

import type { PartialMessage, PlainMessage } from "../../message.js";
import { Message } from "../../message.js";
import { proto3 } from "../../proto3.js";
import type { JsonReadOptions, JsonValue, JsonWriteOptions } from "../../json-format.js";
import type { FieldList } from "../../field-list.js";
import type { BinaryReadOptions } from "../../binary-format.js";

/**
 * `FieldMask` represents a set of symbolic field paths, for example:
 *
 *     paths: "f.a"
 *     paths: "f.b.d"
 *
 * Here `f` represents a field in some root message, `a` and `b`
 * fields in the message found in `f`, and `d` a field found in the
 * message in `f.b`.
 *
 * Field masks are used to specify a subset of fields that should be
 * returned by a get operation or modified by an update operation.
 * Field masks also have a custom JSON encoding (see below).
 *
 * # Field Masks in Projections
 *
 * When used in the context of a projection, a response message or
 * sub-message is filtered by the API to only contain those fields as
 * specified in the mask. For example, if the mask in the previous
 * example is applied to a response message as follows:
 *
 *     f {
 *       a : 22
 *       b {
 *         d : 1
 *         x : 2
 *       }
 *       y : 13
 *     }
 *     z: 8
 *
 * The result will not contain specific values for fields x,y and z
 * (their value will be set to the default, and omitted in proto text
 * output):
 *
 *
 *     f {
 *       a : 22
 *       b {
 *         d : 1
 *       }
 *     }
 *
 * A repeated field is not allowed except at the last position of a
 * paths string.
 *
 * If a FieldMask object is not present in a get operation, the
 * operation applies to all fields (as if a FieldMask of all fields
 * had been specified).
 *
 * Note that a field mask does not necessarily apply to the
 * top-level response message. In case of a REST get operation, the
 * field mask applies directly to the response, but in case of a REST
 * list operation, the mask instead applies to each individual message
 * in the returned resource list. In case of a REST custom method,
 * other definitions may be used. Where the mask applies will be
 * clearly documented together with its declaration in the API.  In
 * any case, the effect on the returned resource/resources is required
 * behavior for APIs.
 *
 * # Field Masks in Update Operations
 *
 * A field mask in update operations specifies which fields of the
 * targeted resource are going to be updated. The API is required
 * to only change the values of the fields as specified in the mask
 * and leave the others untouched. If a resource is passed in to
 * describe the updated values, the API ignores the values of all
 * fields not covered by the mask.
 *
 * If a repeated field is specified for an update operation, new values will
 * be appended to the existing repeated field in the target resource. Note that
 * a repeated field is only allowed in the last position of a `paths` string.
 *
 * If a sub-message is specified in the last position of the field mask for an
 * update operation, then new value will be merged into the existing sub-message
 * in the target resource.
 *
 * For example, given the target message:
 *
 *     f {
 *       b {
 *         d: 1
 *         x: 2
 *       }
 *       c: [1]
 *     }
 *
 * And an update message:
 *
 *     f {
 *       b {
 *         d: 10
 *       }
 *       c: [2]
 *     }
 *
 * then if the field mask is:
 *
 *  paths: ["f.b", "f.c"]
 *
 * then the result will be:
 *
 *     f {
 *       b {
 *         d: 10
 *         x: 2
 *       }
 *       c: [1, 2]
 *     }
 *
 * An implementation may provide options to override this default behavior for
 * repeated and message fields.
 *
 * In order to reset a field's value to the default, the field must
 * be in the mask and set to the default value in the provided resource.
 * Hence, in order to reset all fields of a resource, provide a default
 * instance of the resource and set all fields in the mask, or do
 * not provide a mask as described below.
 *
 * If a field mask is not present on update, the operation applies to
 * all fields (as if a field mask of all fields has been specified).
 * Note that in the presence of schema evolution, this may mean that
 * fields the client does not know and has therefore not filled into
 * the request will be reset to their default. If this is unwanted
 * behavior, a specific service may require a client to always specify
 * a field mask, producing an error if not.
 *
 * As with get operations, the location of the resource which
 * describes the updated values in the request message depends on the
 * operation kind. In any case, the effect of the field mask is
 * required to be honored by the API.
 *
 * ## Considerations for HTTP REST
 *
 * The HTTP kind of an update operation which uses a field mask must
 * be set to PATCH instead of PUT in order to satisfy HTTP semantics
 * (PUT must only be used for full updates).
 *
 * # JSON Encoding of Field Masks
 *
 * In JSON, a field mask is encoded as a single string where paths are
 * separated by a comma. Fields name in each path are converted
 * to/from lower-camel naming conventions.
 *
 * As an example, consider the following message declarations:
 *
 *     message Profile {
 *       User user = 1;
 *       Photo photo = 2;
 *     }
 *     message User {
 *       string display_name = 1;
 *       string address = 2;
 *     }
 *
 * In proto a field mask for `Profile` may look as such:
 *
 *     mask {
 *       paths: "user.display_name"
 *       paths: "photo"
 *     }
 *
 * In JSON, the same mask is represented as below:
 *
 *     {
 *       mask: "user.displayName,photo"
 *     }
 *
 * # Field Masks and Oneof Fields
 *
 * Field masks treat fields in oneofs just as regular fields. Consider the
 * following message:
 *
 *     message SampleMessage {
 *       oneof test_oneof {
 *         string name = 4;
 *         SubMessage sub_message = 9;
 *       }
 *     }
 *
 * The field mask can be:
 *
 *     mask {
 *       paths: "name"
 *     }
 *
 * Or:
 *
 *     mask {
 *       paths: "sub_message"
 *     }
 *
 * Note that oneof type names ("test_oneof" in this case) cannot be used in
 * paths.
 *
 * ## Field Mask Verification
 *
 * The implementation of any API method which has a FieldMask type field in the
 * request should verify the included field paths, and return an
 * `INVALID_ARGUMENT` error if any path is unmappable.
 *
 * @generated from message google.protobuf.FieldMask
 */
export class FieldMask extends Message<FieldMask> {
  /**
   * The set of field mask paths.
   *
   * @generated from field: repeated string paths = 1;
   */
  paths: string[] = [];

  constructor(data?: PartialMessage<FieldMask>) {
    super();
    proto3.util.initPartial(data, this);
  }

  override toJson(options?: Partial<JsonWriteOptions>): JsonValue {
    // Converts snake_case to protoCamelCase according to the convention
    // used by protoc to convert a field name to a JSON name.
    function protoCamelCase(snakeCase: string): string {
      let capNext = false;
      const b = [];
      for (let i = 0; i < snakeCase.length; i++) {
        let c = snakeCase.charAt(i);
        switch (c) {
          case '_':
            capNext = true;
            break;
          case '0':
          case '1':
          case '2':
          case '3':
          case '4':
          case '5':
          case '6':
          case '7':
          case '8':
          case '9':
            b.push(c);
            capNext = false;
            break;
          default:
            if (capNext) {
              capNext = false;
              c = c.toUpperCase();
            }
            b.push(c);
            break;
        }
      }
      return b.join('');
    }
    return this.paths.map(p => {
      if (p.match(/_[0-9]?_/g) || p.match(/[A-Z]/g)) {
        throw new Error("cannot encode google.protobuf.FieldMask to JSON: lowerCamelCase of path name \"" + p + "\" is irreversible");
      }
      return protoCamelCase(p);
    }).join(",");
  }

  override fromJson(json: JsonValue, options?: Partial<JsonReadOptions>): this {
    if (typeof json !== "string") {
      throw new Error("cannot decode google.protobuf.FieldMask from JSON: " + proto3.json.debug(json));
    }
    if (json === "") {
      return this;
    }
    function camelToSnake (str: string) {
      if (str.includes("_")) {
        throw new Error("cannot decode google.protobuf.FieldMask from JSON: path names must be lowerCamelCase");
      }
      const sc = str.replace(/[A-Z]/g, letter => "_" + letter.toLowerCase());
      return (sc[0] === "_") ? sc.substring(1) : sc;
    }
    this.paths = json.split(",").map(camelToSnake);
    return this;
  }

  static readonly runtime: typeof proto3 = proto3;
  static readonly typeName = "google.protobuf.FieldMask";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "paths", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): FieldMask {
    return new FieldMask().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): FieldMask {
    return new FieldMask().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): FieldMask {
    return new FieldMask().fromJsonString(jsonString, options);
  }

  static equals(a: FieldMask | PlainMessage<FieldMask> | undefined, b: FieldMask | PlainMessage<FieldMask> | undefined): boolean {
    return proto3.util.equals(FieldMask, a, b);
  }
}

