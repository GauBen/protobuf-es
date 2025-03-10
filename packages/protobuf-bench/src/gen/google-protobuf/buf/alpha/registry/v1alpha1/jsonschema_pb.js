// source: buf/alpha/registry/v1alpha1/jsonschema.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof window !== 'undefined' && window) ||
    (typeof global !== 'undefined' && global) ||
    (typeof self !== 'undefined' && self) ||
    (function () { return this; }).call(null) ||
    Function('return this')();

goog.exportSymbol('proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest', null, global);
goog.exportSymbol('proto.buf.alpha.registry.v1alpha1.GetJSONSchemaResponse', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest.displayName = 'proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.buf.alpha.registry.v1alpha1.GetJSONSchemaResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.buf.alpha.registry.v1alpha1.GetJSONSchemaResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.buf.alpha.registry.v1alpha1.GetJSONSchemaResponse.displayName = 'proto.buf.alpha.registry.v1alpha1.GetJSONSchemaResponse';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    owner: jspb.Message.getFieldWithDefault(msg, 1, ""),
    repository: jspb.Message.getFieldWithDefault(msg, 2, ""),
    reference: jspb.Message.getFieldWithDefault(msg, 3, ""),
    typeName: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest}
 */
proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest;
  return proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest}
 */
proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setOwner(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRepository(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReference(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTypeName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getOwner();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getRepository();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getReference();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTypeName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string owner = 1;
 * @return {string}
 */
proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest.prototype.getOwner = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest} returns this
 */
proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest.prototype.setOwner = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string repository = 2;
 * @return {string}
 */
proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest.prototype.getRepository = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest} returns this
 */
proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest.prototype.setRepository = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string reference = 3;
 * @return {string}
 */
proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest.prototype.getReference = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest} returns this
 */
proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest.prototype.setReference = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string type_name = 4;
 * @return {string}
 */
proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest.prototype.getTypeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest} returns this
 */
proto.buf.alpha.registry.v1alpha1.GetJSONSchemaRequest.prototype.setTypeName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.buf.alpha.registry.v1alpha1.GetJSONSchemaResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.buf.alpha.registry.v1alpha1.GetJSONSchemaResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.buf.alpha.registry.v1alpha1.GetJSONSchemaResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.buf.alpha.registry.v1alpha1.GetJSONSchemaResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    jsonSchema: msg.getJsonSchema_asB64()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.buf.alpha.registry.v1alpha1.GetJSONSchemaResponse}
 */
proto.buf.alpha.registry.v1alpha1.GetJSONSchemaResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.buf.alpha.registry.v1alpha1.GetJSONSchemaResponse;
  return proto.buf.alpha.registry.v1alpha1.GetJSONSchemaResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.buf.alpha.registry.v1alpha1.GetJSONSchemaResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.buf.alpha.registry.v1alpha1.GetJSONSchemaResponse}
 */
proto.buf.alpha.registry.v1alpha1.GetJSONSchemaResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setJsonSchema(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.buf.alpha.registry.v1alpha1.GetJSONSchemaResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.buf.alpha.registry.v1alpha1.GetJSONSchemaResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.buf.alpha.registry.v1alpha1.GetJSONSchemaResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.buf.alpha.registry.v1alpha1.GetJSONSchemaResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getJsonSchema_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
};


/**
 * optional bytes json_schema = 1;
 * @return {string}
 */
proto.buf.alpha.registry.v1alpha1.GetJSONSchemaResponse.prototype.getJsonSchema = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes json_schema = 1;
 * This is a type-conversion wrapper around `getJsonSchema()`
 * @return {string}
 */
proto.buf.alpha.registry.v1alpha1.GetJSONSchemaResponse.prototype.getJsonSchema_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getJsonSchema()));
};


/**
 * optional bytes json_schema = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getJsonSchema()`
 * @return {!Uint8Array}
 */
proto.buf.alpha.registry.v1alpha1.GetJSONSchemaResponse.prototype.getJsonSchema_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getJsonSchema()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.buf.alpha.registry.v1alpha1.GetJSONSchemaResponse} returns this
 */
proto.buf.alpha.registry.v1alpha1.GetJSONSchemaResponse.prototype.setJsonSchema = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


goog.object.extend(exports, proto.buf.alpha.registry.v1alpha1);
