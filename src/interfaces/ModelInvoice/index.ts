import type {
  ModelContact,
  ModelContactAddress,
  ModelCostCentre,
  ModelDiscounts,
  ModelEntryType,
  ModelPart,
  ModelPaymentMethod,
  ModelSevUser,
  ModelStaticCountry,
  ModelTaxSet,
  ModelUnity,
} from "../index.ts";

/**
 *
 * @interface ModelInvoice
 */
export interface ModelInvoice {
  id?: string;
  objectName?: "Invoice";
  /**
   *
   */
  invoiceNumber?: string;
  /**
   *
   * @type {ModelContact}
   */
  contact?: ModelContact;
  /**
   * the date the invoice was created
   */
  create?: Date;
  /**
   * the date the invoice was last updated
   */
  update?: Date;
  /**
   * the date of the invoice
   */
  invoiceDate?: Date;
  /**
   * header/subject of the invoice
   */
  header?: string;
  /**
   * head text of the invoice
   */
  headText?: string;
  /**
   * foot text of the invoice
   */
  footText?: string;
  /**
   * time left for paying the invoice, use format dd.MM.yyyy or number for number of days left
   */
  timeToPay?: Date;
  /**
   *
   */
  discountTime?: Date;
  /**
   * the discount value in '%'
   */
  discount?: number;
  /**
   * the name in the address, equals the contacts name
   */
  addressName?: string;
  /**
   * the street in the address, equals the contacts street
   */
  addressStreet?: string;
  /**
   * the zip-code in the address, equals the contacts zip
   */
  addressZip?: string;
  /**
   * the city in the address, equals the contacts city
   */
  addressCity?: string;
  /**
   *
   * @type {ModelStaticCountry}
   */
  addressCountry?: ModelStaticCountry;
  /**
   * time left for paying the invoice, use format DD.MM.YYYY or number for number of days left
   */
  payDate?: Date;
  /**
   *
   * @type {ModelSevUser}
   */
  createUser?: ModelSevUser;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   */
  sevClient?: any;
  /**
   * delivery date of the goods from the invoice, please use dd.MM.yyyy
   */
  deliveryDate?: Date;
  /**
   * status of the invoice
   */
  status?: number;
  /**
   *
   */
  smallSettlement?: boolean;
  /**
   *
   * @type {ModelSevUser}
   */
  contactPerson?: ModelSevUser;
  /**
   * tax rate used when adding a value added tax regulation
   */
  taxRate?: number;
  /**
   * additional text when adding a value added tax regulation
   */
  taxText?: TaxTextEnum;
  /**
   * dunning level of the invoice
   */
  dunningLevel?: number;
  /**
   * name of the contacts address
   */
  addressParentName?: string;
  /**
   *
   */
  addressContactRef?: ModelContactAddress;
  /**
   *
   */
  taxType?: TaxTypeEnum;
  /**
   *
   */
  paymentMethod?: ModelPaymentMethod;
  /**
   *
   */
  costCentre?: ModelCostCentre;
  /**
   *
   */
  sendDate?: Date;
  /**
   *
   */
  origin?: any;
  /**
   * type of the invoice
   */
  invoiceType?: InvoiceTypeEnum;
  /**
   *
   */
  accountIntervall?: number;
  /**
   *
   */
  accountLastInvoice?: Date;
  /**
   *
   */
  accountNextInvoice?: Date;
  /**
   *
   */
  reminderTotal?: number;
  /**
   *
   */
  reminderDebit?: number;
  /**
   *
   */
  reminderDeadline?: Date;
  /**
   *
   */
  reminderCharge?: number;
  /**
   *
   */
  addressParentName2?: string;
  /**
   *
   */
  addressName2?: string;
  /**
   *
   */
  taxSet?: ModelTaxSet;
  /**
   *
   */
  addressGender?: string;
  /**
   *
   */
  accountEndDate?: Date;
  /**
   *
   */
  address?: string;
  /**
   *
   */
  currency?: string;
  /**
   *
   */
  sumNet?: number;
  /**
   *
   */
  sumTax?: number;
  /**
   *
   */
  sumGross?: number;
  /**
   *
   */
  sumDiscounts?: number;
  /**
   *
   */
  sumNetForeignCurrency?: number;
  /**
   *
   */
  sumTaxForeignCurrency?: number;
  /**
   *
   */
  sumGrossForeignCurrency?: number;
  /**
   *
   */
  sumDiscountsForeignCurrency?: number;
  /**
   *
   */
  sumNetAccounting?: number;
  /**
   *
   */
  sumTaxAccounting?: number;
  /**
   *
   */
  sumGrossAccounting?: number;
  /**
   *
   * @type {ModelEntryType}
   */
  entryType?: ModelEntryType;
  /**
   *
   */
  costumerInternalNote?: string;
  /**
   *
   */
  showNet?: boolean;
  /**
   *
   */
  enshrined?: boolean;
  /**
   *
   */
  sendType?: string;
  /**
   *
   */
  deliveryDateUntil?: Date;
}

/**
 */
export enum TaxTextEnum {
  UmsatzsteuerAusweisen = "Umsatzsteuer ausweisen",
  SteuerfreieInnergemeinschaftlicheLieferungEuropischeUnion =
    "Steuerfreie innergemeinschaftliche Lieferung(Europäische Union)",
  SteuerschuldnerschaftDesLeistungsempfngersAuerhalbEUZBSchweiz =
    "Steuerschuldnerschaft des Leistungsempfängers (Außerhalb EU, z.B. Schweiz)",
}
/**
 */
export enum TaxTypeEnum {
  Default = "default",
  Eu = "eu",
  Noteu = "noteu",
}
/**
 */
export enum InvoiceTypeEnum {
  REInvoice = "RE (Invoice)",
  MAInvoiceReminder = "MA (Invoice reminder)",
  WKRPeriodicInvoice = "WKR (periodic invoice)",
}

/**
 * Below are the models which can be used for the functions in Invoice/Factory.php. Beware that you need to use them without the underscore at the beginning!
 */
export interface Factory {
  id?: string;
  objectName?: "InvoiceFactory";
  /**
   * Invoice model
   */
  invoice: ModelInvoice;
  /**
   * The invoice positions you want to create. If you don't have any, set to null.
   */
  invoicePosSave: SavePos[] | null;
  /**
   * The invoice positions you want to delete. If you don't have any, set to null.
   */
  invoicePosDelete: DeletePos[] | null;
  /**
   * The discounts you want to create. If you don't have any, set to null.
   */
  discountSave: ModelDiscounts | null;
  /**
   * The discounts you want to delete. If you don't have any, set to null.
   */
  discountDelete: ModelDiscounts | null;
  /**
   * Defines if the address of the supplied contact is automatically filled into the invoice.
   */
  takeDefaultAddress: boolean;
}
/**
 *
 */
export interface Log {
  id?: string;
  objectName?: "InvoiceLog";
  /**
   * date the invoice log was createdLog
   */
  create?: Date;
  /**
   * the invoice which is loggedLog
   */
  invoice?: any;
  /**
   * status before the changeLog
   */
  fromStatus?: number;
  /**
   * status after the changeLog
   */
  toStatus?: number;
  /**
   * amount that was payedLog
   */
  ammountPayed?: number;
  /**
   * date of the bookingLog
   */
  bookingDate?: Date;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operationsLog
   */
  sevClient?: any;
}
/**
 *
 */
export interface Pos {
  id?: string;
  objectName?: "InvoicePos";
  /**
   * creation date of the invoice position
   */
  create?: Date;
  /**
   * date the invoice position was last updated
   */
  update?: Date;
  /**
   *
   */
  invoice?: ModelInvoice;
  /**
   * Part from your inventory which is used in the position.
   */
  part?: ModelPart;
  /**
   * the quantity of the product/part
   */
  quantity?: number;
  /**
   * the price of the product/part
   */
  price?: number;
  /**
   * the name of the product/part
   */
  name?: string;
  /**
   * @depricated
   */
  priority?: number;
  /**
   * The unit in which the positions part is measured
   */
  unity?: ModelUnity;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   */
  sevClient?: any;
  /**
   * Position number of your position. Can be used to order multiple positions.
   */
  positionNumber?: number;
  /**
   * A text describing your position.
   */
  text?: string;
  /**
   * does not get filled, discount is handled in the discount_model
   */
  discount?: number;
  /**
   * tax rate in percent
   */
  taxRate?: number;
  /**
   * Defines if the position is temporary
   * @depricated
   */
  temporary?: boolean | null;
  /**
   *
   */
  sumNet?: number;
  /**
   *
   */
  sumGross?: number;
  /**
   * does not get filled, sumDiscount is handled in the discount_model
   */
  sumDiscount?: number;
  /**
   *
   */
  sumTax?: number;
  /**
   * equals sumNet
   */
  sumNetAccounting?: number;
  /**
   * equals sumTax
   */
  sumTaxAccounting?: number;
  /**
   * equals sumGross
   */
  sumGrossAccounting?: number;
  /**
   * net price of the product/part (one)
   */
  priceNet?: number;
  /**
   * gross price of the product/part (one)
   */
  priceGross?: number;
  /**
   * Tax on the price of the part
   */
  priceTax?: number;
}

export interface DeletePos {
  /** ID of position to delete */
  id: string;
  /** Object name of position */
  objectName: "InvoicePos";
}

export interface SavePos extends Pos {
  unity: ModelUnity;
  taxRate: number;
  mapAll: boolean;
}
