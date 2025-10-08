
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Habitacion
 * 
 */
export type Habitacion = $Result.DefaultSelection<Prisma.$HabitacionPayload>
/**
 * Model Reserva
 * 
 */
export type Reserva = $Result.DefaultSelection<Prisma.$ReservaPayload>
/**
 * Model Pago
 * 
 */
export type Pago = $Result.DefaultSelection<Prisma.$PagoPayload>
/**
 * Model Servicio
 * 
 */
export type Servicio = $Result.DefaultSelection<Prisma.$ServicioPayload>
/**
 * Model ServicioEnHabitacion
 * 
 */
export type ServicioEnHabitacion = $Result.DefaultSelection<Prisma.$ServicioEnHabitacionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const RolUsuario: {
  USUARIO: 'USUARIO',
  OPERADOR: 'OPERADOR',
  ADMINISTRADOR: 'ADMINISTRADOR'
};

export type RolUsuario = (typeof RolUsuario)[keyof typeof RolUsuario]

}

export type RolUsuario = $Enums.RolUsuario

export const RolUsuario: typeof $Enums.RolUsuario

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Usuarios
 * const usuarios = await prisma.usuario.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Usuarios
   * const usuarios = await prisma.usuario.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.habitacion`: Exposes CRUD operations for the **Habitacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Habitacions
    * const habitacions = await prisma.habitacion.findMany()
    * ```
    */
  get habitacion(): Prisma.HabitacionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reserva`: Exposes CRUD operations for the **Reserva** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reservas
    * const reservas = await prisma.reserva.findMany()
    * ```
    */
  get reserva(): Prisma.ReservaDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pago`: Exposes CRUD operations for the **Pago** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pagos
    * const pagos = await prisma.pago.findMany()
    * ```
    */
  get pago(): Prisma.PagoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servicio`: Exposes CRUD operations for the **Servicio** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicios
    * const servicios = await prisma.servicio.findMany()
    * ```
    */
  get servicio(): Prisma.ServicioDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servicioEnHabitacion`: Exposes CRUD operations for the **ServicioEnHabitacion** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ServicioEnHabitacions
    * const servicioEnHabitacions = await prisma.servicioEnHabitacion.findMany()
    * ```
    */
  get servicioEnHabitacion(): Prisma.ServicioEnHabitacionDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.16.2
   * Query Engine version: 1c57fdcd7e44b29b9313256c76699e91c3ac3c43
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Usuario: 'Usuario',
    Habitacion: 'Habitacion',
    Reserva: 'Reserva',
    Pago: 'Pago',
    Servicio: 'Servicio',
    ServicioEnHabitacion: 'ServicioEnHabitacion'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "usuario" | "habitacion" | "reserva" | "pago" | "servicio" | "servicioEnHabitacion"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UsuarioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UsuarioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Habitacion: {
        payload: Prisma.$HabitacionPayload<ExtArgs>
        fields: Prisma.HabitacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HabitacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HabitacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload>
          }
          findFirst: {
            args: Prisma.HabitacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HabitacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload>
          }
          findMany: {
            args: Prisma.HabitacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload>[]
          }
          create: {
            args: Prisma.HabitacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload>
          }
          createMany: {
            args: Prisma.HabitacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HabitacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload>[]
          }
          delete: {
            args: Prisma.HabitacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload>
          }
          update: {
            args: Prisma.HabitacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload>
          }
          deleteMany: {
            args: Prisma.HabitacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HabitacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HabitacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload>[]
          }
          upsert: {
            args: Prisma.HabitacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HabitacionPayload>
          }
          aggregate: {
            args: Prisma.HabitacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHabitacion>
          }
          groupBy: {
            args: Prisma.HabitacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<HabitacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.HabitacionCountArgs<ExtArgs>
            result: $Utils.Optional<HabitacionCountAggregateOutputType> | number
          }
        }
      }
      Reserva: {
        payload: Prisma.$ReservaPayload<ExtArgs>
        fields: Prisma.ReservaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReservaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReservaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          findFirst: {
            args: Prisma.ReservaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReservaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          findMany: {
            args: Prisma.ReservaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>[]
          }
          create: {
            args: Prisma.ReservaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          createMany: {
            args: Prisma.ReservaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReservaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>[]
          }
          delete: {
            args: Prisma.ReservaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          update: {
            args: Prisma.ReservaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          deleteMany: {
            args: Prisma.ReservaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReservaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReservaUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>[]
          }
          upsert: {
            args: Prisma.ReservaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReservaPayload>
          }
          aggregate: {
            args: Prisma.ReservaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReserva>
          }
          groupBy: {
            args: Prisma.ReservaGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReservaGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReservaCountArgs<ExtArgs>
            result: $Utils.Optional<ReservaCountAggregateOutputType> | number
          }
        }
      }
      Pago: {
        payload: Prisma.$PagoPayload<ExtArgs>
        fields: Prisma.PagoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PagoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PagoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          findFirst: {
            args: Prisma.PagoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PagoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          findMany: {
            args: Prisma.PagoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>[]
          }
          create: {
            args: Prisma.PagoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          createMany: {
            args: Prisma.PagoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PagoCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>[]
          }
          delete: {
            args: Prisma.PagoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          update: {
            args: Prisma.PagoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          deleteMany: {
            args: Prisma.PagoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PagoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PagoUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>[]
          }
          upsert: {
            args: Prisma.PagoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PagoPayload>
          }
          aggregate: {
            args: Prisma.PagoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePago>
          }
          groupBy: {
            args: Prisma.PagoGroupByArgs<ExtArgs>
            result: $Utils.Optional<PagoGroupByOutputType>[]
          }
          count: {
            args: Prisma.PagoCountArgs<ExtArgs>
            result: $Utils.Optional<PagoCountAggregateOutputType> | number
          }
        }
      }
      Servicio: {
        payload: Prisma.$ServicioPayload<ExtArgs>
        fields: Prisma.ServicioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicioFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicioFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          findFirst: {
            args: Prisma.ServicioFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicioFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          findMany: {
            args: Prisma.ServicioFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>[]
          }
          create: {
            args: Prisma.ServicioCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          createMany: {
            args: Prisma.ServicioCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServicioCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>[]
          }
          delete: {
            args: Prisma.ServicioDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          update: {
            args: Prisma.ServicioUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          deleteMany: {
            args: Prisma.ServicioDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicioUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServicioUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>[]
          }
          upsert: {
            args: Prisma.ServicioUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioPayload>
          }
          aggregate: {
            args: Prisma.ServicioAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicio>
          }
          groupBy: {
            args: Prisma.ServicioGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicioGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicioCountArgs<ExtArgs>
            result: $Utils.Optional<ServicioCountAggregateOutputType> | number
          }
        }
      }
      ServicioEnHabitacion: {
        payload: Prisma.$ServicioEnHabitacionPayload<ExtArgs>
        fields: Prisma.ServicioEnHabitacionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicioEnHabitacionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioEnHabitacionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicioEnHabitacionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioEnHabitacionPayload>
          }
          findFirst: {
            args: Prisma.ServicioEnHabitacionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioEnHabitacionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicioEnHabitacionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioEnHabitacionPayload>
          }
          findMany: {
            args: Prisma.ServicioEnHabitacionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioEnHabitacionPayload>[]
          }
          create: {
            args: Prisma.ServicioEnHabitacionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioEnHabitacionPayload>
          }
          createMany: {
            args: Prisma.ServicioEnHabitacionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServicioEnHabitacionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioEnHabitacionPayload>[]
          }
          delete: {
            args: Prisma.ServicioEnHabitacionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioEnHabitacionPayload>
          }
          update: {
            args: Prisma.ServicioEnHabitacionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioEnHabitacionPayload>
          }
          deleteMany: {
            args: Prisma.ServicioEnHabitacionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicioEnHabitacionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServicioEnHabitacionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioEnHabitacionPayload>[]
          }
          upsert: {
            args: Prisma.ServicioEnHabitacionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicioEnHabitacionPayload>
          }
          aggregate: {
            args: Prisma.ServicioEnHabitacionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicioEnHabitacion>
          }
          groupBy: {
            args: Prisma.ServicioEnHabitacionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicioEnHabitacionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicioEnHabitacionCountArgs<ExtArgs>
            result: $Utils.Optional<ServicioEnHabitacionCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    usuario?: UsuarioOmit
    habitacion?: HabitacionOmit
    reserva?: ReservaOmit
    pago?: PagoOmit
    servicio?: ServicioOmit
    servicioEnHabitacion?: ServicioEnHabitacionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UsuarioCountOutputType
   */

  export type UsuarioCountOutputType = {
    reservas: number
  }

  export type UsuarioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | UsuarioCountOutputTypeCountReservasArgs
  }

  // Custom InputTypes
  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsuarioCountOutputType
     */
    select?: UsuarioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsuarioCountOutputType without action
   */
  export type UsuarioCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
  }


  /**
   * Count Type HabitacionCountOutputType
   */

  export type HabitacionCountOutputType = {
    reservas: number
    servicios: number
  }

  export type HabitacionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | HabitacionCountOutputTypeCountReservasArgs
    servicios?: boolean | HabitacionCountOutputTypeCountServiciosArgs
  }

  // Custom InputTypes
  /**
   * HabitacionCountOutputType without action
   */
  export type HabitacionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HabitacionCountOutputType
     */
    select?: HabitacionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * HabitacionCountOutputType without action
   */
  export type HabitacionCountOutputTypeCountReservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
  }

  /**
   * HabitacionCountOutputType without action
   */
  export type HabitacionCountOutputTypeCountServiciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicioEnHabitacionWhereInput
  }


  /**
   * Count Type ReservaCountOutputType
   */

  export type ReservaCountOutputType = {
    pagos: number
  }

  export type ReservaCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    pagos?: boolean | ReservaCountOutputTypeCountPagosArgs
  }

  // Custom InputTypes
  /**
   * ReservaCountOutputType without action
   */
  export type ReservaCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ReservaCountOutputType
     */
    select?: ReservaCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ReservaCountOutputType without action
   */
  export type ReservaCountOutputTypeCountPagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagoWhereInput
  }


  /**
   * Count Type ServicioCountOutputType
   */

  export type ServicioCountOutputType = {
    habitaciones: number
  }

  export type ServicioCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habitaciones?: boolean | ServicioCountOutputTypeCountHabitacionesArgs
  }

  // Custom InputTypes
  /**
   * ServicioCountOutputType without action
   */
  export type ServicioCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioCountOutputType
     */
    select?: ServicioCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServicioCountOutputType without action
   */
  export type ServicioCountOutputTypeCountHabitacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicioEnHabitacionWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellido: string | null
    email: string | null
    password: string | null
    rol: $Enums.RolUsuario | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    apellido: string | null
    email: string | null
    password: string | null
    rol: $Enums.RolUsuario | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    nombre: number
    apellido: number
    email: number
    password: number
    rol: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    email?: true
    password?: true
    rol?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    email?: true
    password?: true
    rol?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    nombre?: true
    apellido?: true
    email?: true
    password?: true
    rol?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    nombre: string
    apellido: string
    email: string
    password: string
    rol: $Enums.RolUsuario
    createdAt: Date
    updatedAt: Date
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    password?: boolean
    rol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    reservas?: boolean | Usuario$reservasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    password?: boolean
    rol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    password?: boolean
    rol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    nombre?: boolean
    apellido?: boolean
    email?: boolean
    password?: boolean
    rol?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UsuarioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "apellido" | "email" | "password" | "rol" | "createdAt" | "updatedAt", ExtArgs["result"]["usuario"]>
  export type UsuarioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | Usuario$reservasArgs<ExtArgs>
    _count?: boolean | UsuarioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UsuarioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UsuarioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UsuarioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      apellido: string
      email: string
      password: string
      rol: $Enums.RolUsuario
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }

  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UsuarioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UsuarioFindUniqueArgs>(args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Usuario that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs>(args: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UsuarioFindFirstArgs>(args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs>(args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UsuarioFindManyArgs>(args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
     */
    create<T extends UsuarioCreateArgs>(args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Usuarios.
     * @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UsuarioCreateManyArgs>(args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Usuarios and returns the data saved in the database.
     * @param {UsuarioCreateManyAndReturnArgs} args - Arguments to create many Usuarios.
     * @example
     * // Create many Usuarios
     * const usuario = await prisma.usuario.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UsuarioCreateManyAndReturnArgs>(args?: SelectSubset<T, UsuarioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
     */
    delete<T extends UsuarioDeleteArgs>(args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UsuarioUpdateArgs>(args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UsuarioDeleteManyArgs>(args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UsuarioUpdateManyArgs>(args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios and returns the data updated in the database.
     * @param {UsuarioUpdateManyAndReturnArgs} args - Arguments to update many Usuarios.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Usuarios and only return the `id`
     * const usuarioWithIdOnly = await prisma.usuario.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UsuarioUpdateManyAndReturnArgs>(args: SelectSubset<T, UsuarioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
     */
    upsert<T extends UsuarioUpsertArgs>(args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservas<T extends Usuario$reservasArgs<ExtArgs> = {}>(args?: Subset<T, Usuario$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Usuario model
   */
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly nombre: FieldRef<"Usuario", 'String'>
    readonly apellido: FieldRef<"Usuario", 'String'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly password: FieldRef<"Usuario", 'String'>
    readonly rol: FieldRef<"Usuario", 'RolUsuario'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }

  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }

  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario createManyAndReturn
   */
  export type UsuarioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario updateManyAndReturn
   */
  export type UsuarioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to update.
     */
    limit?: number
  }

  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }

  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }

  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
    /**
     * Limit how many Usuarios to delete.
     */
    limit?: number
  }

  /**
   * Usuario.reservas
   */
  export type Usuario$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    cursor?: ReservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Usuario
     */
    omit?: UsuarioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UsuarioInclude<ExtArgs> | null
  }


  /**
   * Model Habitacion
   */

  export type AggregateHabitacion = {
    _count: HabitacionCountAggregateOutputType | null
    _avg: HabitacionAvgAggregateOutputType | null
    _sum: HabitacionSumAggregateOutputType | null
    _min: HabitacionMinAggregateOutputType | null
    _max: HabitacionMaxAggregateOutputType | null
  }

  export type HabitacionAvgAggregateOutputType = {
    id: number | null
    numero: number | null
    piso: number | null
    capacidad: number | null
    precioPorNoche: number | null
  }

  export type HabitacionSumAggregateOutputType = {
    id: number | null
    numero: number | null
    piso: number | null
    capacidad: number | null
    precioPorNoche: number | null
  }

  export type HabitacionMinAggregateOutputType = {
    id: number | null
    numero: number | null
    piso: number | null
    tipo: string | null
    descripcion: string | null
    capacidad: number | null
    precioPorNoche: number | null
    estado: string | null
  }

  export type HabitacionMaxAggregateOutputType = {
    id: number | null
    numero: number | null
    piso: number | null
    tipo: string | null
    descripcion: string | null
    capacidad: number | null
    precioPorNoche: number | null
    estado: string | null
  }

  export type HabitacionCountAggregateOutputType = {
    id: number
    numero: number
    piso: number
    tipo: number
    descripcion: number
    capacidad: number
    precioPorNoche: number
    estado: number
    _all: number
  }


  export type HabitacionAvgAggregateInputType = {
    id?: true
    numero?: true
    piso?: true
    capacidad?: true
    precioPorNoche?: true
  }

  export type HabitacionSumAggregateInputType = {
    id?: true
    numero?: true
    piso?: true
    capacidad?: true
    precioPorNoche?: true
  }

  export type HabitacionMinAggregateInputType = {
    id?: true
    numero?: true
    piso?: true
    tipo?: true
    descripcion?: true
    capacidad?: true
    precioPorNoche?: true
    estado?: true
  }

  export type HabitacionMaxAggregateInputType = {
    id?: true
    numero?: true
    piso?: true
    tipo?: true
    descripcion?: true
    capacidad?: true
    precioPorNoche?: true
    estado?: true
  }

  export type HabitacionCountAggregateInputType = {
    id?: true
    numero?: true
    piso?: true
    tipo?: true
    descripcion?: true
    capacidad?: true
    precioPorNoche?: true
    estado?: true
    _all?: true
  }

  export type HabitacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habitacion to aggregate.
     */
    where?: HabitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habitacions to fetch.
     */
    orderBy?: HabitacionOrderByWithRelationInput | HabitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HabitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habitacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Habitacions
    **/
    _count?: true | HabitacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HabitacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HabitacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HabitacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HabitacionMaxAggregateInputType
  }

  export type GetHabitacionAggregateType<T extends HabitacionAggregateArgs> = {
        [P in keyof T & keyof AggregateHabitacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHabitacion[P]>
      : GetScalarType<T[P], AggregateHabitacion[P]>
  }




  export type HabitacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HabitacionWhereInput
    orderBy?: HabitacionOrderByWithAggregationInput | HabitacionOrderByWithAggregationInput[]
    by: HabitacionScalarFieldEnum[] | HabitacionScalarFieldEnum
    having?: HabitacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HabitacionCountAggregateInputType | true
    _avg?: HabitacionAvgAggregateInputType
    _sum?: HabitacionSumAggregateInputType
    _min?: HabitacionMinAggregateInputType
    _max?: HabitacionMaxAggregateInputType
  }

  export type HabitacionGroupByOutputType = {
    id: number
    numero: number
    piso: number | null
    tipo: string
    descripcion: string | null
    capacidad: number
    precioPorNoche: number
    estado: string
    _count: HabitacionCountAggregateOutputType | null
    _avg: HabitacionAvgAggregateOutputType | null
    _sum: HabitacionSumAggregateOutputType | null
    _min: HabitacionMinAggregateOutputType | null
    _max: HabitacionMaxAggregateOutputType | null
  }

  type GetHabitacionGroupByPayload<T extends HabitacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HabitacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HabitacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HabitacionGroupByOutputType[P]>
            : GetScalarType<T[P], HabitacionGroupByOutputType[P]>
        }
      >
    >


  export type HabitacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    piso?: boolean
    tipo?: boolean
    descripcion?: boolean
    capacidad?: boolean
    precioPorNoche?: boolean
    estado?: boolean
    reservas?: boolean | Habitacion$reservasArgs<ExtArgs>
    servicios?: boolean | Habitacion$serviciosArgs<ExtArgs>
    _count?: boolean | HabitacionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["habitacion"]>

  export type HabitacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    piso?: boolean
    tipo?: boolean
    descripcion?: boolean
    capacidad?: boolean
    precioPorNoche?: boolean
    estado?: boolean
  }, ExtArgs["result"]["habitacion"]>

  export type HabitacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    numero?: boolean
    piso?: boolean
    tipo?: boolean
    descripcion?: boolean
    capacidad?: boolean
    precioPorNoche?: boolean
    estado?: boolean
  }, ExtArgs["result"]["habitacion"]>

  export type HabitacionSelectScalar = {
    id?: boolean
    numero?: boolean
    piso?: boolean
    tipo?: boolean
    descripcion?: boolean
    capacidad?: boolean
    precioPorNoche?: boolean
    estado?: boolean
  }

  export type HabitacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "numero" | "piso" | "tipo" | "descripcion" | "capacidad" | "precioPorNoche" | "estado", ExtArgs["result"]["habitacion"]>
  export type HabitacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reservas?: boolean | Habitacion$reservasArgs<ExtArgs>
    servicios?: boolean | Habitacion$serviciosArgs<ExtArgs>
    _count?: boolean | HabitacionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type HabitacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type HabitacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $HabitacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Habitacion"
    objects: {
      reservas: Prisma.$ReservaPayload<ExtArgs>[]
      servicios: Prisma.$ServicioEnHabitacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      numero: number
      piso: number | null
      tipo: string
      descripcion: string | null
      capacidad: number
      precioPorNoche: number
      estado: string
    }, ExtArgs["result"]["habitacion"]>
    composites: {}
  }

  type HabitacionGetPayload<S extends boolean | null | undefined | HabitacionDefaultArgs> = $Result.GetResult<Prisma.$HabitacionPayload, S>

  type HabitacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HabitacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HabitacionCountAggregateInputType | true
    }

  export interface HabitacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Habitacion'], meta: { name: 'Habitacion' } }
    /**
     * Find zero or one Habitacion that matches the filter.
     * @param {HabitacionFindUniqueArgs} args - Arguments to find a Habitacion
     * @example
     * // Get one Habitacion
     * const habitacion = await prisma.habitacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HabitacionFindUniqueArgs>(args: SelectSubset<T, HabitacionFindUniqueArgs<ExtArgs>>): Prisma__HabitacionClient<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Habitacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HabitacionFindUniqueOrThrowArgs} args - Arguments to find a Habitacion
     * @example
     * // Get one Habitacion
     * const habitacion = await prisma.habitacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HabitacionFindUniqueOrThrowArgs>(args: SelectSubset<T, HabitacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HabitacionClient<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habitacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitacionFindFirstArgs} args - Arguments to find a Habitacion
     * @example
     * // Get one Habitacion
     * const habitacion = await prisma.habitacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HabitacionFindFirstArgs>(args?: SelectSubset<T, HabitacionFindFirstArgs<ExtArgs>>): Prisma__HabitacionClient<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Habitacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitacionFindFirstOrThrowArgs} args - Arguments to find a Habitacion
     * @example
     * // Get one Habitacion
     * const habitacion = await prisma.habitacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HabitacionFindFirstOrThrowArgs>(args?: SelectSubset<T, HabitacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__HabitacionClient<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Habitacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Habitacions
     * const habitacions = await prisma.habitacion.findMany()
     * 
     * // Get first 10 Habitacions
     * const habitacions = await prisma.habitacion.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const habitacionWithIdOnly = await prisma.habitacion.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HabitacionFindManyArgs>(args?: SelectSubset<T, HabitacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Habitacion.
     * @param {HabitacionCreateArgs} args - Arguments to create a Habitacion.
     * @example
     * // Create one Habitacion
     * const Habitacion = await prisma.habitacion.create({
     *   data: {
     *     // ... data to create a Habitacion
     *   }
     * })
     * 
     */
    create<T extends HabitacionCreateArgs>(args: SelectSubset<T, HabitacionCreateArgs<ExtArgs>>): Prisma__HabitacionClient<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Habitacions.
     * @param {HabitacionCreateManyArgs} args - Arguments to create many Habitacions.
     * @example
     * // Create many Habitacions
     * const habitacion = await prisma.habitacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HabitacionCreateManyArgs>(args?: SelectSubset<T, HabitacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Habitacions and returns the data saved in the database.
     * @param {HabitacionCreateManyAndReturnArgs} args - Arguments to create many Habitacions.
     * @example
     * // Create many Habitacions
     * const habitacion = await prisma.habitacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Habitacions and only return the `id`
     * const habitacionWithIdOnly = await prisma.habitacion.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HabitacionCreateManyAndReturnArgs>(args?: SelectSubset<T, HabitacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Habitacion.
     * @param {HabitacionDeleteArgs} args - Arguments to delete one Habitacion.
     * @example
     * // Delete one Habitacion
     * const Habitacion = await prisma.habitacion.delete({
     *   where: {
     *     // ... filter to delete one Habitacion
     *   }
     * })
     * 
     */
    delete<T extends HabitacionDeleteArgs>(args: SelectSubset<T, HabitacionDeleteArgs<ExtArgs>>): Prisma__HabitacionClient<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Habitacion.
     * @param {HabitacionUpdateArgs} args - Arguments to update one Habitacion.
     * @example
     * // Update one Habitacion
     * const habitacion = await prisma.habitacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HabitacionUpdateArgs>(args: SelectSubset<T, HabitacionUpdateArgs<ExtArgs>>): Prisma__HabitacionClient<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Habitacions.
     * @param {HabitacionDeleteManyArgs} args - Arguments to filter Habitacions to delete.
     * @example
     * // Delete a few Habitacions
     * const { count } = await prisma.habitacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HabitacionDeleteManyArgs>(args?: SelectSubset<T, HabitacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habitacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Habitacions
     * const habitacion = await prisma.habitacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HabitacionUpdateManyArgs>(args: SelectSubset<T, HabitacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Habitacions and returns the data updated in the database.
     * @param {HabitacionUpdateManyAndReturnArgs} args - Arguments to update many Habitacions.
     * @example
     * // Update many Habitacions
     * const habitacion = await prisma.habitacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Habitacions and only return the `id`
     * const habitacionWithIdOnly = await prisma.habitacion.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HabitacionUpdateManyAndReturnArgs>(args: SelectSubset<T, HabitacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Habitacion.
     * @param {HabitacionUpsertArgs} args - Arguments to update or create a Habitacion.
     * @example
     * // Update or create a Habitacion
     * const habitacion = await prisma.habitacion.upsert({
     *   create: {
     *     // ... data to create a Habitacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Habitacion we want to update
     *   }
     * })
     */
    upsert<T extends HabitacionUpsertArgs>(args: SelectSubset<T, HabitacionUpsertArgs<ExtArgs>>): Prisma__HabitacionClient<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Habitacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitacionCountArgs} args - Arguments to filter Habitacions to count.
     * @example
     * // Count the number of Habitacions
     * const count = await prisma.habitacion.count({
     *   where: {
     *     // ... the filter for the Habitacions we want to count
     *   }
     * })
    **/
    count<T extends HabitacionCountArgs>(
      args?: Subset<T, HabitacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HabitacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Habitacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HabitacionAggregateArgs>(args: Subset<T, HabitacionAggregateArgs>): Prisma.PrismaPromise<GetHabitacionAggregateType<T>>

    /**
     * Group by Habitacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HabitacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HabitacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HabitacionGroupByArgs['orderBy'] }
        : { orderBy?: HabitacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HabitacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHabitacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Habitacion model
   */
  readonly fields: HabitacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Habitacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HabitacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reservas<T extends Habitacion$reservasArgs<ExtArgs> = {}>(args?: Subset<T, Habitacion$reservasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    servicios<T extends Habitacion$serviciosArgs<ExtArgs> = {}>(args?: Subset<T, Habitacion$serviciosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioEnHabitacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Habitacion model
   */
  interface HabitacionFieldRefs {
    readonly id: FieldRef<"Habitacion", 'Int'>
    readonly numero: FieldRef<"Habitacion", 'Int'>
    readonly piso: FieldRef<"Habitacion", 'Int'>
    readonly tipo: FieldRef<"Habitacion", 'String'>
    readonly descripcion: FieldRef<"Habitacion", 'String'>
    readonly capacidad: FieldRef<"Habitacion", 'Int'>
    readonly precioPorNoche: FieldRef<"Habitacion", 'Float'>
    readonly estado: FieldRef<"Habitacion", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Habitacion findUnique
   */
  export type HabitacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
    /**
     * Filter, which Habitacion to fetch.
     */
    where: HabitacionWhereUniqueInput
  }

  /**
   * Habitacion findUniqueOrThrow
   */
  export type HabitacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
    /**
     * Filter, which Habitacion to fetch.
     */
    where: HabitacionWhereUniqueInput
  }

  /**
   * Habitacion findFirst
   */
  export type HabitacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
    /**
     * Filter, which Habitacion to fetch.
     */
    where?: HabitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habitacions to fetch.
     */
    orderBy?: HabitacionOrderByWithRelationInput | HabitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habitacions.
     */
    cursor?: HabitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habitacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habitacions.
     */
    distinct?: HabitacionScalarFieldEnum | HabitacionScalarFieldEnum[]
  }

  /**
   * Habitacion findFirstOrThrow
   */
  export type HabitacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
    /**
     * Filter, which Habitacion to fetch.
     */
    where?: HabitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habitacions to fetch.
     */
    orderBy?: HabitacionOrderByWithRelationInput | HabitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Habitacions.
     */
    cursor?: HabitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habitacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Habitacions.
     */
    distinct?: HabitacionScalarFieldEnum | HabitacionScalarFieldEnum[]
  }

  /**
   * Habitacion findMany
   */
  export type HabitacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
    /**
     * Filter, which Habitacions to fetch.
     */
    where?: HabitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Habitacions to fetch.
     */
    orderBy?: HabitacionOrderByWithRelationInput | HabitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Habitacions.
     */
    cursor?: HabitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Habitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Habitacions.
     */
    skip?: number
    distinct?: HabitacionScalarFieldEnum | HabitacionScalarFieldEnum[]
  }

  /**
   * Habitacion create
   */
  export type HabitacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
    /**
     * The data needed to create a Habitacion.
     */
    data: XOR<HabitacionCreateInput, HabitacionUncheckedCreateInput>
  }

  /**
   * Habitacion createMany
   */
  export type HabitacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Habitacions.
     */
    data: HabitacionCreateManyInput | HabitacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Habitacion createManyAndReturn
   */
  export type HabitacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * The data used to create many Habitacions.
     */
    data: HabitacionCreateManyInput | HabitacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Habitacion update
   */
  export type HabitacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
    /**
     * The data needed to update a Habitacion.
     */
    data: XOR<HabitacionUpdateInput, HabitacionUncheckedUpdateInput>
    /**
     * Choose, which Habitacion to update.
     */
    where: HabitacionWhereUniqueInput
  }

  /**
   * Habitacion updateMany
   */
  export type HabitacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Habitacions.
     */
    data: XOR<HabitacionUpdateManyMutationInput, HabitacionUncheckedUpdateManyInput>
    /**
     * Filter which Habitacions to update
     */
    where?: HabitacionWhereInput
    /**
     * Limit how many Habitacions to update.
     */
    limit?: number
  }

  /**
   * Habitacion updateManyAndReturn
   */
  export type HabitacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * The data used to update Habitacions.
     */
    data: XOR<HabitacionUpdateManyMutationInput, HabitacionUncheckedUpdateManyInput>
    /**
     * Filter which Habitacions to update
     */
    where?: HabitacionWhereInput
    /**
     * Limit how many Habitacions to update.
     */
    limit?: number
  }

  /**
   * Habitacion upsert
   */
  export type HabitacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
    /**
     * The filter to search for the Habitacion to update in case it exists.
     */
    where: HabitacionWhereUniqueInput
    /**
     * In case the Habitacion found by the `where` argument doesn't exist, create a new Habitacion with this data.
     */
    create: XOR<HabitacionCreateInput, HabitacionUncheckedCreateInput>
    /**
     * In case the Habitacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HabitacionUpdateInput, HabitacionUncheckedUpdateInput>
  }

  /**
   * Habitacion delete
   */
  export type HabitacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
    /**
     * Filter which Habitacion to delete.
     */
    where: HabitacionWhereUniqueInput
  }

  /**
   * Habitacion deleteMany
   */
  export type HabitacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Habitacions to delete
     */
    where?: HabitacionWhereInput
    /**
     * Limit how many Habitacions to delete.
     */
    limit?: number
  }

  /**
   * Habitacion.reservas
   */
  export type Habitacion$reservasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    cursor?: ReservaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Habitacion.servicios
   */
  export type Habitacion$serviciosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioEnHabitacion
     */
    select?: ServicioEnHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioEnHabitacion
     */
    omit?: ServicioEnHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioEnHabitacionInclude<ExtArgs> | null
    where?: ServicioEnHabitacionWhereInput
    orderBy?: ServicioEnHabitacionOrderByWithRelationInput | ServicioEnHabitacionOrderByWithRelationInput[]
    cursor?: ServicioEnHabitacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicioEnHabitacionScalarFieldEnum | ServicioEnHabitacionScalarFieldEnum[]
  }

  /**
   * Habitacion without action
   */
  export type HabitacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Habitacion
     */
    select?: HabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Habitacion
     */
    omit?: HabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HabitacionInclude<ExtArgs> | null
  }


  /**
   * Model Reserva
   */

  export type AggregateReserva = {
    _count: ReservaCountAggregateOutputType | null
    _avg: ReservaAvgAggregateOutputType | null
    _sum: ReservaSumAggregateOutputType | null
    _min: ReservaMinAggregateOutputType | null
    _max: ReservaMaxAggregateOutputType | null
  }

  export type ReservaAvgAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    habitacionId: number | null
    numeroHuespedes: number | null
  }

  export type ReservaSumAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    habitacionId: number | null
    numeroHuespedes: number | null
  }

  export type ReservaMinAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    habitacionId: number | null
    fechaInicio: Date | null
    fechaFin: Date | null
    numeroHuespedes: number | null
    estado: string | null
    createdAt: Date | null
  }

  export type ReservaMaxAggregateOutputType = {
    id: number | null
    usuarioId: number | null
    habitacionId: number | null
    fechaInicio: Date | null
    fechaFin: Date | null
    numeroHuespedes: number | null
    estado: string | null
    createdAt: Date | null
  }

  export type ReservaCountAggregateOutputType = {
    id: number
    usuarioId: number
    habitacionId: number
    fechaInicio: number
    fechaFin: number
    numeroHuespedes: number
    estado: number
    createdAt: number
    _all: number
  }


  export type ReservaAvgAggregateInputType = {
    id?: true
    usuarioId?: true
    habitacionId?: true
    numeroHuespedes?: true
  }

  export type ReservaSumAggregateInputType = {
    id?: true
    usuarioId?: true
    habitacionId?: true
    numeroHuespedes?: true
  }

  export type ReservaMinAggregateInputType = {
    id?: true
    usuarioId?: true
    habitacionId?: true
    fechaInicio?: true
    fechaFin?: true
    numeroHuespedes?: true
    estado?: true
    createdAt?: true
  }

  export type ReservaMaxAggregateInputType = {
    id?: true
    usuarioId?: true
    habitacionId?: true
    fechaInicio?: true
    fechaFin?: true
    numeroHuespedes?: true
    estado?: true
    createdAt?: true
  }

  export type ReservaCountAggregateInputType = {
    id?: true
    usuarioId?: true
    habitacionId?: true
    fechaInicio?: true
    fechaFin?: true
    numeroHuespedes?: true
    estado?: true
    createdAt?: true
    _all?: true
  }

  export type ReservaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reserva to aggregate.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reservas
    **/
    _count?: true | ReservaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReservaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReservaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReservaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReservaMaxAggregateInputType
  }

  export type GetReservaAggregateType<T extends ReservaAggregateArgs> = {
        [P in keyof T & keyof AggregateReserva]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReserva[P]>
      : GetScalarType<T[P], AggregateReserva[P]>
  }




  export type ReservaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReservaWhereInput
    orderBy?: ReservaOrderByWithAggregationInput | ReservaOrderByWithAggregationInput[]
    by: ReservaScalarFieldEnum[] | ReservaScalarFieldEnum
    having?: ReservaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReservaCountAggregateInputType | true
    _avg?: ReservaAvgAggregateInputType
    _sum?: ReservaSumAggregateInputType
    _min?: ReservaMinAggregateInputType
    _max?: ReservaMaxAggregateInputType
  }

  export type ReservaGroupByOutputType = {
    id: number
    usuarioId: number
    habitacionId: number
    fechaInicio: Date
    fechaFin: Date
    numeroHuespedes: number
    estado: string
    createdAt: Date
    _count: ReservaCountAggregateOutputType | null
    _avg: ReservaAvgAggregateOutputType | null
    _sum: ReservaSumAggregateOutputType | null
    _min: ReservaMinAggregateOutputType | null
    _max: ReservaMaxAggregateOutputType | null
  }

  type GetReservaGroupByPayload<T extends ReservaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReservaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReservaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReservaGroupByOutputType[P]>
            : GetScalarType<T[P], ReservaGroupByOutputType[P]>
        }
      >
    >


  export type ReservaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    habitacionId?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    numeroHuespedes?: boolean
    estado?: boolean
    createdAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    habitacion?: boolean | HabitacionDefaultArgs<ExtArgs>
    pagos?: boolean | Reserva$pagosArgs<ExtArgs>
    _count?: boolean | ReservaCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type ReservaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    habitacionId?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    numeroHuespedes?: boolean
    estado?: boolean
    createdAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    habitacion?: boolean | HabitacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type ReservaSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    usuarioId?: boolean
    habitacionId?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    numeroHuespedes?: boolean
    estado?: boolean
    createdAt?: boolean
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    habitacion?: boolean | HabitacionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reserva"]>

  export type ReservaSelectScalar = {
    id?: boolean
    usuarioId?: boolean
    habitacionId?: boolean
    fechaInicio?: boolean
    fechaFin?: boolean
    numeroHuespedes?: boolean
    estado?: boolean
    createdAt?: boolean
  }

  export type ReservaOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "usuarioId" | "habitacionId" | "fechaInicio" | "fechaFin" | "numeroHuespedes" | "estado" | "createdAt", ExtArgs["result"]["reserva"]>
  export type ReservaInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    habitacion?: boolean | HabitacionDefaultArgs<ExtArgs>
    pagos?: boolean | Reserva$pagosArgs<ExtArgs>
    _count?: boolean | ReservaCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ReservaIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    habitacion?: boolean | HabitacionDefaultArgs<ExtArgs>
  }
  export type ReservaIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    usuario?: boolean | UsuarioDefaultArgs<ExtArgs>
    habitacion?: boolean | HabitacionDefaultArgs<ExtArgs>
  }

  export type $ReservaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reserva"
    objects: {
      usuario: Prisma.$UsuarioPayload<ExtArgs>
      habitacion: Prisma.$HabitacionPayload<ExtArgs>
      pagos: Prisma.$PagoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      usuarioId: number
      habitacionId: number
      fechaInicio: Date
      fechaFin: Date
      numeroHuespedes: number
      estado: string
      createdAt: Date
    }, ExtArgs["result"]["reserva"]>
    composites: {}
  }

  type ReservaGetPayload<S extends boolean | null | undefined | ReservaDefaultArgs> = $Result.GetResult<Prisma.$ReservaPayload, S>

  type ReservaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReservaFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReservaCountAggregateInputType | true
    }

  export interface ReservaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reserva'], meta: { name: 'Reserva' } }
    /**
     * Find zero or one Reserva that matches the filter.
     * @param {ReservaFindUniqueArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReservaFindUniqueArgs>(args: SelectSubset<T, ReservaFindUniqueArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reserva that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReservaFindUniqueOrThrowArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReservaFindUniqueOrThrowArgs>(args: SelectSubset<T, ReservaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reserva that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindFirstArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReservaFindFirstArgs>(args?: SelectSubset<T, ReservaFindFirstArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reserva that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindFirstOrThrowArgs} args - Arguments to find a Reserva
     * @example
     * // Get one Reserva
     * const reserva = await prisma.reserva.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReservaFindFirstOrThrowArgs>(args?: SelectSubset<T, ReservaFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reservas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reservas
     * const reservas = await prisma.reserva.findMany()
     * 
     * // Get first 10 Reservas
     * const reservas = await prisma.reserva.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reservaWithIdOnly = await prisma.reserva.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReservaFindManyArgs>(args?: SelectSubset<T, ReservaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reserva.
     * @param {ReservaCreateArgs} args - Arguments to create a Reserva.
     * @example
     * // Create one Reserva
     * const Reserva = await prisma.reserva.create({
     *   data: {
     *     // ... data to create a Reserva
     *   }
     * })
     * 
     */
    create<T extends ReservaCreateArgs>(args: SelectSubset<T, ReservaCreateArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reservas.
     * @param {ReservaCreateManyArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reserva = await prisma.reserva.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReservaCreateManyArgs>(args?: SelectSubset<T, ReservaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reservas and returns the data saved in the database.
     * @param {ReservaCreateManyAndReturnArgs} args - Arguments to create many Reservas.
     * @example
     * // Create many Reservas
     * const reserva = await prisma.reserva.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reservas and only return the `id`
     * const reservaWithIdOnly = await prisma.reserva.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReservaCreateManyAndReturnArgs>(args?: SelectSubset<T, ReservaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reserva.
     * @param {ReservaDeleteArgs} args - Arguments to delete one Reserva.
     * @example
     * // Delete one Reserva
     * const Reserva = await prisma.reserva.delete({
     *   where: {
     *     // ... filter to delete one Reserva
     *   }
     * })
     * 
     */
    delete<T extends ReservaDeleteArgs>(args: SelectSubset<T, ReservaDeleteArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reserva.
     * @param {ReservaUpdateArgs} args - Arguments to update one Reserva.
     * @example
     * // Update one Reserva
     * const reserva = await prisma.reserva.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReservaUpdateArgs>(args: SelectSubset<T, ReservaUpdateArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reservas.
     * @param {ReservaDeleteManyArgs} args - Arguments to filter Reservas to delete.
     * @example
     * // Delete a few Reservas
     * const { count } = await prisma.reserva.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReservaDeleteManyArgs>(args?: SelectSubset<T, ReservaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reservas
     * const reserva = await prisma.reserva.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReservaUpdateManyArgs>(args: SelectSubset<T, ReservaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reservas and returns the data updated in the database.
     * @param {ReservaUpdateManyAndReturnArgs} args - Arguments to update many Reservas.
     * @example
     * // Update many Reservas
     * const reserva = await prisma.reserva.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reservas and only return the `id`
     * const reservaWithIdOnly = await prisma.reserva.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReservaUpdateManyAndReturnArgs>(args: SelectSubset<T, ReservaUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reserva.
     * @param {ReservaUpsertArgs} args - Arguments to update or create a Reserva.
     * @example
     * // Update or create a Reserva
     * const reserva = await prisma.reserva.upsert({
     *   create: {
     *     // ... data to create a Reserva
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reserva we want to update
     *   }
     * })
     */
    upsert<T extends ReservaUpsertArgs>(args: SelectSubset<T, ReservaUpsertArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reservas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaCountArgs} args - Arguments to filter Reservas to count.
     * @example
     * // Count the number of Reservas
     * const count = await prisma.reserva.count({
     *   where: {
     *     // ... the filter for the Reservas we want to count
     *   }
     * })
    **/
    count<T extends ReservaCountArgs>(
      args?: Subset<T, ReservaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReservaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reserva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReservaAggregateArgs>(args: Subset<T, ReservaAggregateArgs>): Prisma.PrismaPromise<GetReservaAggregateType<T>>

    /**
     * Group by Reserva.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReservaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReservaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReservaGroupByArgs['orderBy'] }
        : { orderBy?: ReservaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReservaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReservaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reserva model
   */
  readonly fields: ReservaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reserva.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReservaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    usuario<T extends UsuarioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UsuarioDefaultArgs<ExtArgs>>): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    habitacion<T extends HabitacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HabitacionDefaultArgs<ExtArgs>>): Prisma__HabitacionClient<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    pagos<T extends Reserva$pagosArgs<ExtArgs> = {}>(args?: Subset<T, Reserva$pagosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reserva model
   */
  interface ReservaFieldRefs {
    readonly id: FieldRef<"Reserva", 'Int'>
    readonly usuarioId: FieldRef<"Reserva", 'Int'>
    readonly habitacionId: FieldRef<"Reserva", 'Int'>
    readonly fechaInicio: FieldRef<"Reserva", 'DateTime'>
    readonly fechaFin: FieldRef<"Reserva", 'DateTime'>
    readonly numeroHuespedes: FieldRef<"Reserva", 'Int'>
    readonly estado: FieldRef<"Reserva", 'String'>
    readonly createdAt: FieldRef<"Reserva", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reserva findUnique
   */
  export type ReservaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva findUniqueOrThrow
   */
  export type ReservaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva findFirst
   */
  export type ReservaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservas.
     */
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva findFirstOrThrow
   */
  export type ReservaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reserva to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reservas.
     */
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva findMany
   */
  export type ReservaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter, which Reservas to fetch.
     */
    where?: ReservaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reservas to fetch.
     */
    orderBy?: ReservaOrderByWithRelationInput | ReservaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reservas.
     */
    cursor?: ReservaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reservas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reservas.
     */
    skip?: number
    distinct?: ReservaScalarFieldEnum | ReservaScalarFieldEnum[]
  }

  /**
   * Reserva create
   */
  export type ReservaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The data needed to create a Reserva.
     */
    data: XOR<ReservaCreateInput, ReservaUncheckedCreateInput>
  }

  /**
   * Reserva createMany
   */
  export type ReservaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reservas.
     */
    data: ReservaCreateManyInput | ReservaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reserva createManyAndReturn
   */
  export type ReservaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * The data used to create many Reservas.
     */
    data: ReservaCreateManyInput | ReservaCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reserva update
   */
  export type ReservaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The data needed to update a Reserva.
     */
    data: XOR<ReservaUpdateInput, ReservaUncheckedUpdateInput>
    /**
     * Choose, which Reserva to update.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva updateMany
   */
  export type ReservaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reservas.
     */
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyInput>
    /**
     * Filter which Reservas to update
     */
    where?: ReservaWhereInput
    /**
     * Limit how many Reservas to update.
     */
    limit?: number
  }

  /**
   * Reserva updateManyAndReturn
   */
  export type ReservaUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * The data used to update Reservas.
     */
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyInput>
    /**
     * Filter which Reservas to update
     */
    where?: ReservaWhereInput
    /**
     * Limit how many Reservas to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reserva upsert
   */
  export type ReservaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * The filter to search for the Reserva to update in case it exists.
     */
    where: ReservaWhereUniqueInput
    /**
     * In case the Reserva found by the `where` argument doesn't exist, create a new Reserva with this data.
     */
    create: XOR<ReservaCreateInput, ReservaUncheckedCreateInput>
    /**
     * In case the Reserva was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReservaUpdateInput, ReservaUncheckedUpdateInput>
  }

  /**
   * Reserva delete
   */
  export type ReservaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
    /**
     * Filter which Reserva to delete.
     */
    where: ReservaWhereUniqueInput
  }

  /**
   * Reserva deleteMany
   */
  export type ReservaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reservas to delete
     */
    where?: ReservaWhereInput
    /**
     * Limit how many Reservas to delete.
     */
    limit?: number
  }

  /**
   * Reserva.pagos
   */
  export type Reserva$pagosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    where?: PagoWhereInput
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    cursor?: PagoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * Reserva without action
   */
  export type ReservaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reserva
     */
    select?: ReservaSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reserva
     */
    omit?: ReservaOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReservaInclude<ExtArgs> | null
  }


  /**
   * Model Pago
   */

  export type AggregatePago = {
    _count: PagoCountAggregateOutputType | null
    _avg: PagoAvgAggregateOutputType | null
    _sum: PagoSumAggregateOutputType | null
    _min: PagoMinAggregateOutputType | null
    _max: PagoMaxAggregateOutputType | null
  }

  export type PagoAvgAggregateOutputType = {
    id: number | null
    reservaId: number | null
    monto: number | null
  }

  export type PagoSumAggregateOutputType = {
    id: number | null
    reservaId: number | null
    monto: number | null
  }

  export type PagoMinAggregateOutputType = {
    id: number | null
    reservaId: number | null
    monto: number | null
    metodo: string | null
    estado: string | null
  }

  export type PagoMaxAggregateOutputType = {
    id: number | null
    reservaId: number | null
    monto: number | null
    metodo: string | null
    estado: string | null
  }

  export type PagoCountAggregateOutputType = {
    id: number
    reservaId: number
    monto: number
    metodo: number
    estado: number
    _all: number
  }


  export type PagoAvgAggregateInputType = {
    id?: true
    reservaId?: true
    monto?: true
  }

  export type PagoSumAggregateInputType = {
    id?: true
    reservaId?: true
    monto?: true
  }

  export type PagoMinAggregateInputType = {
    id?: true
    reservaId?: true
    monto?: true
    metodo?: true
    estado?: true
  }

  export type PagoMaxAggregateInputType = {
    id?: true
    reservaId?: true
    monto?: true
    metodo?: true
    estado?: true
  }

  export type PagoCountAggregateInputType = {
    id?: true
    reservaId?: true
    monto?: true
    metodo?: true
    estado?: true
    _all?: true
  }

  export type PagoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pago to aggregate.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pagos
    **/
    _count?: true | PagoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PagoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PagoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PagoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PagoMaxAggregateInputType
  }

  export type GetPagoAggregateType<T extends PagoAggregateArgs> = {
        [P in keyof T & keyof AggregatePago]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePago[P]>
      : GetScalarType<T[P], AggregatePago[P]>
  }




  export type PagoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PagoWhereInput
    orderBy?: PagoOrderByWithAggregationInput | PagoOrderByWithAggregationInput[]
    by: PagoScalarFieldEnum[] | PagoScalarFieldEnum
    having?: PagoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PagoCountAggregateInputType | true
    _avg?: PagoAvgAggregateInputType
    _sum?: PagoSumAggregateInputType
    _min?: PagoMinAggregateInputType
    _max?: PagoMaxAggregateInputType
  }

  export type PagoGroupByOutputType = {
    id: number
    reservaId: number
    monto: number
    metodo: string | null
    estado: string | null
    _count: PagoCountAggregateOutputType | null
    _avg: PagoAvgAggregateOutputType | null
    _sum: PagoSumAggregateOutputType | null
    _min: PagoMinAggregateOutputType | null
    _max: PagoMaxAggregateOutputType | null
  }

  type GetPagoGroupByPayload<T extends PagoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PagoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PagoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PagoGroupByOutputType[P]>
            : GetScalarType<T[P], PagoGroupByOutputType[P]>
        }
      >
    >


  export type PagoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservaId?: boolean
    monto?: boolean
    metodo?: boolean
    estado?: boolean
    reserva?: boolean | ReservaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pago"]>

  export type PagoSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservaId?: boolean
    monto?: boolean
    metodo?: boolean
    estado?: boolean
    reserva?: boolean | ReservaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pago"]>

  export type PagoSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    reservaId?: boolean
    monto?: boolean
    metodo?: boolean
    estado?: boolean
    reserva?: boolean | ReservaDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pago"]>

  export type PagoSelectScalar = {
    id?: boolean
    reservaId?: boolean
    monto?: boolean
    metodo?: boolean
    estado?: boolean
  }

  export type PagoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "reservaId" | "monto" | "metodo" | "estado", ExtArgs["result"]["pago"]>
  export type PagoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | ReservaDefaultArgs<ExtArgs>
  }
  export type PagoIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | ReservaDefaultArgs<ExtArgs>
  }
  export type PagoIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reserva?: boolean | ReservaDefaultArgs<ExtArgs>
  }

  export type $PagoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Pago"
    objects: {
      reserva: Prisma.$ReservaPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      reservaId: number
      monto: number
      metodo: string | null
      estado: string | null
    }, ExtArgs["result"]["pago"]>
    composites: {}
  }

  type PagoGetPayload<S extends boolean | null | undefined | PagoDefaultArgs> = $Result.GetResult<Prisma.$PagoPayload, S>

  type PagoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PagoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PagoCountAggregateInputType | true
    }

  export interface PagoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pago'], meta: { name: 'Pago' } }
    /**
     * Find zero or one Pago that matches the filter.
     * @param {PagoFindUniqueArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PagoFindUniqueArgs>(args: SelectSubset<T, PagoFindUniqueArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pago that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PagoFindUniqueOrThrowArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PagoFindUniqueOrThrowArgs>(args: SelectSubset<T, PagoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pago that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoFindFirstArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PagoFindFirstArgs>(args?: SelectSubset<T, PagoFindFirstArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pago that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoFindFirstOrThrowArgs} args - Arguments to find a Pago
     * @example
     * // Get one Pago
     * const pago = await prisma.pago.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PagoFindFirstOrThrowArgs>(args?: SelectSubset<T, PagoFindFirstOrThrowArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pagos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pagos
     * const pagos = await prisma.pago.findMany()
     * 
     * // Get first 10 Pagos
     * const pagos = await prisma.pago.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pagoWithIdOnly = await prisma.pago.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PagoFindManyArgs>(args?: SelectSubset<T, PagoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pago.
     * @param {PagoCreateArgs} args - Arguments to create a Pago.
     * @example
     * // Create one Pago
     * const Pago = await prisma.pago.create({
     *   data: {
     *     // ... data to create a Pago
     *   }
     * })
     * 
     */
    create<T extends PagoCreateArgs>(args: SelectSubset<T, PagoCreateArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pagos.
     * @param {PagoCreateManyArgs} args - Arguments to create many Pagos.
     * @example
     * // Create many Pagos
     * const pago = await prisma.pago.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PagoCreateManyArgs>(args?: SelectSubset<T, PagoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Pagos and returns the data saved in the database.
     * @param {PagoCreateManyAndReturnArgs} args - Arguments to create many Pagos.
     * @example
     * // Create many Pagos
     * const pago = await prisma.pago.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Pagos and only return the `id`
     * const pagoWithIdOnly = await prisma.pago.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PagoCreateManyAndReturnArgs>(args?: SelectSubset<T, PagoCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Pago.
     * @param {PagoDeleteArgs} args - Arguments to delete one Pago.
     * @example
     * // Delete one Pago
     * const Pago = await prisma.pago.delete({
     *   where: {
     *     // ... filter to delete one Pago
     *   }
     * })
     * 
     */
    delete<T extends PagoDeleteArgs>(args: SelectSubset<T, PagoDeleteArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pago.
     * @param {PagoUpdateArgs} args - Arguments to update one Pago.
     * @example
     * // Update one Pago
     * const pago = await prisma.pago.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PagoUpdateArgs>(args: SelectSubset<T, PagoUpdateArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pagos.
     * @param {PagoDeleteManyArgs} args - Arguments to filter Pagos to delete.
     * @example
     * // Delete a few Pagos
     * const { count } = await prisma.pago.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PagoDeleteManyArgs>(args?: SelectSubset<T, PagoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pagos
     * const pago = await prisma.pago.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PagoUpdateManyArgs>(args: SelectSubset<T, PagoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pagos and returns the data updated in the database.
     * @param {PagoUpdateManyAndReturnArgs} args - Arguments to update many Pagos.
     * @example
     * // Update many Pagos
     * const pago = await prisma.pago.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Pagos and only return the `id`
     * const pagoWithIdOnly = await prisma.pago.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PagoUpdateManyAndReturnArgs>(args: SelectSubset<T, PagoUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Pago.
     * @param {PagoUpsertArgs} args - Arguments to update or create a Pago.
     * @example
     * // Update or create a Pago
     * const pago = await prisma.pago.upsert({
     *   create: {
     *     // ... data to create a Pago
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pago we want to update
     *   }
     * })
     */
    upsert<T extends PagoUpsertArgs>(args: SelectSubset<T, PagoUpsertArgs<ExtArgs>>): Prisma__PagoClient<$Result.GetResult<Prisma.$PagoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pagos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoCountArgs} args - Arguments to filter Pagos to count.
     * @example
     * // Count the number of Pagos
     * const count = await prisma.pago.count({
     *   where: {
     *     // ... the filter for the Pagos we want to count
     *   }
     * })
    **/
    count<T extends PagoCountArgs>(
      args?: Subset<T, PagoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PagoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PagoAggregateArgs>(args: Subset<T, PagoAggregateArgs>): Prisma.PrismaPromise<GetPagoAggregateType<T>>

    /**
     * Group by Pago.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PagoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PagoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PagoGroupByArgs['orderBy'] }
        : { orderBy?: PagoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PagoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPagoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pago model
   */
  readonly fields: PagoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pago.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PagoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reserva<T extends ReservaDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ReservaDefaultArgs<ExtArgs>>): Prisma__ReservaClient<$Result.GetResult<Prisma.$ReservaPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Pago model
   */
  interface PagoFieldRefs {
    readonly id: FieldRef<"Pago", 'Int'>
    readonly reservaId: FieldRef<"Pago", 'Int'>
    readonly monto: FieldRef<"Pago", 'Float'>
    readonly metodo: FieldRef<"Pago", 'String'>
    readonly estado: FieldRef<"Pago", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Pago findUnique
   */
  export type PagoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where: PagoWhereUniqueInput
  }

  /**
   * Pago findUniqueOrThrow
   */
  export type PagoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where: PagoWhereUniqueInput
  }

  /**
   * Pago findFirst
   */
  export type PagoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagos.
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagos.
     */
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * Pago findFirstOrThrow
   */
  export type PagoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pago to fetch.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pagos.
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pagos.
     */
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * Pago findMany
   */
  export type PagoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter, which Pagos to fetch.
     */
    where?: PagoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pagos to fetch.
     */
    orderBy?: PagoOrderByWithRelationInput | PagoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pagos.
     */
    cursor?: PagoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pagos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pagos.
     */
    skip?: number
    distinct?: PagoScalarFieldEnum | PagoScalarFieldEnum[]
  }

  /**
   * Pago create
   */
  export type PagoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * The data needed to create a Pago.
     */
    data: XOR<PagoCreateInput, PagoUncheckedCreateInput>
  }

  /**
   * Pago createMany
   */
  export type PagoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pagos.
     */
    data: PagoCreateManyInput | PagoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Pago createManyAndReturn
   */
  export type PagoCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * The data used to create many Pagos.
     */
    data: PagoCreateManyInput | PagoCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pago update
   */
  export type PagoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * The data needed to update a Pago.
     */
    data: XOR<PagoUpdateInput, PagoUncheckedUpdateInput>
    /**
     * Choose, which Pago to update.
     */
    where: PagoWhereUniqueInput
  }

  /**
   * Pago updateMany
   */
  export type PagoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pagos.
     */
    data: XOR<PagoUpdateManyMutationInput, PagoUncheckedUpdateManyInput>
    /**
     * Filter which Pagos to update
     */
    where?: PagoWhereInput
    /**
     * Limit how many Pagos to update.
     */
    limit?: number
  }

  /**
   * Pago updateManyAndReturn
   */
  export type PagoUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * The data used to update Pagos.
     */
    data: XOR<PagoUpdateManyMutationInput, PagoUncheckedUpdateManyInput>
    /**
     * Filter which Pagos to update
     */
    where?: PagoWhereInput
    /**
     * Limit how many Pagos to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Pago upsert
   */
  export type PagoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * The filter to search for the Pago to update in case it exists.
     */
    where: PagoWhereUniqueInput
    /**
     * In case the Pago found by the `where` argument doesn't exist, create a new Pago with this data.
     */
    create: XOR<PagoCreateInput, PagoUncheckedCreateInput>
    /**
     * In case the Pago was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PagoUpdateInput, PagoUncheckedUpdateInput>
  }

  /**
   * Pago delete
   */
  export type PagoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
    /**
     * Filter which Pago to delete.
     */
    where: PagoWhereUniqueInput
  }

  /**
   * Pago deleteMany
   */
  export type PagoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pagos to delete
     */
    where?: PagoWhereInput
    /**
     * Limit how many Pagos to delete.
     */
    limit?: number
  }

  /**
   * Pago without action
   */
  export type PagoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pago
     */
    select?: PagoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Pago
     */
    omit?: PagoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PagoInclude<ExtArgs> | null
  }


  /**
   * Model Servicio
   */

  export type AggregateServicio = {
    _count: ServicioCountAggregateOutputType | null
    _avg: ServicioAvgAggregateOutputType | null
    _sum: ServicioSumAggregateOutputType | null
    _min: ServicioMinAggregateOutputType | null
    _max: ServicioMaxAggregateOutputType | null
  }

  export type ServicioAvgAggregateOutputType = {
    id: number | null
  }

  export type ServicioSumAggregateOutputType = {
    id: number | null
  }

  export type ServicioMinAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type ServicioMaxAggregateOutputType = {
    id: number | null
    nombre: string | null
    descripcion: string | null
  }

  export type ServicioCountAggregateOutputType = {
    id: number
    nombre: number
    descripcion: number
    _all: number
  }


  export type ServicioAvgAggregateInputType = {
    id?: true
  }

  export type ServicioSumAggregateInputType = {
    id?: true
  }

  export type ServicioMinAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
  }

  export type ServicioMaxAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
  }

  export type ServicioCountAggregateInputType = {
    id?: true
    nombre?: true
    descripcion?: true
    _all?: true
  }

  export type ServicioAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicio to aggregate.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Servicios
    **/
    _count?: true | ServicioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicioMaxAggregateInputType
  }

  export type GetServicioAggregateType<T extends ServicioAggregateArgs> = {
        [P in keyof T & keyof AggregateServicio]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicio[P]>
      : GetScalarType<T[P], AggregateServicio[P]>
  }




  export type ServicioGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicioWhereInput
    orderBy?: ServicioOrderByWithAggregationInput | ServicioOrderByWithAggregationInput[]
    by: ServicioScalarFieldEnum[] | ServicioScalarFieldEnum
    having?: ServicioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicioCountAggregateInputType | true
    _avg?: ServicioAvgAggregateInputType
    _sum?: ServicioSumAggregateInputType
    _min?: ServicioMinAggregateInputType
    _max?: ServicioMaxAggregateInputType
  }

  export type ServicioGroupByOutputType = {
    id: number
    nombre: string
    descripcion: string | null
    _count: ServicioCountAggregateOutputType | null
    _avg: ServicioAvgAggregateOutputType | null
    _sum: ServicioSumAggregateOutputType | null
    _min: ServicioMinAggregateOutputType | null
    _max: ServicioMaxAggregateOutputType | null
  }

  type GetServicioGroupByPayload<T extends ServicioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicioGroupByOutputType[P]>
            : GetScalarType<T[P], ServicioGroupByOutputType[P]>
        }
      >
    >


  export type ServicioSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
    habitaciones?: boolean | Servicio$habitacionesArgs<ExtArgs>
    _count?: boolean | ServicioCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicio"]>

  export type ServicioSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["servicio"]>

  export type ServicioSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }, ExtArgs["result"]["servicio"]>

  export type ServicioSelectScalar = {
    id?: boolean
    nombre?: boolean
    descripcion?: boolean
  }

  export type ServicioOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nombre" | "descripcion", ExtArgs["result"]["servicio"]>
  export type ServicioInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habitaciones?: boolean | Servicio$habitacionesArgs<ExtArgs>
    _count?: boolean | ServicioCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServicioIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ServicioIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServicioPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Servicio"
    objects: {
      habitaciones: Prisma.$ServicioEnHabitacionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nombre: string
      descripcion: string | null
    }, ExtArgs["result"]["servicio"]>
    composites: {}
  }

  type ServicioGetPayload<S extends boolean | null | undefined | ServicioDefaultArgs> = $Result.GetResult<Prisma.$ServicioPayload, S>

  type ServicioCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicioFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicioCountAggregateInputType | true
    }

  export interface ServicioDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Servicio'], meta: { name: 'Servicio' } }
    /**
     * Find zero or one Servicio that matches the filter.
     * @param {ServicioFindUniqueArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicioFindUniqueArgs>(args: SelectSubset<T, ServicioFindUniqueArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servicio that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicioFindUniqueOrThrowArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicioFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicioFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicio that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioFindFirstArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicioFindFirstArgs>(args?: SelectSubset<T, ServicioFindFirstArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicio that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioFindFirstOrThrowArgs} args - Arguments to find a Servicio
     * @example
     * // Get one Servicio
     * const servicio = await prisma.servicio.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicioFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicioFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servicios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicios
     * const servicios = await prisma.servicio.findMany()
     * 
     * // Get first 10 Servicios
     * const servicios = await prisma.servicio.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicioWithIdOnly = await prisma.servicio.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicioFindManyArgs>(args?: SelectSubset<T, ServicioFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servicio.
     * @param {ServicioCreateArgs} args - Arguments to create a Servicio.
     * @example
     * // Create one Servicio
     * const Servicio = await prisma.servicio.create({
     *   data: {
     *     // ... data to create a Servicio
     *   }
     * })
     * 
     */
    create<T extends ServicioCreateArgs>(args: SelectSubset<T, ServicioCreateArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servicios.
     * @param {ServicioCreateManyArgs} args - Arguments to create many Servicios.
     * @example
     * // Create many Servicios
     * const servicio = await prisma.servicio.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicioCreateManyArgs>(args?: SelectSubset<T, ServicioCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Servicios and returns the data saved in the database.
     * @param {ServicioCreateManyAndReturnArgs} args - Arguments to create many Servicios.
     * @example
     * // Create many Servicios
     * const servicio = await prisma.servicio.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Servicios and only return the `id`
     * const servicioWithIdOnly = await prisma.servicio.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServicioCreateManyAndReturnArgs>(args?: SelectSubset<T, ServicioCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Servicio.
     * @param {ServicioDeleteArgs} args - Arguments to delete one Servicio.
     * @example
     * // Delete one Servicio
     * const Servicio = await prisma.servicio.delete({
     *   where: {
     *     // ... filter to delete one Servicio
     *   }
     * })
     * 
     */
    delete<T extends ServicioDeleteArgs>(args: SelectSubset<T, ServicioDeleteArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servicio.
     * @param {ServicioUpdateArgs} args - Arguments to update one Servicio.
     * @example
     * // Update one Servicio
     * const servicio = await prisma.servicio.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicioUpdateArgs>(args: SelectSubset<T, ServicioUpdateArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servicios.
     * @param {ServicioDeleteManyArgs} args - Arguments to filter Servicios to delete.
     * @example
     * // Delete a few Servicios
     * const { count } = await prisma.servicio.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicioDeleteManyArgs>(args?: SelectSubset<T, ServicioDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicios
     * const servicio = await prisma.servicio.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicioUpdateManyArgs>(args: SelectSubset<T, ServicioUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicios and returns the data updated in the database.
     * @param {ServicioUpdateManyAndReturnArgs} args - Arguments to update many Servicios.
     * @example
     * // Update many Servicios
     * const servicio = await prisma.servicio.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Servicios and only return the `id`
     * const servicioWithIdOnly = await prisma.servicio.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServicioUpdateManyAndReturnArgs>(args: SelectSubset<T, ServicioUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Servicio.
     * @param {ServicioUpsertArgs} args - Arguments to update or create a Servicio.
     * @example
     * // Update or create a Servicio
     * const servicio = await prisma.servicio.upsert({
     *   create: {
     *     // ... data to create a Servicio
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servicio we want to update
     *   }
     * })
     */
    upsert<T extends ServicioUpsertArgs>(args: SelectSubset<T, ServicioUpsertArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servicios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioCountArgs} args - Arguments to filter Servicios to count.
     * @example
     * // Count the number of Servicios
     * const count = await prisma.servicio.count({
     *   where: {
     *     // ... the filter for the Servicios we want to count
     *   }
     * })
    **/
    count<T extends ServicioCountArgs>(
      args?: Subset<T, ServicioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServicioAggregateArgs>(args: Subset<T, ServicioAggregateArgs>): Prisma.PrismaPromise<GetServicioAggregateType<T>>

    /**
     * Group by Servicio.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServicioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicioGroupByArgs['orderBy'] }
        : { orderBy?: ServicioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServicioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Servicio model
   */
  readonly fields: ServicioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Servicio.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicioClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    habitaciones<T extends Servicio$habitacionesArgs<ExtArgs> = {}>(args?: Subset<T, Servicio$habitacionesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioEnHabitacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Servicio model
   */
  interface ServicioFieldRefs {
    readonly id: FieldRef<"Servicio", 'Int'>
    readonly nombre: FieldRef<"Servicio", 'String'>
    readonly descripcion: FieldRef<"Servicio", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Servicio findUnique
   */
  export type ServicioFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio findUniqueOrThrow
   */
  export type ServicioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio findFirst
   */
  export type ServicioFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicios.
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicios.
     */
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * Servicio findFirstOrThrow
   */
  export type ServicioFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicio to fetch.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicios.
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicios.
     */
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * Servicio findMany
   */
  export type ServicioFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter, which Servicios to fetch.
     */
    where?: ServicioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicios to fetch.
     */
    orderBy?: ServicioOrderByWithRelationInput | ServicioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Servicios.
     */
    cursor?: ServicioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicios.
     */
    skip?: number
    distinct?: ServicioScalarFieldEnum | ServicioScalarFieldEnum[]
  }

  /**
   * Servicio create
   */
  export type ServicioCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * The data needed to create a Servicio.
     */
    data: XOR<ServicioCreateInput, ServicioUncheckedCreateInput>
  }

  /**
   * Servicio createMany
   */
  export type ServicioCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Servicios.
     */
    data: ServicioCreateManyInput | ServicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Servicio createManyAndReturn
   */
  export type ServicioCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * The data used to create many Servicios.
     */
    data: ServicioCreateManyInput | ServicioCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Servicio update
   */
  export type ServicioUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * The data needed to update a Servicio.
     */
    data: XOR<ServicioUpdateInput, ServicioUncheckedUpdateInput>
    /**
     * Choose, which Servicio to update.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio updateMany
   */
  export type ServicioUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Servicios.
     */
    data: XOR<ServicioUpdateManyMutationInput, ServicioUncheckedUpdateManyInput>
    /**
     * Filter which Servicios to update
     */
    where?: ServicioWhereInput
    /**
     * Limit how many Servicios to update.
     */
    limit?: number
  }

  /**
   * Servicio updateManyAndReturn
   */
  export type ServicioUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * The data used to update Servicios.
     */
    data: XOR<ServicioUpdateManyMutationInput, ServicioUncheckedUpdateManyInput>
    /**
     * Filter which Servicios to update
     */
    where?: ServicioWhereInput
    /**
     * Limit how many Servicios to update.
     */
    limit?: number
  }

  /**
   * Servicio upsert
   */
  export type ServicioUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * The filter to search for the Servicio to update in case it exists.
     */
    where: ServicioWhereUniqueInput
    /**
     * In case the Servicio found by the `where` argument doesn't exist, create a new Servicio with this data.
     */
    create: XOR<ServicioCreateInput, ServicioUncheckedCreateInput>
    /**
     * In case the Servicio was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicioUpdateInput, ServicioUncheckedUpdateInput>
  }

  /**
   * Servicio delete
   */
  export type ServicioDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
    /**
     * Filter which Servicio to delete.
     */
    where: ServicioWhereUniqueInput
  }

  /**
   * Servicio deleteMany
   */
  export type ServicioDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicios to delete
     */
    where?: ServicioWhereInput
    /**
     * Limit how many Servicios to delete.
     */
    limit?: number
  }

  /**
   * Servicio.habitaciones
   */
  export type Servicio$habitacionesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioEnHabitacion
     */
    select?: ServicioEnHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioEnHabitacion
     */
    omit?: ServicioEnHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioEnHabitacionInclude<ExtArgs> | null
    where?: ServicioEnHabitacionWhereInput
    orderBy?: ServicioEnHabitacionOrderByWithRelationInput | ServicioEnHabitacionOrderByWithRelationInput[]
    cursor?: ServicioEnHabitacionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ServicioEnHabitacionScalarFieldEnum | ServicioEnHabitacionScalarFieldEnum[]
  }

  /**
   * Servicio without action
   */
  export type ServicioDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicio
     */
    select?: ServicioSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicio
     */
    omit?: ServicioOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioInclude<ExtArgs> | null
  }


  /**
   * Model ServicioEnHabitacion
   */

  export type AggregateServicioEnHabitacion = {
    _count: ServicioEnHabitacionCountAggregateOutputType | null
    _avg: ServicioEnHabitacionAvgAggregateOutputType | null
    _sum: ServicioEnHabitacionSumAggregateOutputType | null
    _min: ServicioEnHabitacionMinAggregateOutputType | null
    _max: ServicioEnHabitacionMaxAggregateOutputType | null
  }

  export type ServicioEnHabitacionAvgAggregateOutputType = {
    habitacionId: number | null
    servicioId: number | null
  }

  export type ServicioEnHabitacionSumAggregateOutputType = {
    habitacionId: number | null
    servicioId: number | null
  }

  export type ServicioEnHabitacionMinAggregateOutputType = {
    habitacionId: number | null
    servicioId: number | null
  }

  export type ServicioEnHabitacionMaxAggregateOutputType = {
    habitacionId: number | null
    servicioId: number | null
  }

  export type ServicioEnHabitacionCountAggregateOutputType = {
    habitacionId: number
    servicioId: number
    _all: number
  }


  export type ServicioEnHabitacionAvgAggregateInputType = {
    habitacionId?: true
    servicioId?: true
  }

  export type ServicioEnHabitacionSumAggregateInputType = {
    habitacionId?: true
    servicioId?: true
  }

  export type ServicioEnHabitacionMinAggregateInputType = {
    habitacionId?: true
    servicioId?: true
  }

  export type ServicioEnHabitacionMaxAggregateInputType = {
    habitacionId?: true
    servicioId?: true
  }

  export type ServicioEnHabitacionCountAggregateInputType = {
    habitacionId?: true
    servicioId?: true
    _all?: true
  }

  export type ServicioEnHabitacionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServicioEnHabitacion to aggregate.
     */
    where?: ServicioEnHabitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicioEnHabitacions to fetch.
     */
    orderBy?: ServicioEnHabitacionOrderByWithRelationInput | ServicioEnHabitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicioEnHabitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicioEnHabitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicioEnHabitacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ServicioEnHabitacions
    **/
    _count?: true | ServicioEnHabitacionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicioEnHabitacionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicioEnHabitacionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicioEnHabitacionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicioEnHabitacionMaxAggregateInputType
  }

  export type GetServicioEnHabitacionAggregateType<T extends ServicioEnHabitacionAggregateArgs> = {
        [P in keyof T & keyof AggregateServicioEnHabitacion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicioEnHabitacion[P]>
      : GetScalarType<T[P], AggregateServicioEnHabitacion[P]>
  }




  export type ServicioEnHabitacionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicioEnHabitacionWhereInput
    orderBy?: ServicioEnHabitacionOrderByWithAggregationInput | ServicioEnHabitacionOrderByWithAggregationInput[]
    by: ServicioEnHabitacionScalarFieldEnum[] | ServicioEnHabitacionScalarFieldEnum
    having?: ServicioEnHabitacionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicioEnHabitacionCountAggregateInputType | true
    _avg?: ServicioEnHabitacionAvgAggregateInputType
    _sum?: ServicioEnHabitacionSumAggregateInputType
    _min?: ServicioEnHabitacionMinAggregateInputType
    _max?: ServicioEnHabitacionMaxAggregateInputType
  }

  export type ServicioEnHabitacionGroupByOutputType = {
    habitacionId: number
    servicioId: number
    _count: ServicioEnHabitacionCountAggregateOutputType | null
    _avg: ServicioEnHabitacionAvgAggregateOutputType | null
    _sum: ServicioEnHabitacionSumAggregateOutputType | null
    _min: ServicioEnHabitacionMinAggregateOutputType | null
    _max: ServicioEnHabitacionMaxAggregateOutputType | null
  }

  type GetServicioEnHabitacionGroupByPayload<T extends ServicioEnHabitacionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicioEnHabitacionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicioEnHabitacionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicioEnHabitacionGroupByOutputType[P]>
            : GetScalarType<T[P], ServicioEnHabitacionGroupByOutputType[P]>
        }
      >
    >


  export type ServicioEnHabitacionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    habitacionId?: boolean
    servicioId?: boolean
    habitacion?: boolean | HabitacionDefaultArgs<ExtArgs>
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicioEnHabitacion"]>

  export type ServicioEnHabitacionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    habitacionId?: boolean
    servicioId?: boolean
    habitacion?: boolean | HabitacionDefaultArgs<ExtArgs>
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicioEnHabitacion"]>

  export type ServicioEnHabitacionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    habitacionId?: boolean
    servicioId?: boolean
    habitacion?: boolean | HabitacionDefaultArgs<ExtArgs>
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicioEnHabitacion"]>

  export type ServicioEnHabitacionSelectScalar = {
    habitacionId?: boolean
    servicioId?: boolean
  }

  export type ServicioEnHabitacionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"habitacionId" | "servicioId", ExtArgs["result"]["servicioEnHabitacion"]>
  export type ServicioEnHabitacionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habitacion?: boolean | HabitacionDefaultArgs<ExtArgs>
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }
  export type ServicioEnHabitacionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habitacion?: boolean | HabitacionDefaultArgs<ExtArgs>
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }
  export type ServicioEnHabitacionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    habitacion?: boolean | HabitacionDefaultArgs<ExtArgs>
    servicio?: boolean | ServicioDefaultArgs<ExtArgs>
  }

  export type $ServicioEnHabitacionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ServicioEnHabitacion"
    objects: {
      habitacion: Prisma.$HabitacionPayload<ExtArgs>
      servicio: Prisma.$ServicioPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      habitacionId: number
      servicioId: number
    }, ExtArgs["result"]["servicioEnHabitacion"]>
    composites: {}
  }

  type ServicioEnHabitacionGetPayload<S extends boolean | null | undefined | ServicioEnHabitacionDefaultArgs> = $Result.GetResult<Prisma.$ServicioEnHabitacionPayload, S>

  type ServicioEnHabitacionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicioEnHabitacionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicioEnHabitacionCountAggregateInputType | true
    }

  export interface ServicioEnHabitacionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ServicioEnHabitacion'], meta: { name: 'ServicioEnHabitacion' } }
    /**
     * Find zero or one ServicioEnHabitacion that matches the filter.
     * @param {ServicioEnHabitacionFindUniqueArgs} args - Arguments to find a ServicioEnHabitacion
     * @example
     * // Get one ServicioEnHabitacion
     * const servicioEnHabitacion = await prisma.servicioEnHabitacion.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicioEnHabitacionFindUniqueArgs>(args: SelectSubset<T, ServicioEnHabitacionFindUniqueArgs<ExtArgs>>): Prisma__ServicioEnHabitacionClient<$Result.GetResult<Prisma.$ServicioEnHabitacionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ServicioEnHabitacion that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicioEnHabitacionFindUniqueOrThrowArgs} args - Arguments to find a ServicioEnHabitacion
     * @example
     * // Get one ServicioEnHabitacion
     * const servicioEnHabitacion = await prisma.servicioEnHabitacion.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicioEnHabitacionFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicioEnHabitacionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicioEnHabitacionClient<$Result.GetResult<Prisma.$ServicioEnHabitacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServicioEnHabitacion that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioEnHabitacionFindFirstArgs} args - Arguments to find a ServicioEnHabitacion
     * @example
     * // Get one ServicioEnHabitacion
     * const servicioEnHabitacion = await prisma.servicioEnHabitacion.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicioEnHabitacionFindFirstArgs>(args?: SelectSubset<T, ServicioEnHabitacionFindFirstArgs<ExtArgs>>): Prisma__ServicioEnHabitacionClient<$Result.GetResult<Prisma.$ServicioEnHabitacionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ServicioEnHabitacion that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioEnHabitacionFindFirstOrThrowArgs} args - Arguments to find a ServicioEnHabitacion
     * @example
     * // Get one ServicioEnHabitacion
     * const servicioEnHabitacion = await prisma.servicioEnHabitacion.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicioEnHabitacionFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicioEnHabitacionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicioEnHabitacionClient<$Result.GetResult<Prisma.$ServicioEnHabitacionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ServicioEnHabitacions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioEnHabitacionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ServicioEnHabitacions
     * const servicioEnHabitacions = await prisma.servicioEnHabitacion.findMany()
     * 
     * // Get first 10 ServicioEnHabitacions
     * const servicioEnHabitacions = await prisma.servicioEnHabitacion.findMany({ take: 10 })
     * 
     * // Only select the `habitacionId`
     * const servicioEnHabitacionWithHabitacionIdOnly = await prisma.servicioEnHabitacion.findMany({ select: { habitacionId: true } })
     * 
     */
    findMany<T extends ServicioEnHabitacionFindManyArgs>(args?: SelectSubset<T, ServicioEnHabitacionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioEnHabitacionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ServicioEnHabitacion.
     * @param {ServicioEnHabitacionCreateArgs} args - Arguments to create a ServicioEnHabitacion.
     * @example
     * // Create one ServicioEnHabitacion
     * const ServicioEnHabitacion = await prisma.servicioEnHabitacion.create({
     *   data: {
     *     // ... data to create a ServicioEnHabitacion
     *   }
     * })
     * 
     */
    create<T extends ServicioEnHabitacionCreateArgs>(args: SelectSubset<T, ServicioEnHabitacionCreateArgs<ExtArgs>>): Prisma__ServicioEnHabitacionClient<$Result.GetResult<Prisma.$ServicioEnHabitacionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ServicioEnHabitacions.
     * @param {ServicioEnHabitacionCreateManyArgs} args - Arguments to create many ServicioEnHabitacions.
     * @example
     * // Create many ServicioEnHabitacions
     * const servicioEnHabitacion = await prisma.servicioEnHabitacion.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicioEnHabitacionCreateManyArgs>(args?: SelectSubset<T, ServicioEnHabitacionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ServicioEnHabitacions and returns the data saved in the database.
     * @param {ServicioEnHabitacionCreateManyAndReturnArgs} args - Arguments to create many ServicioEnHabitacions.
     * @example
     * // Create many ServicioEnHabitacions
     * const servicioEnHabitacion = await prisma.servicioEnHabitacion.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ServicioEnHabitacions and only return the `habitacionId`
     * const servicioEnHabitacionWithHabitacionIdOnly = await prisma.servicioEnHabitacion.createManyAndReturn({
     *   select: { habitacionId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServicioEnHabitacionCreateManyAndReturnArgs>(args?: SelectSubset<T, ServicioEnHabitacionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioEnHabitacionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ServicioEnHabitacion.
     * @param {ServicioEnHabitacionDeleteArgs} args - Arguments to delete one ServicioEnHabitacion.
     * @example
     * // Delete one ServicioEnHabitacion
     * const ServicioEnHabitacion = await prisma.servicioEnHabitacion.delete({
     *   where: {
     *     // ... filter to delete one ServicioEnHabitacion
     *   }
     * })
     * 
     */
    delete<T extends ServicioEnHabitacionDeleteArgs>(args: SelectSubset<T, ServicioEnHabitacionDeleteArgs<ExtArgs>>): Prisma__ServicioEnHabitacionClient<$Result.GetResult<Prisma.$ServicioEnHabitacionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ServicioEnHabitacion.
     * @param {ServicioEnHabitacionUpdateArgs} args - Arguments to update one ServicioEnHabitacion.
     * @example
     * // Update one ServicioEnHabitacion
     * const servicioEnHabitacion = await prisma.servicioEnHabitacion.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicioEnHabitacionUpdateArgs>(args: SelectSubset<T, ServicioEnHabitacionUpdateArgs<ExtArgs>>): Prisma__ServicioEnHabitacionClient<$Result.GetResult<Prisma.$ServicioEnHabitacionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ServicioEnHabitacions.
     * @param {ServicioEnHabitacionDeleteManyArgs} args - Arguments to filter ServicioEnHabitacions to delete.
     * @example
     * // Delete a few ServicioEnHabitacions
     * const { count } = await prisma.servicioEnHabitacion.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicioEnHabitacionDeleteManyArgs>(args?: SelectSubset<T, ServicioEnHabitacionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServicioEnHabitacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioEnHabitacionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ServicioEnHabitacions
     * const servicioEnHabitacion = await prisma.servicioEnHabitacion.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicioEnHabitacionUpdateManyArgs>(args: SelectSubset<T, ServicioEnHabitacionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ServicioEnHabitacions and returns the data updated in the database.
     * @param {ServicioEnHabitacionUpdateManyAndReturnArgs} args - Arguments to update many ServicioEnHabitacions.
     * @example
     * // Update many ServicioEnHabitacions
     * const servicioEnHabitacion = await prisma.servicioEnHabitacion.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ServicioEnHabitacions and only return the `habitacionId`
     * const servicioEnHabitacionWithHabitacionIdOnly = await prisma.servicioEnHabitacion.updateManyAndReturn({
     *   select: { habitacionId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServicioEnHabitacionUpdateManyAndReturnArgs>(args: SelectSubset<T, ServicioEnHabitacionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicioEnHabitacionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ServicioEnHabitacion.
     * @param {ServicioEnHabitacionUpsertArgs} args - Arguments to update or create a ServicioEnHabitacion.
     * @example
     * // Update or create a ServicioEnHabitacion
     * const servicioEnHabitacion = await prisma.servicioEnHabitacion.upsert({
     *   create: {
     *     // ... data to create a ServicioEnHabitacion
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ServicioEnHabitacion we want to update
     *   }
     * })
     */
    upsert<T extends ServicioEnHabitacionUpsertArgs>(args: SelectSubset<T, ServicioEnHabitacionUpsertArgs<ExtArgs>>): Prisma__ServicioEnHabitacionClient<$Result.GetResult<Prisma.$ServicioEnHabitacionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ServicioEnHabitacions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioEnHabitacionCountArgs} args - Arguments to filter ServicioEnHabitacions to count.
     * @example
     * // Count the number of ServicioEnHabitacions
     * const count = await prisma.servicioEnHabitacion.count({
     *   where: {
     *     // ... the filter for the ServicioEnHabitacions we want to count
     *   }
     * })
    **/
    count<T extends ServicioEnHabitacionCountArgs>(
      args?: Subset<T, ServicioEnHabitacionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicioEnHabitacionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ServicioEnHabitacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioEnHabitacionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServicioEnHabitacionAggregateArgs>(args: Subset<T, ServicioEnHabitacionAggregateArgs>): Prisma.PrismaPromise<GetServicioEnHabitacionAggregateType<T>>

    /**
     * Group by ServicioEnHabitacion.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicioEnHabitacionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServicioEnHabitacionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicioEnHabitacionGroupByArgs['orderBy'] }
        : { orderBy?: ServicioEnHabitacionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServicioEnHabitacionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicioEnHabitacionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ServicioEnHabitacion model
   */
  readonly fields: ServicioEnHabitacionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ServicioEnHabitacion.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicioEnHabitacionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    habitacion<T extends HabitacionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, HabitacionDefaultArgs<ExtArgs>>): Prisma__HabitacionClient<$Result.GetResult<Prisma.$HabitacionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    servicio<T extends ServicioDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServicioDefaultArgs<ExtArgs>>): Prisma__ServicioClient<$Result.GetResult<Prisma.$ServicioPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ServicioEnHabitacion model
   */
  interface ServicioEnHabitacionFieldRefs {
    readonly habitacionId: FieldRef<"ServicioEnHabitacion", 'Int'>
    readonly servicioId: FieldRef<"ServicioEnHabitacion", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * ServicioEnHabitacion findUnique
   */
  export type ServicioEnHabitacionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioEnHabitacion
     */
    select?: ServicioEnHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioEnHabitacion
     */
    omit?: ServicioEnHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioEnHabitacionInclude<ExtArgs> | null
    /**
     * Filter, which ServicioEnHabitacion to fetch.
     */
    where: ServicioEnHabitacionWhereUniqueInput
  }

  /**
   * ServicioEnHabitacion findUniqueOrThrow
   */
  export type ServicioEnHabitacionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioEnHabitacion
     */
    select?: ServicioEnHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioEnHabitacion
     */
    omit?: ServicioEnHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioEnHabitacionInclude<ExtArgs> | null
    /**
     * Filter, which ServicioEnHabitacion to fetch.
     */
    where: ServicioEnHabitacionWhereUniqueInput
  }

  /**
   * ServicioEnHabitacion findFirst
   */
  export type ServicioEnHabitacionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioEnHabitacion
     */
    select?: ServicioEnHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioEnHabitacion
     */
    omit?: ServicioEnHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioEnHabitacionInclude<ExtArgs> | null
    /**
     * Filter, which ServicioEnHabitacion to fetch.
     */
    where?: ServicioEnHabitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicioEnHabitacions to fetch.
     */
    orderBy?: ServicioEnHabitacionOrderByWithRelationInput | ServicioEnHabitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServicioEnHabitacions.
     */
    cursor?: ServicioEnHabitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicioEnHabitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicioEnHabitacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServicioEnHabitacions.
     */
    distinct?: ServicioEnHabitacionScalarFieldEnum | ServicioEnHabitacionScalarFieldEnum[]
  }

  /**
   * ServicioEnHabitacion findFirstOrThrow
   */
  export type ServicioEnHabitacionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioEnHabitacion
     */
    select?: ServicioEnHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioEnHabitacion
     */
    omit?: ServicioEnHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioEnHabitacionInclude<ExtArgs> | null
    /**
     * Filter, which ServicioEnHabitacion to fetch.
     */
    where?: ServicioEnHabitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicioEnHabitacions to fetch.
     */
    orderBy?: ServicioEnHabitacionOrderByWithRelationInput | ServicioEnHabitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ServicioEnHabitacions.
     */
    cursor?: ServicioEnHabitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicioEnHabitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicioEnHabitacions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ServicioEnHabitacions.
     */
    distinct?: ServicioEnHabitacionScalarFieldEnum | ServicioEnHabitacionScalarFieldEnum[]
  }

  /**
   * ServicioEnHabitacion findMany
   */
  export type ServicioEnHabitacionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioEnHabitacion
     */
    select?: ServicioEnHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioEnHabitacion
     */
    omit?: ServicioEnHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioEnHabitacionInclude<ExtArgs> | null
    /**
     * Filter, which ServicioEnHabitacions to fetch.
     */
    where?: ServicioEnHabitacionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ServicioEnHabitacions to fetch.
     */
    orderBy?: ServicioEnHabitacionOrderByWithRelationInput | ServicioEnHabitacionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ServicioEnHabitacions.
     */
    cursor?: ServicioEnHabitacionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ServicioEnHabitacions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ServicioEnHabitacions.
     */
    skip?: number
    distinct?: ServicioEnHabitacionScalarFieldEnum | ServicioEnHabitacionScalarFieldEnum[]
  }

  /**
   * ServicioEnHabitacion create
   */
  export type ServicioEnHabitacionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioEnHabitacion
     */
    select?: ServicioEnHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioEnHabitacion
     */
    omit?: ServicioEnHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioEnHabitacionInclude<ExtArgs> | null
    /**
     * The data needed to create a ServicioEnHabitacion.
     */
    data: XOR<ServicioEnHabitacionCreateInput, ServicioEnHabitacionUncheckedCreateInput>
  }

  /**
   * ServicioEnHabitacion createMany
   */
  export type ServicioEnHabitacionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ServicioEnHabitacions.
     */
    data: ServicioEnHabitacionCreateManyInput | ServicioEnHabitacionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ServicioEnHabitacion createManyAndReturn
   */
  export type ServicioEnHabitacionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioEnHabitacion
     */
    select?: ServicioEnHabitacionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioEnHabitacion
     */
    omit?: ServicioEnHabitacionOmit<ExtArgs> | null
    /**
     * The data used to create many ServicioEnHabitacions.
     */
    data: ServicioEnHabitacionCreateManyInput | ServicioEnHabitacionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioEnHabitacionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServicioEnHabitacion update
   */
  export type ServicioEnHabitacionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioEnHabitacion
     */
    select?: ServicioEnHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioEnHabitacion
     */
    omit?: ServicioEnHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioEnHabitacionInclude<ExtArgs> | null
    /**
     * The data needed to update a ServicioEnHabitacion.
     */
    data: XOR<ServicioEnHabitacionUpdateInput, ServicioEnHabitacionUncheckedUpdateInput>
    /**
     * Choose, which ServicioEnHabitacion to update.
     */
    where: ServicioEnHabitacionWhereUniqueInput
  }

  /**
   * ServicioEnHabitacion updateMany
   */
  export type ServicioEnHabitacionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ServicioEnHabitacions.
     */
    data: XOR<ServicioEnHabitacionUpdateManyMutationInput, ServicioEnHabitacionUncheckedUpdateManyInput>
    /**
     * Filter which ServicioEnHabitacions to update
     */
    where?: ServicioEnHabitacionWhereInput
    /**
     * Limit how many ServicioEnHabitacions to update.
     */
    limit?: number
  }

  /**
   * ServicioEnHabitacion updateManyAndReturn
   */
  export type ServicioEnHabitacionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioEnHabitacion
     */
    select?: ServicioEnHabitacionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioEnHabitacion
     */
    omit?: ServicioEnHabitacionOmit<ExtArgs> | null
    /**
     * The data used to update ServicioEnHabitacions.
     */
    data: XOR<ServicioEnHabitacionUpdateManyMutationInput, ServicioEnHabitacionUncheckedUpdateManyInput>
    /**
     * Filter which ServicioEnHabitacions to update
     */
    where?: ServicioEnHabitacionWhereInput
    /**
     * Limit how many ServicioEnHabitacions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioEnHabitacionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ServicioEnHabitacion upsert
   */
  export type ServicioEnHabitacionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioEnHabitacion
     */
    select?: ServicioEnHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioEnHabitacion
     */
    omit?: ServicioEnHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioEnHabitacionInclude<ExtArgs> | null
    /**
     * The filter to search for the ServicioEnHabitacion to update in case it exists.
     */
    where: ServicioEnHabitacionWhereUniqueInput
    /**
     * In case the ServicioEnHabitacion found by the `where` argument doesn't exist, create a new ServicioEnHabitacion with this data.
     */
    create: XOR<ServicioEnHabitacionCreateInput, ServicioEnHabitacionUncheckedCreateInput>
    /**
     * In case the ServicioEnHabitacion was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicioEnHabitacionUpdateInput, ServicioEnHabitacionUncheckedUpdateInput>
  }

  /**
   * ServicioEnHabitacion delete
   */
  export type ServicioEnHabitacionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioEnHabitacion
     */
    select?: ServicioEnHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioEnHabitacion
     */
    omit?: ServicioEnHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioEnHabitacionInclude<ExtArgs> | null
    /**
     * Filter which ServicioEnHabitacion to delete.
     */
    where: ServicioEnHabitacionWhereUniqueInput
  }

  /**
   * ServicioEnHabitacion deleteMany
   */
  export type ServicioEnHabitacionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ServicioEnHabitacions to delete
     */
    where?: ServicioEnHabitacionWhereInput
    /**
     * Limit how many ServicioEnHabitacions to delete.
     */
    limit?: number
  }

  /**
   * ServicioEnHabitacion without action
   */
  export type ServicioEnHabitacionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicioEnHabitacion
     */
    select?: ServicioEnHabitacionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ServicioEnHabitacion
     */
    omit?: ServicioEnHabitacionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicioEnHabitacionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    apellido: 'apellido',
    email: 'email',
    password: 'password',
    rol: 'rol',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const HabitacionScalarFieldEnum: {
    id: 'id',
    numero: 'numero',
    piso: 'piso',
    tipo: 'tipo',
    descripcion: 'descripcion',
    capacidad: 'capacidad',
    precioPorNoche: 'precioPorNoche',
    estado: 'estado'
  };

  export type HabitacionScalarFieldEnum = (typeof HabitacionScalarFieldEnum)[keyof typeof HabitacionScalarFieldEnum]


  export const ReservaScalarFieldEnum: {
    id: 'id',
    usuarioId: 'usuarioId',
    habitacionId: 'habitacionId',
    fechaInicio: 'fechaInicio',
    fechaFin: 'fechaFin',
    numeroHuespedes: 'numeroHuespedes',
    estado: 'estado',
    createdAt: 'createdAt'
  };

  export type ReservaScalarFieldEnum = (typeof ReservaScalarFieldEnum)[keyof typeof ReservaScalarFieldEnum]


  export const PagoScalarFieldEnum: {
    id: 'id',
    reservaId: 'reservaId',
    monto: 'monto',
    metodo: 'metodo',
    estado: 'estado'
  };

  export type PagoScalarFieldEnum = (typeof PagoScalarFieldEnum)[keyof typeof PagoScalarFieldEnum]


  export const ServicioScalarFieldEnum: {
    id: 'id',
    nombre: 'nombre',
    descripcion: 'descripcion'
  };

  export type ServicioScalarFieldEnum = (typeof ServicioScalarFieldEnum)[keyof typeof ServicioScalarFieldEnum]


  export const ServicioEnHabitacionScalarFieldEnum: {
    habitacionId: 'habitacionId',
    servicioId: 'servicioId'
  };

  export type ServicioEnHabitacionScalarFieldEnum = (typeof ServicioEnHabitacionScalarFieldEnum)[keyof typeof ServicioEnHabitacionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'RolUsuario'
   */
  export type EnumRolUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RolUsuario'>
    


  /**
   * Reference to a field of type 'RolUsuario[]'
   */
  export type ListEnumRolUsuarioFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RolUsuario[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    nombre?: StringFilter<"Usuario"> | string
    apellido?: StringFilter<"Usuario"> | string
    email?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    rol?: EnumRolUsuarioFilter<"Usuario"> | $Enums.RolUsuario
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    reservas?: ReservaListRelationFilter
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    reservas?: ReservaOrderByRelationAggregateInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    nombre?: StringFilter<"Usuario"> | string
    apellido?: StringFilter<"Usuario"> | string
    password?: StringFilter<"Usuario"> | string
    rol?: EnumRolUsuarioFilter<"Usuario"> | $Enums.RolUsuario
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    reservas?: ReservaListRelationFilter
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    nombre?: StringWithAggregatesFilter<"Usuario"> | string
    apellido?: StringWithAggregatesFilter<"Usuario"> | string
    email?: StringWithAggregatesFilter<"Usuario"> | string
    password?: StringWithAggregatesFilter<"Usuario"> | string
    rol?: EnumRolUsuarioWithAggregatesFilter<"Usuario"> | $Enums.RolUsuario
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
  }

  export type HabitacionWhereInput = {
    AND?: HabitacionWhereInput | HabitacionWhereInput[]
    OR?: HabitacionWhereInput[]
    NOT?: HabitacionWhereInput | HabitacionWhereInput[]
    id?: IntFilter<"Habitacion"> | number
    numero?: IntFilter<"Habitacion"> | number
    piso?: IntNullableFilter<"Habitacion"> | number | null
    tipo?: StringFilter<"Habitacion"> | string
    descripcion?: StringNullableFilter<"Habitacion"> | string | null
    capacidad?: IntFilter<"Habitacion"> | number
    precioPorNoche?: FloatFilter<"Habitacion"> | number
    estado?: StringFilter<"Habitacion"> | string
    reservas?: ReservaListRelationFilter
    servicios?: ServicioEnHabitacionListRelationFilter
  }

  export type HabitacionOrderByWithRelationInput = {
    id?: SortOrder
    numero?: SortOrder
    piso?: SortOrderInput | SortOrder
    tipo?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    capacidad?: SortOrder
    precioPorNoche?: SortOrder
    estado?: SortOrder
    reservas?: ReservaOrderByRelationAggregateInput
    servicios?: ServicioEnHabitacionOrderByRelationAggregateInput
  }

  export type HabitacionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    numero?: number
    AND?: HabitacionWhereInput | HabitacionWhereInput[]
    OR?: HabitacionWhereInput[]
    NOT?: HabitacionWhereInput | HabitacionWhereInput[]
    piso?: IntNullableFilter<"Habitacion"> | number | null
    tipo?: StringFilter<"Habitacion"> | string
    descripcion?: StringNullableFilter<"Habitacion"> | string | null
    capacidad?: IntFilter<"Habitacion"> | number
    precioPorNoche?: FloatFilter<"Habitacion"> | number
    estado?: StringFilter<"Habitacion"> | string
    reservas?: ReservaListRelationFilter
    servicios?: ServicioEnHabitacionListRelationFilter
  }, "id" | "numero">

  export type HabitacionOrderByWithAggregationInput = {
    id?: SortOrder
    numero?: SortOrder
    piso?: SortOrderInput | SortOrder
    tipo?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    capacidad?: SortOrder
    precioPorNoche?: SortOrder
    estado?: SortOrder
    _count?: HabitacionCountOrderByAggregateInput
    _avg?: HabitacionAvgOrderByAggregateInput
    _max?: HabitacionMaxOrderByAggregateInput
    _min?: HabitacionMinOrderByAggregateInput
    _sum?: HabitacionSumOrderByAggregateInput
  }

  export type HabitacionScalarWhereWithAggregatesInput = {
    AND?: HabitacionScalarWhereWithAggregatesInput | HabitacionScalarWhereWithAggregatesInput[]
    OR?: HabitacionScalarWhereWithAggregatesInput[]
    NOT?: HabitacionScalarWhereWithAggregatesInput | HabitacionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Habitacion"> | number
    numero?: IntWithAggregatesFilter<"Habitacion"> | number
    piso?: IntNullableWithAggregatesFilter<"Habitacion"> | number | null
    tipo?: StringWithAggregatesFilter<"Habitacion"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Habitacion"> | string | null
    capacidad?: IntWithAggregatesFilter<"Habitacion"> | number
    precioPorNoche?: FloatWithAggregatesFilter<"Habitacion"> | number
    estado?: StringWithAggregatesFilter<"Habitacion"> | string
  }

  export type ReservaWhereInput = {
    AND?: ReservaWhereInput | ReservaWhereInput[]
    OR?: ReservaWhereInput[]
    NOT?: ReservaWhereInput | ReservaWhereInput[]
    id?: IntFilter<"Reserva"> | number
    usuarioId?: IntFilter<"Reserva"> | number
    habitacionId?: IntFilter<"Reserva"> | number
    fechaInicio?: DateTimeFilter<"Reserva"> | Date | string
    fechaFin?: DateTimeFilter<"Reserva"> | Date | string
    numeroHuespedes?: IntFilter<"Reserva"> | number
    estado?: StringFilter<"Reserva"> | string
    createdAt?: DateTimeFilter<"Reserva"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    habitacion?: XOR<HabitacionScalarRelationFilter, HabitacionWhereInput>
    pagos?: PagoListRelationFilter
  }

  export type ReservaOrderByWithRelationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    habitacionId?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    numeroHuespedes?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    usuario?: UsuarioOrderByWithRelationInput
    habitacion?: HabitacionOrderByWithRelationInput
    pagos?: PagoOrderByRelationAggregateInput
  }

  export type ReservaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReservaWhereInput | ReservaWhereInput[]
    OR?: ReservaWhereInput[]
    NOT?: ReservaWhereInput | ReservaWhereInput[]
    usuarioId?: IntFilter<"Reserva"> | number
    habitacionId?: IntFilter<"Reserva"> | number
    fechaInicio?: DateTimeFilter<"Reserva"> | Date | string
    fechaFin?: DateTimeFilter<"Reserva"> | Date | string
    numeroHuespedes?: IntFilter<"Reserva"> | number
    estado?: StringFilter<"Reserva"> | string
    createdAt?: DateTimeFilter<"Reserva"> | Date | string
    usuario?: XOR<UsuarioScalarRelationFilter, UsuarioWhereInput>
    habitacion?: XOR<HabitacionScalarRelationFilter, HabitacionWhereInput>
    pagos?: PagoListRelationFilter
  }, "id">

  export type ReservaOrderByWithAggregationInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    habitacionId?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    numeroHuespedes?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
    _count?: ReservaCountOrderByAggregateInput
    _avg?: ReservaAvgOrderByAggregateInput
    _max?: ReservaMaxOrderByAggregateInput
    _min?: ReservaMinOrderByAggregateInput
    _sum?: ReservaSumOrderByAggregateInput
  }

  export type ReservaScalarWhereWithAggregatesInput = {
    AND?: ReservaScalarWhereWithAggregatesInput | ReservaScalarWhereWithAggregatesInput[]
    OR?: ReservaScalarWhereWithAggregatesInput[]
    NOT?: ReservaScalarWhereWithAggregatesInput | ReservaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reserva"> | number
    usuarioId?: IntWithAggregatesFilter<"Reserva"> | number
    habitacionId?: IntWithAggregatesFilter<"Reserva"> | number
    fechaInicio?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
    fechaFin?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
    numeroHuespedes?: IntWithAggregatesFilter<"Reserva"> | number
    estado?: StringWithAggregatesFilter<"Reserva"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Reserva"> | Date | string
  }

  export type PagoWhereInput = {
    AND?: PagoWhereInput | PagoWhereInput[]
    OR?: PagoWhereInput[]
    NOT?: PagoWhereInput | PagoWhereInput[]
    id?: IntFilter<"Pago"> | number
    reservaId?: IntFilter<"Pago"> | number
    monto?: FloatFilter<"Pago"> | number
    metodo?: StringNullableFilter<"Pago"> | string | null
    estado?: StringNullableFilter<"Pago"> | string | null
    reserva?: XOR<ReservaScalarRelationFilter, ReservaWhereInput>
  }

  export type PagoOrderByWithRelationInput = {
    id?: SortOrder
    reservaId?: SortOrder
    monto?: SortOrder
    metodo?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    reserva?: ReservaOrderByWithRelationInput
  }

  export type PagoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PagoWhereInput | PagoWhereInput[]
    OR?: PagoWhereInput[]
    NOT?: PagoWhereInput | PagoWhereInput[]
    reservaId?: IntFilter<"Pago"> | number
    monto?: FloatFilter<"Pago"> | number
    metodo?: StringNullableFilter<"Pago"> | string | null
    estado?: StringNullableFilter<"Pago"> | string | null
    reserva?: XOR<ReservaScalarRelationFilter, ReservaWhereInput>
  }, "id">

  export type PagoOrderByWithAggregationInput = {
    id?: SortOrder
    reservaId?: SortOrder
    monto?: SortOrder
    metodo?: SortOrderInput | SortOrder
    estado?: SortOrderInput | SortOrder
    _count?: PagoCountOrderByAggregateInput
    _avg?: PagoAvgOrderByAggregateInput
    _max?: PagoMaxOrderByAggregateInput
    _min?: PagoMinOrderByAggregateInput
    _sum?: PagoSumOrderByAggregateInput
  }

  export type PagoScalarWhereWithAggregatesInput = {
    AND?: PagoScalarWhereWithAggregatesInput | PagoScalarWhereWithAggregatesInput[]
    OR?: PagoScalarWhereWithAggregatesInput[]
    NOT?: PagoScalarWhereWithAggregatesInput | PagoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pago"> | number
    reservaId?: IntWithAggregatesFilter<"Pago"> | number
    monto?: FloatWithAggregatesFilter<"Pago"> | number
    metodo?: StringNullableWithAggregatesFilter<"Pago"> | string | null
    estado?: StringNullableWithAggregatesFilter<"Pago"> | string | null
  }

  export type ServicioWhereInput = {
    AND?: ServicioWhereInput | ServicioWhereInput[]
    OR?: ServicioWhereInput[]
    NOT?: ServicioWhereInput | ServicioWhereInput[]
    id?: IntFilter<"Servicio"> | number
    nombre?: StringFilter<"Servicio"> | string
    descripcion?: StringNullableFilter<"Servicio"> | string | null
    habitaciones?: ServicioEnHabitacionListRelationFilter
  }

  export type ServicioOrderByWithRelationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    habitaciones?: ServicioEnHabitacionOrderByRelationAggregateInput
  }

  export type ServicioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nombre?: string
    AND?: ServicioWhereInput | ServicioWhereInput[]
    OR?: ServicioWhereInput[]
    NOT?: ServicioWhereInput | ServicioWhereInput[]
    descripcion?: StringNullableFilter<"Servicio"> | string | null
    habitaciones?: ServicioEnHabitacionListRelationFilter
  }, "id" | "nombre">

  export type ServicioOrderByWithAggregationInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrderInput | SortOrder
    _count?: ServicioCountOrderByAggregateInput
    _avg?: ServicioAvgOrderByAggregateInput
    _max?: ServicioMaxOrderByAggregateInput
    _min?: ServicioMinOrderByAggregateInput
    _sum?: ServicioSumOrderByAggregateInput
  }

  export type ServicioScalarWhereWithAggregatesInput = {
    AND?: ServicioScalarWhereWithAggregatesInput | ServicioScalarWhereWithAggregatesInput[]
    OR?: ServicioScalarWhereWithAggregatesInput[]
    NOT?: ServicioScalarWhereWithAggregatesInput | ServicioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Servicio"> | number
    nombre?: StringWithAggregatesFilter<"Servicio"> | string
    descripcion?: StringNullableWithAggregatesFilter<"Servicio"> | string | null
  }

  export type ServicioEnHabitacionWhereInput = {
    AND?: ServicioEnHabitacionWhereInput | ServicioEnHabitacionWhereInput[]
    OR?: ServicioEnHabitacionWhereInput[]
    NOT?: ServicioEnHabitacionWhereInput | ServicioEnHabitacionWhereInput[]
    habitacionId?: IntFilter<"ServicioEnHabitacion"> | number
    servicioId?: IntFilter<"ServicioEnHabitacion"> | number
    habitacion?: XOR<HabitacionScalarRelationFilter, HabitacionWhereInput>
    servicio?: XOR<ServicioScalarRelationFilter, ServicioWhereInput>
  }

  export type ServicioEnHabitacionOrderByWithRelationInput = {
    habitacionId?: SortOrder
    servicioId?: SortOrder
    habitacion?: HabitacionOrderByWithRelationInput
    servicio?: ServicioOrderByWithRelationInput
  }

  export type ServicioEnHabitacionWhereUniqueInput = Prisma.AtLeast<{
    habitacionId_servicioId?: ServicioEnHabitacionHabitacionIdServicioIdCompoundUniqueInput
    AND?: ServicioEnHabitacionWhereInput | ServicioEnHabitacionWhereInput[]
    OR?: ServicioEnHabitacionWhereInput[]
    NOT?: ServicioEnHabitacionWhereInput | ServicioEnHabitacionWhereInput[]
    habitacionId?: IntFilter<"ServicioEnHabitacion"> | number
    servicioId?: IntFilter<"ServicioEnHabitacion"> | number
    habitacion?: XOR<HabitacionScalarRelationFilter, HabitacionWhereInput>
    servicio?: XOR<ServicioScalarRelationFilter, ServicioWhereInput>
  }, "habitacionId_servicioId">

  export type ServicioEnHabitacionOrderByWithAggregationInput = {
    habitacionId?: SortOrder
    servicioId?: SortOrder
    _count?: ServicioEnHabitacionCountOrderByAggregateInput
    _avg?: ServicioEnHabitacionAvgOrderByAggregateInput
    _max?: ServicioEnHabitacionMaxOrderByAggregateInput
    _min?: ServicioEnHabitacionMinOrderByAggregateInput
    _sum?: ServicioEnHabitacionSumOrderByAggregateInput
  }

  export type ServicioEnHabitacionScalarWhereWithAggregatesInput = {
    AND?: ServicioEnHabitacionScalarWhereWithAggregatesInput | ServicioEnHabitacionScalarWhereWithAggregatesInput[]
    OR?: ServicioEnHabitacionScalarWhereWithAggregatesInput[]
    NOT?: ServicioEnHabitacionScalarWhereWithAggregatesInput | ServicioEnHabitacionScalarWhereWithAggregatesInput[]
    habitacionId?: IntWithAggregatesFilter<"ServicioEnHabitacion"> | number
    servicioId?: IntWithAggregatesFilter<"ServicioEnHabitacion"> | number
  }

  export type UsuarioCreateInput = {
    nombre: string
    apellido: string
    email: string
    password: string
    rol?: $Enums.RolUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    reservas?: ReservaCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    nombre: string
    apellido: string
    email: string
    password: string
    rol?: $Enums.RolUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
    reservas?: ReservaUncheckedCreateNestedManyWithoutUsuarioInput
  }

  export type UsuarioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reservas?: ReservaUncheckedUpdateManyWithoutUsuarioNestedInput
  }

  export type UsuarioCreateManyInput = {
    id?: number
    nombre: string
    apellido: string
    email: string
    password: string
    rol?: $Enums.RolUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitacionCreateInput = {
    numero: number
    piso?: number | null
    tipo: string
    descripcion?: string | null
    capacidad?: number
    precioPorNoche: number
    estado: string
    reservas?: ReservaCreateNestedManyWithoutHabitacionInput
    servicios?: ServicioEnHabitacionCreateNestedManyWithoutHabitacionInput
  }

  export type HabitacionUncheckedCreateInput = {
    id?: number
    numero: number
    piso?: number | null
    tipo: string
    descripcion?: string | null
    capacidad?: number
    precioPorNoche: number
    estado: string
    reservas?: ReservaUncheckedCreateNestedManyWithoutHabitacionInput
    servicios?: ServicioEnHabitacionUncheckedCreateNestedManyWithoutHabitacionInput
  }

  export type HabitacionUpdateInput = {
    numero?: IntFieldUpdateOperationsInput | number
    piso?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    capacidad?: IntFieldUpdateOperationsInput | number
    precioPorNoche?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    reservas?: ReservaUpdateManyWithoutHabitacionNestedInput
    servicios?: ServicioEnHabitacionUpdateManyWithoutHabitacionNestedInput
  }

  export type HabitacionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    piso?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    capacidad?: IntFieldUpdateOperationsInput | number
    precioPorNoche?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    reservas?: ReservaUncheckedUpdateManyWithoutHabitacionNestedInput
    servicios?: ServicioEnHabitacionUncheckedUpdateManyWithoutHabitacionNestedInput
  }

  export type HabitacionCreateManyInput = {
    id?: number
    numero: number
    piso?: number | null
    tipo: string
    descripcion?: string | null
    capacidad?: number
    precioPorNoche: number
    estado: string
  }

  export type HabitacionUpdateManyMutationInput = {
    numero?: IntFieldUpdateOperationsInput | number
    piso?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    capacidad?: IntFieldUpdateOperationsInput | number
    precioPorNoche?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type HabitacionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    piso?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    capacidad?: IntFieldUpdateOperationsInput | number
    precioPorNoche?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type ReservaCreateInput = {
    fechaInicio: Date | string
    fechaFin: Date | string
    numeroHuespedes?: number
    estado: string
    createdAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutReservasInput
    habitacion: HabitacionCreateNestedOneWithoutReservasInput
    pagos?: PagoCreateNestedManyWithoutReservaInput
  }

  export type ReservaUncheckedCreateInput = {
    id?: number
    usuarioId: number
    habitacionId: number
    fechaInicio: Date | string
    fechaFin: Date | string
    numeroHuespedes?: number
    estado: string
    createdAt?: Date | string
    pagos?: PagoUncheckedCreateNestedManyWithoutReservaInput
  }

  export type ReservaUpdateInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroHuespedes?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutReservasNestedInput
    habitacion?: HabitacionUpdateOneRequiredWithoutReservasNestedInput
    pagos?: PagoUpdateManyWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    habitacionId?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroHuespedes?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pagos?: PagoUncheckedUpdateManyWithoutReservaNestedInput
  }

  export type ReservaCreateManyInput = {
    id?: number
    usuarioId: number
    habitacionId: number
    fechaInicio: Date | string
    fechaFin: Date | string
    numeroHuespedes?: number
    estado: string
    createdAt?: Date | string
  }

  export type ReservaUpdateManyMutationInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroHuespedes?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    habitacionId?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroHuespedes?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PagoCreateInput = {
    monto: number
    metodo?: string | null
    estado?: string | null
    reserva: ReservaCreateNestedOneWithoutPagosInput
  }

  export type PagoUncheckedCreateInput = {
    id?: number
    reservaId: number
    monto: number
    metodo?: string | null
    estado?: string | null
  }

  export type PagoUpdateInput = {
    monto?: FloatFieldUpdateOperationsInput | number
    metodo?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
    reserva?: ReservaUpdateOneRequiredWithoutPagosNestedInput
  }

  export type PagoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservaId?: IntFieldUpdateOperationsInput | number
    monto?: FloatFieldUpdateOperationsInput | number
    metodo?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PagoCreateManyInput = {
    id?: number
    reservaId: number
    monto: number
    metodo?: string | null
    estado?: string | null
  }

  export type PagoUpdateManyMutationInput = {
    monto?: FloatFieldUpdateOperationsInput | number
    metodo?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PagoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    reservaId?: IntFieldUpdateOperationsInput | number
    monto?: FloatFieldUpdateOperationsInput | number
    metodo?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServicioCreateInput = {
    nombre: string
    descripcion?: string | null
    habitaciones?: ServicioEnHabitacionCreateNestedManyWithoutServicioInput
  }

  export type ServicioUncheckedCreateInput = {
    id?: number
    nombre: string
    descripcion?: string | null
    habitaciones?: ServicioEnHabitacionUncheckedCreateNestedManyWithoutServicioInput
  }

  export type ServicioUpdateInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    habitaciones?: ServicioEnHabitacionUpdateManyWithoutServicioNestedInput
  }

  export type ServicioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    habitaciones?: ServicioEnHabitacionUncheckedUpdateManyWithoutServicioNestedInput
  }

  export type ServicioCreateManyInput = {
    id?: number
    nombre: string
    descripcion?: string | null
  }

  export type ServicioUpdateManyMutationInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServicioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServicioEnHabitacionCreateInput = {
    habitacion: HabitacionCreateNestedOneWithoutServiciosInput
    servicio: ServicioCreateNestedOneWithoutHabitacionesInput
  }

  export type ServicioEnHabitacionUncheckedCreateInput = {
    habitacionId: number
    servicioId: number
  }

  export type ServicioEnHabitacionUpdateInput = {
    habitacion?: HabitacionUpdateOneRequiredWithoutServiciosNestedInput
    servicio?: ServicioUpdateOneRequiredWithoutHabitacionesNestedInput
  }

  export type ServicioEnHabitacionUncheckedUpdateInput = {
    habitacionId?: IntFieldUpdateOperationsInput | number
    servicioId?: IntFieldUpdateOperationsInput | number
  }

  export type ServicioEnHabitacionCreateManyInput = {
    habitacionId: number
    servicioId: number
  }

  export type ServicioEnHabitacionUpdateManyMutationInput = {

  }

  export type ServicioEnHabitacionUncheckedUpdateManyInput = {
    habitacionId?: IntFieldUpdateOperationsInput | number
    servicioId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRolUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.RolUsuario | EnumRolUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumRolUsuarioFilter<$PrismaModel> | $Enums.RolUsuario
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ReservaListRelationFilter = {
    every?: ReservaWhereInput
    some?: ReservaWhereInput
    none?: ReservaWhereInput
  }

  export type ReservaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    apellido?: SortOrder
    email?: SortOrder
    password?: SortOrder
    rol?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRolUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RolUsuario | EnumRolUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumRolUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.RolUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolUsuarioFilter<$PrismaModel>
    _max?: NestedEnumRolUsuarioFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ServicioEnHabitacionListRelationFilter = {
    every?: ServicioEnHabitacionWhereInput
    some?: ServicioEnHabitacionWhereInput
    none?: ServicioEnHabitacionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ServicioEnHabitacionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HabitacionCountOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    piso?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    capacidad?: SortOrder
    precioPorNoche?: SortOrder
    estado?: SortOrder
  }

  export type HabitacionAvgOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    piso?: SortOrder
    capacidad?: SortOrder
    precioPorNoche?: SortOrder
  }

  export type HabitacionMaxOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    piso?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    capacidad?: SortOrder
    precioPorNoche?: SortOrder
    estado?: SortOrder
  }

  export type HabitacionMinOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    piso?: SortOrder
    tipo?: SortOrder
    descripcion?: SortOrder
    capacidad?: SortOrder
    precioPorNoche?: SortOrder
    estado?: SortOrder
  }

  export type HabitacionSumOrderByAggregateInput = {
    id?: SortOrder
    numero?: SortOrder
    piso?: SortOrder
    capacidad?: SortOrder
    precioPorNoche?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UsuarioScalarRelationFilter = {
    is?: UsuarioWhereInput
    isNot?: UsuarioWhereInput
  }

  export type HabitacionScalarRelationFilter = {
    is?: HabitacionWhereInput
    isNot?: HabitacionWhereInput
  }

  export type PagoListRelationFilter = {
    every?: PagoWhereInput
    some?: PagoWhereInput
    none?: PagoWhereInput
  }

  export type PagoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReservaCountOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    habitacionId?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    numeroHuespedes?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
  }

  export type ReservaAvgOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    habitacionId?: SortOrder
    numeroHuespedes?: SortOrder
  }

  export type ReservaMaxOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    habitacionId?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    numeroHuespedes?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
  }

  export type ReservaMinOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    habitacionId?: SortOrder
    fechaInicio?: SortOrder
    fechaFin?: SortOrder
    numeroHuespedes?: SortOrder
    estado?: SortOrder
    createdAt?: SortOrder
  }

  export type ReservaSumOrderByAggregateInput = {
    id?: SortOrder
    usuarioId?: SortOrder
    habitacionId?: SortOrder
    numeroHuespedes?: SortOrder
  }

  export type ReservaScalarRelationFilter = {
    is?: ReservaWhereInput
    isNot?: ReservaWhereInput
  }

  export type PagoCountOrderByAggregateInput = {
    id?: SortOrder
    reservaId?: SortOrder
    monto?: SortOrder
    metodo?: SortOrder
    estado?: SortOrder
  }

  export type PagoAvgOrderByAggregateInput = {
    id?: SortOrder
    reservaId?: SortOrder
    monto?: SortOrder
  }

  export type PagoMaxOrderByAggregateInput = {
    id?: SortOrder
    reservaId?: SortOrder
    monto?: SortOrder
    metodo?: SortOrder
    estado?: SortOrder
  }

  export type PagoMinOrderByAggregateInput = {
    id?: SortOrder
    reservaId?: SortOrder
    monto?: SortOrder
    metodo?: SortOrder
    estado?: SortOrder
  }

  export type PagoSumOrderByAggregateInput = {
    id?: SortOrder
    reservaId?: SortOrder
    monto?: SortOrder
  }

  export type ServicioCountOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type ServicioAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ServicioMaxOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type ServicioMinOrderByAggregateInput = {
    id?: SortOrder
    nombre?: SortOrder
    descripcion?: SortOrder
  }

  export type ServicioSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ServicioScalarRelationFilter = {
    is?: ServicioWhereInput
    isNot?: ServicioWhereInput
  }

  export type ServicioEnHabitacionHabitacionIdServicioIdCompoundUniqueInput = {
    habitacionId: number
    servicioId: number
  }

  export type ServicioEnHabitacionCountOrderByAggregateInput = {
    habitacionId?: SortOrder
    servicioId?: SortOrder
  }

  export type ServicioEnHabitacionAvgOrderByAggregateInput = {
    habitacionId?: SortOrder
    servicioId?: SortOrder
  }

  export type ServicioEnHabitacionMaxOrderByAggregateInput = {
    habitacionId?: SortOrder
    servicioId?: SortOrder
  }

  export type ServicioEnHabitacionMinOrderByAggregateInput = {
    habitacionId?: SortOrder
    servicioId?: SortOrder
  }

  export type ServicioEnHabitacionSumOrderByAggregateInput = {
    habitacionId?: SortOrder
    servicioId?: SortOrder
  }

  export type ReservaCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ReservaCreateWithoutUsuarioInput, ReservaUncheckedCreateWithoutUsuarioInput> | ReservaCreateWithoutUsuarioInput[] | ReservaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutUsuarioInput | ReservaCreateOrConnectWithoutUsuarioInput[]
    createMany?: ReservaCreateManyUsuarioInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type ReservaUncheckedCreateNestedManyWithoutUsuarioInput = {
    create?: XOR<ReservaCreateWithoutUsuarioInput, ReservaUncheckedCreateWithoutUsuarioInput> | ReservaCreateWithoutUsuarioInput[] | ReservaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutUsuarioInput | ReservaCreateOrConnectWithoutUsuarioInput[]
    createMany?: ReservaCreateManyUsuarioInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRolUsuarioFieldUpdateOperationsInput = {
    set?: $Enums.RolUsuario
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReservaUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ReservaCreateWithoutUsuarioInput, ReservaUncheckedCreateWithoutUsuarioInput> | ReservaCreateWithoutUsuarioInput[] | ReservaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutUsuarioInput | ReservaCreateOrConnectWithoutUsuarioInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutUsuarioInput | ReservaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ReservaCreateManyUsuarioInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutUsuarioInput | ReservaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutUsuarioInput | ReservaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReservaUncheckedUpdateManyWithoutUsuarioNestedInput = {
    create?: XOR<ReservaCreateWithoutUsuarioInput, ReservaUncheckedCreateWithoutUsuarioInput> | ReservaCreateWithoutUsuarioInput[] | ReservaUncheckedCreateWithoutUsuarioInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutUsuarioInput | ReservaCreateOrConnectWithoutUsuarioInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutUsuarioInput | ReservaUpsertWithWhereUniqueWithoutUsuarioInput[]
    createMany?: ReservaCreateManyUsuarioInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutUsuarioInput | ReservaUpdateWithWhereUniqueWithoutUsuarioInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutUsuarioInput | ReservaUpdateManyWithWhereWithoutUsuarioInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type ReservaCreateNestedManyWithoutHabitacionInput = {
    create?: XOR<ReservaCreateWithoutHabitacionInput, ReservaUncheckedCreateWithoutHabitacionInput> | ReservaCreateWithoutHabitacionInput[] | ReservaUncheckedCreateWithoutHabitacionInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutHabitacionInput | ReservaCreateOrConnectWithoutHabitacionInput[]
    createMany?: ReservaCreateManyHabitacionInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type ServicioEnHabitacionCreateNestedManyWithoutHabitacionInput = {
    create?: XOR<ServicioEnHabitacionCreateWithoutHabitacionInput, ServicioEnHabitacionUncheckedCreateWithoutHabitacionInput> | ServicioEnHabitacionCreateWithoutHabitacionInput[] | ServicioEnHabitacionUncheckedCreateWithoutHabitacionInput[]
    connectOrCreate?: ServicioEnHabitacionCreateOrConnectWithoutHabitacionInput | ServicioEnHabitacionCreateOrConnectWithoutHabitacionInput[]
    createMany?: ServicioEnHabitacionCreateManyHabitacionInputEnvelope
    connect?: ServicioEnHabitacionWhereUniqueInput | ServicioEnHabitacionWhereUniqueInput[]
  }

  export type ReservaUncheckedCreateNestedManyWithoutHabitacionInput = {
    create?: XOR<ReservaCreateWithoutHabitacionInput, ReservaUncheckedCreateWithoutHabitacionInput> | ReservaCreateWithoutHabitacionInput[] | ReservaUncheckedCreateWithoutHabitacionInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutHabitacionInput | ReservaCreateOrConnectWithoutHabitacionInput[]
    createMany?: ReservaCreateManyHabitacionInputEnvelope
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
  }

  export type ServicioEnHabitacionUncheckedCreateNestedManyWithoutHabitacionInput = {
    create?: XOR<ServicioEnHabitacionCreateWithoutHabitacionInput, ServicioEnHabitacionUncheckedCreateWithoutHabitacionInput> | ServicioEnHabitacionCreateWithoutHabitacionInput[] | ServicioEnHabitacionUncheckedCreateWithoutHabitacionInput[]
    connectOrCreate?: ServicioEnHabitacionCreateOrConnectWithoutHabitacionInput | ServicioEnHabitacionCreateOrConnectWithoutHabitacionInput[]
    createMany?: ServicioEnHabitacionCreateManyHabitacionInputEnvelope
    connect?: ServicioEnHabitacionWhereUniqueInput | ServicioEnHabitacionWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ReservaUpdateManyWithoutHabitacionNestedInput = {
    create?: XOR<ReservaCreateWithoutHabitacionInput, ReservaUncheckedCreateWithoutHabitacionInput> | ReservaCreateWithoutHabitacionInput[] | ReservaUncheckedCreateWithoutHabitacionInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutHabitacionInput | ReservaCreateOrConnectWithoutHabitacionInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutHabitacionInput | ReservaUpsertWithWhereUniqueWithoutHabitacionInput[]
    createMany?: ReservaCreateManyHabitacionInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutHabitacionInput | ReservaUpdateWithWhereUniqueWithoutHabitacionInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutHabitacionInput | ReservaUpdateManyWithWhereWithoutHabitacionInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type ServicioEnHabitacionUpdateManyWithoutHabitacionNestedInput = {
    create?: XOR<ServicioEnHabitacionCreateWithoutHabitacionInput, ServicioEnHabitacionUncheckedCreateWithoutHabitacionInput> | ServicioEnHabitacionCreateWithoutHabitacionInput[] | ServicioEnHabitacionUncheckedCreateWithoutHabitacionInput[]
    connectOrCreate?: ServicioEnHabitacionCreateOrConnectWithoutHabitacionInput | ServicioEnHabitacionCreateOrConnectWithoutHabitacionInput[]
    upsert?: ServicioEnHabitacionUpsertWithWhereUniqueWithoutHabitacionInput | ServicioEnHabitacionUpsertWithWhereUniqueWithoutHabitacionInput[]
    createMany?: ServicioEnHabitacionCreateManyHabitacionInputEnvelope
    set?: ServicioEnHabitacionWhereUniqueInput | ServicioEnHabitacionWhereUniqueInput[]
    disconnect?: ServicioEnHabitacionWhereUniqueInput | ServicioEnHabitacionWhereUniqueInput[]
    delete?: ServicioEnHabitacionWhereUniqueInput | ServicioEnHabitacionWhereUniqueInput[]
    connect?: ServicioEnHabitacionWhereUniqueInput | ServicioEnHabitacionWhereUniqueInput[]
    update?: ServicioEnHabitacionUpdateWithWhereUniqueWithoutHabitacionInput | ServicioEnHabitacionUpdateWithWhereUniqueWithoutHabitacionInput[]
    updateMany?: ServicioEnHabitacionUpdateManyWithWhereWithoutHabitacionInput | ServicioEnHabitacionUpdateManyWithWhereWithoutHabitacionInput[]
    deleteMany?: ServicioEnHabitacionScalarWhereInput | ServicioEnHabitacionScalarWhereInput[]
  }

  export type ReservaUncheckedUpdateManyWithoutHabitacionNestedInput = {
    create?: XOR<ReservaCreateWithoutHabitacionInput, ReservaUncheckedCreateWithoutHabitacionInput> | ReservaCreateWithoutHabitacionInput[] | ReservaUncheckedCreateWithoutHabitacionInput[]
    connectOrCreate?: ReservaCreateOrConnectWithoutHabitacionInput | ReservaCreateOrConnectWithoutHabitacionInput[]
    upsert?: ReservaUpsertWithWhereUniqueWithoutHabitacionInput | ReservaUpsertWithWhereUniqueWithoutHabitacionInput[]
    createMany?: ReservaCreateManyHabitacionInputEnvelope
    set?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    disconnect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    delete?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    connect?: ReservaWhereUniqueInput | ReservaWhereUniqueInput[]
    update?: ReservaUpdateWithWhereUniqueWithoutHabitacionInput | ReservaUpdateWithWhereUniqueWithoutHabitacionInput[]
    updateMany?: ReservaUpdateManyWithWhereWithoutHabitacionInput | ReservaUpdateManyWithWhereWithoutHabitacionInput[]
    deleteMany?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
  }

  export type ServicioEnHabitacionUncheckedUpdateManyWithoutHabitacionNestedInput = {
    create?: XOR<ServicioEnHabitacionCreateWithoutHabitacionInput, ServicioEnHabitacionUncheckedCreateWithoutHabitacionInput> | ServicioEnHabitacionCreateWithoutHabitacionInput[] | ServicioEnHabitacionUncheckedCreateWithoutHabitacionInput[]
    connectOrCreate?: ServicioEnHabitacionCreateOrConnectWithoutHabitacionInput | ServicioEnHabitacionCreateOrConnectWithoutHabitacionInput[]
    upsert?: ServicioEnHabitacionUpsertWithWhereUniqueWithoutHabitacionInput | ServicioEnHabitacionUpsertWithWhereUniqueWithoutHabitacionInput[]
    createMany?: ServicioEnHabitacionCreateManyHabitacionInputEnvelope
    set?: ServicioEnHabitacionWhereUniqueInput | ServicioEnHabitacionWhereUniqueInput[]
    disconnect?: ServicioEnHabitacionWhereUniqueInput | ServicioEnHabitacionWhereUniqueInput[]
    delete?: ServicioEnHabitacionWhereUniqueInput | ServicioEnHabitacionWhereUniqueInput[]
    connect?: ServicioEnHabitacionWhereUniqueInput | ServicioEnHabitacionWhereUniqueInput[]
    update?: ServicioEnHabitacionUpdateWithWhereUniqueWithoutHabitacionInput | ServicioEnHabitacionUpdateWithWhereUniqueWithoutHabitacionInput[]
    updateMany?: ServicioEnHabitacionUpdateManyWithWhereWithoutHabitacionInput | ServicioEnHabitacionUpdateManyWithWhereWithoutHabitacionInput[]
    deleteMany?: ServicioEnHabitacionScalarWhereInput | ServicioEnHabitacionScalarWhereInput[]
  }

  export type UsuarioCreateNestedOneWithoutReservasInput = {
    create?: XOR<UsuarioCreateWithoutReservasInput, UsuarioUncheckedCreateWithoutReservasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReservasInput
    connect?: UsuarioWhereUniqueInput
  }

  export type HabitacionCreateNestedOneWithoutReservasInput = {
    create?: XOR<HabitacionCreateWithoutReservasInput, HabitacionUncheckedCreateWithoutReservasInput>
    connectOrCreate?: HabitacionCreateOrConnectWithoutReservasInput
    connect?: HabitacionWhereUniqueInput
  }

  export type PagoCreateNestedManyWithoutReservaInput = {
    create?: XOR<PagoCreateWithoutReservaInput, PagoUncheckedCreateWithoutReservaInput> | PagoCreateWithoutReservaInput[] | PagoUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutReservaInput | PagoCreateOrConnectWithoutReservaInput[]
    createMany?: PagoCreateManyReservaInputEnvelope
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
  }

  export type PagoUncheckedCreateNestedManyWithoutReservaInput = {
    create?: XOR<PagoCreateWithoutReservaInput, PagoUncheckedCreateWithoutReservaInput> | PagoCreateWithoutReservaInput[] | PagoUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutReservaInput | PagoCreateOrConnectWithoutReservaInput[]
    createMany?: PagoCreateManyReservaInputEnvelope
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
  }

  export type UsuarioUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<UsuarioCreateWithoutReservasInput, UsuarioUncheckedCreateWithoutReservasInput>
    connectOrCreate?: UsuarioCreateOrConnectWithoutReservasInput
    upsert?: UsuarioUpsertWithoutReservasInput
    connect?: UsuarioWhereUniqueInput
    update?: XOR<XOR<UsuarioUpdateToOneWithWhereWithoutReservasInput, UsuarioUpdateWithoutReservasInput>, UsuarioUncheckedUpdateWithoutReservasInput>
  }

  export type HabitacionUpdateOneRequiredWithoutReservasNestedInput = {
    create?: XOR<HabitacionCreateWithoutReservasInput, HabitacionUncheckedCreateWithoutReservasInput>
    connectOrCreate?: HabitacionCreateOrConnectWithoutReservasInput
    upsert?: HabitacionUpsertWithoutReservasInput
    connect?: HabitacionWhereUniqueInput
    update?: XOR<XOR<HabitacionUpdateToOneWithWhereWithoutReservasInput, HabitacionUpdateWithoutReservasInput>, HabitacionUncheckedUpdateWithoutReservasInput>
  }

  export type PagoUpdateManyWithoutReservaNestedInput = {
    create?: XOR<PagoCreateWithoutReservaInput, PagoUncheckedCreateWithoutReservaInput> | PagoCreateWithoutReservaInput[] | PagoUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutReservaInput | PagoCreateOrConnectWithoutReservaInput[]
    upsert?: PagoUpsertWithWhereUniqueWithoutReservaInput | PagoUpsertWithWhereUniqueWithoutReservaInput[]
    createMany?: PagoCreateManyReservaInputEnvelope
    set?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    disconnect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    delete?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    update?: PagoUpdateWithWhereUniqueWithoutReservaInput | PagoUpdateWithWhereUniqueWithoutReservaInput[]
    updateMany?: PagoUpdateManyWithWhereWithoutReservaInput | PagoUpdateManyWithWhereWithoutReservaInput[]
    deleteMany?: PagoScalarWhereInput | PagoScalarWhereInput[]
  }

  export type PagoUncheckedUpdateManyWithoutReservaNestedInput = {
    create?: XOR<PagoCreateWithoutReservaInput, PagoUncheckedCreateWithoutReservaInput> | PagoCreateWithoutReservaInput[] | PagoUncheckedCreateWithoutReservaInput[]
    connectOrCreate?: PagoCreateOrConnectWithoutReservaInput | PagoCreateOrConnectWithoutReservaInput[]
    upsert?: PagoUpsertWithWhereUniqueWithoutReservaInput | PagoUpsertWithWhereUniqueWithoutReservaInput[]
    createMany?: PagoCreateManyReservaInputEnvelope
    set?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    disconnect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    delete?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    connect?: PagoWhereUniqueInput | PagoWhereUniqueInput[]
    update?: PagoUpdateWithWhereUniqueWithoutReservaInput | PagoUpdateWithWhereUniqueWithoutReservaInput[]
    updateMany?: PagoUpdateManyWithWhereWithoutReservaInput | PagoUpdateManyWithWhereWithoutReservaInput[]
    deleteMany?: PagoScalarWhereInput | PagoScalarWhereInput[]
  }

  export type ReservaCreateNestedOneWithoutPagosInput = {
    create?: XOR<ReservaCreateWithoutPagosInput, ReservaUncheckedCreateWithoutPagosInput>
    connectOrCreate?: ReservaCreateOrConnectWithoutPagosInput
    connect?: ReservaWhereUniqueInput
  }

  export type ReservaUpdateOneRequiredWithoutPagosNestedInput = {
    create?: XOR<ReservaCreateWithoutPagosInput, ReservaUncheckedCreateWithoutPagosInput>
    connectOrCreate?: ReservaCreateOrConnectWithoutPagosInput
    upsert?: ReservaUpsertWithoutPagosInput
    connect?: ReservaWhereUniqueInput
    update?: XOR<XOR<ReservaUpdateToOneWithWhereWithoutPagosInput, ReservaUpdateWithoutPagosInput>, ReservaUncheckedUpdateWithoutPagosInput>
  }

  export type ServicioEnHabitacionCreateNestedManyWithoutServicioInput = {
    create?: XOR<ServicioEnHabitacionCreateWithoutServicioInput, ServicioEnHabitacionUncheckedCreateWithoutServicioInput> | ServicioEnHabitacionCreateWithoutServicioInput[] | ServicioEnHabitacionUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ServicioEnHabitacionCreateOrConnectWithoutServicioInput | ServicioEnHabitacionCreateOrConnectWithoutServicioInput[]
    createMany?: ServicioEnHabitacionCreateManyServicioInputEnvelope
    connect?: ServicioEnHabitacionWhereUniqueInput | ServicioEnHabitacionWhereUniqueInput[]
  }

  export type ServicioEnHabitacionUncheckedCreateNestedManyWithoutServicioInput = {
    create?: XOR<ServicioEnHabitacionCreateWithoutServicioInput, ServicioEnHabitacionUncheckedCreateWithoutServicioInput> | ServicioEnHabitacionCreateWithoutServicioInput[] | ServicioEnHabitacionUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ServicioEnHabitacionCreateOrConnectWithoutServicioInput | ServicioEnHabitacionCreateOrConnectWithoutServicioInput[]
    createMany?: ServicioEnHabitacionCreateManyServicioInputEnvelope
    connect?: ServicioEnHabitacionWhereUniqueInput | ServicioEnHabitacionWhereUniqueInput[]
  }

  export type ServicioEnHabitacionUpdateManyWithoutServicioNestedInput = {
    create?: XOR<ServicioEnHabitacionCreateWithoutServicioInput, ServicioEnHabitacionUncheckedCreateWithoutServicioInput> | ServicioEnHabitacionCreateWithoutServicioInput[] | ServicioEnHabitacionUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ServicioEnHabitacionCreateOrConnectWithoutServicioInput | ServicioEnHabitacionCreateOrConnectWithoutServicioInput[]
    upsert?: ServicioEnHabitacionUpsertWithWhereUniqueWithoutServicioInput | ServicioEnHabitacionUpsertWithWhereUniqueWithoutServicioInput[]
    createMany?: ServicioEnHabitacionCreateManyServicioInputEnvelope
    set?: ServicioEnHabitacionWhereUniqueInput | ServicioEnHabitacionWhereUniqueInput[]
    disconnect?: ServicioEnHabitacionWhereUniqueInput | ServicioEnHabitacionWhereUniqueInput[]
    delete?: ServicioEnHabitacionWhereUniqueInput | ServicioEnHabitacionWhereUniqueInput[]
    connect?: ServicioEnHabitacionWhereUniqueInput | ServicioEnHabitacionWhereUniqueInput[]
    update?: ServicioEnHabitacionUpdateWithWhereUniqueWithoutServicioInput | ServicioEnHabitacionUpdateWithWhereUniqueWithoutServicioInput[]
    updateMany?: ServicioEnHabitacionUpdateManyWithWhereWithoutServicioInput | ServicioEnHabitacionUpdateManyWithWhereWithoutServicioInput[]
    deleteMany?: ServicioEnHabitacionScalarWhereInput | ServicioEnHabitacionScalarWhereInput[]
  }

  export type ServicioEnHabitacionUncheckedUpdateManyWithoutServicioNestedInput = {
    create?: XOR<ServicioEnHabitacionCreateWithoutServicioInput, ServicioEnHabitacionUncheckedCreateWithoutServicioInput> | ServicioEnHabitacionCreateWithoutServicioInput[] | ServicioEnHabitacionUncheckedCreateWithoutServicioInput[]
    connectOrCreate?: ServicioEnHabitacionCreateOrConnectWithoutServicioInput | ServicioEnHabitacionCreateOrConnectWithoutServicioInput[]
    upsert?: ServicioEnHabitacionUpsertWithWhereUniqueWithoutServicioInput | ServicioEnHabitacionUpsertWithWhereUniqueWithoutServicioInput[]
    createMany?: ServicioEnHabitacionCreateManyServicioInputEnvelope
    set?: ServicioEnHabitacionWhereUniqueInput | ServicioEnHabitacionWhereUniqueInput[]
    disconnect?: ServicioEnHabitacionWhereUniqueInput | ServicioEnHabitacionWhereUniqueInput[]
    delete?: ServicioEnHabitacionWhereUniqueInput | ServicioEnHabitacionWhereUniqueInput[]
    connect?: ServicioEnHabitacionWhereUniqueInput | ServicioEnHabitacionWhereUniqueInput[]
    update?: ServicioEnHabitacionUpdateWithWhereUniqueWithoutServicioInput | ServicioEnHabitacionUpdateWithWhereUniqueWithoutServicioInput[]
    updateMany?: ServicioEnHabitacionUpdateManyWithWhereWithoutServicioInput | ServicioEnHabitacionUpdateManyWithWhereWithoutServicioInput[]
    deleteMany?: ServicioEnHabitacionScalarWhereInput | ServicioEnHabitacionScalarWhereInput[]
  }

  export type HabitacionCreateNestedOneWithoutServiciosInput = {
    create?: XOR<HabitacionCreateWithoutServiciosInput, HabitacionUncheckedCreateWithoutServiciosInput>
    connectOrCreate?: HabitacionCreateOrConnectWithoutServiciosInput
    connect?: HabitacionWhereUniqueInput
  }

  export type ServicioCreateNestedOneWithoutHabitacionesInput = {
    create?: XOR<ServicioCreateWithoutHabitacionesInput, ServicioUncheckedCreateWithoutHabitacionesInput>
    connectOrCreate?: ServicioCreateOrConnectWithoutHabitacionesInput
    connect?: ServicioWhereUniqueInput
  }

  export type HabitacionUpdateOneRequiredWithoutServiciosNestedInput = {
    create?: XOR<HabitacionCreateWithoutServiciosInput, HabitacionUncheckedCreateWithoutServiciosInput>
    connectOrCreate?: HabitacionCreateOrConnectWithoutServiciosInput
    upsert?: HabitacionUpsertWithoutServiciosInput
    connect?: HabitacionWhereUniqueInput
    update?: XOR<XOR<HabitacionUpdateToOneWithWhereWithoutServiciosInput, HabitacionUpdateWithoutServiciosInput>, HabitacionUncheckedUpdateWithoutServiciosInput>
  }

  export type ServicioUpdateOneRequiredWithoutHabitacionesNestedInput = {
    create?: XOR<ServicioCreateWithoutHabitacionesInput, ServicioUncheckedCreateWithoutHabitacionesInput>
    connectOrCreate?: ServicioCreateOrConnectWithoutHabitacionesInput
    upsert?: ServicioUpsertWithoutHabitacionesInput
    connect?: ServicioWhereUniqueInput
    update?: XOR<XOR<ServicioUpdateToOneWithWhereWithoutHabitacionesInput, ServicioUpdateWithoutHabitacionesInput>, ServicioUncheckedUpdateWithoutHabitacionesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRolUsuarioFilter<$PrismaModel = never> = {
    equals?: $Enums.RolUsuario | EnumRolUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumRolUsuarioFilter<$PrismaModel> | $Enums.RolUsuario
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumRolUsuarioWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RolUsuario | EnumRolUsuarioFieldRefInput<$PrismaModel>
    in?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    notIn?: $Enums.RolUsuario[] | ListEnumRolUsuarioFieldRefInput<$PrismaModel>
    not?: NestedEnumRolUsuarioWithAggregatesFilter<$PrismaModel> | $Enums.RolUsuario
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRolUsuarioFilter<$PrismaModel>
    _max?: NestedEnumRolUsuarioFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type ReservaCreateWithoutUsuarioInput = {
    fechaInicio: Date | string
    fechaFin: Date | string
    numeroHuespedes?: number
    estado: string
    createdAt?: Date | string
    habitacion: HabitacionCreateNestedOneWithoutReservasInput
    pagos?: PagoCreateNestedManyWithoutReservaInput
  }

  export type ReservaUncheckedCreateWithoutUsuarioInput = {
    id?: number
    habitacionId: number
    fechaInicio: Date | string
    fechaFin: Date | string
    numeroHuespedes?: number
    estado: string
    createdAt?: Date | string
    pagos?: PagoUncheckedCreateNestedManyWithoutReservaInput
  }

  export type ReservaCreateOrConnectWithoutUsuarioInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutUsuarioInput, ReservaUncheckedCreateWithoutUsuarioInput>
  }

  export type ReservaCreateManyUsuarioInputEnvelope = {
    data: ReservaCreateManyUsuarioInput | ReservaCreateManyUsuarioInput[]
    skipDuplicates?: boolean
  }

  export type ReservaUpsertWithWhereUniqueWithoutUsuarioInput = {
    where: ReservaWhereUniqueInput
    update: XOR<ReservaUpdateWithoutUsuarioInput, ReservaUncheckedUpdateWithoutUsuarioInput>
    create: XOR<ReservaCreateWithoutUsuarioInput, ReservaUncheckedCreateWithoutUsuarioInput>
  }

  export type ReservaUpdateWithWhereUniqueWithoutUsuarioInput = {
    where: ReservaWhereUniqueInput
    data: XOR<ReservaUpdateWithoutUsuarioInput, ReservaUncheckedUpdateWithoutUsuarioInput>
  }

  export type ReservaUpdateManyWithWhereWithoutUsuarioInput = {
    where: ReservaScalarWhereInput
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyWithoutUsuarioInput>
  }

  export type ReservaScalarWhereInput = {
    AND?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
    OR?: ReservaScalarWhereInput[]
    NOT?: ReservaScalarWhereInput | ReservaScalarWhereInput[]
    id?: IntFilter<"Reserva"> | number
    usuarioId?: IntFilter<"Reserva"> | number
    habitacionId?: IntFilter<"Reserva"> | number
    fechaInicio?: DateTimeFilter<"Reserva"> | Date | string
    fechaFin?: DateTimeFilter<"Reserva"> | Date | string
    numeroHuespedes?: IntFilter<"Reserva"> | number
    estado?: StringFilter<"Reserva"> | string
    createdAt?: DateTimeFilter<"Reserva"> | Date | string
  }

  export type ReservaCreateWithoutHabitacionInput = {
    fechaInicio: Date | string
    fechaFin: Date | string
    numeroHuespedes?: number
    estado: string
    createdAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutReservasInput
    pagos?: PagoCreateNestedManyWithoutReservaInput
  }

  export type ReservaUncheckedCreateWithoutHabitacionInput = {
    id?: number
    usuarioId: number
    fechaInicio: Date | string
    fechaFin: Date | string
    numeroHuespedes?: number
    estado: string
    createdAt?: Date | string
    pagos?: PagoUncheckedCreateNestedManyWithoutReservaInput
  }

  export type ReservaCreateOrConnectWithoutHabitacionInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutHabitacionInput, ReservaUncheckedCreateWithoutHabitacionInput>
  }

  export type ReservaCreateManyHabitacionInputEnvelope = {
    data: ReservaCreateManyHabitacionInput | ReservaCreateManyHabitacionInput[]
    skipDuplicates?: boolean
  }

  export type ServicioEnHabitacionCreateWithoutHabitacionInput = {
    servicio: ServicioCreateNestedOneWithoutHabitacionesInput
  }

  export type ServicioEnHabitacionUncheckedCreateWithoutHabitacionInput = {
    servicioId: number
  }

  export type ServicioEnHabitacionCreateOrConnectWithoutHabitacionInput = {
    where: ServicioEnHabitacionWhereUniqueInput
    create: XOR<ServicioEnHabitacionCreateWithoutHabitacionInput, ServicioEnHabitacionUncheckedCreateWithoutHabitacionInput>
  }

  export type ServicioEnHabitacionCreateManyHabitacionInputEnvelope = {
    data: ServicioEnHabitacionCreateManyHabitacionInput | ServicioEnHabitacionCreateManyHabitacionInput[]
    skipDuplicates?: boolean
  }

  export type ReservaUpsertWithWhereUniqueWithoutHabitacionInput = {
    where: ReservaWhereUniqueInput
    update: XOR<ReservaUpdateWithoutHabitacionInput, ReservaUncheckedUpdateWithoutHabitacionInput>
    create: XOR<ReservaCreateWithoutHabitacionInput, ReservaUncheckedCreateWithoutHabitacionInput>
  }

  export type ReservaUpdateWithWhereUniqueWithoutHabitacionInput = {
    where: ReservaWhereUniqueInput
    data: XOR<ReservaUpdateWithoutHabitacionInput, ReservaUncheckedUpdateWithoutHabitacionInput>
  }

  export type ReservaUpdateManyWithWhereWithoutHabitacionInput = {
    where: ReservaScalarWhereInput
    data: XOR<ReservaUpdateManyMutationInput, ReservaUncheckedUpdateManyWithoutHabitacionInput>
  }

  export type ServicioEnHabitacionUpsertWithWhereUniqueWithoutHabitacionInput = {
    where: ServicioEnHabitacionWhereUniqueInput
    update: XOR<ServicioEnHabitacionUpdateWithoutHabitacionInput, ServicioEnHabitacionUncheckedUpdateWithoutHabitacionInput>
    create: XOR<ServicioEnHabitacionCreateWithoutHabitacionInput, ServicioEnHabitacionUncheckedCreateWithoutHabitacionInput>
  }

  export type ServicioEnHabitacionUpdateWithWhereUniqueWithoutHabitacionInput = {
    where: ServicioEnHabitacionWhereUniqueInput
    data: XOR<ServicioEnHabitacionUpdateWithoutHabitacionInput, ServicioEnHabitacionUncheckedUpdateWithoutHabitacionInput>
  }

  export type ServicioEnHabitacionUpdateManyWithWhereWithoutHabitacionInput = {
    where: ServicioEnHabitacionScalarWhereInput
    data: XOR<ServicioEnHabitacionUpdateManyMutationInput, ServicioEnHabitacionUncheckedUpdateManyWithoutHabitacionInput>
  }

  export type ServicioEnHabitacionScalarWhereInput = {
    AND?: ServicioEnHabitacionScalarWhereInput | ServicioEnHabitacionScalarWhereInput[]
    OR?: ServicioEnHabitacionScalarWhereInput[]
    NOT?: ServicioEnHabitacionScalarWhereInput | ServicioEnHabitacionScalarWhereInput[]
    habitacionId?: IntFilter<"ServicioEnHabitacion"> | number
    servicioId?: IntFilter<"ServicioEnHabitacion"> | number
  }

  export type UsuarioCreateWithoutReservasInput = {
    nombre: string
    apellido: string
    email: string
    password: string
    rol?: $Enums.RolUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioUncheckedCreateWithoutReservasInput = {
    id?: number
    nombre: string
    apellido: string
    email: string
    password: string
    rol?: $Enums.RolUsuario
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UsuarioCreateOrConnectWithoutReservasInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutReservasInput, UsuarioUncheckedCreateWithoutReservasInput>
  }

  export type HabitacionCreateWithoutReservasInput = {
    numero: number
    piso?: number | null
    tipo: string
    descripcion?: string | null
    capacidad?: number
    precioPorNoche: number
    estado: string
    servicios?: ServicioEnHabitacionCreateNestedManyWithoutHabitacionInput
  }

  export type HabitacionUncheckedCreateWithoutReservasInput = {
    id?: number
    numero: number
    piso?: number | null
    tipo: string
    descripcion?: string | null
    capacidad?: number
    precioPorNoche: number
    estado: string
    servicios?: ServicioEnHabitacionUncheckedCreateNestedManyWithoutHabitacionInput
  }

  export type HabitacionCreateOrConnectWithoutReservasInput = {
    where: HabitacionWhereUniqueInput
    create: XOR<HabitacionCreateWithoutReservasInput, HabitacionUncheckedCreateWithoutReservasInput>
  }

  export type PagoCreateWithoutReservaInput = {
    monto: number
    metodo?: string | null
    estado?: string | null
  }

  export type PagoUncheckedCreateWithoutReservaInput = {
    id?: number
    monto: number
    metodo?: string | null
    estado?: string | null
  }

  export type PagoCreateOrConnectWithoutReservaInput = {
    where: PagoWhereUniqueInput
    create: XOR<PagoCreateWithoutReservaInput, PagoUncheckedCreateWithoutReservaInput>
  }

  export type PagoCreateManyReservaInputEnvelope = {
    data: PagoCreateManyReservaInput | PagoCreateManyReservaInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithoutReservasInput = {
    update: XOR<UsuarioUpdateWithoutReservasInput, UsuarioUncheckedUpdateWithoutReservasInput>
    create: XOR<UsuarioCreateWithoutReservasInput, UsuarioUncheckedCreateWithoutReservasInput>
    where?: UsuarioWhereInput
  }

  export type UsuarioUpdateToOneWithWhereWithoutReservasInput = {
    where?: UsuarioWhereInput
    data: XOR<UsuarioUpdateWithoutReservasInput, UsuarioUncheckedUpdateWithoutReservasInput>
  }

  export type UsuarioUpdateWithoutReservasInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateWithoutReservasInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    apellido?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    rol?: EnumRolUsuarioFieldUpdateOperationsInput | $Enums.RolUsuario
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HabitacionUpsertWithoutReservasInput = {
    update: XOR<HabitacionUpdateWithoutReservasInput, HabitacionUncheckedUpdateWithoutReservasInput>
    create: XOR<HabitacionCreateWithoutReservasInput, HabitacionUncheckedCreateWithoutReservasInput>
    where?: HabitacionWhereInput
  }

  export type HabitacionUpdateToOneWithWhereWithoutReservasInput = {
    where?: HabitacionWhereInput
    data: XOR<HabitacionUpdateWithoutReservasInput, HabitacionUncheckedUpdateWithoutReservasInput>
  }

  export type HabitacionUpdateWithoutReservasInput = {
    numero?: IntFieldUpdateOperationsInput | number
    piso?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    capacidad?: IntFieldUpdateOperationsInput | number
    precioPorNoche?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    servicios?: ServicioEnHabitacionUpdateManyWithoutHabitacionNestedInput
  }

  export type HabitacionUncheckedUpdateWithoutReservasInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    piso?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    capacidad?: IntFieldUpdateOperationsInput | number
    precioPorNoche?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    servicios?: ServicioEnHabitacionUncheckedUpdateManyWithoutHabitacionNestedInput
  }

  export type PagoUpsertWithWhereUniqueWithoutReservaInput = {
    where: PagoWhereUniqueInput
    update: XOR<PagoUpdateWithoutReservaInput, PagoUncheckedUpdateWithoutReservaInput>
    create: XOR<PagoCreateWithoutReservaInput, PagoUncheckedCreateWithoutReservaInput>
  }

  export type PagoUpdateWithWhereUniqueWithoutReservaInput = {
    where: PagoWhereUniqueInput
    data: XOR<PagoUpdateWithoutReservaInput, PagoUncheckedUpdateWithoutReservaInput>
  }

  export type PagoUpdateManyWithWhereWithoutReservaInput = {
    where: PagoScalarWhereInput
    data: XOR<PagoUpdateManyMutationInput, PagoUncheckedUpdateManyWithoutReservaInput>
  }

  export type PagoScalarWhereInput = {
    AND?: PagoScalarWhereInput | PagoScalarWhereInput[]
    OR?: PagoScalarWhereInput[]
    NOT?: PagoScalarWhereInput | PagoScalarWhereInput[]
    id?: IntFilter<"Pago"> | number
    reservaId?: IntFilter<"Pago"> | number
    monto?: FloatFilter<"Pago"> | number
    metodo?: StringNullableFilter<"Pago"> | string | null
    estado?: StringNullableFilter<"Pago"> | string | null
  }

  export type ReservaCreateWithoutPagosInput = {
    fechaInicio: Date | string
    fechaFin: Date | string
    numeroHuespedes?: number
    estado: string
    createdAt?: Date | string
    usuario: UsuarioCreateNestedOneWithoutReservasInput
    habitacion: HabitacionCreateNestedOneWithoutReservasInput
  }

  export type ReservaUncheckedCreateWithoutPagosInput = {
    id?: number
    usuarioId: number
    habitacionId: number
    fechaInicio: Date | string
    fechaFin: Date | string
    numeroHuespedes?: number
    estado: string
    createdAt?: Date | string
  }

  export type ReservaCreateOrConnectWithoutPagosInput = {
    where: ReservaWhereUniqueInput
    create: XOR<ReservaCreateWithoutPagosInput, ReservaUncheckedCreateWithoutPagosInput>
  }

  export type ReservaUpsertWithoutPagosInput = {
    update: XOR<ReservaUpdateWithoutPagosInput, ReservaUncheckedUpdateWithoutPagosInput>
    create: XOR<ReservaCreateWithoutPagosInput, ReservaUncheckedCreateWithoutPagosInput>
    where?: ReservaWhereInput
  }

  export type ReservaUpdateToOneWithWhereWithoutPagosInput = {
    where?: ReservaWhereInput
    data: XOR<ReservaUpdateWithoutPagosInput, ReservaUncheckedUpdateWithoutPagosInput>
  }

  export type ReservaUpdateWithoutPagosInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroHuespedes?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutReservasNestedInput
    habitacion?: HabitacionUpdateOneRequiredWithoutReservasNestedInput
  }

  export type ReservaUncheckedUpdateWithoutPagosInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    habitacionId?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroHuespedes?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicioEnHabitacionCreateWithoutServicioInput = {
    habitacion: HabitacionCreateNestedOneWithoutServiciosInput
  }

  export type ServicioEnHabitacionUncheckedCreateWithoutServicioInput = {
    habitacionId: number
  }

  export type ServicioEnHabitacionCreateOrConnectWithoutServicioInput = {
    where: ServicioEnHabitacionWhereUniqueInput
    create: XOR<ServicioEnHabitacionCreateWithoutServicioInput, ServicioEnHabitacionUncheckedCreateWithoutServicioInput>
  }

  export type ServicioEnHabitacionCreateManyServicioInputEnvelope = {
    data: ServicioEnHabitacionCreateManyServicioInput | ServicioEnHabitacionCreateManyServicioInput[]
    skipDuplicates?: boolean
  }

  export type ServicioEnHabitacionUpsertWithWhereUniqueWithoutServicioInput = {
    where: ServicioEnHabitacionWhereUniqueInput
    update: XOR<ServicioEnHabitacionUpdateWithoutServicioInput, ServicioEnHabitacionUncheckedUpdateWithoutServicioInput>
    create: XOR<ServicioEnHabitacionCreateWithoutServicioInput, ServicioEnHabitacionUncheckedCreateWithoutServicioInput>
  }

  export type ServicioEnHabitacionUpdateWithWhereUniqueWithoutServicioInput = {
    where: ServicioEnHabitacionWhereUniqueInput
    data: XOR<ServicioEnHabitacionUpdateWithoutServicioInput, ServicioEnHabitacionUncheckedUpdateWithoutServicioInput>
  }

  export type ServicioEnHabitacionUpdateManyWithWhereWithoutServicioInput = {
    where: ServicioEnHabitacionScalarWhereInput
    data: XOR<ServicioEnHabitacionUpdateManyMutationInput, ServicioEnHabitacionUncheckedUpdateManyWithoutServicioInput>
  }

  export type HabitacionCreateWithoutServiciosInput = {
    numero: number
    piso?: number | null
    tipo: string
    descripcion?: string | null
    capacidad?: number
    precioPorNoche: number
    estado: string
    reservas?: ReservaCreateNestedManyWithoutHabitacionInput
  }

  export type HabitacionUncheckedCreateWithoutServiciosInput = {
    id?: number
    numero: number
    piso?: number | null
    tipo: string
    descripcion?: string | null
    capacidad?: number
    precioPorNoche: number
    estado: string
    reservas?: ReservaUncheckedCreateNestedManyWithoutHabitacionInput
  }

  export type HabitacionCreateOrConnectWithoutServiciosInput = {
    where: HabitacionWhereUniqueInput
    create: XOR<HabitacionCreateWithoutServiciosInput, HabitacionUncheckedCreateWithoutServiciosInput>
  }

  export type ServicioCreateWithoutHabitacionesInput = {
    nombre: string
    descripcion?: string | null
  }

  export type ServicioUncheckedCreateWithoutHabitacionesInput = {
    id?: number
    nombre: string
    descripcion?: string | null
  }

  export type ServicioCreateOrConnectWithoutHabitacionesInput = {
    where: ServicioWhereUniqueInput
    create: XOR<ServicioCreateWithoutHabitacionesInput, ServicioUncheckedCreateWithoutHabitacionesInput>
  }

  export type HabitacionUpsertWithoutServiciosInput = {
    update: XOR<HabitacionUpdateWithoutServiciosInput, HabitacionUncheckedUpdateWithoutServiciosInput>
    create: XOR<HabitacionCreateWithoutServiciosInput, HabitacionUncheckedCreateWithoutServiciosInput>
    where?: HabitacionWhereInput
  }

  export type HabitacionUpdateToOneWithWhereWithoutServiciosInput = {
    where?: HabitacionWhereInput
    data: XOR<HabitacionUpdateWithoutServiciosInput, HabitacionUncheckedUpdateWithoutServiciosInput>
  }

  export type HabitacionUpdateWithoutServiciosInput = {
    numero?: IntFieldUpdateOperationsInput | number
    piso?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    capacidad?: IntFieldUpdateOperationsInput | number
    precioPorNoche?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    reservas?: ReservaUpdateManyWithoutHabitacionNestedInput
  }

  export type HabitacionUncheckedUpdateWithoutServiciosInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: IntFieldUpdateOperationsInput | number
    piso?: NullableIntFieldUpdateOperationsInput | number | null
    tipo?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
    capacidad?: IntFieldUpdateOperationsInput | number
    precioPorNoche?: FloatFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    reservas?: ReservaUncheckedUpdateManyWithoutHabitacionNestedInput
  }

  export type ServicioUpsertWithoutHabitacionesInput = {
    update: XOR<ServicioUpdateWithoutHabitacionesInput, ServicioUncheckedUpdateWithoutHabitacionesInput>
    create: XOR<ServicioCreateWithoutHabitacionesInput, ServicioUncheckedCreateWithoutHabitacionesInput>
    where?: ServicioWhereInput
  }

  export type ServicioUpdateToOneWithWhereWithoutHabitacionesInput = {
    where?: ServicioWhereInput
    data: XOR<ServicioUpdateWithoutHabitacionesInput, ServicioUncheckedUpdateWithoutHabitacionesInput>
  }

  export type ServicioUpdateWithoutHabitacionesInput = {
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServicioUncheckedUpdateWithoutHabitacionesInput = {
    id?: IntFieldUpdateOperationsInput | number
    nombre?: StringFieldUpdateOperationsInput | string
    descripcion?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReservaCreateManyUsuarioInput = {
    id?: number
    habitacionId: number
    fechaInicio: Date | string
    fechaFin: Date | string
    numeroHuespedes?: number
    estado: string
    createdAt?: Date | string
  }

  export type ReservaUpdateWithoutUsuarioInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroHuespedes?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    habitacion?: HabitacionUpdateOneRequiredWithoutReservasNestedInput
    pagos?: PagoUpdateManyWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    habitacionId?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroHuespedes?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pagos?: PagoUncheckedUpdateManyWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateManyWithoutUsuarioInput = {
    id?: IntFieldUpdateOperationsInput | number
    habitacionId?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroHuespedes?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReservaCreateManyHabitacionInput = {
    id?: number
    usuarioId: number
    fechaInicio: Date | string
    fechaFin: Date | string
    numeroHuespedes?: number
    estado: string
    createdAt?: Date | string
  }

  export type ServicioEnHabitacionCreateManyHabitacionInput = {
    servicioId: number
  }

  export type ReservaUpdateWithoutHabitacionInput = {
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroHuespedes?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    usuario?: UsuarioUpdateOneRequiredWithoutReservasNestedInput
    pagos?: PagoUpdateManyWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateWithoutHabitacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroHuespedes?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    pagos?: PagoUncheckedUpdateManyWithoutReservaNestedInput
  }

  export type ReservaUncheckedUpdateManyWithoutHabitacionInput = {
    id?: IntFieldUpdateOperationsInput | number
    usuarioId?: IntFieldUpdateOperationsInput | number
    fechaInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    fechaFin?: DateTimeFieldUpdateOperationsInput | Date | string
    numeroHuespedes?: IntFieldUpdateOperationsInput | number
    estado?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServicioEnHabitacionUpdateWithoutHabitacionInput = {
    servicio?: ServicioUpdateOneRequiredWithoutHabitacionesNestedInput
  }

  export type ServicioEnHabitacionUncheckedUpdateWithoutHabitacionInput = {
    servicioId?: IntFieldUpdateOperationsInput | number
  }

  export type ServicioEnHabitacionUncheckedUpdateManyWithoutHabitacionInput = {
    servicioId?: IntFieldUpdateOperationsInput | number
  }

  export type PagoCreateManyReservaInput = {
    id?: number
    monto: number
    metodo?: string | null
    estado?: string | null
  }

  export type PagoUpdateWithoutReservaInput = {
    monto?: FloatFieldUpdateOperationsInput | number
    metodo?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PagoUncheckedUpdateWithoutReservaInput = {
    id?: IntFieldUpdateOperationsInput | number
    monto?: FloatFieldUpdateOperationsInput | number
    metodo?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PagoUncheckedUpdateManyWithoutReservaInput = {
    id?: IntFieldUpdateOperationsInput | number
    monto?: FloatFieldUpdateOperationsInput | number
    metodo?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServicioEnHabitacionCreateManyServicioInput = {
    habitacionId: number
  }

  export type ServicioEnHabitacionUpdateWithoutServicioInput = {
    habitacion?: HabitacionUpdateOneRequiredWithoutServiciosNestedInput
  }

  export type ServicioEnHabitacionUncheckedUpdateWithoutServicioInput = {
    habitacionId?: IntFieldUpdateOperationsInput | number
  }

  export type ServicioEnHabitacionUncheckedUpdateManyWithoutServicioInput = {
    habitacionId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}