/* eslint-disable */
/* prettier-ignore */

/** An IntrospectionQuery representation of your schema.
 *
 * @remarks
 * This is an introspection of your schema saved as a file by GraphQLSP.
 * You may import it to create a `graphql()` tag function with `gql.tada`
 * by importing it and passing it to `initGraphQLTada<>()`.
 *
 * @example
 * ```
 * import { initGraphQLTada } from 'gql.tada';
 * import type { introspection } from './introspection';
 *
 * export const graphql = initGraphQLTada<{
 *   introspection: typeof introspection;
 *   scalars: {
 *     DateTime: string;
 *     Json: any;
 *   };
 * }>();
 * ```
 */
const introspection = {
  "__schema": {
    "queryType": {
      "name": "query_root"
    },
    "mutationType": {
      "name": "mutation_root"
    },
    "subscriptionType": {
      "name": "subscription_root"
    },
    "types": [
      {
        "kind": "SCALAR",
        "name": "Boolean"
      },
      {
        "kind": "SCALAR",
        "name": "Float"
      },
      {
        "kind": "SCALAR",
        "name": "Int"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "Int_comparison_exp",
        "inputFields": [
          {
            "name": "_eq",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "_gt",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "_gte",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              }
            }
          },
          {
            "name": "_is_null",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "_lt",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "_lte",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "_neq",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "_nin",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "SCALAR",
        "name": "String"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "String_comparison_exp",
        "inputFields": [
          {
            "name": "_eq",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "_gt",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "_gte",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "_ilike",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String"
                }
              }
            }
          },
          {
            "name": "_iregex",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "_is_null",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "_like",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "_lt",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "_lte",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "_neq",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "_nilike",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "_nin",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "String"
                }
              }
            }
          },
          {
            "name": "_niregex",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "_nlike",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "_nregex",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "_nsimilar",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "_regex",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "_similar",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "SCALAR",
        "name": "bigint"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "bigint_comparison_exp",
        "inputFields": [
          {
            "name": "_eq",
            "type": {
              "kind": "SCALAR",
              "name": "bigint"
            }
          },
          {
            "name": "_gt",
            "type": {
              "kind": "SCALAR",
              "name": "bigint"
            }
          },
          {
            "name": "_gte",
            "type": {
              "kind": "SCALAR",
              "name": "bigint"
            }
          },
          {
            "name": "_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "bigint"
                }
              }
            }
          },
          {
            "name": "_is_null",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "_lt",
            "type": {
              "kind": "SCALAR",
              "name": "bigint"
            }
          },
          {
            "name": "_lte",
            "type": {
              "kind": "SCALAR",
              "name": "bigint"
            }
          },
          {
            "name": "_neq",
            "type": {
              "kind": "SCALAR",
              "name": "bigint"
            }
          },
          {
            "name": "_nin",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "bigint"
                }
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "children",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "timestamptz"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "date_of_birth",
            "type": {
              "kind": "SCALAR",
              "name": "date"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "family_account",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "family_accounts"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "gender",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "photo_url",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "tale_children",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "tale_children"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tale_children_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tale_children_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_children_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tale_children_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "tale_children_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tale_children_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tale_children_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_children_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "children_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "children_aggregate_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "children"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "children_aggregate_bool_exp",
        "inputFields": [
          {
            "name": "count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "children_aggregate_bool_exp_count"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "children_aggregate_bool_exp_count",
        "inputFields": [
          {
            "name": "arguments",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "children_select_column"
                }
              }
            }
          },
          {
            "name": "distinct",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "children_bool_exp"
            }
          },
          {
            "name": "predicate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "Int_comparison_exp"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "children_aggregate_fields",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "children_select_column"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "children_max_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "children_min_fields"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "children_aggregate_order_by",
        "inputFields": [
          {
            "name": "count",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "children_max_order_by"
            }
          },
          {
            "name": "min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "children_min_order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "children_arr_rel_insert_input",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "children_insert_input"
                  }
                }
              }
            }
          },
          {
            "name": "on_conflict",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "children_on_conflict"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "children_bool_exp",
        "inputFields": [
          {
            "name": "_and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "children_bool_exp"
                }
              }
            }
          },
          {
            "name": "_not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "children_bool_exp"
            }
          },
          {
            "name": "_or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "children_bool_exp"
                }
              }
            }
          },
          {
            "name": "created_at",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "timestamptz_comparison_exp"
            }
          },
          {
            "name": "date_of_birth",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "date_comparison_exp"
            }
          },
          {
            "name": "family_account",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "family_accounts_bool_exp"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "uuid_comparison_exp"
            }
          },
          {
            "name": "gender",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "String_comparison_exp"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "uuid_comparison_exp"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "String_comparison_exp"
            }
          },
          {
            "name": "photo_url",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "String_comparison_exp"
            }
          },
          {
            "name": "tale_children",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_children_bool_exp"
            }
          },
          {
            "name": "tale_children_aggregate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_children_aggregate_bool_exp"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "children_constraint",
        "enumValues": [
          {
            "name": "children_pkey",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "children_insert_input",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "date_of_birth",
            "type": {
              "kind": "SCALAR",
              "name": "date"
            }
          },
          {
            "name": "family_account",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "family_accounts_obj_rel_insert_input"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "gender",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "photo_url",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "tale_children",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_children_arr_rel_insert_input"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "children_max_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "date_of_birth",
            "type": {
              "kind": "SCALAR",
              "name": "date"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "gender",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "photo_url",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "children_max_order_by",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "date_of_birth",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "gender",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "photo_url",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "children_min_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "date_of_birth",
            "type": {
              "kind": "SCALAR",
              "name": "date"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "gender",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "photo_url",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "children_min_order_by",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "date_of_birth",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "gender",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "photo_url",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "children_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "children"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "children_obj_rel_insert_input",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "children_insert_input"
              }
            }
          },
          {
            "name": "on_conflict",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "children_on_conflict"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "children_on_conflict",
        "inputFields": [
          {
            "name": "constraint",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "children_constraint"
              }
            }
          },
          {
            "name": "update_columns",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "children_update_column"
                  }
                }
              }
            },
            "defaultValue": "[]"
          },
          {
            "name": "where",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "children_bool_exp"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "children_order_by",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "date_of_birth",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "family_account",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "family_accounts_order_by"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "gender",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "photo_url",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "tale_children_aggregate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_children_aggregate_order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "children_pk_columns_input",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "children_select_column",
        "enumValues": [
          {
            "name": "created_at",
            "isDeprecated": false
          },
          {
            "name": "date_of_birth",
            "isDeprecated": false
          },
          {
            "name": "family_account_id",
            "isDeprecated": false
          },
          {
            "name": "gender",
            "isDeprecated": false
          },
          {
            "name": "id",
            "isDeprecated": false
          },
          {
            "name": "name",
            "isDeprecated": false
          },
          {
            "name": "photo_url",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "children_set_input",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "date_of_birth",
            "type": {
              "kind": "SCALAR",
              "name": "date"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "gender",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "photo_url",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "children_stream_cursor_input",
        "inputFields": [
          {
            "name": "initial_value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "children_stream_cursor_value_input"
              }
            }
          },
          {
            "name": "ordering",
            "type": {
              "kind": "ENUM",
              "name": "cursor_ordering"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "children_stream_cursor_value_input",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "date_of_birth",
            "type": {
              "kind": "SCALAR",
              "name": "date"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "gender",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "photo_url",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "children_update_column",
        "enumValues": [
          {
            "name": "created_at",
            "isDeprecated": false
          },
          {
            "name": "date_of_birth",
            "isDeprecated": false
          },
          {
            "name": "family_account_id",
            "isDeprecated": false
          },
          {
            "name": "gender",
            "isDeprecated": false
          },
          {
            "name": "id",
            "isDeprecated": false
          },
          {
            "name": "name",
            "isDeprecated": false
          },
          {
            "name": "photo_url",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "children_updates",
        "inputFields": [
          {
            "name": "_set",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "children_set_input"
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "children_bool_exp"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "comments",
        "fields": [
          {
            "name": "content",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "created_at",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "timestamptz"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "tale",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "tales"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "timestamptz"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "users"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "user_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "comments_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "comments_aggregate_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "comments"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "comments_aggregate_bool_exp",
        "inputFields": [
          {
            "name": "count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "comments_aggregate_bool_exp_count"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "comments_aggregate_bool_exp_count",
        "inputFields": [
          {
            "name": "arguments",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "comments_select_column"
                }
              }
            }
          },
          {
            "name": "distinct",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "comments_bool_exp"
            }
          },
          {
            "name": "predicate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "Int_comparison_exp"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "comments_aggregate_fields",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "comments_select_column"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "comments_max_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "comments_min_fields"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "comments_aggregate_order_by",
        "inputFields": [
          {
            "name": "count",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "comments_max_order_by"
            }
          },
          {
            "name": "min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "comments_min_order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "comments_arr_rel_insert_input",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "comments_insert_input"
                  }
                }
              }
            }
          },
          {
            "name": "on_conflict",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "comments_on_conflict"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "comments_bool_exp",
        "inputFields": [
          {
            "name": "_and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "comments_bool_exp"
                }
              }
            }
          },
          {
            "name": "_not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "comments_bool_exp"
            }
          },
          {
            "name": "_or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "comments_bool_exp"
                }
              }
            }
          },
          {
            "name": "content",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "String_comparison_exp"
            }
          },
          {
            "name": "created_at",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "timestamptz_comparison_exp"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "uuid_comparison_exp"
            }
          },
          {
            "name": "tale",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_bool_exp"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "uuid_comparison_exp"
            }
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "timestamptz_comparison_exp"
            }
          },
          {
            "name": "user",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "users_bool_exp"
            }
          },
          {
            "name": "user_id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "uuid_comparison_exp"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "comments_constraint",
        "enumValues": [
          {
            "name": "comments_pkey",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "comments_insert_input",
        "inputFields": [
          {
            "name": "content",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "tale",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_obj_rel_insert_input"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "user",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "users_obj_rel_insert_input"
            }
          },
          {
            "name": "user_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "comments_max_fields",
        "fields": [
          {
            "name": "content",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "user_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "comments_max_order_by",
        "inputFields": [
          {
            "name": "content",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "created_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "user_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "comments_min_fields",
        "fields": [
          {
            "name": "content",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "user_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "comments_min_order_by",
        "inputFields": [
          {
            "name": "content",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "created_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "user_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "comments_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "comments"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "comments_on_conflict",
        "inputFields": [
          {
            "name": "constraint",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "comments_constraint"
              }
            }
          },
          {
            "name": "update_columns",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "comments_update_column"
                  }
                }
              }
            },
            "defaultValue": "[]"
          },
          {
            "name": "where",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "comments_bool_exp"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "comments_order_by",
        "inputFields": [
          {
            "name": "content",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "created_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "tale",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_order_by"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "user",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "users_order_by"
            }
          },
          {
            "name": "user_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "comments_pk_columns_input",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "comments_select_column",
        "enumValues": [
          {
            "name": "content",
            "isDeprecated": false
          },
          {
            "name": "created_at",
            "isDeprecated": false
          },
          {
            "name": "id",
            "isDeprecated": false
          },
          {
            "name": "tale_id",
            "isDeprecated": false
          },
          {
            "name": "updated_at",
            "isDeprecated": false
          },
          {
            "name": "user_id",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "comments_set_input",
        "inputFields": [
          {
            "name": "content",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "user_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "comments_stream_cursor_input",
        "inputFields": [
          {
            "name": "initial_value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "comments_stream_cursor_value_input"
              }
            }
          },
          {
            "name": "ordering",
            "type": {
              "kind": "ENUM",
              "name": "cursor_ordering"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "comments_stream_cursor_value_input",
        "inputFields": [
          {
            "name": "content",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "user_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "comments_update_column",
        "enumValues": [
          {
            "name": "content",
            "isDeprecated": false
          },
          {
            "name": "created_at",
            "isDeprecated": false
          },
          {
            "name": "id",
            "isDeprecated": false
          },
          {
            "name": "tale_id",
            "isDeprecated": false
          },
          {
            "name": "updated_at",
            "isDeprecated": false
          },
          {
            "name": "user_id",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "comments_updates",
        "inputFields": [
          {
            "name": "_set",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "comments_set_input"
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "comments_bool_exp"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "cursor_ordering",
        "enumValues": [
          {
            "name": "ASC",
            "isDeprecated": false
          },
          {
            "name": "DESC",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "SCALAR",
        "name": "date"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "date_comparison_exp",
        "inputFields": [
          {
            "name": "_eq",
            "type": {
              "kind": "SCALAR",
              "name": "date"
            }
          },
          {
            "name": "_gt",
            "type": {
              "kind": "SCALAR",
              "name": "date"
            }
          },
          {
            "name": "_gte",
            "type": {
              "kind": "SCALAR",
              "name": "date"
            }
          },
          {
            "name": "_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "date"
                }
              }
            }
          },
          {
            "name": "_is_null",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "_lt",
            "type": {
              "kind": "SCALAR",
              "name": "date"
            }
          },
          {
            "name": "_lte",
            "type": {
              "kind": "SCALAR",
              "name": "date"
            }
          },
          {
            "name": "_neq",
            "type": {
              "kind": "SCALAR",
              "name": "date"
            }
          },
          {
            "name": "_nin",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "date"
                }
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "family_accounts",
        "fields": [
          {
            "name": "children",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "children"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "children_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "children_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "children_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "children_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "children_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "children_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "children_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "children_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "created_at",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "timestamptz"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "guest_invites",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "guest_invites"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "guest_invites_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "guest_invites_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "guest_invites_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "guest_invites_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "guest_invites_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "guest_invites_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "guest_invites_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "guest_invites_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "subscriptions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "subscriptions"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "subscriptions_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "subscriptions_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "subscriptions_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "subscriptions_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "subscriptions_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "subscriptions_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "subscriptions_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "subscriptions_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tales",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "tales"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tales_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tales_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tales_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tales_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "tales_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tales_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tales_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tales_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "users",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "users"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "users_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "users_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "users_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "users_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "users_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "users_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "users_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "users_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "family_accounts_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "family_accounts_aggregate_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "family_accounts"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "family_accounts_aggregate_fields",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "family_accounts_select_column"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "family_accounts_max_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "family_accounts_min_fields"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "family_accounts_bool_exp",
        "inputFields": [
          {
            "name": "_and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "family_accounts_bool_exp"
                }
              }
            }
          },
          {
            "name": "_not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "family_accounts_bool_exp"
            }
          },
          {
            "name": "_or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "family_accounts_bool_exp"
                }
              }
            }
          },
          {
            "name": "children",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "children_bool_exp"
            }
          },
          {
            "name": "children_aggregate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "children_aggregate_bool_exp"
            }
          },
          {
            "name": "created_at",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "timestamptz_comparison_exp"
            }
          },
          {
            "name": "guest_invites",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "guest_invites_bool_exp"
            }
          },
          {
            "name": "guest_invites_aggregate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "guest_invites_aggregate_bool_exp"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "uuid_comparison_exp"
            }
          },
          {
            "name": "subscriptions",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "subscriptions_bool_exp"
            }
          },
          {
            "name": "subscriptions_aggregate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "subscriptions_aggregate_bool_exp"
            }
          },
          {
            "name": "tales",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_bool_exp"
            }
          },
          {
            "name": "tales_aggregate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_aggregate_bool_exp"
            }
          },
          {
            "name": "users",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "users_bool_exp"
            }
          },
          {
            "name": "users_aggregate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "users_aggregate_bool_exp"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "family_accounts_constraint",
        "enumValues": [
          {
            "name": "family_accounts_pkey",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "family_accounts_insert_input",
        "inputFields": [
          {
            "name": "children",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "children_arr_rel_insert_input"
            }
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "guest_invites",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "guest_invites_arr_rel_insert_input"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "subscriptions",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "subscriptions_arr_rel_insert_input"
            }
          },
          {
            "name": "tales",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_arr_rel_insert_input"
            }
          },
          {
            "name": "users",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "users_arr_rel_insert_input"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "family_accounts_max_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "family_accounts_min_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "family_accounts_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "family_accounts"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "family_accounts_obj_rel_insert_input",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "family_accounts_insert_input"
              }
            }
          },
          {
            "name": "on_conflict",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "family_accounts_on_conflict"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "family_accounts_on_conflict",
        "inputFields": [
          {
            "name": "constraint",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "family_accounts_constraint"
              }
            }
          },
          {
            "name": "update_columns",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "family_accounts_update_column"
                  }
                }
              }
            },
            "defaultValue": "[]"
          },
          {
            "name": "where",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "family_accounts_bool_exp"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "family_accounts_order_by",
        "inputFields": [
          {
            "name": "children_aggregate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "children_aggregate_order_by"
            }
          },
          {
            "name": "created_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "guest_invites_aggregate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "guest_invites_aggregate_order_by"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "subscriptions_aggregate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "subscriptions_aggregate_order_by"
            }
          },
          {
            "name": "tales_aggregate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_aggregate_order_by"
            }
          },
          {
            "name": "users_aggregate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "users_aggregate_order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "family_accounts_pk_columns_input",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "family_accounts_select_column",
        "enumValues": [
          {
            "name": "created_at",
            "isDeprecated": false
          },
          {
            "name": "id",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "family_accounts_set_input",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "family_accounts_stream_cursor_input",
        "inputFields": [
          {
            "name": "initial_value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "family_accounts_stream_cursor_value_input"
              }
            }
          },
          {
            "name": "ordering",
            "type": {
              "kind": "ENUM",
              "name": "cursor_ordering"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "family_accounts_stream_cursor_value_input",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "family_accounts_update_column",
        "enumValues": [
          {
            "name": "created_at",
            "isDeprecated": false
          },
          {
            "name": "id",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "family_accounts_updates",
        "inputFields": [
          {
            "name": "_set",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "family_accounts_set_input"
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "family_accounts_bool_exp"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "family_tale_counts",
        "fields": [
          {
            "name": "family_account_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "tale_count",
            "type": {
              "kind": "SCALAR",
              "name": "bigint"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "family_tale_counts_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "family_tale_counts_aggregate_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "family_tale_counts"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "family_tale_counts_aggregate_fields",
        "fields": [
          {
            "name": "avg",
            "type": {
              "kind": "OBJECT",
              "name": "family_tale_counts_avg_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "family_tale_counts_select_column"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "family_tale_counts_max_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "family_tale_counts_min_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "stddev",
            "type": {
              "kind": "OBJECT",
              "name": "family_tale_counts_stddev_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "stddev_pop",
            "type": {
              "kind": "OBJECT",
              "name": "family_tale_counts_stddev_pop_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "stddev_samp",
            "type": {
              "kind": "OBJECT",
              "name": "family_tale_counts_stddev_samp_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "sum",
            "type": {
              "kind": "OBJECT",
              "name": "family_tale_counts_sum_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "var_pop",
            "type": {
              "kind": "OBJECT",
              "name": "family_tale_counts_var_pop_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "var_samp",
            "type": {
              "kind": "OBJECT",
              "name": "family_tale_counts_var_samp_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "variance",
            "type": {
              "kind": "OBJECT",
              "name": "family_tale_counts_variance_fields"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "family_tale_counts_avg_fields",
        "fields": [
          {
            "name": "tale_count",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "family_tale_counts_bool_exp",
        "inputFields": [
          {
            "name": "_and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "family_tale_counts_bool_exp"
                }
              }
            }
          },
          {
            "name": "_not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "family_tale_counts_bool_exp"
            }
          },
          {
            "name": "_or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "family_tale_counts_bool_exp"
                }
              }
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "uuid_comparison_exp"
            }
          },
          {
            "name": "tale_count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "bigint_comparison_exp"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "family_tale_counts_max_fields",
        "fields": [
          {
            "name": "family_account_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "tale_count",
            "type": {
              "kind": "SCALAR",
              "name": "bigint"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "family_tale_counts_min_fields",
        "fields": [
          {
            "name": "family_account_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "tale_count",
            "type": {
              "kind": "SCALAR",
              "name": "bigint"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "family_tale_counts_order_by",
        "inputFields": [
          {
            "name": "family_account_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "tale_count",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "family_tale_counts_select_column",
        "enumValues": [
          {
            "name": "family_account_id",
            "isDeprecated": false
          },
          {
            "name": "tale_count",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "family_tale_counts_stddev_fields",
        "fields": [
          {
            "name": "tale_count",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "family_tale_counts_stddev_pop_fields",
        "fields": [
          {
            "name": "tale_count",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "family_tale_counts_stddev_samp_fields",
        "fields": [
          {
            "name": "tale_count",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "family_tale_counts_stream_cursor_input",
        "inputFields": [
          {
            "name": "initial_value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "family_tale_counts_stream_cursor_value_input"
              }
            }
          },
          {
            "name": "ordering",
            "type": {
              "kind": "ENUM",
              "name": "cursor_ordering"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "family_tale_counts_stream_cursor_value_input",
        "inputFields": [
          {
            "name": "family_account_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "tale_count",
            "type": {
              "kind": "SCALAR",
              "name": "bigint"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "family_tale_counts_sum_fields",
        "fields": [
          {
            "name": "tale_count",
            "type": {
              "kind": "SCALAR",
              "name": "bigint"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "family_tale_counts_var_pop_fields",
        "fields": [
          {
            "name": "tale_count",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "family_tale_counts_var_samp_fields",
        "fields": [
          {
            "name": "tale_count",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "family_tale_counts_variance_fields",
        "fields": [
          {
            "name": "tale_count",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "guest_invites",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "timestamptz"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "family_account",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "family_accounts"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "invited_by",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "status",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "token",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "users"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "guest_invites_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "guest_invites_aggregate_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "guest_invites"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "guest_invites_aggregate_bool_exp",
        "inputFields": [
          {
            "name": "count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "guest_invites_aggregate_bool_exp_count"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "guest_invites_aggregate_bool_exp_count",
        "inputFields": [
          {
            "name": "arguments",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "guest_invites_select_column"
                }
              }
            }
          },
          {
            "name": "distinct",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "guest_invites_bool_exp"
            }
          },
          {
            "name": "predicate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "Int_comparison_exp"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "guest_invites_aggregate_fields",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "guest_invites_select_column"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "guest_invites_max_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "guest_invites_min_fields"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "guest_invites_aggregate_order_by",
        "inputFields": [
          {
            "name": "count",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "guest_invites_max_order_by"
            }
          },
          {
            "name": "min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "guest_invites_min_order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "guest_invites_arr_rel_insert_input",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "guest_invites_insert_input"
                  }
                }
              }
            }
          },
          {
            "name": "on_conflict",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "guest_invites_on_conflict"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "guest_invites_bool_exp",
        "inputFields": [
          {
            "name": "_and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "guest_invites_bool_exp"
                }
              }
            }
          },
          {
            "name": "_not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "guest_invites_bool_exp"
            }
          },
          {
            "name": "_or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "guest_invites_bool_exp"
                }
              }
            }
          },
          {
            "name": "created_at",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "timestamptz_comparison_exp"
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "String_comparison_exp"
            }
          },
          {
            "name": "family_account",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "family_accounts_bool_exp"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "uuid_comparison_exp"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "uuid_comparison_exp"
            }
          },
          {
            "name": "invited_by",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "uuid_comparison_exp"
            }
          },
          {
            "name": "status",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "String_comparison_exp"
            }
          },
          {
            "name": "token",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "String_comparison_exp"
            }
          },
          {
            "name": "user",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "users_bool_exp"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "guest_invites_constraint",
        "enumValues": [
          {
            "name": "guest_invites_pkey",
            "isDeprecated": false
          },
          {
            "name": "guest_invites_token_key",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "guest_invites_insert_input",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "family_account",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "family_accounts_obj_rel_insert_input"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "invited_by",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "status",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "token",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "user",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "users_obj_rel_insert_input"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "guest_invites_max_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "invited_by",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "status",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "token",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "guest_invites_max_order_by",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "invited_by",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "status",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "token",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "guest_invites_min_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "invited_by",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "status",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "token",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "guest_invites_min_order_by",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "invited_by",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "status",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "token",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "guest_invites_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "guest_invites"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "guest_invites_on_conflict",
        "inputFields": [
          {
            "name": "constraint",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "guest_invites_constraint"
              }
            }
          },
          {
            "name": "update_columns",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "guest_invites_update_column"
                  }
                }
              }
            },
            "defaultValue": "[]"
          },
          {
            "name": "where",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "guest_invites_bool_exp"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "guest_invites_order_by",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "family_account",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "family_accounts_order_by"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "invited_by",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "status",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "token",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "user",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "users_order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "guest_invites_pk_columns_input",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "guest_invites_select_column",
        "enumValues": [
          {
            "name": "created_at",
            "isDeprecated": false
          },
          {
            "name": "email",
            "isDeprecated": false
          },
          {
            "name": "family_account_id",
            "isDeprecated": false
          },
          {
            "name": "id",
            "isDeprecated": false
          },
          {
            "name": "invited_by",
            "isDeprecated": false
          },
          {
            "name": "status",
            "isDeprecated": false
          },
          {
            "name": "token",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "guest_invites_set_input",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "invited_by",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "status",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "token",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "guest_invites_stream_cursor_input",
        "inputFields": [
          {
            "name": "initial_value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "guest_invites_stream_cursor_value_input"
              }
            }
          },
          {
            "name": "ordering",
            "type": {
              "kind": "ENUM",
              "name": "cursor_ordering"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "guest_invites_stream_cursor_value_input",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "email",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "invited_by",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "status",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "token",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "guest_invites_update_column",
        "enumValues": [
          {
            "name": "created_at",
            "isDeprecated": false
          },
          {
            "name": "email",
            "isDeprecated": false
          },
          {
            "name": "family_account_id",
            "isDeprecated": false
          },
          {
            "name": "id",
            "isDeprecated": false
          },
          {
            "name": "invited_by",
            "isDeprecated": false
          },
          {
            "name": "status",
            "isDeprecated": false
          },
          {
            "name": "token",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "guest_invites_updates",
        "inputFields": [
          {
            "name": "_set",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "guest_invites_set_input"
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "guest_invites_bool_exp"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "mutation_root",
        "fields": [
          {
            "name": "delete_children",
            "type": {
              "kind": "OBJECT",
              "name": "children_mutation_response"
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "children_bool_exp"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "delete_children_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "children"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "delete_comments",
            "type": {
              "kind": "OBJECT",
              "name": "comments_mutation_response"
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "comments_bool_exp"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "delete_comments_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "comments"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "delete_family_accounts",
            "type": {
              "kind": "OBJECT",
              "name": "family_accounts_mutation_response"
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "family_accounts_bool_exp"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "delete_family_accounts_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "family_accounts"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "delete_guest_invites",
            "type": {
              "kind": "OBJECT",
              "name": "guest_invites_mutation_response"
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "guest_invites_bool_exp"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "delete_guest_invites_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "guest_invites"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "delete_reactions",
            "type": {
              "kind": "OBJECT",
              "name": "reactions_mutation_response"
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "reactions_bool_exp"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "delete_reactions_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "reactions"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "delete_subscriptions",
            "type": {
              "kind": "OBJECT",
              "name": "subscriptions_mutation_response"
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "subscriptions_bool_exp"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "delete_subscriptions_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "subscriptions"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "delete_tale_children",
            "type": {
              "kind": "OBJECT",
              "name": "tale_children_mutation_response"
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "tale_children_bool_exp"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "delete_tale_children_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "tale_children"
            },
            "args": [
              {
                "name": "child_id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              },
              {
                "name": "tale_id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "delete_tale_media",
            "type": {
              "kind": "OBJECT",
              "name": "tale_media_mutation_response"
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "tale_media_bool_exp"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "delete_tale_media_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "tale_media"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "delete_tale_tags",
            "type": {
              "kind": "OBJECT",
              "name": "tale_tags_mutation_response"
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "tale_tags_bool_exp"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "delete_tale_tags_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "tale_tags"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "delete_tales",
            "type": {
              "kind": "OBJECT",
              "name": "tales_mutation_response"
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "tales_bool_exp"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "delete_tales_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "tales"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "delete_users",
            "type": {
              "kind": "OBJECT",
              "name": "users_mutation_response"
            },
            "args": [
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_bool_exp"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "delete_users_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "users"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "insert_children",
            "type": {
              "kind": "OBJECT",
              "name": "children_mutation_response"
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "children_insert_input"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "children_on_conflict"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "insert_children_one",
            "type": {
              "kind": "OBJECT",
              "name": "children"
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "children_insert_input"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "children_on_conflict"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "insert_comments",
            "type": {
              "kind": "OBJECT",
              "name": "comments_mutation_response"
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "comments_insert_input"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "comments_on_conflict"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "insert_comments_one",
            "type": {
              "kind": "OBJECT",
              "name": "comments"
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "comments_insert_input"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "comments_on_conflict"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "insert_family_accounts",
            "type": {
              "kind": "OBJECT",
              "name": "family_accounts_mutation_response"
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "family_accounts_insert_input"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "family_accounts_on_conflict"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "insert_family_accounts_one",
            "type": {
              "kind": "OBJECT",
              "name": "family_accounts"
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "family_accounts_insert_input"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "family_accounts_on_conflict"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "insert_guest_invites",
            "type": {
              "kind": "OBJECT",
              "name": "guest_invites_mutation_response"
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "guest_invites_insert_input"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "guest_invites_on_conflict"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "insert_guest_invites_one",
            "type": {
              "kind": "OBJECT",
              "name": "guest_invites"
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "guest_invites_insert_input"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "guest_invites_on_conflict"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "insert_reactions",
            "type": {
              "kind": "OBJECT",
              "name": "reactions_mutation_response"
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "reactions_insert_input"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "reactions_on_conflict"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "insert_reactions_one",
            "type": {
              "kind": "OBJECT",
              "name": "reactions"
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "reactions_insert_input"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "reactions_on_conflict"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "insert_subscriptions",
            "type": {
              "kind": "OBJECT",
              "name": "subscriptions_mutation_response"
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "subscriptions_insert_input"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "subscriptions_on_conflict"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "insert_subscriptions_one",
            "type": {
              "kind": "OBJECT",
              "name": "subscriptions"
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "subscriptions_insert_input"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "subscriptions_on_conflict"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "insert_tale_children",
            "type": {
              "kind": "OBJECT",
              "name": "tale_children_mutation_response"
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "tale_children_insert_input"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_children_on_conflict"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "insert_tale_children_one",
            "type": {
              "kind": "OBJECT",
              "name": "tale_children"
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "tale_children_insert_input"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_children_on_conflict"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "insert_tale_media",
            "type": {
              "kind": "OBJECT",
              "name": "tale_media_mutation_response"
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "tale_media_insert_input"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_media_on_conflict"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "insert_tale_media_one",
            "type": {
              "kind": "OBJECT",
              "name": "tale_media"
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "tale_media_insert_input"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_media_on_conflict"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "insert_tale_tags",
            "type": {
              "kind": "OBJECT",
              "name": "tale_tags_mutation_response"
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "tale_tags_insert_input"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_tags_on_conflict"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "insert_tale_tags_one",
            "type": {
              "kind": "OBJECT",
              "name": "tale_tags"
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "tale_tags_insert_input"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_tags_on_conflict"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "insert_tales",
            "type": {
              "kind": "OBJECT",
              "name": "tales_mutation_response"
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "tales_insert_input"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tales_on_conflict"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "insert_tales_one",
            "type": {
              "kind": "OBJECT",
              "name": "tales"
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "tales_insert_input"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tales_on_conflict"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "insert_users",
            "type": {
              "kind": "OBJECT",
              "name": "users_mutation_response"
            },
            "args": [
              {
                "name": "objects",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "users_insert_input"
                      }
                    }
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "users_on_conflict"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "insert_users_one",
            "type": {
              "kind": "OBJECT",
              "name": "users"
            },
            "args": [
              {
                "name": "object",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_insert_input"
                  }
                }
              },
              {
                "name": "on_conflict",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "users_on_conflict"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_children",
            "type": {
              "kind": "OBJECT",
              "name": "children_mutation_response"
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "children_set_input"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "children_bool_exp"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_children_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "children"
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "children_set_input"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "children_pk_columns_input"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_children_many",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "children_mutation_response"
              }
            },
            "args": [
              {
                "name": "updates",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "children_updates"
                      }
                    }
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_comments",
            "type": {
              "kind": "OBJECT",
              "name": "comments_mutation_response"
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "comments_set_input"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "comments_bool_exp"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_comments_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "comments"
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "comments_set_input"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "comments_pk_columns_input"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_comments_many",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "comments_mutation_response"
              }
            },
            "args": [
              {
                "name": "updates",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "comments_updates"
                      }
                    }
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_family_accounts",
            "type": {
              "kind": "OBJECT",
              "name": "family_accounts_mutation_response"
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "family_accounts_set_input"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "family_accounts_bool_exp"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_family_accounts_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "family_accounts"
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "family_accounts_set_input"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "family_accounts_pk_columns_input"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_family_accounts_many",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "family_accounts_mutation_response"
              }
            },
            "args": [
              {
                "name": "updates",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "family_accounts_updates"
                      }
                    }
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_guest_invites",
            "type": {
              "kind": "OBJECT",
              "name": "guest_invites_mutation_response"
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "guest_invites_set_input"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "guest_invites_bool_exp"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_guest_invites_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "guest_invites"
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "guest_invites_set_input"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "guest_invites_pk_columns_input"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_guest_invites_many",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "guest_invites_mutation_response"
              }
            },
            "args": [
              {
                "name": "updates",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "guest_invites_updates"
                      }
                    }
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_reactions",
            "type": {
              "kind": "OBJECT",
              "name": "reactions_mutation_response"
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "reactions_set_input"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "reactions_bool_exp"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_reactions_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "reactions"
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "reactions_set_input"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "reactions_pk_columns_input"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_reactions_many",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "reactions_mutation_response"
              }
            },
            "args": [
              {
                "name": "updates",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "reactions_updates"
                      }
                    }
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_subscriptions",
            "type": {
              "kind": "OBJECT",
              "name": "subscriptions_mutation_response"
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "subscriptions_set_input"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "subscriptions_bool_exp"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_subscriptions_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "subscriptions"
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "subscriptions_set_input"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "subscriptions_pk_columns_input"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_subscriptions_many",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "subscriptions_mutation_response"
              }
            },
            "args": [
              {
                "name": "updates",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "subscriptions_updates"
                      }
                    }
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_tale_children",
            "type": {
              "kind": "OBJECT",
              "name": "tale_children_mutation_response"
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_children_set_input"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "tale_children_bool_exp"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_tale_children_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "tale_children"
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_children_set_input"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "tale_children_pk_columns_input"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_tale_children_many",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "tale_children_mutation_response"
              }
            },
            "args": [
              {
                "name": "updates",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "tale_children_updates"
                      }
                    }
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_tale_media",
            "type": {
              "kind": "OBJECT",
              "name": "tale_media_mutation_response"
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_media_inc_input"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_media_set_input"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "tale_media_bool_exp"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_tale_media_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "tale_media"
            },
            "args": [
              {
                "name": "_inc",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_media_inc_input"
                }
              },
              {
                "name": "_set",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_media_set_input"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "tale_media_pk_columns_input"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_tale_media_many",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "tale_media_mutation_response"
              }
            },
            "args": [
              {
                "name": "updates",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "tale_media_updates"
                      }
                    }
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_tale_tags",
            "type": {
              "kind": "OBJECT",
              "name": "tale_tags_mutation_response"
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_tags_set_input"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "tale_tags_bool_exp"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_tale_tags_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "tale_tags"
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_tags_set_input"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "tale_tags_pk_columns_input"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_tale_tags_many",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "tale_tags_mutation_response"
              }
            },
            "args": [
              {
                "name": "updates",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "tale_tags_updates"
                      }
                    }
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_tales",
            "type": {
              "kind": "OBJECT",
              "name": "tales_mutation_response"
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tales_set_input"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "tales_bool_exp"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_tales_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "tales"
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tales_set_input"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "tales_pk_columns_input"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_tales_many",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "tales_mutation_response"
              }
            },
            "args": [
              {
                "name": "updates",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "tales_updates"
                      }
                    }
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_users",
            "type": {
              "kind": "OBJECT",
              "name": "users_mutation_response"
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "users_set_input"
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_bool_exp"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_users_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "users"
            },
            "args": [
              {
                "name": "_set",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "users_set_input"
                }
              },
              {
                "name": "pk_columns",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_pk_columns_input"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "update_users_many",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "OBJECT",
                "name": "users_mutation_response"
              }
            },
            "args": [
              {
                "name": "updates",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "NON_NULL",
                      "ofType": {
                        "kind": "INPUT_OBJECT",
                        "name": "users_updates"
                      }
                    }
                  }
                }
              }
            ],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "ENUM",
        "name": "order_by",
        "enumValues": [
          {
            "name": "asc",
            "isDeprecated": false
          },
          {
            "name": "asc_nulls_first",
            "isDeprecated": false
          },
          {
            "name": "asc_nulls_last",
            "isDeprecated": false
          },
          {
            "name": "desc",
            "isDeprecated": false
          },
          {
            "name": "desc_nulls_first",
            "isDeprecated": false
          },
          {
            "name": "desc_nulls_last",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "OBJECT",
        "name": "query_root",
        "fields": [
          {
            "name": "children",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "children"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "children_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "children_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "children_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "children_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "children_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "children_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "children_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "children_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "children_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "children"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "comments",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "comments"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "comments_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "comments_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "comments_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "comments_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "comments_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "comments_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "comments_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "comments_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "comments_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "comments"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "family_accounts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "family_accounts"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "family_accounts_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "family_accounts_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "family_accounts_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "family_accounts_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "family_accounts_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "family_accounts_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "family_accounts_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "family_accounts_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "family_accounts_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "family_accounts"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "family_tale_counts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "family_tale_counts"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "family_tale_counts_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "family_tale_counts_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "family_tale_counts_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "family_tale_counts_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "family_tale_counts_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "family_tale_counts_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "family_tale_counts_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "family_tale_counts_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "guest_invites",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "guest_invites"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "guest_invites_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "guest_invites_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "guest_invites_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "guest_invites_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "guest_invites_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "guest_invites_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "guest_invites_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "guest_invites_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "guest_invites_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "guest_invites"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "reactions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "reactions"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "reactions_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "reactions_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "reactions_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "reactions_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "reactions_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "reactions_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "reactions_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "reactions_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "reactions_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "reactions"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "subscriptions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "subscriptions"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "subscriptions_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "subscriptions_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "subscriptions_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "subscriptions_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "subscriptions_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "subscriptions_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "subscriptions_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "subscriptions_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "subscriptions_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "subscriptions"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tale_children",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "tale_children"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tale_children_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tale_children_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_children_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tale_children_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "tale_children_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tale_children_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tale_children_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_children_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tale_children_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "tale_children"
            },
            "args": [
              {
                "name": "child_id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              },
              {
                "name": "tale_id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tale_media",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "tale_media"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tale_media_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tale_media_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_media_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tale_media_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "tale_media_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tale_media_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tale_media_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_media_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tale_media_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "tale_media"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tale_tags",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "tale_tags"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tale_tags_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tale_tags_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_tags_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tale_tags_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "tale_tags_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tale_tags_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tale_tags_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_tags_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tale_tags_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "tale_tags"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tales",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "tales"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tales_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tales_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tales_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tales_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "tales_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tales_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tales_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tales_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tales_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "tales"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "users",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "users"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "users_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "users_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "users_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "users_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "users_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "users_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "users_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "users_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "users_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "users"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "reactions",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "timestamptz"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "emoji",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "tale",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "tales"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "users"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "user_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "reactions_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "reactions_aggregate_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "reactions"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "reactions_aggregate_bool_exp",
        "inputFields": [
          {
            "name": "count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "reactions_aggregate_bool_exp_count"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "reactions_aggregate_bool_exp_count",
        "inputFields": [
          {
            "name": "arguments",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "reactions_select_column"
                }
              }
            }
          },
          {
            "name": "distinct",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "reactions_bool_exp"
            }
          },
          {
            "name": "predicate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "Int_comparison_exp"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "reactions_aggregate_fields",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "reactions_select_column"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "reactions_max_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "reactions_min_fields"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "reactions_aggregate_order_by",
        "inputFields": [
          {
            "name": "count",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "reactions_max_order_by"
            }
          },
          {
            "name": "min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "reactions_min_order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "reactions_arr_rel_insert_input",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "reactions_insert_input"
                  }
                }
              }
            }
          },
          {
            "name": "on_conflict",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "reactions_on_conflict"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "reactions_bool_exp",
        "inputFields": [
          {
            "name": "_and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "reactions_bool_exp"
                }
              }
            }
          },
          {
            "name": "_not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "reactions_bool_exp"
            }
          },
          {
            "name": "_or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "reactions_bool_exp"
                }
              }
            }
          },
          {
            "name": "created_at",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "timestamptz_comparison_exp"
            }
          },
          {
            "name": "emoji",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "String_comparison_exp"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "uuid_comparison_exp"
            }
          },
          {
            "name": "tale",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_bool_exp"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "uuid_comparison_exp"
            }
          },
          {
            "name": "user",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "users_bool_exp"
            }
          },
          {
            "name": "user_id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "uuid_comparison_exp"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "reactions_constraint",
        "enumValues": [
          {
            "name": "reactions_pkey",
            "isDeprecated": false
          },
          {
            "name": "reactions_tale_id_user_id_emoji_key",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "reactions_insert_input",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "emoji",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "tale",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_obj_rel_insert_input"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "user",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "users_obj_rel_insert_input"
            }
          },
          {
            "name": "user_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "reactions_max_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "emoji",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "user_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "reactions_max_order_by",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "emoji",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "user_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "reactions_min_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "emoji",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "user_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "reactions_min_order_by",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "emoji",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "user_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "reactions_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "reactions"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "reactions_on_conflict",
        "inputFields": [
          {
            "name": "constraint",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "reactions_constraint"
              }
            }
          },
          {
            "name": "update_columns",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "reactions_update_column"
                  }
                }
              }
            },
            "defaultValue": "[]"
          },
          {
            "name": "where",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "reactions_bool_exp"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "reactions_order_by",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "emoji",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "tale",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_order_by"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "user",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "users_order_by"
            }
          },
          {
            "name": "user_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "reactions_pk_columns_input",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "reactions_select_column",
        "enumValues": [
          {
            "name": "created_at",
            "isDeprecated": false
          },
          {
            "name": "emoji",
            "isDeprecated": false
          },
          {
            "name": "id",
            "isDeprecated": false
          },
          {
            "name": "tale_id",
            "isDeprecated": false
          },
          {
            "name": "user_id",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "reactions_set_input",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "emoji",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "user_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "reactions_stream_cursor_input",
        "inputFields": [
          {
            "name": "initial_value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "reactions_stream_cursor_value_input"
              }
            }
          },
          {
            "name": "ordering",
            "type": {
              "kind": "ENUM",
              "name": "cursor_ordering"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "reactions_stream_cursor_value_input",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "emoji",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "user_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "reactions_update_column",
        "enumValues": [
          {
            "name": "created_at",
            "isDeprecated": false
          },
          {
            "name": "emoji",
            "isDeprecated": false
          },
          {
            "name": "id",
            "isDeprecated": false
          },
          {
            "name": "tale_id",
            "isDeprecated": false
          },
          {
            "name": "user_id",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "reactions_updates",
        "inputFields": [
          {
            "name": "_set",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "reactions_set_input"
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "reactions_bool_exp"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "subscription_root",
        "fields": [
          {
            "name": "children",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "children"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "children_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "children_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "children_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "children_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "children_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "children_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "children_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "children_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "children_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "children"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "children_stream",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "children"
                  }
                }
              }
            },
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Int"
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "children_stream_cursor_input"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "children_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "comments",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "comments"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "comments_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "comments_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "comments_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "comments_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "comments_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "comments_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "comments_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "comments_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "comments_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "comments"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "comments_stream",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "comments"
                  }
                }
              }
            },
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Int"
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "comments_stream_cursor_input"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "comments_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "family_accounts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "family_accounts"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "family_accounts_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "family_accounts_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "family_accounts_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "family_accounts_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "family_accounts_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "family_accounts_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "family_accounts_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "family_accounts_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "family_accounts_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "family_accounts"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "family_accounts_stream",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "family_accounts"
                  }
                }
              }
            },
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Int"
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "family_accounts_stream_cursor_input"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "family_accounts_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "family_tale_counts",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "family_tale_counts"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "family_tale_counts_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "family_tale_counts_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "family_tale_counts_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "family_tale_counts_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "family_tale_counts_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "family_tale_counts_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "family_tale_counts_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "family_tale_counts_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "family_tale_counts_stream",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "family_tale_counts"
                  }
                }
              }
            },
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Int"
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "family_tale_counts_stream_cursor_input"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "family_tale_counts_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "guest_invites",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "guest_invites"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "guest_invites_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "guest_invites_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "guest_invites_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "guest_invites_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "guest_invites_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "guest_invites_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "guest_invites_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "guest_invites_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "guest_invites_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "guest_invites"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "guest_invites_stream",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "guest_invites"
                  }
                }
              }
            },
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Int"
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "guest_invites_stream_cursor_input"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "guest_invites_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "reactions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "reactions"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "reactions_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "reactions_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "reactions_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "reactions_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "reactions_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "reactions_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "reactions_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "reactions_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "reactions_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "reactions"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "reactions_stream",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "reactions"
                  }
                }
              }
            },
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Int"
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "reactions_stream_cursor_input"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "reactions_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "subscriptions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "subscriptions"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "subscriptions_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "subscriptions_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "subscriptions_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "subscriptions_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "subscriptions_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "subscriptions_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "subscriptions_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "subscriptions_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "subscriptions_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "subscriptions"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "subscriptions_stream",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "subscriptions"
                  }
                }
              }
            },
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Int"
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "subscriptions_stream_cursor_input"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "subscriptions_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tale_children",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "tale_children"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tale_children_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tale_children_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_children_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tale_children_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "tale_children_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tale_children_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tale_children_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_children_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tale_children_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "tale_children"
            },
            "args": [
              {
                "name": "child_id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              },
              {
                "name": "tale_id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tale_children_stream",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "tale_children"
                  }
                }
              }
            },
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Int"
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tale_children_stream_cursor_input"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_children_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tale_media",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "tale_media"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tale_media_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tale_media_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_media_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tale_media_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "tale_media_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tale_media_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tale_media_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_media_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tale_media_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "tale_media"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tale_media_stream",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "tale_media"
                  }
                }
              }
            },
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Int"
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tale_media_stream_cursor_input"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_media_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tale_tags",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "tale_tags"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tale_tags_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tale_tags_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_tags_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tale_tags_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "tale_tags_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tale_tags_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tale_tags_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_tags_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tale_tags_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "tale_tags"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tale_tags_stream",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "tale_tags"
                  }
                }
              }
            },
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Int"
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tale_tags_stream_cursor_input"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_tags_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tales",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "tales"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tales_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tales_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tales_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tales_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "tales_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tales_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tales_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tales_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tales_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "tales"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tales_stream",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "tales"
                  }
                }
              }
            },
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Int"
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tales_stream_cursor_input"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tales_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "users",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "users"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "users_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "users_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "users_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "users_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "users_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "users_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "users_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "users_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "users_by_pk",
            "type": {
              "kind": "OBJECT",
              "name": "users"
            },
            "args": [
              {
                "name": "id",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "uuid"
                  }
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "users_stream",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "users"
                  }
                }
              }
            },
            "args": [
              {
                "name": "batch_size",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "SCALAR",
                    "name": "Int"
                  }
                }
              },
              {
                "name": "cursor",
                "type": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "LIST",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "users_stream_cursor_input"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "users_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "subscriptions",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "timestamptz"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "expires_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "family_account",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "family_accounts"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "platform",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "status",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "subscriptions_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "subscriptions_aggregate_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "subscriptions"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "subscriptions_aggregate_bool_exp",
        "inputFields": [
          {
            "name": "count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "subscriptions_aggregate_bool_exp_count"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "subscriptions_aggregate_bool_exp_count",
        "inputFields": [
          {
            "name": "arguments",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "subscriptions_select_column"
                }
              }
            }
          },
          {
            "name": "distinct",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "subscriptions_bool_exp"
            }
          },
          {
            "name": "predicate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "Int_comparison_exp"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "subscriptions_aggregate_fields",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "subscriptions_select_column"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "subscriptions_max_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "subscriptions_min_fields"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "subscriptions_aggregate_order_by",
        "inputFields": [
          {
            "name": "count",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "subscriptions_max_order_by"
            }
          },
          {
            "name": "min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "subscriptions_min_order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "subscriptions_arr_rel_insert_input",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "subscriptions_insert_input"
                  }
                }
              }
            }
          },
          {
            "name": "on_conflict",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "subscriptions_on_conflict"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "subscriptions_bool_exp",
        "inputFields": [
          {
            "name": "_and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "subscriptions_bool_exp"
                }
              }
            }
          },
          {
            "name": "_not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "subscriptions_bool_exp"
            }
          },
          {
            "name": "_or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "subscriptions_bool_exp"
                }
              }
            }
          },
          {
            "name": "created_at",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "timestamptz_comparison_exp"
            }
          },
          {
            "name": "expires_at",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "timestamptz_comparison_exp"
            }
          },
          {
            "name": "family_account",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "family_accounts_bool_exp"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "uuid_comparison_exp"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "uuid_comparison_exp"
            }
          },
          {
            "name": "platform",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "String_comparison_exp"
            }
          },
          {
            "name": "status",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "String_comparison_exp"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "subscriptions_constraint",
        "enumValues": [
          {
            "name": "subscriptions_pkey",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "subscriptions_insert_input",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "expires_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "family_account",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "family_accounts_obj_rel_insert_input"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "platform",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "status",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "subscriptions_max_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "expires_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "platform",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "status",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "subscriptions_max_order_by",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "expires_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "platform",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "status",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "subscriptions_min_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "expires_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "platform",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "status",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "subscriptions_min_order_by",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "expires_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "platform",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "status",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "subscriptions_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "subscriptions"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "subscriptions_on_conflict",
        "inputFields": [
          {
            "name": "constraint",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "subscriptions_constraint"
              }
            }
          },
          {
            "name": "update_columns",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "subscriptions_update_column"
                  }
                }
              }
            },
            "defaultValue": "[]"
          },
          {
            "name": "where",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "subscriptions_bool_exp"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "subscriptions_order_by",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "expires_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "family_account",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "family_accounts_order_by"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "platform",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "status",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "subscriptions_pk_columns_input",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "subscriptions_select_column",
        "enumValues": [
          {
            "name": "created_at",
            "isDeprecated": false
          },
          {
            "name": "expires_at",
            "isDeprecated": false
          },
          {
            "name": "family_account_id",
            "isDeprecated": false
          },
          {
            "name": "id",
            "isDeprecated": false
          },
          {
            "name": "platform",
            "isDeprecated": false
          },
          {
            "name": "status",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "subscriptions_set_input",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "expires_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "platform",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "status",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "subscriptions_stream_cursor_input",
        "inputFields": [
          {
            "name": "initial_value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "subscriptions_stream_cursor_value_input"
              }
            }
          },
          {
            "name": "ordering",
            "type": {
              "kind": "ENUM",
              "name": "cursor_ordering"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "subscriptions_stream_cursor_value_input",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "expires_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "platform",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "status",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "subscriptions_update_column",
        "enumValues": [
          {
            "name": "created_at",
            "isDeprecated": false
          },
          {
            "name": "expires_at",
            "isDeprecated": false
          },
          {
            "name": "family_account_id",
            "isDeprecated": false
          },
          {
            "name": "id",
            "isDeprecated": false
          },
          {
            "name": "platform",
            "isDeprecated": false
          },
          {
            "name": "status",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "subscriptions_updates",
        "inputFields": [
          {
            "name": "_set",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "subscriptions_set_input"
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "subscriptions_bool_exp"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "tale_children",
        "fields": [
          {
            "name": "child",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "children"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "child_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "tale",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "tales"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "tale_children_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "tale_children_aggregate_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "tale_children"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_children_aggregate_bool_exp",
        "inputFields": [
          {
            "name": "count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_children_aggregate_bool_exp_count"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_children_aggregate_bool_exp_count",
        "inputFields": [
          {
            "name": "arguments",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "tale_children_select_column"
                }
              }
            }
          },
          {
            "name": "distinct",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_children_bool_exp"
            }
          },
          {
            "name": "predicate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "Int_comparison_exp"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "tale_children_aggregate_fields",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tale_children_select_column"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "tale_children_max_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "tale_children_min_fields"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_children_aggregate_order_by",
        "inputFields": [
          {
            "name": "count",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_children_max_order_by"
            }
          },
          {
            "name": "min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_children_min_order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_children_arr_rel_insert_input",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "tale_children_insert_input"
                  }
                }
              }
            }
          },
          {
            "name": "on_conflict",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_children_on_conflict"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_children_bool_exp",
        "inputFields": [
          {
            "name": "_and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_children_bool_exp"
                }
              }
            }
          },
          {
            "name": "_not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_children_bool_exp"
            }
          },
          {
            "name": "_or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_children_bool_exp"
                }
              }
            }
          },
          {
            "name": "child",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "children_bool_exp"
            }
          },
          {
            "name": "child_id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "uuid_comparison_exp"
            }
          },
          {
            "name": "tale",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_bool_exp"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "uuid_comparison_exp"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "tale_children_constraint",
        "enumValues": [
          {
            "name": "tale_children_pkey",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_children_insert_input",
        "inputFields": [
          {
            "name": "child",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "children_obj_rel_insert_input"
            }
          },
          {
            "name": "child_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "tale",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_obj_rel_insert_input"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "tale_children_max_fields",
        "fields": [
          {
            "name": "child_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_children_max_order_by",
        "inputFields": [
          {
            "name": "child_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "tale_children_min_fields",
        "fields": [
          {
            "name": "child_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_children_min_order_by",
        "inputFields": [
          {
            "name": "child_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "tale_children_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "tale_children"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_children_on_conflict",
        "inputFields": [
          {
            "name": "constraint",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "tale_children_constraint"
              }
            }
          },
          {
            "name": "update_columns",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "tale_children_update_column"
                  }
                }
              }
            },
            "defaultValue": "[]"
          },
          {
            "name": "where",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_children_bool_exp"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_children_order_by",
        "inputFields": [
          {
            "name": "child",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "children_order_by"
            }
          },
          {
            "name": "child_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "tale",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_order_by"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_children_pk_columns_input",
        "inputFields": [
          {
            "name": "child_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "tale_children_select_column",
        "enumValues": [
          {
            "name": "child_id",
            "isDeprecated": false
          },
          {
            "name": "tale_id",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_children_set_input",
        "inputFields": [
          {
            "name": "child_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_children_stream_cursor_input",
        "inputFields": [
          {
            "name": "initial_value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "tale_children_stream_cursor_value_input"
              }
            }
          },
          {
            "name": "ordering",
            "type": {
              "kind": "ENUM",
              "name": "cursor_ordering"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_children_stream_cursor_value_input",
        "inputFields": [
          {
            "name": "child_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "tale_children_update_column",
        "enumValues": [
          {
            "name": "child_id",
            "isDeprecated": false
          },
          {
            "name": "tale_id",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_children_updates",
        "inputFields": [
          {
            "name": "_set",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_children_set_input"
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "tale_children_bool_exp"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "tale_media",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "timestamptz"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "display_order",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "media_type",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "tale",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "tales"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "url",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "tale_media_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "tale_media_aggregate_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "tale_media"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_media_aggregate_bool_exp",
        "inputFields": [
          {
            "name": "count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_media_aggregate_bool_exp_count"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_media_aggregate_bool_exp_count",
        "inputFields": [
          {
            "name": "arguments",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "tale_media_select_column"
                }
              }
            }
          },
          {
            "name": "distinct",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_media_bool_exp"
            }
          },
          {
            "name": "predicate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "Int_comparison_exp"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "tale_media_aggregate_fields",
        "fields": [
          {
            "name": "avg",
            "type": {
              "kind": "OBJECT",
              "name": "tale_media_avg_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tale_media_select_column"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "tale_media_max_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "tale_media_min_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "stddev",
            "type": {
              "kind": "OBJECT",
              "name": "tale_media_stddev_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "stddev_pop",
            "type": {
              "kind": "OBJECT",
              "name": "tale_media_stddev_pop_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "stddev_samp",
            "type": {
              "kind": "OBJECT",
              "name": "tale_media_stddev_samp_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "sum",
            "type": {
              "kind": "OBJECT",
              "name": "tale_media_sum_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "var_pop",
            "type": {
              "kind": "OBJECT",
              "name": "tale_media_var_pop_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "var_samp",
            "type": {
              "kind": "OBJECT",
              "name": "tale_media_var_samp_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "variance",
            "type": {
              "kind": "OBJECT",
              "name": "tale_media_variance_fields"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_media_aggregate_order_by",
        "inputFields": [
          {
            "name": "avg",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_media_avg_order_by"
            }
          },
          {
            "name": "count",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_media_max_order_by"
            }
          },
          {
            "name": "min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_media_min_order_by"
            }
          },
          {
            "name": "stddev",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_media_stddev_order_by"
            }
          },
          {
            "name": "stddev_pop",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_media_stddev_pop_order_by"
            }
          },
          {
            "name": "stddev_samp",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_media_stddev_samp_order_by"
            }
          },
          {
            "name": "sum",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_media_sum_order_by"
            }
          },
          {
            "name": "var_pop",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_media_var_pop_order_by"
            }
          },
          {
            "name": "var_samp",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_media_var_samp_order_by"
            }
          },
          {
            "name": "variance",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_media_variance_order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_media_arr_rel_insert_input",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "tale_media_insert_input"
                  }
                }
              }
            }
          },
          {
            "name": "on_conflict",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_media_on_conflict"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "tale_media_avg_fields",
        "fields": [
          {
            "name": "display_order",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_media_avg_order_by",
        "inputFields": [
          {
            "name": "display_order",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_media_bool_exp",
        "inputFields": [
          {
            "name": "_and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_media_bool_exp"
                }
              }
            }
          },
          {
            "name": "_not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_media_bool_exp"
            }
          },
          {
            "name": "_or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_media_bool_exp"
                }
              }
            }
          },
          {
            "name": "created_at",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "timestamptz_comparison_exp"
            }
          },
          {
            "name": "display_order",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "Int_comparison_exp"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "uuid_comparison_exp"
            }
          },
          {
            "name": "media_type",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "String_comparison_exp"
            }
          },
          {
            "name": "tale",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_bool_exp"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "uuid_comparison_exp"
            }
          },
          {
            "name": "url",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "String_comparison_exp"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "tale_media_constraint",
        "enumValues": [
          {
            "name": "tale_media_pkey",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_media_inc_input",
        "inputFields": [
          {
            "name": "display_order",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_media_insert_input",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "display_order",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "media_type",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "tale",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_obj_rel_insert_input"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "url",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "tale_media_max_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "display_order",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "media_type",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "url",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_media_max_order_by",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "display_order",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "media_type",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "url",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "tale_media_min_fields",
        "fields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "display_order",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "media_type",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "url",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_media_min_order_by",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "display_order",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "media_type",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "url",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "tale_media_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "tale_media"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_media_on_conflict",
        "inputFields": [
          {
            "name": "constraint",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "tale_media_constraint"
              }
            }
          },
          {
            "name": "update_columns",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "tale_media_update_column"
                  }
                }
              }
            },
            "defaultValue": "[]"
          },
          {
            "name": "where",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_media_bool_exp"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_media_order_by",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "display_order",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "media_type",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "tale",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_order_by"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "url",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_media_pk_columns_input",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "tale_media_select_column",
        "enumValues": [
          {
            "name": "created_at",
            "isDeprecated": false
          },
          {
            "name": "display_order",
            "isDeprecated": false
          },
          {
            "name": "id",
            "isDeprecated": false
          },
          {
            "name": "media_type",
            "isDeprecated": false
          },
          {
            "name": "tale_id",
            "isDeprecated": false
          },
          {
            "name": "url",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_media_set_input",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "display_order",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "media_type",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "url",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "tale_media_stddev_fields",
        "fields": [
          {
            "name": "display_order",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_media_stddev_order_by",
        "inputFields": [
          {
            "name": "display_order",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "tale_media_stddev_pop_fields",
        "fields": [
          {
            "name": "display_order",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_media_stddev_pop_order_by",
        "inputFields": [
          {
            "name": "display_order",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "tale_media_stddev_samp_fields",
        "fields": [
          {
            "name": "display_order",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_media_stddev_samp_order_by",
        "inputFields": [
          {
            "name": "display_order",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_media_stream_cursor_input",
        "inputFields": [
          {
            "name": "initial_value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "tale_media_stream_cursor_value_input"
              }
            }
          },
          {
            "name": "ordering",
            "type": {
              "kind": "ENUM",
              "name": "cursor_ordering"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_media_stream_cursor_value_input",
        "inputFields": [
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "display_order",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "media_type",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "url",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "tale_media_sum_fields",
        "fields": [
          {
            "name": "display_order",
            "type": {
              "kind": "SCALAR",
              "name": "Int"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_media_sum_order_by",
        "inputFields": [
          {
            "name": "display_order",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "tale_media_update_column",
        "enumValues": [
          {
            "name": "created_at",
            "isDeprecated": false
          },
          {
            "name": "display_order",
            "isDeprecated": false
          },
          {
            "name": "id",
            "isDeprecated": false
          },
          {
            "name": "media_type",
            "isDeprecated": false
          },
          {
            "name": "tale_id",
            "isDeprecated": false
          },
          {
            "name": "url",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_media_updates",
        "inputFields": [
          {
            "name": "_inc",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_media_inc_input"
            }
          },
          {
            "name": "_set",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_media_set_input"
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "tale_media_bool_exp"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "tale_media_var_pop_fields",
        "fields": [
          {
            "name": "display_order",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_media_var_pop_order_by",
        "inputFields": [
          {
            "name": "display_order",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "tale_media_var_samp_fields",
        "fields": [
          {
            "name": "display_order",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_media_var_samp_order_by",
        "inputFields": [
          {
            "name": "display_order",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "tale_media_variance_fields",
        "fields": [
          {
            "name": "display_order",
            "type": {
              "kind": "SCALAR",
              "name": "Float"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_media_variance_order_by",
        "inputFields": [
          {
            "name": "display_order",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "tale_tags",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "tag",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "tale",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "tales"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "tale_tags_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "tale_tags_aggregate_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "tale_tags"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_tags_aggregate_bool_exp",
        "inputFields": [
          {
            "name": "count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_tags_aggregate_bool_exp_count"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_tags_aggregate_bool_exp_count",
        "inputFields": [
          {
            "name": "arguments",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "tale_tags_select_column"
                }
              }
            }
          },
          {
            "name": "distinct",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_tags_bool_exp"
            }
          },
          {
            "name": "predicate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "Int_comparison_exp"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "tale_tags_aggregate_fields",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tale_tags_select_column"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "tale_tags_max_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "tale_tags_min_fields"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_tags_aggregate_order_by",
        "inputFields": [
          {
            "name": "count",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_tags_max_order_by"
            }
          },
          {
            "name": "min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_tags_min_order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_tags_arr_rel_insert_input",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "tale_tags_insert_input"
                  }
                }
              }
            }
          },
          {
            "name": "on_conflict",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_tags_on_conflict"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_tags_bool_exp",
        "inputFields": [
          {
            "name": "_and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_tags_bool_exp"
                }
              }
            }
          },
          {
            "name": "_not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_tags_bool_exp"
            }
          },
          {
            "name": "_or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_tags_bool_exp"
                }
              }
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "uuid_comparison_exp"
            }
          },
          {
            "name": "tag",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "String_comparison_exp"
            }
          },
          {
            "name": "tale",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_bool_exp"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "uuid_comparison_exp"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "tale_tags_constraint",
        "enumValues": [
          {
            "name": "tale_tags_pkey",
            "isDeprecated": false
          },
          {
            "name": "tale_tags_tale_id_tag_key",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_tags_insert_input",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "tag",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "tale",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_obj_rel_insert_input"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "tale_tags_max_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "tag",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_tags_max_order_by",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "tag",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "tale_tags_min_fields",
        "fields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "tag",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_tags_min_order_by",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "tag",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "tale_tags_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "tale_tags"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_tags_on_conflict",
        "inputFields": [
          {
            "name": "constraint",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "tale_tags_constraint"
              }
            }
          },
          {
            "name": "update_columns",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "tale_tags_update_column"
                  }
                }
              }
            },
            "defaultValue": "[]"
          },
          {
            "name": "where",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_tags_bool_exp"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_tags_order_by",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "tag",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "tale",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_order_by"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_tags_pk_columns_input",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "tale_tags_select_column",
        "enumValues": [
          {
            "name": "id",
            "isDeprecated": false
          },
          {
            "name": "tag",
            "isDeprecated": false
          },
          {
            "name": "tale_id",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_tags_set_input",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "tag",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_tags_stream_cursor_input",
        "inputFields": [
          {
            "name": "initial_value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "tale_tags_stream_cursor_value_input"
              }
            }
          },
          {
            "name": "ordering",
            "type": {
              "kind": "ENUM",
              "name": "cursor_ordering"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_tags_stream_cursor_value_input",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "tag",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "tale_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "tale_tags_update_column",
        "enumValues": [
          {
            "name": "id",
            "isDeprecated": false
          },
          {
            "name": "tag",
            "isDeprecated": false
          },
          {
            "name": "tale_id",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tale_tags_updates",
        "inputFields": [
          {
            "name": "_set",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_tags_set_input"
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "tale_tags_bool_exp"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "tales",
        "fields": [
          {
            "name": "author_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "comments",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "comments"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "comments_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "comments_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "comments_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "comments_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "comments_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "comments_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "comments_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "comments_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "created_at",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "timestamptz"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "family_account",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "family_accounts"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "narrative",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "raw_transcript",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "reactions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "reactions"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "reactions_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "reactions_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "reactions_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "reactions_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "reactions_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "reactions_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "reactions_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "reactions_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tale_children",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "tale_children"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tale_children_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tale_children_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_children_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tale_children_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "tale_children_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tale_children_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tale_children_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_children_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tale_media",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "tale_media"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tale_media_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tale_media_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_media_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tale_media_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "tale_media_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tale_media_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tale_media_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_media_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tale_tags",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "tale_tags"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tale_tags_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tale_tags_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_tags_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tale_tags_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "tale_tags_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tale_tags_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tale_tags_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tale_tags_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "timestamptz"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "user",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "users"
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "tales_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "tales_aggregate_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "tales"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tales_aggregate_bool_exp",
        "inputFields": [
          {
            "name": "count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_aggregate_bool_exp_count"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tales_aggregate_bool_exp_count",
        "inputFields": [
          {
            "name": "arguments",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "tales_select_column"
                }
              }
            }
          },
          {
            "name": "distinct",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_bool_exp"
            }
          },
          {
            "name": "predicate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "Int_comparison_exp"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "tales_aggregate_fields",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tales_select_column"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "tales_max_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "tales_min_fields"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tales_aggregate_order_by",
        "inputFields": [
          {
            "name": "count",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_max_order_by"
            }
          },
          {
            "name": "min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_min_order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tales_arr_rel_insert_input",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "tales_insert_input"
                  }
                }
              }
            }
          },
          {
            "name": "on_conflict",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_on_conflict"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tales_bool_exp",
        "inputFields": [
          {
            "name": "_and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "tales_bool_exp"
                }
              }
            }
          },
          {
            "name": "_not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_bool_exp"
            }
          },
          {
            "name": "_or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "tales_bool_exp"
                }
              }
            }
          },
          {
            "name": "author_id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "uuid_comparison_exp"
            }
          },
          {
            "name": "comments",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "comments_bool_exp"
            }
          },
          {
            "name": "comments_aggregate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "comments_aggregate_bool_exp"
            }
          },
          {
            "name": "created_at",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "timestamptz_comparison_exp"
            }
          },
          {
            "name": "family_account",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "family_accounts_bool_exp"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "uuid_comparison_exp"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "uuid_comparison_exp"
            }
          },
          {
            "name": "narrative",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "String_comparison_exp"
            }
          },
          {
            "name": "raw_transcript",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "String_comparison_exp"
            }
          },
          {
            "name": "reactions",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "reactions_bool_exp"
            }
          },
          {
            "name": "reactions_aggregate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "reactions_aggregate_bool_exp"
            }
          },
          {
            "name": "tale_children",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_children_bool_exp"
            }
          },
          {
            "name": "tale_children_aggregate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_children_aggregate_bool_exp"
            }
          },
          {
            "name": "tale_media",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_media_bool_exp"
            }
          },
          {
            "name": "tale_media_aggregate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_media_aggregate_bool_exp"
            }
          },
          {
            "name": "tale_tags",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_tags_bool_exp"
            }
          },
          {
            "name": "tale_tags_aggregate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_tags_aggregate_bool_exp"
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "String_comparison_exp"
            }
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "timestamptz_comparison_exp"
            }
          },
          {
            "name": "user",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "users_bool_exp"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "tales_constraint",
        "enumValues": [
          {
            "name": "tales_pkey",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tales_insert_input",
        "inputFields": [
          {
            "name": "author_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "comments",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "comments_arr_rel_insert_input"
            }
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "family_account",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "family_accounts_obj_rel_insert_input"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "narrative",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "raw_transcript",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "reactions",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "reactions_arr_rel_insert_input"
            }
          },
          {
            "name": "tale_children",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_children_arr_rel_insert_input"
            }
          },
          {
            "name": "tale_media",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_media_arr_rel_insert_input"
            }
          },
          {
            "name": "tale_tags",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_tags_arr_rel_insert_input"
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "user",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "users_obj_rel_insert_input"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "tales_max_fields",
        "fields": [
          {
            "name": "author_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "narrative",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "raw_transcript",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tales_max_order_by",
        "inputFields": [
          {
            "name": "author_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "created_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "narrative",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "raw_transcript",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "tales_min_fields",
        "fields": [
          {
            "name": "author_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "narrative",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "raw_transcript",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tales_min_order_by",
        "inputFields": [
          {
            "name": "author_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "created_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "narrative",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "raw_transcript",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "tales_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "tales"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tales_obj_rel_insert_input",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "tales_insert_input"
              }
            }
          },
          {
            "name": "on_conflict",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_on_conflict"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tales_on_conflict",
        "inputFields": [
          {
            "name": "constraint",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "tales_constraint"
              }
            }
          },
          {
            "name": "update_columns",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "tales_update_column"
                  }
                }
              }
            },
            "defaultValue": "[]"
          },
          {
            "name": "where",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_bool_exp"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tales_order_by",
        "inputFields": [
          {
            "name": "author_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "comments_aggregate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "comments_aggregate_order_by"
            }
          },
          {
            "name": "created_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "family_account",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "family_accounts_order_by"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "narrative",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "raw_transcript",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "reactions_aggregate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "reactions_aggregate_order_by"
            }
          },
          {
            "name": "tale_children_aggregate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_children_aggregate_order_by"
            }
          },
          {
            "name": "tale_media_aggregate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_media_aggregate_order_by"
            }
          },
          {
            "name": "tale_tags_aggregate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tale_tags_aggregate_order_by"
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "user",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "users_order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tales_pk_columns_input",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "tales_select_column",
        "enumValues": [
          {
            "name": "author_id",
            "isDeprecated": false
          },
          {
            "name": "created_at",
            "isDeprecated": false
          },
          {
            "name": "family_account_id",
            "isDeprecated": false
          },
          {
            "name": "id",
            "isDeprecated": false
          },
          {
            "name": "narrative",
            "isDeprecated": false
          },
          {
            "name": "raw_transcript",
            "isDeprecated": false
          },
          {
            "name": "title",
            "isDeprecated": false
          },
          {
            "name": "updated_at",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tales_set_input",
        "inputFields": [
          {
            "name": "author_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "narrative",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "raw_transcript",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tales_stream_cursor_input",
        "inputFields": [
          {
            "name": "initial_value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "tales_stream_cursor_value_input"
              }
            }
          },
          {
            "name": "ordering",
            "type": {
              "kind": "ENUM",
              "name": "cursor_ordering"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tales_stream_cursor_value_input",
        "inputFields": [
          {
            "name": "author_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "narrative",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "raw_transcript",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "title",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "updated_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "tales_update_column",
        "enumValues": [
          {
            "name": "author_id",
            "isDeprecated": false
          },
          {
            "name": "created_at",
            "isDeprecated": false
          },
          {
            "name": "family_account_id",
            "isDeprecated": false
          },
          {
            "name": "id",
            "isDeprecated": false
          },
          {
            "name": "narrative",
            "isDeprecated": false
          },
          {
            "name": "raw_transcript",
            "isDeprecated": false
          },
          {
            "name": "title",
            "isDeprecated": false
          },
          {
            "name": "updated_at",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "tales_updates",
        "inputFields": [
          {
            "name": "_set",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_set_input"
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "tales_bool_exp"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "SCALAR",
        "name": "timestamptz"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "timestamptz_comparison_exp",
        "inputFields": [
          {
            "name": "_eq",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "_gt",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "_gte",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "timestamptz"
                }
              }
            }
          },
          {
            "name": "_is_null",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "_lt",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "_lte",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "_neq",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "_nin",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "timestamptz"
                }
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "users",
        "fields": [
          {
            "name": "avatar_url",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "comments",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "comments"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "comments_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "comments_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "comments_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "comments_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "comments_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "comments_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "comments_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "comments_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "created_at",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "timestamptz"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "family_account",
            "type": {
              "kind": "OBJECT",
              "name": "family_accounts"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "guest_invites",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "guest_invites"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "guest_invites_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "guest_invites_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "guest_invites_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "guest_invites_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "guest_invites_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "guest_invites_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "guest_invites_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "guest_invites_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "reactions",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "reactions"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "reactions_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "reactions_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "reactions_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "reactions_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "reactions_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "reactions_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "reactions_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "reactions_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "role",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "String"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "tales",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "tales"
                  }
                }
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tales_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tales_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tales_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "tales_aggregate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "OBJECT",
                "name": "tales_aggregate"
              }
            },
            "args": [
              {
                "name": "distinct_on",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "tales_select_column"
                    }
                  }
                }
              },
              {
                "name": "limit",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "offset",
                "type": {
                  "kind": "SCALAR",
                  "name": "Int"
                }
              },
              {
                "name": "order_by",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "INPUT_OBJECT",
                      "name": "tales_order_by"
                    }
                  }
                }
              },
              {
                "name": "where",
                "type": {
                  "kind": "INPUT_OBJECT",
                  "name": "tales_bool_exp"
                }
              }
            ],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "OBJECT",
        "name": "users_aggregate",
        "fields": [
          {
            "name": "aggregate",
            "type": {
              "kind": "OBJECT",
              "name": "users_aggregate_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "nodes",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "users"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "users_aggregate_bool_exp",
        "inputFields": [
          {
            "name": "count",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "users_aggregate_bool_exp_count"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "users_aggregate_bool_exp_count",
        "inputFields": [
          {
            "name": "arguments",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "ENUM",
                  "name": "users_select_column"
                }
              }
            }
          },
          {
            "name": "distinct",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "filter",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "users_bool_exp"
            }
          },
          {
            "name": "predicate",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "Int_comparison_exp"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "users_aggregate_fields",
        "fields": [
          {
            "name": "count",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [
              {
                "name": "columns",
                "type": {
                  "kind": "LIST",
                  "ofType": {
                    "kind": "NON_NULL",
                    "ofType": {
                      "kind": "ENUM",
                      "name": "users_select_column"
                    }
                  }
                }
              },
              {
                "name": "distinct",
                "type": {
                  "kind": "SCALAR",
                  "name": "Boolean"
                }
              }
            ],
            "isDeprecated": false
          },
          {
            "name": "max",
            "type": {
              "kind": "OBJECT",
              "name": "users_max_fields"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "min",
            "type": {
              "kind": "OBJECT",
              "name": "users_min_fields"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "users_aggregate_order_by",
        "inputFields": [
          {
            "name": "count",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "max",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "users_max_order_by"
            }
          },
          {
            "name": "min",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "users_min_order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "users_arr_rel_insert_input",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "INPUT_OBJECT",
                    "name": "users_insert_input"
                  }
                }
              }
            }
          },
          {
            "name": "on_conflict",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "users_on_conflict"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "users_bool_exp",
        "inputFields": [
          {
            "name": "_and",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "users_bool_exp"
                }
              }
            }
          },
          {
            "name": "_not",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "users_bool_exp"
            }
          },
          {
            "name": "_or",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "INPUT_OBJECT",
                  "name": "users_bool_exp"
                }
              }
            }
          },
          {
            "name": "avatar_url",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "String_comparison_exp"
            }
          },
          {
            "name": "comments",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "comments_bool_exp"
            }
          },
          {
            "name": "comments_aggregate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "comments_aggregate_bool_exp"
            }
          },
          {
            "name": "created_at",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "timestamptz_comparison_exp"
            }
          },
          {
            "name": "family_account",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "family_accounts_bool_exp"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "uuid_comparison_exp"
            }
          },
          {
            "name": "guest_invites",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "guest_invites_bool_exp"
            }
          },
          {
            "name": "guest_invites_aggregate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "guest_invites_aggregate_bool_exp"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "uuid_comparison_exp"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "String_comparison_exp"
            }
          },
          {
            "name": "reactions",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "reactions_bool_exp"
            }
          },
          {
            "name": "reactions_aggregate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "reactions_aggregate_bool_exp"
            }
          },
          {
            "name": "role",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "String_comparison_exp"
            }
          },
          {
            "name": "tales",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_bool_exp"
            }
          },
          {
            "name": "tales_aggregate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_aggregate_bool_exp"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "users_constraint",
        "enumValues": [
          {
            "name": "users_pkey",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "users_insert_input",
        "inputFields": [
          {
            "name": "avatar_url",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "comments",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "comments_arr_rel_insert_input"
            }
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "family_account",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "family_accounts_obj_rel_insert_input"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "guest_invites",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "guest_invites_arr_rel_insert_input"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "reactions",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "reactions_arr_rel_insert_input"
            }
          },
          {
            "name": "role",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "tales",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_arr_rel_insert_input"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "users_max_fields",
        "fields": [
          {
            "name": "avatar_url",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "role",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "users_max_order_by",
        "inputFields": [
          {
            "name": "avatar_url",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "created_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "role",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "users_min_fields",
        "fields": [
          {
            "name": "avatar_url",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "role",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "users_min_order_by",
        "inputFields": [
          {
            "name": "avatar_url",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "created_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "role",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "OBJECT",
        "name": "users_mutation_response",
        "fields": [
          {
            "name": "affected_rows",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "Int"
              }
            },
            "args": [],
            "isDeprecated": false
          },
          {
            "name": "returning",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "OBJECT",
                    "name": "users"
                  }
                }
              }
            },
            "args": [],
            "isDeprecated": false
          }
        ],
        "interfaces": []
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "users_obj_rel_insert_input",
        "inputFields": [
          {
            "name": "data",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "users_insert_input"
              }
            }
          },
          {
            "name": "on_conflict",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "users_on_conflict"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "users_on_conflict",
        "inputFields": [
          {
            "name": "constraint",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "ENUM",
                "name": "users_constraint"
              }
            }
          },
          {
            "name": "update_columns",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "LIST",
                "ofType": {
                  "kind": "NON_NULL",
                  "ofType": {
                    "kind": "ENUM",
                    "name": "users_update_column"
                  }
                }
              }
            },
            "defaultValue": "[]"
          },
          {
            "name": "where",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "users_bool_exp"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "users_order_by",
        "inputFields": [
          {
            "name": "avatar_url",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "comments_aggregate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "comments_aggregate_order_by"
            }
          },
          {
            "name": "created_at",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "family_account",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "family_accounts_order_by"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "guest_invites_aggregate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "guest_invites_aggregate_order_by"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "reactions_aggregate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "reactions_aggregate_order_by"
            }
          },
          {
            "name": "role",
            "type": {
              "kind": "ENUM",
              "name": "order_by"
            }
          },
          {
            "name": "tales_aggregate",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "tales_aggregate_order_by"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "users_pk_columns_input",
        "inputFields": [
          {
            "name": "id",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "SCALAR",
                "name": "uuid"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "users_select_column",
        "enumValues": [
          {
            "name": "avatar_url",
            "isDeprecated": false
          },
          {
            "name": "created_at",
            "isDeprecated": false
          },
          {
            "name": "family_account_id",
            "isDeprecated": false
          },
          {
            "name": "id",
            "isDeprecated": false
          },
          {
            "name": "name",
            "isDeprecated": false
          },
          {
            "name": "role",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "users_set_input",
        "inputFields": [
          {
            "name": "avatar_url",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "role",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "users_stream_cursor_input",
        "inputFields": [
          {
            "name": "initial_value",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "users_stream_cursor_value_input"
              }
            }
          },
          {
            "name": "ordering",
            "type": {
              "kind": "ENUM",
              "name": "cursor_ordering"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "users_stream_cursor_value_input",
        "inputFields": [
          {
            "name": "avatar_url",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "created_at",
            "type": {
              "kind": "SCALAR",
              "name": "timestamptz"
            }
          },
          {
            "name": "family_account_id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "id",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "name",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          },
          {
            "name": "role",
            "type": {
              "kind": "SCALAR",
              "name": "String"
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "ENUM",
        "name": "users_update_column",
        "enumValues": [
          {
            "name": "avatar_url",
            "isDeprecated": false
          },
          {
            "name": "created_at",
            "isDeprecated": false
          },
          {
            "name": "family_account_id",
            "isDeprecated": false
          },
          {
            "name": "id",
            "isDeprecated": false
          },
          {
            "name": "name",
            "isDeprecated": false
          },
          {
            "name": "role",
            "isDeprecated": false
          }
        ]
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "users_updates",
        "inputFields": [
          {
            "name": "_set",
            "type": {
              "kind": "INPUT_OBJECT",
              "name": "users_set_input"
            }
          },
          {
            "name": "where",
            "type": {
              "kind": "NON_NULL",
              "ofType": {
                "kind": "INPUT_OBJECT",
                "name": "users_bool_exp"
              }
            }
          }
        ],
        "isOneOf": false
      },
      {
        "kind": "SCALAR",
        "name": "uuid"
      },
      {
        "kind": "INPUT_OBJECT",
        "name": "uuid_comparison_exp",
        "inputFields": [
          {
            "name": "_eq",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "_gt",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "_gte",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "_in",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid"
                }
              }
            }
          },
          {
            "name": "_is_null",
            "type": {
              "kind": "SCALAR",
              "name": "Boolean"
            }
          },
          {
            "name": "_lt",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "_lte",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "_neq",
            "type": {
              "kind": "SCALAR",
              "name": "uuid"
            }
          },
          {
            "name": "_nin",
            "type": {
              "kind": "LIST",
              "ofType": {
                "kind": "NON_NULL",
                "ofType": {
                  "kind": "SCALAR",
                  "name": "uuid"
                }
              }
            }
          }
        ],
        "isOneOf": false
      }
    ],
    "directives": []
  }
} as const;

export { introspection };