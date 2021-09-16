/**
 * @export
 * @enum {string}
 * @namespace ModelTextTemplate
 */
export enum ObjectTypeEnum {
  RE = "RE",
  AN = "AN",
  AB = "AB",
  LI = "LI",
  MA = "MA",
  MAIL = "MAIL",
}
/**
 * @export
 * @enum {string}
 * @namespace ModelTextTemplate
 */
export enum TextTypeEnum {
  HEAD = "HEAD",
  FOOT = "FOOT",
}

/**
 *
 * @export
 * @interface ModelTextTemplate
 */
export interface ModelTextTemplate {
  id?: string;
  objectName?: "TextTemplate";
  /**
   * date the text template was created
   * @type {Date}
   * @memberof ModelTextTemplate
   */
  create?: Date;
  /**
   * date the text template was last updated
   * @type {Date}
   * @memberof ModelTextTemplate
   */
  update?: Date;
  /**
   * name of the text template
   * @type {string}
   * @memberof ModelTextTemplate
   */
  name?: string;
  /**
   * text of your text template
   * @type {string}
   * @memberof ModelTextTemplate
   */
  text?: string;
  /**
   * object type for which you want to use the text template
   * @type {string}
   * @memberof ModelTextTemplate
   */
  objectType?: ObjectTypeEnum;
  /**
   * type of your text
   * @type {string}
   * @memberof ModelTextTemplate
   */
  textType?: TextTypeEnum;
  /**
   * sevUser who created the text template
   * @type {any}
   * @memberof ModelTextTemplate
   */
  sevUser?: any;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelTextTemplate
   */
  sevClient?: any;
  /**
   * defines if the text template is used as the main template
   * @type {boolean}
   * @memberof ModelTextTemplate
   */
  main?: boolean;
}
