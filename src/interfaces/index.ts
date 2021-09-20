// These typings have been generated initially by swagger-codegen and then adjusteda and corrected
/* eslint-disable @typescript-eslint/no-namespace */
/* eslint-disable @typescript-eslint/consistent-type-definitions */

export * as ModelCommunicationWay from "./ModelCommunicationWay/index.ts";
export * as ModelPartContactPrice from "./ModelPartContactPrice/index.ts";
export * as ModelTextTemplate from "./ModelTextTemplate/index.ts";

import * as ModelInvoice from "./ModelInvoice/index.ts";
export { ModelInvoice };

export * as ModelSevToken from "./ModelSevToken/index.ts";

/**
 * API dates are returned as ISO strings.
 */
type Date = string;

export interface DocServerTestLetterpaperBody {
  /**
   * Pdf file to test
   * @type {Blob}
   * @memberof DocServerTestLetterpaperBody
   */
  file: Blob;
}
/**
 *
 * @export
 * @interface DocServerTestLetterpaperBody1
 */
export interface DocServerTestLetterpaperBody1 {
  /**
   * Pdf file to test
   * @type {Blob}
   * @memberof DocServerTestLetterpaperBody1
   */
  file: Blob;
}
/**
 *
 * @export
 * @interface FactoryFileUploadBody
 */
export interface FactoryFileUploadBody {
  /**
   * file to upload
   * @type {Blob}
   * @memberof FactoryFileUploadBody
   */
  file: Blob;
}
/**
 *
 * @export
 * @interface FactoryUploadTempFileBody
 */
export interface FactoryUploadTempFileBody {
  /**
   * file to upload
   * @type {Blob}
   * @memberof FactoryUploadTempFileBody
   */
  file: Blob;
}
/**
 *
 * @export
 * @interface ModelAccountingChart
 */
export interface ModelAccountingChart {
  id?: string;
  objectName?: "AccountingChart";
  /**
   * creation date of the accounting chart
   * @type {Date}
   * @memberof ModelAccountingChart
   */
  create?: Date;
  /**
   * date the accounting chart was last updated
   * @type {Date}
   * @memberof ModelAccountingChart
   */
  update?: Date;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelAccountingChart
   */
  sevClient?: any;
  /**
   *
   * @type {string}
   * @memberof ModelAccountingChart
   */
  name?: string;
}
/**
 *
 * @export
 * @interface ModelAccountingContact
 */
export interface ModelAccountingContact {
  id?: string;
  objectName?: "AccountingContact";
  /**
   * date the accounting contact was created
   * @type {Date}
   * @memberof ModelAccountingContact
   */
  create?: Date;
  /**
   * date the accounting contact was last updated
   * @type {Date}
   * @memberof ModelAccountingContact
   */
  update?: Date;
  /**
   *
   * @type {ModelContact}
   * @memberof ModelAccountingContact
   */
  contact?: ModelContact;
  /**
   *
   * @type {string}
   * @memberof ModelAccountingContact
   */
  contactName?: string;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelAccountingContact
   */
  sevClient?: any;
  /**
   *
   * @type {number}
   * @memberof ModelAccountingContact
   */
  debitorNumber?: number;
  /**
   *
   * @type {number}
   * @memberof ModelAccountingContact
   */
  creditorNumber?: number;
}
/**
 *
 * @export
 * @interface ModelAccountingCorrection
 */
export interface ModelAccountingCorrection {
  id?: string;
  objectName?: "AccountingCorrection";
  /**
   * date the accounting correction was created
   * @type {Date}
   * @memberof ModelAccountingCorrection
   */
  create?: Date;
  /**
   * date the accounting correction was last updated
   * @type {Date}
   * @memberof ModelAccountingCorrection
   */
  update?: Date;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelAccountingCorrection
   */
  sevClient?: any;
  /**
   * object which is involved in the correction (eg. an invoice)
   * @type {any}
   * @memberof ModelAccountingCorrection
   */
  object?: any;
  /**
   * accounting type affected by the accounting correction
   * @type {any}
   * @memberof ModelAccountingCorrection
   */
  accountingType?: any;
  /**
   * amount of the correction
   * @type {number}
   * @memberof ModelAccountingCorrection
   */
  ammount?: number;
  /**
   *
   * @type {boolean}
   * @memberof ModelAccountingCorrection
   */
  enshrined?: boolean;
}
/**
 *
 * @export
 * @interface ModelAccountingIndex
 */
export interface ModelAccountingIndex {
  id?: string;
  objectName?: "AccountingIndex";
  /**
   * date the accounting index was created
   * @type {Date}
   * @memberof ModelAccountingIndex
   */
  sevClient?: Date;
  /**
   *
   * @type {string}
   * @memberof ModelAccountingIndex
   */
  keyword?: string;
  /**
   *
   * @type {any}
   * @memberof ModelAccountingIndex
   */
  accountingType?: any;
  /**
   *
   * @type {string}
   * @memberof ModelAccountingIndex
   */
  taxType?: string;
  /**
   *
   * @type {any}
   * @memberof ModelAccountingIndex
   */
  country?: any;
}
/**
 *
 * @export
 * @interface ModelAccountingSystem
 */
export interface ModelAccountingSystem {
  id?: string;
  objectName?: "AccountingSystem";
  /**
   * creation date of the accounting system
   * @type {Date}
   * @memberof ModelAccountingSystem
   */
  create?: Date;
  /**
   * date the accounting system was last updated
   * @type {Date}
   * @memberof ModelAccountingSystem
   */
  update?: Date;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {string}
   * @memberof ModelAccountingSystem
   */
  sevClient?: string;
  /**
   *
   * @type {string}
   * @memberof ModelAccountingSystem
   */
  name?: string;
  /**
   *
   * @type {ModelAccountingChart}
   * @memberof ModelAccountingSystem
   */
  accountingChart?: ModelAccountingChart;
}
/**
 *
 * @export
 * @interface ModelAccountingSystemNumber
 */
export interface ModelAccountingSystemNumber {
  id?: string;
  objectName?: "AccountingSystemNumber";
  /**
   * date the accounting system number was created
   * @type {Date}
   * @memberof ModelAccountingSystemNumber
   */
  create?: Date;
  /**
   * date the accounting system number was last updated
   * @type {Date}
   * @memberof ModelAccountingSystemNumber
   */
  update?: Date;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelAccountingSystemNumber
   */
  sevClient?: any;
  /**
   * accounting system number
   * @type {number}
   * @memberof ModelAccountingSystemNumber
   */
  number?: number;
  /**
   *
   * @type {number}
   * @memberof ModelAccountingSystemNumber
   */
  numberDepreciation?: number;
  /**
   *
   * @type {ModelAccountingType}
   * @memberof ModelAccountingSystemNumber
   */
  accountingType?: ModelAccountingType;
  /**
   *
   * @type {ModelAccountingSystem}
   * @memberof ModelAccountingSystemNumber
   */
  accountingSystem?: ModelAccountingSystem;
  /**
   *
   * @type {string}
   * @memberof ModelAccountingSystemNumber
   */
  bookingType?: string;
}
/**
 *
 * @export
 * @interface ModelAccountingType
 */
export interface ModelAccountingType {
  id?: string;
  objectName?: "AccountingType";
  /**
   * date the accounting type was created
   * @type {Date}
   * @memberof ModelAccountingType
   */
  create?: Date;
  /**
   * date the accounting type was last updated
   * @type {Date}
   * @memberof ModelAccountingType
   */
  update?: Date;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelAccountingType
   */
  sevClient?: any;
  /**
   *
   * @type {ModelAccountingType}
   * @memberof ModelAccountingType
   */
  parent?: ModelAccountingType;
  /**
   *
   * @type {string}
   * @memberof ModelAccountingType
   */
  name?: string;
  /**
   *
   * @type {number}
   * @memberof ModelAccountingType
   */
  skr03?: number;
  /**
   *
   * @type {number}
   * @memberof ModelAccountingType
   */
  skr03Deprecation?: number;
  /**
   *
   * @type {ModelAccountingChart}
   * @memberof ModelAccountingType
   */
  accountingChart?: ModelAccountingChart;
  /**
   *
   * @type {number}
   * @memberof ModelAccountingType
   */
  skr04?: number;
  /**
   *
   * @type {number}
   * @memberof ModelAccountingType
   */
  skr04Deprecation?: number;
  /**
   *
   * @type {number}
   * @memberof ModelAccountingType
   */
  skrAt?: number;
  /**
   *
   * @type {number}
   * @memberof ModelAccountingType
   */
  skrAtDeprecation?: number;
  /**
   *
   * @type {number}
   * @memberof ModelAccountingType
   */
  skrCh?: number;
  /**
   *
   * @type {number}
   * @memberof ModelAccountingType
   */
  skrChDeprecation?: number;
  /**
   *
   * @type {number}
   * @memberof ModelAccountingType
   */
  skrGr?: number;
  /**
   *
   * @type {number}
   * @memberof ModelAccountingType
   */
  skrGrDeprecation?: number;
  /**
   *
   * @type {string}
   * @memberof ModelAccountingType
   */
  type?: string;
  /**
   *
   * @type {string}
   * @memberof ModelAccountingType
   */
  translationCode?: string;
  /**
   *
   * @type {string}
   * @memberof ModelAccountingType
   */
  descriptionTranslationCode?: string;
  /**
   *
   * @type {string}
   * @memberof ModelAccountingType
   */
  connotationTranslationCode?: string;
  /**
   *
   * @type {string}
   * @memberof ModelAccountingType
   */
  bookingType?: string;
  /**
   *
   * @type {string}
   * @memberof ModelAccountingType
   */
  assetType?: string;
  /**
   *
   * @type {number}
   * @memberof ModelAccountingType
   */
  status?: number;
}
/**
 *
 * @export
 * @interface ModelAccountingTypeFactory
 */
export interface ModelAccountingTypeFactory {
  id?: string;
  objectName?: "AccountingTypeFactory";
  /**
   *
   * @type {ModelAccountingType}
   * @memberof ModelAccountingTypeFactory
   */
  accountingType?: ModelAccountingType;
}
/**
 *
 * @export
 * @interface ModelAggregator
 */
export interface ModelAggregator {
  id?: string;
  objectName?: "Aggregator";
}
/**
 *
 * @export
 * @interface ModelAsset
 */
export interface ModelAsset {
  id?: string;
  objectName?: "Asset";
  /**
   * date the asset was created
   * @type {Date}
   * @memberof ModelAsset
   */
  create?: Date;
  /**
   * date the asset was last updated
   * @type {Date}
   * @memberof ModelAsset
   */
  update?: Date;
  /**
   *
   * @type {ModelVoucherPos}
   * @memberof ModelAsset
   */
  voucherPos?: ModelVoucherPos;
  /**
   *
   * @type {string}
   * @memberof ModelAsset
   */
  name?: string;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelAsset
   */
  sevClient?: any;
  /**
   * lifespan of the asset
   * @type {number}
   * @memberof ModelAsset
   */
  usefulLife?: number;
  /**
   * date the asset was acquired
   * @type {Date}
   * @memberof ModelAsset
   */
  acquisitionDate?: Date;
  /**
   *
   * @type {number}
   * @memberof ModelAsset
   */
  purchasePrice?: number;
  /**
   *
   * @type {number}
   * @memberof ModelAsset
   */
  purchasePriceAccounting?: number;
  /**
   *
   * @type {number}
   * @memberof ModelAsset
   */
  taxRate?: number;
  /**
   *
   * @type {string}
   * @memberof ModelAsset
   */
  assetNumber?: string;
  /**
   *
   * @type {ModelAccountingType}
   * @memberof ModelAsset
   */
  accountingType?: ModelAccountingType;
  /**
   *
   * @type {number}
   * @memberof ModelAsset
   */
  status?: number;
  /**
   *
   * @type {boolean}
   * @memberof ModelAsset
   */
  enshrined?: boolean;
}
/**
 *
 * @export
 * @interface ModelAssetPos
 */
export interface ModelAssetPos {
  id?: string;
  objectName?: "AssetPos";
  /**
   * date the asset position was created
   * @type {Date}
   * @memberof ModelAssetPos
   */
  create?: Date;
  /**
   * date the asset position was last updated
   * @type {Date}
   * @memberof ModelAssetPos
   */
  update?: Date;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelAssetPos
   */
  sevClient?: any;
  /**
   * asset the asset position belongs to
   * @type {any}
   * @memberof ModelAssetPos
   */
  asset?: any;
  /**
   *
   * @type {number}
   * @memberof ModelAssetPos
   */
  year?: number;
  /**
   *
   * @type {number}
   * @memberof ModelAssetPos
   */
  depreciationAmount?: number;
  /**
   *
   * @type {number}
   * @memberof ModelAssetPos
   */
  residualValue?: number;
  /**
   *
   * @type {number}
   * @memberof ModelAssetPos
   */
  month?: number;
  /**
   *
   * @type {boolean}
   * @memberof ModelAssetPos
   */
  enshrined?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof ModelAssetPos
   */
  correction?: boolean;
}
/**
 *
 * @export
 * @interface ModelCategory
 */
export interface ModelCategory {
  id?: string;
  objectName?: "Category";
  /**
   * creation date of the category
   * @type {Date}
   * @memberof ModelCategory
   */
  create?: Date;
  /**
   * date the category was last updated
   * @type {Date}
   * @memberof ModelCategory
   */
  update?: Date;
  /**
   *
   * @type {ModelCategory}
   * @memberof ModelCategory
   */
  parent?: ModelCategory;
  /**
   *
   * @type {string}
   * @memberof ModelCategory
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof ModelCategory
   */
  objectType?: string;
  /**
   *
   * @type {number}
   * @memberof ModelCategory
   */
  priority?: number;
  /**
   *
   * @type {string}
   * @memberof ModelCategory
   */
  code?: string;
  /**
   *
   * @type {string}
   * @memberof ModelCategory
   */
  color?: string;
  /**
   *
   * @type {any}
   * @memberof ModelCategory
   */
  sevClient?: any;
  /**
   *
   * @type {string}
   * @memberof ModelCategory
   */
  postingAccount?: string;
  /**
   *
   * @type {string}
   * @memberof ModelCategory
   */
  type?: string;
  /**
   *
   * @type {string}
   * @memberof ModelCategory
   */
  translationCode?: string;
  /**
   *
   * @type {ModelEntryType}
   * @memberof ModelCategory
   */
  entryType?: ModelEntryType;
}
/**
 *
 * @export
 * @interface ModelCheckAccount
 */
export interface ModelCheckAccount {
  id?: string;
  objectName?: "CheckAccount";
  /**
   * date the CheckAccount was created
   * @type {Date}
   * @memberof ModelCheckAccount
   */
  create?: Date;
  /**
   * date the CheckAccount was last updated
   * @type {Date}
   * @memberof ModelCheckAccount
   */
  update?: Date;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelCheckAccount
   */
  sevClient?: any;
  /**
   * name of the CheckAccount
   * @type {string}
   * @memberof ModelCheckAccount
   */
  name?: string;
  /**
   * type of the CheckAccount
   * @type {string}
   * @memberof ModelCheckAccount
   */
  type?: string;
  /**
   *
   * @type {string}
   * @memberof ModelCheckAccount
   */
  importType?: string;
  /**
   *
   * @type {string}
   * @memberof ModelCheckAccount
   */
  currency?: string;
  /**
   *
   * @type {string}
   * @memberof ModelCheckAccount
   */
  checkAccId?: string;
  /**
   * boolean showing whether this account is the default account or not
   * @type {string}
   * @memberof ModelCheckAccount
   */
  defaultAccount?: string;
  /**
   *
   * @type {number}
   * @memberof ModelCheckAccount
   */
  status?: number;
  /**
   *
   * @type {string}
   * @memberof ModelCheckAccount
   */
  translationCode?: string;
  /**
   *
   * @type {string}
   * @memberof ModelCheckAccount
   */
  bankServer?: string;
  /**
   *
   * @type {number}
   * @memberof ModelCheckAccount
   */
  balance?: number;
  /**
   *
   * @type {number}
   * @memberof ModelCheckAccount
   */
  accountingNumber?: number;
  /**
   *
   * @type {string}
   * @memberof ModelCheckAccount
   */
  iban?: string;
  /**
   *
   * @type {string}
   * @memberof ModelCheckAccount
   */
  bic?: string;
  /**
   *
   * @type {boolean}
   * @memberof ModelCheckAccount
   */
  baseAccount?: boolean;
  /**
   *
   * @type {number}
   * @memberof ModelCheckAccount
   */
  priority?: number;
}
/**
 *
 * @export
 * @interface ModelCheckAccountTransaction
 */
export interface ModelCheckAccountTransaction {
  id?: string;
  objectName?: "CheckAccountTransaction";
  /**
   * date the check account transaction was created
   * @type {Date}
   * @memberof ModelCheckAccountTransaction
   */
  create?: Date;
  /**
   * date the check account transaction was last updated
   * @type {Date}
   * @memberof ModelCheckAccountTransaction
   */
  update?: Date;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelCheckAccountTransaction
   */
  sevClient?: any;
  /**
   *
   * @type {Date}
   * @memberof ModelCheckAccountTransaction
   */
  valueDate?: Date;
  /**
   *
   * @type {Date}
   * @memberof ModelCheckAccountTransaction
   */
  entryDate?: Date;
  /**
   * amount of the transaction
   * @type {number}
   * @memberof ModelCheckAccountTransaction
   */
  amount?: number;
  /**
   *
   * @type {string}
   * @memberof ModelCheckAccountTransaction
   */
  gvCode?: string;
  /**
   *
   * @type {string}
   * @memberof ModelCheckAccountTransaction
   */
  entryText?: string;
  /**
   *
   * @type {string}
   * @memberof ModelCheckAccountTransaction
   */
  primaNotaNo?: string;
  /**
   *
   * @type {string}
   * @memberof ModelCheckAccountTransaction
   */
  paymtPurpose?: string;
  /**
   * payer bank code
   * @type {string}
   * @memberof ModelCheckAccountTransaction
   */
  payeePayerBankCode?: string;
  /**
   * payer account number
   * @type {string}
   * @memberof ModelCheckAccountTransaction
   */
  payeePayerAcctNo?: string;
  /**
   * payer name
   * @type {string}
   * @memberof ModelCheckAccountTransaction
   */
  payeePayerName?: string;
  /**
   *
   * @type {ModelCheckAccount}
   * @memberof ModelCheckAccountTransaction
   */
  checkAccount?: ModelCheckAccount;
  /**
   *
   * @type {number}
   * @memberof ModelCheckAccountTransaction
   */
  status?: number;
  /**
   *
   * @type {string}
   * @memberof ModelCheckAccountTransaction
   */
  score?: string;
  /**
   * hash to be compared
   * @type {string}
   * @memberof ModelCheckAccountTransaction
   */
  compareHash?: string;
  /**
   *
   * @type {any}
   * @memberof ModelCheckAccountTransaction
   */
  entryType?: any;
  /**
   *
   * @type {boolean}
   * @memberof ModelCheckAccountTransaction
   */
  enshrined?: boolean;
  /**
   * source check account transaction used for transfers
   * @type {any}
   * @memberof ModelCheckAccountTransaction
   */
  sourceTransaction?: any;
  /**
   * destination check account transaction used for transfers
   * @type {any}
   * @memberof ModelCheckAccountTransaction
   */
  targetTransaction?: any;
  /**
   *
   * @type {string}
   * @memberof ModelCheckAccountTransaction
   */
  obonoReceiptUuid?: string;
}
/**
 *
 * @export
 * @interface ModelCheckAccountTransactionLog
 */
export interface ModelCheckAccountTransactionLog {
  id?: string;
  objectName?: "CheckAccountTransactionLog";
  /**
   * date the check account transaction log was created
   * @type {Date}
   * @memberof ModelCheckAccountTransactionLog
   */
  create?: Date;
  /**
   *
   * @type {ModelCheckAccountTransaction}
   * @memberof ModelCheckAccountTransactionLog
   */
  checkAccountTransaction?: ModelCheckAccountTransaction;
  /**
   * the status before the logged change
   * @type {number}
   * @memberof ModelCheckAccountTransactionLog
   */
  fromStatus?: number;
  /**
   * the status after the logged change
   * @type {number}
   * @memberof ModelCheckAccountTransactionLog
   */
  toStatus?: number;
  /**
   * the logged amount which was paid
   * @type {number}
   * @memberof ModelCheckAccountTransactionLog
   */
  amountPaid?: number;
  /**
   *
   * @type {Date}
   * @memberof ModelCheckAccountTransactionLog
   */
  bookingDate?: Date;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelCheckAccountTransactionLog
   */
  sevClient?: any;
  /**
   * Invoice/Voucher to which the logged transaction belongs
   * @type {any}
   * @memberof ModelCheckAccountTransactionLog
   */
  object?: any;
}

/**
 *
 * @export
 * @interface ModelContact
 */
export interface ModelContact {
  id?: number;
  objectName?: "Contact";
  /**
   *
   * @type {ModelContactAddress}
   * @memberof ModelContact
   */
  address?: ModelContactAddress;
  /**
   * the creation date of the contact
   * @type {Date}
   * @memberof ModelContact
   */
  create?: Date;
  /**
   * date, the contact was last updated
   * @type {Date}
   * @memberof ModelContact
   */
  update?: Date;
  /**
   * name of the contact
   * @type {string}
   * @memberof ModelContact
   */
  name?: string;
  /**
   * status of the contact
   * @type {number}
   * @memberof ModelContact
   */
  status?: number;
  /**
   * customer number of the contact
   * @type {number}
   * @memberof ModelContact
   */
  customerNumber?: number;
  /**
   *
   * @type {ModelContact}
   * @memberof ModelContact
   */
  parent?: ModelContact;
  /**
   * surname of the contact
   * @type {string}
   * @memberof ModelContact
   */
  surename?: string;
  /**
   * family name of the contact
   * @type {string}
   * @memberof ModelContact
   */
  familyname?: string;
  /**
   * title of the contact
   * @type {string}
   * @memberof ModelContact
   */
  titel?: string;
  /**
   *
   * @type {ModelCategory}
   * @memberof ModelContact
   */
  category?: ModelCategory;
  /**
   * description of the contact
   * @type {string}
   * @memberof ModelContact
   */
  description?: string;
  /**
   * any academic title of the contact
   * @type {string}
   * @memberof ModelContact
   */
  academicTitle?: string;
  /**
   * gender of the contact
   * @type {string}
   * @memberof ModelContact
   */
  gender?: string;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelContact
   */
  sevClient?: any;
  /**
   * second name of the contact
   * @type {string}
   * @memberof ModelContact
   */
  name2?: string;
  /**
   * birthday of the contact
   * @type {Date}
   * @memberof ModelContact
   */
  birthday?: Date;
  /**
   * vat number of the contact
   * @type {string}
   * @memberof ModelContact
   */
  vatNumber?: string;
  /**
   * bank account of the contact
   * @type {string}
   * @memberof ModelContact
   */
  bankAccount?: string;
  /**
   * bank number of the contact
   * @type {string}
   * @memberof ModelContact
   */
  bankNumber?: string;
  /**
   *
   * @type {ModelPaymentMethod}
   * @memberof ModelContact
   */
  paymentMethod?: ModelPaymentMethod;
  /**
   *
   * @type {ModelEntryType}
   * @memberof ModelContact
   */
  entryType?: ModelEntryType;
  /**
   * default cashback time of the contact
   * @type {number}
   * @memberof ModelContact
   */
  defaultCashbackTime?: number;
  /**
   * default cashback percentage of the contact
   * @type {number}
   * @memberof ModelContact
   */
  defaultCashbackPercent?: number;
  /**
   * default time to pay of the contact
   * @type {number}
   * @memberof ModelContact
   */
  defaultTimeToPay?: number;
  /**
   * tax number of the contact
   * @type {string}
   * @memberof ModelContact
   */
  taxNumber?: string;
  /**
   * tax office of the contact
   * @type {string}
   * @memberof ModelContact
   */
  taxOffice?: string;
}
/**
 *
 * @export
 * @interface ModelContactAddress
 */
export interface ModelContactAddress {
  id?: string;
  objectName?: "ContactAddress";
  /**
   * the creation date of the contact
   * @type {Date}
   * @memberof ModelContactAddress
   */
  create?: Date;
  /**
   * date, the contact was last updated
   * @type {Date}
   * @memberof ModelContactAddress
   */
  update?: Date;
  /**
   *
   * @type {ModelContact}
   * @memberof ModelContactAddress
   */
  contact?: ModelContact;
  /**
   *
   * @type {string}
   * @memberof ModelContactAddress
   */
  street?: string;
  /**
   * zip of the city/village
   * @type {string}
   * @memberof ModelContactAddress
   */
  zip?: string;
  /**
   *
   * @type {string}
   * @memberof ModelContactAddress
   */
  city?: string;
  /**
   *
   * @type {ModelStaticCountry}
   * @memberof ModelContactAddress
   */
  country?: ModelStaticCountry;
  /**
   *
   * @type {ModelCategory}
   * @memberof ModelContactAddress
   */
  category?: ModelCategory;
  /**
   *
   * @type {string}
   * @memberof ModelContactAddress
   */
  name?: string;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelContactAddress
   */
  sevClient?: any;
  /**
   *
   * @type {string}
   * @memberof ModelContactAddress
   */
  name2?: string;
  /**
   *
   * @type {string}
   * @memberof ModelContactAddress
   */
  name3?: string;
  /**
   *
   * @type {string}
   * @memberof ModelContactAddress
   */
  name4?: string;
}
/**
 * Below are the models which can be used for the functions in Contact/Factory.php. Beware that you need to use them without the underscore at the beginning!
 * @export
 * @interface ModelContactFactory
 */
export interface ModelContactFactory {
  id?: string;
  objectName?: "ContactFactory";
  /**
   *
   * @type {ModelContact}
   * @memberof ModelContactFactory
   */
  contact?: ModelContact;
}
/**
 *
 * @export
 * @interface ModelCostCentre
 */
export interface ModelCostCentre {
  id?: string;
  objectName?: "CostCentre";
  /**
   * date the cost centre was created
   * @type {Date}
   * @memberof ModelCostCentre
   */
  create?: Date;
  /**
   * date the cost centre was last updated
   * @type {Date}
   * @memberof ModelCostCentre
   */
  update?: Date;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelCostCentre
   */
  sevClient?: any;
  /**
   *
   * @type {string}
   * @memberof ModelCostCentre
   */
  number?: string;
  /**
   *
   * @type {string}
   * @memberof ModelCostCentre
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof ModelCostCentre
   */
  color?: string;
  /**
   *
   * @type {string}
   * @memberof ModelCostCentre
   */
  postingAccount?: string;
}
/**
 *
 * @export
 * @interface ModelCurrencyExchangeRate
 */
export interface ModelCurrencyExchangeRate {
  id?: string;
  objectName?: "CurrencyExchangeRate";
  /**
   * date of the currency exchange rate
   * @type {Date}
   * @memberof ModelCurrencyExchangeRate
   */
  date?: Date;
  /**
   * currency which is rated
   * @type {string}
   * @memberof ModelCurrencyExchangeRate
   */
  currency?: string;
  /**
   * rate of the currency compared to EUR
   * @type {number}
   * @memberof ModelCurrencyExchangeRate
   */
  rate?: number;
}
/**
 *
 * @export
 * @interface Discounts
 */
export interface Discounts {
  id?: string;
  objectName?: "Discounts";
  /**
   * date the discount was created
   * @type {Date}
   * @memberof Discounts
   */
  create?: Date;
  /**
   * date the discount was last updated
   * @type {Date}
   * @memberof Discounts
   */
  update?: Date;
  /**
   * object to which the discount belongs
   * @type {any}
   * @memberof Discounts
   */
  object?: any;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof Discounts
   */
  sevClient?: any;
  /**
   * specifies if a discount is enabled
   * @type {boolean}
   * @memberof Discounts
   */
  discount?: boolean;
  /**
   * description of the discount
   * @type {string}
   * @memberof Discounts
   */
  text?: string;
  /**
   * specifies if discount is of type percentage, otherwise its a value
   * @type {boolean}
   * @memberof Discounts
   */
  percentage?: boolean;
  /**
   *
   * @type {number}
   * @memberof Discounts
   */
  value?: number;
}
/**
 *
 * @export
 * @interface ModelDocServer
 */
export interface ModelDocServer {
  id?: string;
  objectName?: "DocServer";
}
/**
 *
 * @export
 * @interface ModelDocument
 */
export interface ModelDocument {
  id?: string;
  objectName?: "Document";
  /**
   * date the document was created
   * @type {Date}
   * @memberof ModelDocument
   */
  create?: Date;
  /**
   * date the document was last updated
   * @type {Date}
   * @memberof ModelDocument
   */
  update?: Date;
  /**
   *
   * @type {any}
   * @memberof ModelDocument
   */
  object?: any;
  /**
   *
   * @type {string}
   * @memberof ModelDocument
   */
  documentNumber?: string;
  /**
   *
   * @type {Date}
   * @memberof ModelDocument
   */
  baseObject?: Date;
  /**
   *
   * @type {ModelSevUser}
   * @memberof ModelDocument
   */
  createUser?: ModelSevUser;
  /**
   *
   * @type {ModelSevUser}
   * @memberof ModelDocument
   */
  updateUser?: ModelSevUser;
  /**
   *
   * @type {string}
   * @memberof ModelDocument
   */
  mimeType?: string;
  /**
   *
   * @type {string}
   * @memberof ModelDocument
   */
  description?: string;
  /**
   *
   * @type {any}
   * @memberof ModelDocument
   */
  objectAction?: any;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelDocument
   */
  sevClient?: any;
  /**
   *
   * @type {ModelDocumentFolder}
   * @memberof ModelDocument
   */
  folder?: ModelDocumentFolder;
  /**
   *
   * @type {string}
   * @memberof ModelDocument
   */
  filename?: string;
  /**
   *
   * @type {number}
   * @memberof ModelDocument
   */
  status?: number;
  /**
   *
   * @type {string}
   * @memberof ModelDocument
   */
  extension?: string;
  /**
   *
   * @type {number}
   * @memberof ModelDocument
   */
  filesize?: number;
}
/**
 * Below are the models which can be used for the functions in Document/Factory.php. Beware that you need to use them without the underscore at the beginning!
 * @export
 * @interface ModelDocumentFactory
 */
export interface ModelDocumentFactory {
  id?: string;
  objectName?: "DocumentFactory";
  /**
   *
   * @type {ModelDocument}
   * @memberof ModelDocumentFactory
   */
  modelDocument?: ModelDocument;
}
/**
 *
 * @export
 * @interface ModelDocumentFolder
 */
export interface ModelDocumentFolder {
  id?: string;
  objectName?: "DocumentFolder";
  /**
   * date the document folder was created
   * @type {Date}
   * @memberof ModelDocumentFolder
   */
  create?: Date;
  /**
   * date the document folder was last updated
   * @type {Date}
   * @memberof ModelDocumentFolder
   */
  update?: Date;
  /**
   *
   * @type {string}
   * @memberof ModelDocumentFolder
   */
  name?: string;
  /**
   *
   * @type {ModelDocumentFolder}
   * @memberof ModelDocumentFolder
   */
  parent?: ModelDocumentFolder;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelDocumentFolder
   */
  sevClient?: any;
  /**
   *
   * @type {any}
   * @memberof ModelDocumentFolder
   */
  object?: any;
  /**
   *
   * @type {number}
   * @memberof ModelDocumentFolder
   */
  status?: number;
  /**
   *
   * @type {string}
   * @memberof ModelDocumentFolder
   */
  translationCode?: string;
}
/**
 *
 * @export
 * @interface ModelDocumentIndex
 */
export interface ModelDocumentIndex {
  id?: string;
  objectName?: "DocumentIndex";
  /**
   * date the document index was created
   * @type {Date}
   * @memberof ModelDocumentIndex
   */
  create?: Date;
  /**
   * date the document index was last updated
   * @type {Date}
   * @memberof ModelDocumentIndex
   */
  update?: Date;
  /**
   * user that created the document index
   * @type {any}
   * @memberof ModelDocumentIndex
   */
  user?: any;
  /**
   * the document to which the index belongs
   * @type {any}
   * @memberof ModelDocumentIndex
   */
  document?: any;
  /**
   * index
   * @type {number}
   * @memberof ModelDocumentIndex
   */
  index?: number;
  /**
   *
   * @type {string}
   * @memberof ModelDocumentIndex
   */
  name?: string;
  /**
   * status of the document index
   * @type {number}
   * @memberof ModelDocumentIndex
   */
  status?: number;
  /**
   *
   * @type {string}
   * @memberof ModelDocumentIndex
   */
  extension?: string;
  /**
   *
   * @type {string}
   * @memberof ModelDocumentIndex
   */
  mimeType?: string;
  /**
   * sevClient that created the document index
   * @type {any}
   * @memberof ModelDocumentIndex
   */
  sevClient?: any;
}
/**
 *
 * @export
 * @interface ModelEmail
 */
export interface ModelEmail {
  id?: string;
  objectName?: "Email";
  /**
   * creation date of the Email
   * @type {Date}
   * @memberof ModelEmail
   */
  create?: Date;
  /**
   * date the email was last updated
   * @type {Date}
   * @memberof ModelEmail
   */
  update?: Date;
  /**
   *
   * @type {ModelInvoice}
   * @memberof ModelEmail
   */
  object?: ModelInvoice.Invoice;
  /**
   * sender of the email
   * @type {string}
   * @memberof ModelEmail
   */
  from?: string;
  /**
   * recipient of the email
   * @type {string}
   * @memberof ModelEmail
   */
  to?: string;
  /**
   * subject of the email
   * @type {string}
   * @memberof ModelEmail
   */
  subject?: string;
  /**
   * text written in the email
   * @type {string}
   * @memberof ModelEmail
   */
  text?: string;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelEmail
   */
  sevClient?: any;
  /**
   * cc of the email
   * @type {string}
   * @memberof ModelEmail
   */
  cc?: string;
  /**
   * bcc of the email
   * @type {string}
   * @memberof ModelEmail
   */
  bcc?: string;
  /**
   * arrival date of the email
   * @type {Date}
   * @memberof ModelEmail
   */
  arrived?: Date;
}
/**
 *
 * @export
 * @interface ModelEntryType
 */
export interface ModelEntryType {
  id?: string;
  objectName?: "EntryType";
  /**
   * date the entry type was created
   * @type {Date}
   * @memberof ModelEntryType
   */
  create?: Date;
  /**
   * date the entry type was last updated
   * @type {Date}
   * @memberof ModelEntryType
   */
  update?: Date;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelEntryType
   */
  sevClient?: any;
  /**
   *
   * @type {string}
   * @memberof ModelEntryType
   */
  name?: string;
}
/**
 *
 * @export
 * @interface ModelExport
 */
export interface ModelExport {
  id?: string;
  objectName?: "Export";
}
/**
 *
 * @export
 * @interface ModelFeed
 */
export interface ModelFeed {
  id?: string;
  objectName?: "Feed";
  /**
   * creation date of the feed
   * @type {Date}
   * @memberof ModelFeed
   */
  create?: Date;
  /**
   * date the feed was last updated
   * @type {Date}
   * @memberof ModelFeed
   */
  update?: Date;
  /**
   *
   * @type {any}
   * @memberof ModelFeed
   */
  object?: any;
  /**
   *
   * @type {string}
   * @memberof ModelFeed
   */
  text?: string;
  /**
   *
   * @type {any}
   * @memberof ModelFeed
   */
  type?: any;
  /**
   *
   * @type {ModelSevUser}
   * @memberof ModelFeed
   */
  user?: ModelSevUser;
  /**
   *
   * @type {any}
   * @memberof ModelFeed
   */
  objectAction?: any;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelFeed
   */
  sevClient?: any;
}
/**
 *
 * @export
 * @interface ModelHelp
 */
export interface ModelHelp {
  id?: string;
  objectName?: "Help";
}
/**
 * The inventory part log contains all part bookings (acquisition/dispatch)
 * @export
 * @interface ModelInventoryPartLog
 */
export interface ModelInventoryPartLog {
  id?: string;
  objectName?: "InventoryPartLog";
  /**
   * creation date of the inventory part log
   * @type {Date}
   * @memberof ModelInventoryPartLog
   */
  create?: Date;
  /**
   *
   * @type {Date}
   * @memberof ModelInventoryPartLog
   */
  postingDate?: Date;
  /**
   * part which is involved in the part booking which is logged
   * @type {any}
   * @memberof ModelInventoryPartLog
   */
  part?: any;
  /**
   * supplier which is involved in the part booking which is logged
   * @type {any}
   * @memberof ModelInventoryPartLog
   */
  supplier?: any;
  /**
   * amount booked which is logged
   * @type {number}
   * @memberof ModelInventoryPartLog
   */
  ammount?: number;
  /**
   * description of the booking which is logged
   * @type {string}
   * @memberof ModelInventoryPartLog
   */
  name?: string;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelInventoryPartLog
   */
  sevClient?: any;
  /**
   *
   * @type {any}
   * @memberof ModelInventoryPartLog
   */
  object?: any;
}

/**
 *
 * @export
 * @interface ModelLetter
 */
export interface ModelLetter {
  id?: string;
  objectName?: "Letter";
  /**
   * creation date of the letter
   * @type {Date}
   * @memberof ModelLetter
   */
  create?: Date;
  /**
   * date the letter was last updated
   * @type {Date}
   * @memberof ModelLetter
   */
  update?: Date;
  /**
   *
   * @type {string}
   * @memberof ModelLetter
   */
  letterNumber?: string;
  /**
   *
   * @type {ModelContact}
   * @memberof ModelLetter
   */
  contact?: ModelContact;
  /**
   *
   * @type {Date}
   * @memberof ModelLetter
   */
  letterDate?: Date;
  /**
   *
   * @type {string}
   * @memberof ModelLetter
   */
  header?: string;
  /**
   *
   * @type {string}
   * @memberof ModelLetter
   */
  addressName?: string;
  /**
   *
   * @type {string}
   * @memberof ModelLetter
   */
  addressName2?: string;
  /**
   *
   * @type {string}
   * @memberof ModelLetter
   */
  addressStreet?: string;
  /**
   *
   * @type {string}
   * @memberof ModelLetter
   */
  addressZip?: string;
  /**
   *
   * @type {string}
   * @memberof ModelLetter
   */
  addressCity?: string;
  /**
   *
   * @type {ModelStaticCountry}
   * @memberof ModelLetter
   */
  addressCountry?: ModelStaticCountry;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelLetter
   */
  sevClient?: any;
  /**
   *
   * @type {number}
   * @memberof ModelLetter
   */
  status?: number;
  /**
   *
   * @type {ModelSevUser}
   * @memberof ModelLetter
   */
  contactPerson?: ModelSevUser;
  /**
   *
   * @type {string}
   * @memberof ModelLetter
   */
  addressParentName?: string;
  /**
   *
   * @type {ModelContactAddress}
   * @memberof ModelLetter
   */
  addressContactRef?: ModelContactAddress;
  /**
   * text for the letter
   * @type {string}
   * @memberof ModelLetter
   */
  text?: string;
  /**
   *
   * @type {Date}
   * @memberof ModelLetter
   */
  sendDate?: Date;
  /**
   *
   * @type {string}
   * @memberof ModelLetter
   */
  addressParentName2?: string;
  /**
   *
   * @type {string}
   * @memberof ModelLetter
   */
  addressGender?: string;
  /**
   *
   * @type {string}
   * @memberof ModelLetter
   */
  address?: string;
  /**
   *
   * @type {string}
   * @memberof ModelLetter
   */
  sendType?: string;
}
/**
 * Note that Model_ObjectUsed is read-only
 * @export
 * @interface ModelObjectUsed
 */
export interface ModelObjectUsed {
  id?: string;
  objectName?: "ObjectUsed";
  /**
   * date the object used was created
   * @type {Date}
   * @memberof ModelObjectUsed
   */
  create?: Date;
  /**
   * sevUser that used an object
   * @type {any}
   * @memberof ModelObjectUsed
   */
  user?: any;
  /**
   * object that was used
   * @type {any}
   * @memberof ModelObjectUsed
   */
  object?: any;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelObjectUsed
   */
  sevClient?: any;
}
/**
 * Note that Model_ObjectViewed is read-only!
 * @export
 * @interface ModelObjectViewed
 */
export interface ModelObjectViewed {
  id?: string;
  objectName?: "ObjectViewed";
  /**
   * date the object viewed was created
   * @type {Date}
   * @memberof ModelObjectViewed
   */
  create?: Date;
  /**
   * date the object viewed was last updated
   * @type {Date}
   * @memberof ModelObjectViewed
   */
  update?: Date;
  /**
   * sevUser that viewed the object
   * @type {any}
   * @memberof ModelObjectViewed
   */
  user?: any;
  /**
   * object that was viewed
   * @type {any}
   * @memberof ModelObjectViewed
   */
  object?: any;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelObjectViewed
   */
  sevClient?: any;
}
/**
 *
 * @export
 * @interface ModelOrder
 */
export interface ModelOrder {
  id?: string;
  objectName?: "Order";
  /**
   * date the order was created
   * @type {Date}
   * @memberof ModelOrder
   */
  create?: Date;
  /**
   * date the order was last updated
   * @type {Date}
   * @memberof ModelOrder
   */
  update?: Date;
  /**
   *
   * @type {string}
   * @memberof ModelOrder
   */
  oderNumber?: string;
  /**
   *
   * @type {ModelContact}
   * @memberof ModelOrder
   */
  contact?: ModelContact;
  /**
   *
   * @type {Date}
   * @memberof ModelOrder
   */
  orderDate?: Date;
  /**
   *
   * @type {number}
   * @memberof ModelOrder
   */
  status?: number;
  /**
   *
   * @type {string}
   * @memberof ModelOrder
   */
  header?: string;
  /**
   *
   * @type {string}
   * @memberof ModelOrder
   */
  headText?: string;
  /**
   *
   * @type {string}
   * @memberof ModelOrder
   */
  footText?: string;
  /**
   *
   * @type {string}
   * @memberof ModelOrder
   */
  addressName?: string;
  /**
   *
   * @type {string}
   * @memberof ModelOrder
   */
  addressStreet?: string;
  /**
   *
   * @type {string}
   * @memberof ModelOrder
   */
  addressZip?: string;
  /**
   *
   * @type {string}
   * @memberof ModelOrder
   */
  addressCity?: string;
  /**
   *
   * @type {ModelStaticCountry}
   * @memberof ModelOrder
   */
  addressCountry?: ModelStaticCountry;
  /**
   *
   * @type {ModelSevUser}
   * @memberof ModelOrder
   */
  createUser?: ModelSevUser;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelOrder
   */
  sevClient?: any;
  /**
   *
   * @type {string}
   * @memberof ModelOrder
   */
  deliveryTerms?: string;
  /**
   *
   * @type {string}
   * @memberof ModelOrder
   */
  paymentTerms?: string;
  /**
   *
   * @type {any}
   * @memberof ModelOrder
   */
  origin?: any;
  /**
   *
   * @type {number}
   * @memberof ModelOrder
   */
  version?: number;
  /**
   *
   * @type {boolean}
   * @memberof ModelOrder
   */
  smallSettlement?: boolean;
  /**
   *
   * @type {ModelSevUser}
   * @memberof ModelOrder
   */
  contactPerson?: ModelSevUser;
  /**
   *
   * @type {number}
   * @memberof ModelOrder
   */
  taxRate?: number;
  /**
   *
   * @type {ModelTaxSet}
   * @memberof ModelOrder
   */
  taxSet?: ModelTaxSet;
  /**
   *
   * @type {string}
   * @memberof ModelOrder
   */
  taxText?: string;
  /**
   *
   * @type {string}
   * @memberof ModelOrder
   */
  addressParentName?: string;
  /**
   *
   * @type {ModelContactAddress}
   * @memberof ModelOrder
   */
  addressContactRef?: ModelContactAddress;
  /**
   *
   * @type {string}
   * @memberof ModelOrder
   */
  taxType?: string;
  /**
   *
   * @type {string}
   * @memberof ModelOrder
   */
  orderType?: string;
  /**
   * date the order was sent
   * @type {Date}
   * @memberof ModelOrder
   */
  sendDate?: Date;
  /**
   *
   * @type {string}
   * @memberof ModelOrder
   */
  addressParentName2?: string;
  /**
   *
   * @type {string}
   * @memberof ModelOrder
   */
  addressName2?: string;
  /**
   *
   * @type {string}
   * @memberof ModelOrder
   */
  addressGender?: string;
  /**
   *
   * @type {ModelContactAddress}
   * @memberof ModelOrder
   */
  address?: ModelContactAddress;
  /**
   *
   * @type {string}
   * @memberof ModelOrder
   */
  currency?: string;
  /**
   *
   * @type {number}
   * @memberof ModelOrder
   */
  sumNet?: number;
  /**
   *
   * @type {number}
   * @memberof ModelOrder
   */
  sumTax?: number;
  /**
   *
   * @type {number}
   * @memberof ModelOrder
   */
  sumGross?: number;
  /**
   *
   * @type {number}
   * @memberof ModelOrder
   */
  sumDiscounts?: number;
  /**
   *
   * @type {number}
   * @memberof ModelOrder
   */
  sumNetForeignCurrency?: number;
  /**
   *
   * @type {number}
   * @memberof ModelOrder
   */
  sumTaxForeignCurrency?: number;
  /**
   *
   * @type {number}
   * @memberof ModelOrder
   */
  sumGrossForeignCurrency?: number;
  /**
   *
   * @type {number}
   * @memberof ModelOrder
   */
  sumDiscountsForeignCurrency?: number;
  /**
   *
   * @type {number}
   * @memberof ModelOrder
   */
  weight?: number;
  /**
   *
   * @type {ModelEntryType}
   * @memberof ModelOrder
   */
  entryType?: ModelEntryType;
  /**
   *
   * @type {string}
   * @memberof ModelOrder
   */
  costumerInternalNote?: string;
  /**
   *
   * @type {boolean}
   * @memberof ModelOrder
   */
  showNet?: boolean;
  /**
   *
   * @type {string}
   * @memberof ModelOrder
   */
  sendType?: string;
}
/**
 *
 * @export
 * @interface ModelOrderLog
 */
export interface ModelOrderLog {
  id?: string;
  objectName?: "OrderLog";
  /**
   * date the order log was created
   * @type {Date}
   * @memberof ModelOrderLog
   */
  create?: Date;
  /**
   * date the order was last updated
   * @type {Date}
   * @memberof ModelOrderLog
   */
  update?: Date;
  /**
   * date of the order log
   * @type {Date}
   * @memberof ModelOrderLog
   */
  date?: Date;
  /**
   *
   * @type {ModelOrder}
   * @memberof ModelOrderLog
   */
  order?: ModelOrder;
  /**
   * the object which was involved in the logged order action (eg. a created invoice)
   * @type {any}
   * @memberof ModelOrderLog
   */
  object?: any;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelOrderLog
   */
  sevClient?: any;
  /**
   * currency of the logged order
   * @type {string}
   * @memberof ModelOrderLog
   */
  currency?: string;
  /**
   * amount of the order position
   * @type {number}
   * @memberof ModelOrderLog
   */
  amount?: number;
  /**
   * type of the order position amount, can be one from unity or custom
   * @type {string}
   * @memberof ModelOrderLog
   */
  amountType?: string;
  /**
   * tax rate of the order
   * @type {number}
   * @memberof ModelOrderLog
   */
  taxRate?: number;
}
/**
 *
 * @export
 * @interface ModelOrderPos
 */
export interface ModelOrderPos {
  id?: string;
  objectName?: "OrderPos";
  /**
   * creation date of the order position
   * @type {Date}
   * @memberof ModelOrderPos
   */
  create?: Date;
  /**
   * date the order position was last updated
   * @type {Date}
   * @memberof ModelOrderPos
   */
  update?: Date;
  /**
   *
   * @type {ModelOrder}
   * @memberof ModelOrderPos
   */
  order?: ModelOrder;
  /**
   *
   * @type {ModelPart}
   * @memberof ModelOrderPos
   */
  part?: ModelPart;
  /**
   * quantity of the Model_Part
   * @type {number}
   * @memberof ModelOrderPos
   */
  quantity?: number;
  /**
   * price of the Model_Part
   * @type {number}
   * @memberof ModelOrderPos
   */
  price?: number;
  /**
   *
   * @type {string}
   * @memberof ModelOrderPos
   */
  name?: string;
  /**
   *
   * @type {number}
   * @memberof ModelOrderPos
   */
  priority?: number;
  /**
   *
   * @type {ModelUnity}
   * @memberof ModelOrderPos
   */
  unity?: ModelUnity;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelOrderPos
   */
  sevClient?: any;
  /**
   *
   * @type {number}
   * @memberof ModelOrderPos
   */
  positionNumber?: number;
  /**
   *
   * @type {string}
   * @memberof ModelOrderPos
   */
  text?: string;
  /**
   *
   * @type {number}
   * @memberof ModelOrderPos
   */
  discount?: number;
  /**
   *
   * @type {boolean}
   * @memberof ModelOrderPos
   */
  optional?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof ModelOrderPos
   */
  optionalChargeable?: boolean;
  /**
   *
   * @type {number}
   * @memberof ModelOrderPos
   */
  taxRate?: number;
  /**
   *
   * @type {number}
   * @memberof ModelOrderPos
   */
  sumNet?: number;
  /**
   *
   * @type {number}
   * @memberof ModelOrderPos
   */
  sumGross?: number;
  /**
   *
   * @type {number}
   * @memberof ModelOrderPos
   */
  sumDiscount?: number;
}
/**
 *
 * @export
 * @interface ModelPart
 */
export interface ModelPart {
  id?: string;
  objectName?: "Part";
  /**
   * date the part was created
   * @type {Date}
   * @memberof ModelPart
   */
  create?: Date;
  /**
   * date the part was last updated
   * @type {Date}
   * @memberof ModelPart
   */
  update?: Date;
  /**
   * name of the part
   * @type {string}
   * @memberof ModelPart
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof ModelPart
   */
  partNumber?: string;
  /**
   *
   * @type {string}
   * @memberof ModelPart
   */
  text?: string;
  /**
   *
   * @type {ModelCategory}
   * @memberof ModelPart
   */
  category?: ModelCategory;
  /**
   *
   * @type {number}
   * @memberof ModelPart
   */
  stock?: number;
  /**
   *
   * @type {ModelUnity}
   * @memberof ModelPart
   */
  unity?: ModelUnity;
  /**
   * price for a partner. Can be added via the options in the inventory where the part is displayed
   * @type {number}
   * @memberof ModelPart
   */
  pricePartner?: number;
  /**
   * price for a customer. Can be added via the options in the inventory where the part is displayed
   * @type {number}
   * @memberof ModelPart
   */
  priceCustomer?: number;
  /**
   * price of the part
   * @type {number}
   * @memberof ModelPart
   */
  price?: number;
  /**
   *
   * @type {ModelUnity}
   * @memberof ModelPart
   */
  secondUnity?: ModelUnity;
  /**
   * factor for the second unity resulting in a new sumNet for the secondUnity
   * @type {number}
   * @memberof ModelPart
   */
  secondUnityFactor?: number;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelPart
   */
  sevClient?: any;
  /**
   *
   * @type {number}
   * @memberof ModelPart
   */
  pricePurchase?: number;
  /**
   *
   * @type {number}
   * @memberof ModelPart
   */
  taxRate?: number;
  /**
   *
   * @type {string}
   * @memberof ModelPart
   */
  image?: string;
  /**
   *
   * @type {number}
   * @memberof ModelPart
   */
  status?: number;
  /**
   * characteristics of the part
   * @type {string}
   * @memberof ModelPart
   */
  characteristics?: string;
  /**
   *
   * @type {ModelPart}
   * @memberof ModelPart
   */
  origin?: ModelPart;
  /**
   *
   * @type {string}
   * @memberof ModelPart
   */
  characteristicsString?: string;
  /**
   *
   * @type {string}
   * @memberof ModelPart
   */
  internalComment?: string;
  /**
   *
   * @type {ModelEntryType}
   * @memberof ModelPart
   */
  entryType?: ModelEntryType;
  /**
   *
   * @type {ModelAccountingType}
   * @memberof ModelPart
   */
  accountingType?: ModelAccountingType;
  /**
   *
   * @type {number}
   * @memberof ModelPart
   */
  priceNet?: number;
  /**
   *
   * @type {number}
   * @memberof ModelPart
   */
  priceGross?: number;
}

/**
 *
 * @export
 * @interface ModelPartUnity
 */
export interface ModelPartUnity {
  id?: string;
  objectName?: "PartUnity";
  /**
   * date the part unity was created
   * @type {Date}
   * @memberof ModelPartUnity
   */
  create?: Date;
  /**
   * date the part unity was last updated
   * @type {Date}
   * @memberof ModelPartUnity
   */
  update?: Date;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelPartUnity
   */
  sevClient?: any;
  /**
   * part involved in the part unity
   * @type {any}
   * @memberof ModelPartUnity
   */
  part?: any;
  /**
   * price of the part
   * @type {number}
   * @memberof ModelPartUnity
   */
  price?: number;
  /**
   * factor of the part
   * @type {number}
   * @memberof ModelPartUnity
   */
  factor?: number;
  /**
   * unity of the part
   * @type {any}
   * @memberof ModelPartUnity
   */
  unity?: any;
}
/**
 *
 * @export
 * @interface ModelPaymentMethod
 */
export interface ModelPaymentMethod {
  id?: string;
  objectName?: "PaymentMethod";
  /**
   * date the payment method was created
   * @type {Date}
   * @memberof ModelPaymentMethod
   */
  create?: Date;
  /**
   * date the payment method was last updated
   * @type {Date}
   * @memberof ModelPaymentMethod
   */
  update?: Date;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelPaymentMethod
   */
  sevClient?: any;
  /**
   *
   * @type {string}
   * @memberof ModelPaymentMethod
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof ModelPaymentMethod
   */
  text?: string;
}
/**
 *
 * @export
 * @interface ModelPlace
 */
export interface ModelPlace {
  id?: string;
  objectName?: "Place";
  /**
   * name of the place
   * @type {string}
   * @memberof ModelPlace
   */
  name?: string;
  /**
   * longitude of the place
   * @type {number}
   * @memberof ModelPlace
   */
  lon?: number;
  /**
   * latitude of the place
   * @type {number}
   * @memberof ModelPlace
   */
  lat?: number;
  /**
   * zip of the place
   * @type {string}
   * @memberof ModelPlace
   */
  zip?: string;
  /**
   * location id of the place
   * @type {number}
   * @memberof ModelPlace
   */
  locId?: number;
}
/**
 *
 * @export
 * @interface ModelReport
 */
export interface ModelReport {
  id?: string;
  objectName?: "Report";
}
/**
 *
 * @export
 * @interface ModelSearch
 */
export interface ModelSearch {
  id?: string;
  objectName?: "Search";
}
/**
 *
 * @export
 * @interface ModelSevClient
 */
export interface ModelSevClient {
  id?: string;
  objectName?: "SevClient";
  /**
   * This information is not visible for you
   * @type {string}
   * @memberof ModelSevClient
   */
  hidden?: string;
}
/**
 *
 * @export
 * @interface ModelSevClientConfig
 */
export interface ModelSevClientConfig {
  id?: string;
  objectName?: "SevClientConfig";
  /**
   * This information is not visible for you
   * @type {string}
   * @memberof ModelSevClientConfig
   */
  hidden?: string;
}
/**
 *
 * @export
 * @interface ModelSevQuery
 */
export interface ModelSevQuery {
  id?: string;
  objectName?: "SevQuery";
  /**
   * Name of the model for which you want to make a query
   * @type {string}
   * @memberof ModelSevQuery
   */
  modelName?: string;
  /**
   * Limit for the returned entries
   * @type {number}
   * @memberof ModelSevQuery
   */
  limit?: number;
  /**
   * Offset for the returned entries
   * @type {number}
   * @memberof ModelSevQuery
   */
  offset?: number;
  /**
   * Filters that should be applied to the returned entries
   * @type {Array<string>}
   * @memberof ModelSevQuery
   */
  filter?: Array<string>;
  /**
   * Define how returned entries should be sorted
   * @type {string}
   * @memberof ModelSevQuery
   */
  order?: string;
}
/**
 *
 * @export
 * @interface ModelSevSequence
 */
export interface ModelSevSequence {
  id?: string;
  objectName?: "SevSequence";
  /**
   * date the SevSequence was created
   * @type {Date}
   * @memberof ModelSevSequence
   */
  create?: Date;
  /**
   * date the SevSequence was last updated
   * @type {Date}
   * @memberof ModelSevSequence
   */
  update?: Date;
  /**
   * Object for which the sequence is
   * @type {string}
   * @memberof ModelSevSequence
   */
  forObject?: string;
  /**
   * Format of the sequence
   * @type {string}
   * @memberof ModelSevSequence
   */
  format?: string;
  /**
   * next sequence of the object
   * @type {number}
   * @memberof ModelSevSequence
   */
  nextSequence?: number;
  /**
   *
   * @type {any}
   * @memberof ModelSevSequence
   */
  sevClient?: any;
  /**
   * type of the object
   * @type {string}
   * @memberof ModelSevSequence
   */
  type?: string;
}

/**
 *
 * @export
 * @interface ModelSevUser
 */
export interface ModelSevUser {
  id?: number;
  objectName?: "SevUser";
  /**
   * This information is not visible for you
   * @type {string}
   * @memberof ModelSevUser
   */
  hidden?: string;
}
/**
 *
 * @export
 * @interface ModelStaticCountry
 */
export interface ModelStaticCountry {
  id?: string;
  objectName?: "StaticCountry";
  /**
   *
   * @type {string}
   * @memberof ModelStaticCountry
   */
  code?: string;
  /**
   *
   * @type {string}
   * @memberof ModelStaticCountry
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof ModelStaticCountry
   */
  nameEn?: string;
  /**
   *
   * @type {string}
   * @memberof ModelStaticCountry
   */
  translationCode?: string;
  /**
   *
   * @type {string}
   * @memberof ModelStaticCountry
   */
  locale?: string;
  /**
   *
   * @type {number}
   * @memberof ModelStaticCountry
   */
  priority?: number;
}
/**
 *
 * @export
 * @interface ModelStaticIndustry
 */
export interface ModelStaticIndustry {
  id?: string;
  objectName?: "StaticIndustry";
  /**
   *
   * @type {string}
   * @memberof ModelStaticIndustry
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof ModelStaticIndustry
   */
  translationCode?: string;
}
/**
 *
 * @export
 * @interface ModelStaticReferralProgram
 */
export interface ModelStaticReferralProgram {
  id?: string;
  objectName?: "StaticReferralProgram";
  /**
   *
   * @type {string}
   * @memberof ModelStaticReferralProgram
   */
  headline?: string;
  /**
   *
   * @type {string}
   * @memberof ModelStaticReferralProgram
   */
  text?: string;
  /**
   *
   * @type {number}
   * @memberof ModelStaticReferralProgram
   */
  rewardAmountLead?: number;
  /**
   *
   * @type {number}
   * @memberof ModelStaticReferralProgram
   */
  rewardAmount?: number;
  /**
   *
   * @type {number}
   * @memberof ModelStaticReferralProgram
   */
  rewardPercentage?: number;
  /**
   *
   * @type {string}
   * @memberof ModelStaticReferralProgram
   */
  rewardType?: string;
  /**
   *
   * @type {number}
   * @memberof ModelStaticReferralProgram
   */
  earningAmount?: number;
}
/**
 *
 * @export
 * @interface ModelSubscriptionHistory
 */
export interface ModelSubscriptionHistory {
  id?: string;
  objectName?: "SubscriptionHistory";
  /**
   * End date of subscription in subscription history
   * @type {Date}
   * @memberof ModelSubscriptionHistory
   */
  endDate?: Date;
  /**
   * Status of the subscription you currently have
   * @type {string}
   * @memberof ModelSubscriptionHistory
   */
  currentSubscriptionCode?: string;
  /**
   * Duration of your current subscription
   * @type {string}
   * @memberof ModelSubscriptionHistory
   */
  currentSubscriptionDuration?: string;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelSubscriptionHistory
   */
  sevClient?: any;
}
/**
 *
 * @export
 * @interface ModelSubscriptionType
 */
export interface ModelSubscriptionType {
  id?: string;
  objectName?: "SubscriptionType";
  /**
   * date the subscription type was created
   * @type {Date}
   * @memberof ModelSubscriptionType
   */
  create?: Date;
  /**
   * date the subscription type was last updated
   * @type {Date}
   * @memberof ModelSubscriptionType
   */
  update?: Date;
  /**
   * name of the subscription type
   * @type {string}
   * @memberof ModelSubscriptionType
   */
  name?: string;
  /**
   * code of the subscription plan
   * @type {string}
   * @memberof ModelSubscriptionType
   */
  planCode?: string;
  /**
   * duration of the subscription plan in months
   * @type {string}
   * @memberof ModelSubscriptionType
   */
  planDuration?: string;
  /**
   *
   * @type {string}
   * @memberof ModelSubscriptionType
   */
  externalProductId?: string;
  /**
   *
   * @type {string}
   * @memberof ModelSubscriptionType
   */
  externalProductIdSandbox?: string;
  /**
   * net sum payable for the subscription type
   * @type {number}
   * @memberof ModelSubscriptionType
   */
  sumNet?: number;
  /**
   * vat sum payable for the subscription type
   * @type {number}
   * @memberof ModelSubscriptionType
   */
  sumVat?: number;
  /**
   * gross sum payable for the subscription type
   * @type {number}
   * @memberof ModelSubscriptionType
   */
  sumGross?: number;
  /**
   *
   * @type {string}
   * @memberof ModelSubscriptionType
   */
  externalProductIdGbp?: string;
  /**
   *
   * @type {number}
   * @memberof ModelSubscriptionType
   */
  sumNetGbp?: number;
  /**
   * translation code for the subscription type
   * @type {string}
   * @memberof ModelSubscriptionType
   */
  translationCode?: string;
}
/**
 *
 * @export
 * @interface ModelSwissEsr
 */
export interface ModelSwissEsr {
  id?: string;
  objectName?: "SwissEsr";
  /**
   * date the swiss esr was created
   * @type {Date}
   * @memberof ModelSwissEsr
   */
  create?: Date;
  /**
   * date the swiss esr was last updated
   * @type {Date}
   * @memberof ModelSwissEsr
   */
  update?: Date;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelSwissEsr
   */
  sevClient?: any;
  /**
   *
   * @type {string}
   * @memberof ModelSwissEsr
   */
  addressCityCredit?: string;
  /**
   *
   * @type {string}
   * @memberof ModelSwissEsr
   */
  addressZipCredit?: string;
  /**
   *
   * @type {string}
   * @memberof ModelSwissEsr
   */
  postSubscriberNumberBank?: string;
  /**
   *
   * @type {string}
   * @memberof ModelSwissEsr
   */
  internalSubscriberNumber?: string;
  /**
   *
   * @type {string}
   * @memberof ModelSwissEsr
   */
  documentTypeCode?: string;
  /**
   *
   * @type {number}
   * @memberof ModelSwissEsr
   */
  isEsr?: number;
}
/**
 *
 * @export
 * @interface ModelTag
 */
export interface ModelTag {
  id?: string;
  objectName?: "Tag";
  /**
   * date the tag was created
   * @type {Date}
   * @memberof ModelTag
   */
  create?: Date;
  /**
   * name of the tag
   * @type {string}
   * @memberof ModelTag
   */
  name?: string;
  /**
   *
   * @type {string}
   * @memberof ModelTag
   */
  objectType?: string;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelTag
   */
  sevClient?: any;
  /**
   *
   * @type {string}
   * @memberof ModelTag
   */
  color?: string;
}
/**
 *
 * @export
 * @interface ModelTagRelation
 */
export interface ModelTagRelation {
  id?: string;
  objectName?: "TagRelation";
  /**
   * date the tag relation was created
   * @type {Date}
   * @memberof ModelTagRelation
   */
  create?: Date;
  /**
   *
   * @type {ModelTag}
   * @memberof ModelTagRelation
   */
  tag?: ModelTag;
  /**
   * object type to which the tag is related
   * @type {any}
   * @memberof ModelTagRelation
   */
  object?: any;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelTagRelation
   */
  sevClient?: any;
}
/**
 *
 * @export
 * @interface ModelTask
 */
export interface ModelTask {
  id?: string;
  objectName?: "Task";
  /**
   * the date the task was created
   * @type {Date}
   * @memberof ModelTask
   */
  create?: Date;
  /**
   * date the task was last updated
   * @type {Date}
   * @memberof ModelTask
   */
  update?: Date;
  /**
   *
   * @type {string}
   * @memberof ModelTask
   */
  name?: string;
  /**
   *
   * @type {ModelSevUser}
   * @memberof ModelTask
   */
  assigned?: ModelSevUser;
  /**
   * can be a contact, invoice, etc to which the task refers to
   * @type {any}
   * @memberof ModelTask
   */
  object?: any;
  /**
   *
   * @type {Date}
   * @memberof ModelTask
   */
  deadline?: Date;
  /**
   *
   * @type {number}
   * @memberof ModelTask
   */
  status?: number;
  /**
   *
   * @type {ModelCategory}
   * @memberof ModelTask
   */
  category?: ModelCategory;
  /**
   *
   * @type {Date}
   * @memberof ModelTask
   */
  done?: Date;
  /**
   *
   * @type {ModelSevUser}
   * @memberof ModelTask
   */
  createUser?: ModelSevUser;
  /**
   *
   * @type {ModelSevUser}
   * @memberof ModelTask
   */
  doneUser?: ModelSevUser;
  /**
   * notice the creator when the task is finished
   * @type {boolean}
   * @memberof ModelTask
   */
  noticeCreator?: boolean;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelTask
   */
  sevClient?: any;
  /**
   *
   * @type {Date}
   * @memberof ModelTask
   */
  begin?: Date;
}
/**
 *
 * @export
 * @interface ModelTaxSet
 */
export interface ModelTaxSet {
  id?: string;
  objectName?: "TaxSet";
  /**
   * date the tax set was created
   * @type {Date}
   * @memberof ModelTaxSet
   */
  create?: Date;
  /**
   * date the tax set was last updated
   * @type {Date}
   * @memberof ModelTaxSet
   */
  update?: Date;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelTaxSet
   */
  sevClient?: any;
  /**
   *
   * @type {string}
   * @memberof ModelTaxSet
   */
  text?: string;
  /**
   *
   * @type {number}
   * @memberof ModelTaxSet
   */
  taxRate?: number;
  /**
   *
   * @type {number}
   * @memberof ModelTaxSet
   */
  code?: number;
  /**
   *
   * @type {string}
   * @memberof ModelTaxSet
   */
  displayText?: string;
  /**
   *
   * @type {string}
   * @memberof ModelTaxSet
   */
  vatReportFieldNet?: string;
  /**
   *
   * @type {string}
   * @memberof ModelTaxSet
   */
  vatReportFieldTax?: string;
  /**
   *
   * @type {string}
   * @memberof ModelTaxSet
   */
  accountingExportVatField?: string;
  /**
   *
   * @type {boolean}
   * @memberof ModelTaxSet
   */
  showInvoice?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof ModelTaxSet
   */
  showDebitVoucher?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof ModelTaxSet
   */
  showCreditVoucher?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof ModelTaxSet
   */
  onlyForVatDec?: boolean;
}

/**
 *
 * @export
 * @interface ModelUnity
 */
export interface ModelUnity {
  id?: number;
  objectName?: "Unity";
  /**
   * the date the unity was created
   * @type {Date}
   * @memberof ModelUnity
   */
  create?: Date;
  /**
   *
   * @type {string}
   * @memberof ModelUnity
   */
  name?: string;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelUnity
   */
  sevClient?: any;
  /**
   *
   * @type {string}
   * @memberof ModelUnity
   */
  translationCode?: string;
  /**
   *
   * @type {ModelEntryType}
   * @memberof ModelUnity
   */
  entryType?: ModelEntryType;
}
/**
 *
 * @export
 * @interface ModelVatReport
 */
export interface ModelVatReport {
  id?: string;
  objectName?: "VatReport";
  /**
   * date the vat report was created
   * @type {Date}
   * @memberof ModelVatReport
   */
  create?: Date;
  /**
   * date the vat report was last updated
   * @type {Date}
   * @memberof ModelVatReport
   */
  update?: Date;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelVatReport
   */
  sevClient?: any;
  /**
   *
   * @type {ModelStaticCountry}
   * @memberof ModelVatReport
   */
  country?: ModelStaticCountry;
  /**
   * date of the vat report
   * @type {Date}
   * @memberof ModelVatReport
   */
  reportDate?: Date;
  /**
   * year which is reported
   * @type {string}
   * @memberof ModelVatReport
   */
  reportingYear?: string;
  /**
   * period which is reported
   * @type {string}
   * @memberof ModelVatReport
   */
  reportingPeriod?: string;
  /**
   *
   * @type {string}
   * @memberof ModelVatReport
   */
  reportingPeriodCode?: string;
  /**
   *
   * @type {string}
   * @memberof ModelVatReport
   */
  reportingValues?: string;
  /**
   *
   * @type {boolean}
   * @memberof ModelVatReport
   */
  testCase?: boolean;
  /**
   * define if you want to report the main income method or the profit and loss
   * @type {boolean}
   * @memberof ModelVatReport
   */
  actualTaxation?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof ModelVatReport
   */
  corrected?: boolean;
  /**
   *
   * @type {string}
   * @memberof ModelVatReport
   */
  resultFinanceAuthority?: string;
  /**
   *
   * @type {string}
   * @memberof ModelVatReport
   */
  financeAuthorityTicketNumber?: string;
}
/**
 *
 * @export
 * @interface ModelVoucher
 */
export interface ModelVoucher {
  id?: string;
  objectName?: "Voucher";
  /**
   * date the voucher was created
   * @type {Date}
   * @memberof ModelVoucher
   */
  create?: Date;
  /**
   * date the voucher was last updated
   * @type {Date}
   * @memberof ModelVoucher
   */
  update?: Date;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelVoucher
   */
  sevClient?: any;
  /**
   *
   * @type {ModelSevUser}
   * @memberof ModelVoucher
   */
  createUser?: ModelSevUser;
  /**
   *
   * @type {Date}
   * @memberof ModelVoucher
   */
  voucherDate?: Date;
  /**
   *
   * @type {ModelContact}
   * @memberof ModelVoucher
   */
  supplier?: ModelContact;
  /**
   *
   * @type {string}
   * @memberof ModelVoucher
   */
  supplierName?: string;
  /**
   *
   * @type {string}
   * @memberof ModelVoucher
   */
  description?: string;
  /**
   *
   * @type {ModelDocument}
   * @memberof ModelVoucher
   */
  document?: ModelDocument;
  /**
   *
   * @type {string}
   * @memberof ModelVoucher
   */
  resultDisdar?: string;
  /**
   *
   * @type {ModelDocument}
   * @memberof ModelVoucher
   */
  documentPreview?: ModelDocument;
  /**
   *
   * @type {Date}
   * @memberof ModelVoucher
   */
  payDate?: Date;
  /**
   *
   * @type {number}
   * @memberof ModelVoucher
   */
  status?: number;
  /**
   *
   * @type {any}
   * @memberof ModelVoucher
   */
  object?: any;
  /**
   *
   * @type {number}
   * @memberof ModelVoucher
   */
  sumNet?: number;
  /**
   *
   * @type {number}
   * @memberof ModelVoucher
   */
  sumTax?: number;
  /**
   *
   * @type {number}
   * @memberof ModelVoucher
   */
  sumGross?: number;
  /**
   *
   * @type {number}
   * @memberof ModelVoucher
   */
  sumNetAccounting?: number;
  /**
   *
   * @type {number}
   * @memberof ModelVoucher
   */
  sumTaxAccounting?: number;
  /**
   *
   * @type {number}
   * @memberof ModelVoucher
   */
  sumGrossAccounting?: number;
  /**
   *
   * @type {string}
   * @memberof ModelVoucher
   */
  taxType?: string;
  /**
   *
   * @type {string}
   * @memberof ModelVoucher
   */
  creditDebit?: string;
  /**
   *
   * @type {boolean}
   * @memberof ModelVoucher
   */
  hidden?: boolean;
  /**
   *
   * @type {ModelCostCentre}
   * @memberof ModelVoucher
   */
  costCentre?: ModelCostCentre;
  /**
   *
   * @type {any}
   * @memberof ModelVoucher
   */
  origin?: any;
  /**
   *
   * @type {string}
   * @memberof ModelVoucher
   */
  voucherType?: string;
  /**
   *
   * @type {number}
   * @memberof ModelVoucher
   */
  recurringIntervall?: number;
  /**
   *
   * @type {Date}
   * @memberof ModelVoucher
   */
  recurringStartDate?: Date;
  /**
   *
   * @type {Date}
   * @memberof ModelVoucher
   */
  recurringNextVoucher?: Date;
  /**
   *
   * @type {Date}
   * @memberof ModelVoucher
   */
  recurringLastVoucher?: Date;
  /**
   *
   * @type {Date}
   * @memberof ModelVoucher
   */
  recurringEndDate?: Date;
  /**
   *
   * @type {boolean}
   * @memberof ModelVoucher
   */
  enshrined?: boolean;
  /**
   *
   * @type {string}
   * @memberof ModelVoucher
   */
  inSource?: string;
  /**
   *
   * @type {ModelTaxSet}
   * @memberof ModelVoucher
   */
  taxSet?: ModelTaxSet;
  /**
   *
   * @type {string}
   * @memberof ModelVoucher
   */
  iban?: string;
  /**
   *
   * @type {string}
   * @memberof ModelVoucher
   */
  accountingSpecialCase?: string;
  /**
   *
   * @type {Date}
   * @memberof ModelVoucher
   */
  paymentDeadline?: Date;
  /**
   *
   * @type {number}
   * @memberof ModelVoucher
   */
  tip?: number;
}
/**
 * Below are the models which can be used for the saveVoucher function. Beware that you need to use them without the underscore at the beginning!
 * @export
 * @interface ModelVoucherFactory
 */
export interface ModelVoucherFactory {
  id?: string;
  objectName?: "VoucherFactory";
  /**
   *
   * @type {ModelVoucher}
   * @memberof ModelVoucherFactory
   */
  voucher?: ModelVoucher;
  /**
   *
   * @type {ModelVoucherPos}
   * @memberof ModelVoucherFactory
   */
  voucherPosSave?: ModelVoucherPos;
  /**
   *
   * @type {ModelVoucherPos}
   * @memberof ModelVoucherFactory
   */
  voucherPosDelete?: ModelVoucherPos;
}
/**
 *
 * @export
 * @interface ModelVoucherLog
 */
export interface ModelVoucherLog {
  id?: string;
  objectName?: "VoucherLog";
  /**
   * date the voucher log was created
   * @type {Date}
   * @memberof ModelVoucherLog
   */
  create?: Date;
  /**
   *
   * @type {ModelVoucher}
   * @memberof ModelVoucherLog
   */
  voucher?: ModelVoucher;
  /**
   * status of the voucher before the logged change
   * @type {number}
   * @memberof ModelVoucherLog
   */
  fromStatus?: number;
  /**
   * status of the voucher after the logged change
   * @type {number}
   * @memberof ModelVoucherLog
   */
  toStatus?: number;
  /**
   * amount which was payed
   * @type {number}
   * @memberof ModelVoucherLog
   */
  amountPayed?: number;
  /**
   * date of the booking
   * @type {Date}
   * @memberof ModelVoucherLog
   */
  bookingDate?: Date;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelVoucherLog
   */
  sevClient?: any;
}
/**
 *
 * @export
 * @interface ModelVoucherPos
 */
export interface ModelVoucherPos {
  id?: string;
  objectName?: "VoucherPos";
  /**
   * date the voucher positions was created
   * @type {Date}
   * @memberof ModelVoucherPos
   */
  create?: Date;
  /**
   * date the voucher position was last updated
   * @type {Date}
   * @memberof ModelVoucherPos
   */
  update?: Date;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   * @type {any}
   * @memberof ModelVoucherPos
   */
  sevClient?: any;
  /**
   *
   * @type {ModelVoucher}
   * @memberof ModelVoucherPos
   */
  voucher?: ModelVoucher;
  /**
   *
   * @type {ModelAccountingType}
   * @memberof ModelVoucherPos
   */
  accountingType?: ModelAccountingType;
  /**
   *
   * @type {ModelAccountingType}
   * @memberof ModelVoucherPos
   */
  estimatedAccountingType?: ModelAccountingType;
  /**
   *
   * @type {number}
   * @memberof ModelVoucherPos
   */
  taxRate?: number;
  /**
   *
   * @type {number}
   * @memberof ModelVoucherPos
   */
  sum?: number;
  /**
   *
   * @type {boolean}
   * @memberof ModelVoucherPos
   */
  net?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof ModelVoucherPos
   */
  isAsset?: boolean;
  /**
   *
   * @type {number}
   * @memberof ModelVoucherPos
   */
  sumNet?: number;
  /**
   *
   * @type {number}
   * @memberof ModelVoucherPos
   */
  sumTax?: number;
  /**
   *
   * @type {number}
   * @memberof ModelVoucherPos
   */
  sumGross?: number;
  /**
   *
   * @type {number}
   * @memberof ModelVoucherPos
   */
  sumNetAccounting?: number;
  /**
   *
   * @type {number}
   * @memberof ModelVoucherPos
   */
  sumTaxAccounting?: number;
  /**
   *
   * @type {number}
   * @memberof ModelVoucherPos
   */
  sumGrossAccounting?: number;
  /**
   *
   * @type {string}
   * @memberof ModelVoucherPos
   */
  comment?: string;
  /**
   *
   * @type {boolean}
   * @memberof ModelVoucherPos
   */
  isGwg?: boolean;
  /**
   *
   * @type {number}
   * @memberof ModelVoucherPos
   */
  cateringTaxRate?: number;
  /**
   *
   * @type {number}
   * @memberof ModelVoucherPos
   */
  cateringTip?: number;
}
