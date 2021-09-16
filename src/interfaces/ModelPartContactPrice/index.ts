/**
 * @export
 * @enum {string}
 * @namespace ModelPartContactPrice
 */
export enum TypeEnum {
  SupSUPPLIER = "sup (SUPPLIER)",
  CustCUSTOMER = "cust (CUSTOMER)",
}

/**
 *
 * @export
 * @interface ModelPartContactPrice
 */
export interface ModelPartContactPrice {
  id?: string;
  objectName?: "PartContactPrice";
  /**
   * date the part contact price was created
   * @type {Date}
   * @memberof ModelPartContactPrice
   */
  create?: Date;
  /**
   * date the part contact price was last updated
   * @type {Date}
   * @memberof ModelPartContactPrice
   */
  update?: Date;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelPartContactPrice
   */
  sevClient?: any;
  /**
   * contact for which you have a special price
   * @type {any}
   * @memberof ModelPartContactPrice
   */
  contact?: any;
  /**
   * part for which you have a special price
   * @type {any}
   * @memberof ModelPartContactPrice
   */
  part?: any;
  /**
   * type of the part contact price
   * @type {string}
   * @memberof ModelPartContactPrice
   */
  type?: TypeEnum;
  /**
   * special net price for contact
   * @type {number}
   * @memberof ModelPartContactPrice
   */
  priceNet?: number;
  /**
   * special gross price for contact
   * @type {number}
   * @memberof ModelPartContactPrice
   */
  priceGross?: number;
}
