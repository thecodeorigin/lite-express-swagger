import { ExternalDoc } from './document.interface';

export interface SchemaRootDoc {
  type: string;
  properties?: Record<string, SchemaRootDoc>;
  required?: string[];
  allOf?: SchemaRootDoc;
  oneOf?: SchemaRootDoc;
  anyOf?: SchemaRootDoc;
  not?: SchemaRootDoc;
  items?: Record<string, any>; // Must contains when type is array
  additionalProperties?: boolean | SchemaRootDoc;
  description?: string;
  format?: string;
  default?: any;
  nullable: boolean;
  discriminator?: any;
  readOnly: boolean;
  writeOnly: boolean;
  xml?: any;
  externalDocs: ExternalDoc;
  example?: any;
  deprecated: boolean;
}

export type IntType = {
  type: 'interger';
  format: 'int32';
};

export type LongType = {
  type: 'interger';
  format: 'int64';
};

export type FloatType = {
  type: 'number';
  format: 'float';
};

export type DoubleType = {
  type: 'number';
  format: 'double';
};

export type StringType = {
  type: 'string';
};

export type ByteType = {
  type: 'string';
  format: 'byte';
};

export type BinaryType = {
  type: 'string';
  format: 'binary';
};

export type BooleanType = {
  type: 'boolean';
};

export type DateType = {
  type: 'string';
  format: 'date';
};

export type DateTimeType = {
  type: 'string';
  format: 'date-time';
};

export type PasswordType = {
  type: 'string';
  format: 'password';
};

export type DataTypes =
  | IntType
  | LongType
  | FloatType
  | DoubleType
  | StringType
  | ByteType
  | BinaryType
  | BooleanType
  | DateType
  | DateTimeType
  | PasswordType;

export type SchemaDoc = DataTypes & SchemaRootDoc;
