/**
 * @export
 * @enum {string}
 * @namespace ModelSevToken
 */
export enum TokenTypeEnum {
  LOGIN = "LOGIN",
  API = "API",
  SUPPORT = "SUPPORT",
}

/**
 *
 * @export
 * @interface ModelSevToken
 */
export interface ModelSevToken {
  id?: string;
  objectName?: "SevToken";
  /**
   * date the sevToken was created
   * @type {Date}
   * @memberof ModelSevToken
   */
  create?: Date;
  /**
   * date the sevToken was last updated
   * @type {Date}
   * @memberof ModelSevToken
   */
  update?: Date;
  /**
   * SevUser to whom the sevToken belongs
   * @type {any}
   * @memberof ModelSevToken
   */
  user?: any;
  /**
   * token of the sevUser
   * @type {string}
   * @memberof ModelSevToken
   */
  token?: string;
  /**
   * expiration date of the token
   * @type {Date}
   * @memberof ModelSevToken
   */
  expire?: Date;
  /**
   * Defines if the token is active
   * @type {boolean}
   * @memberof ModelSevToken
   */
  active?: boolean;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelSevToken
   */
  sevClient?: any;
  /**
   * Ip address of the user
   * @type {string}
   * @memberof ModelSevToken
   */
  ipAddress?: string;
  /**
   * Information about the users system
   * @type {string}
   * @memberof ModelSevToken
   */
  userAgent?: string;
  /**
   * Type of the token
   * @type {string}
   * @memberof ModelSevToken
   */
  tokenType?: TokenTypeEnum;
  /**
   * Confirmation token
   * @type {string}
   * @memberof ModelSevToken
   */
  confirmationToken?: string;
}
