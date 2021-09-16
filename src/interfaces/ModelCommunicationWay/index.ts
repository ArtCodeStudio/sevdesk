import type { ModelContact } from "../index.ts";

/**
 * @export
 * @namespace ModelCommunicationWay
 */
export enum TypeEnum {
  EMAIL = "EMAIL",
  PHONE = "PHONE",
  WEB = "WEB",
  MOBILE = "MOBILE",
}

/**
 *
 * @export
 * @interface ModelCommunicationWay
 */
export interface ModelCommunicationWay {
  id?: string;
  objectName?: "CommunicationWay";
  /**
     * date the communication way was created
     * @type {Date}
     * @memberof ModelCommunicationWay
     */
  create?: Date;
  /**
     * date the communication way was last updated
     * @type {Date}
     * @memberof ModelCommunicationWay
     */
  update?: Date;
  /**
     *
     * @type {ModelContact}
     * @memberof ModelCommunicationWay
     */
  contact?: ModelContact;
  /**
     * type of the communication way
     * @type {string}
     * @memberof ModelCommunicationWay
     */
  type?: TypeEnum;
  /**
     * value of the communication way
     * @type {string}
     * @memberof ModelCommunicationWay
     */
  value?: string;
  /**
     *
     * @type {ModelCommunicationWayKey}
     * @memberof ModelCommunicationWay
     */
  key?: ModelCommunicationWayKey;
  /**
     *
     * @type {boolean}
     * @memberof ModelCommunicationWay
     */
  main?: boolean;
  /**
     * sevClient is the unique id every customer has and is used in nearly all operations
     * @type {any}
     * @memberof ModelCommunicationWay
     */
  sevClient?: any;
}

/**
   * CommunicationWayKey is read only
   * @export
   * @interface ModelCommunicationWayKey
   */
export interface ModelCommunicationWayKey {
  id?: string;
  objectName?: "CommunicationWayKey";
  /**
     * date the communication way key was created
     * @type {Date}
     * @memberof ModelCommunicationWayKey
     */
  create?: Date;
  /**
     * date the communication way key was last updated
     * @type {Date}
     * @memberof ModelCommunicationWayKey
     */
  update?: Date;
  /**
     * name of the communication way key
     * @type {string}
     * @memberof ModelCommunicationWayKey
     */
  name?: string;
  /**
     *
     * @type {string}
     * @memberof ModelCommunicationWayKey
     */
  translationCode?: string;
}
