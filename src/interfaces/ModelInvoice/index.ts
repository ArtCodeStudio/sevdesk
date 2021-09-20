import type {
  Discounts,
  ModelContact,
  ModelContactAddress,
  ModelCostCentre,
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
 * @interface Invoice
 */
export interface Invoice {
  id?: string;
  objectName?: "Invoice";
  /**
   * The invoice number
   */
  invoiceNumber?: string;
  /**
   * The contact used in the invoice
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
  invoiceDate?: Date | string | number;
  /**
   * header/subject of the invoice
   */
  header?: string | null;
  /**
   * head text of the invoice
   */
  headText?: string | null;
  /**
   * foot text of the invoice
   */
  footText?: string | null;
  /**
   * time left for paying the invoice, use format dd.MM.yyyy or number for number of days left
   */
  timeToPay?: Date | null;
  /**
   * If a value other than zero is used for the discount attribute, you need to specify the amount of days for which the discount is granted.
   */
  discountTime?: Date | null;
  /**
   * the discount value in '%'
   */
  discount?: number;
  /**
   * the name in the address, equals the contacts name
   * @deprecated
   */
  addressName?: string | null;
  /**
   * the street in the address, equals the contacts street
   * @deprecated
   */
  addressStreet?: string | null;
  /**
   * the zip-code in the address, equals the contacts zip
   * @deprecated
   */
  addressZip?: string | null;
  /**
   * the city in the address, equals the contacts city
   * @deprecated
   */
  addressCity?: string | null;
  /**
   * Can be omitted as complete address is defined in address attribute
   * @deprecated
   */
  addressCountry?: ModelStaticCountry | null;
  /**
   * time left for paying the invoice, use format DD.MM.YYYY or number for number of days left
   */
  payDate?: Date | null;
  /**
   *
   */
  createUser?: ModelSevUser;
  /**
   * sevClient is the unique id every customer has and is used in nearly all operations
   */
  sevClient?: any;
  /**
   * delivery date of the goods from the invoice, please use dd.MM.yyyy
   */
  deliveryDate?: Date | string | number | null;
  /**
   * status of the invoice
   */
  status?: Status;
  /**
   * Defines if the client uses the small settlement scheme. If yes, the invoice must not contain any vat
   */
  smallSettlement?: 0 | 1;
  /**
   * The user who acts as a contact person for the invoice
   */
  contactPerson?: ModelSevUser;
  /**
   * tax rate used when adding a value added tax regulation
   */
  taxRate?: number;
  /**
   * additional text when adding a value added tax regulation
   */
  taxText?: TaxText;
  /**
   * dunning level of the invoice
   */
  dunningLevel?: number | null;
  /**
   * name of the contacts address
   */
  addressParentName?: string | null;
  /**
   * Address contact reference.
   * @deprecated
   */
  addressContactRef?: ModelContactAddress | null;
  /**
   * Tax type of the invoice. There are four tax types:
   * * default - Umsatzsteuer ausweisen
   * * eu - Steuerfreie innergemeinschaftliche Lieferung (Europäische Union)
   * * noteu - Steuerschuldnerschaft des Leistungsempfängers (außerhalb EU, z. B. Schweiz)
   * * custom - Using custom tax set Tax rates are heavily connected to the tax type used.
   */
  taxType?: TaxType;
  /**
   * Payment method used for the invoice
   */
  paymentMethod?: ModelPaymentMethod | null;
  /**
   * Cost centre for the invoice
   */
  costCentre?: ModelCostCentre | null;
  /**
   * The date the invoice was sent to the customer
   */
  sendDate?: Date | null;
  /**
   * Origin of the invoice. Could f.e. be an order
   */
  origin?: any;
  /**
   * type of the invoice
   */
  invoiceType?: Type;
  /**
   * The interval in which recurring invoices are due as ISO-8601 duration.
   * Necessary attribute for all recurring invoices.
   */
  accountIntervall?: number | null;
  /**
   * Timestamp when the last invoice was generated by this recurring invoice.
   * @deprecated
   */
  accountLastInvoice?: Date | null;
  /**
   * Timestamp when the next invoice will be generated by this recurring invoice.
   */
  accountNextInvoice?: Date | null;
  /**
   * Total reminder amount
   */
  reminderTotal?: number | null;
  /**
   * Debit of the reminder
   */
  reminderDebit?: number | null;
  /**
   * Deadline of the reminder as timestamp
   */
  reminderDeadline?: Date | null;
  /**
   * The additional reminder charge
   */
  reminderCharge?: number | null;
  /**
   *
   */
  addressParentName2?: string;
  /**
   *
   */
  addressName2?: string;
  /**
   * Tax set of the invoice. Needs to be added if you chose the tax type custom
   */
  taxSet?: ModelTaxSet | null;
  /**
   *
   */
  addressGender?: string;
  /**
   *
   */
  accountEndDate?: Date;
  /**
   * Complete address of the recipient including name, street, city, zip and country. * Line breaks can be used and will be displayed on the invoice pdf.
   */
  address?: string;
  /**
   * Currency used in the invoice. Needs to be currency code according to ISO-4217
   */
  currency?: "EUR" | string;
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
   * @deprecated
   */
  entryType?: ModelEntryType | null;
  /**
   *
   */
  customerInternalNote?: string | null;
  /**
   * Internal note of the customer. Contains data entered into field 'Referenz/Bestellnummer'
   */
  costumerInternalNote?: string;
  /**
   * If true, the net amount of each position will be shown on the invoice. Otherwise gross amount
   */
  showNet?: "0" | "1";
  /**
   * Defines if and when invoice was enshrined. Enshrined invoices can not be manipulated.
   */
  enshrined?: boolean | null;
  /**
   * Type which was used to send the invoice. IMPORTANT: Please refer to the invoice section of the * API-Overview to understand how this attribute can be used before using it!
   */
  sendType?: string | null;
  /**
   *If the delivery date should be a time range, another timestamp can be provided in this attribute * to define a range from timestamp used in deliveryDate attribute to the timestamp used here.
   */
  deliveryDateUntil?: Date | string | number | null;
  /**
   * Internal attribute
   */
  datevConnectOnline?: null;
  /**
   * Internal attribute
   */
  sendPaymentReceivedNotificationDate?: null;
  /**
   *
   */
  mapAll?: "true" | "false";
}

/**
 */
export enum TaxText {
  UmsatzsteuerAusweisen = "Umsatzsteuer ausweisen",
  SteuerfreieInnergemeinschaftlicheLieferungEuropischeUnion =
    "Steuerfreie innergemeinschaftliche Lieferung(Europäische Union)",
  SteuerschuldnerschaftDesLeistungsempfngersAuerhalbEUZBSchweiz =
    "Steuerschuldnerschaft des Leistungsempfängers (Außerhalb EU, z.B. Schweiz)",
}
/**
 */
export enum TaxType {
  /** Umsatzsteuer ausweisen */
  Default = "default",
  /** Steuerfreie innergemeinschaftliche Lieferung (Europäische Union) */
  Eu = "eu",
  /** teuerschuldnerschaft des Leistungsempfängers (außerhalb EU, z. B. Schweiz) */
  Noteu = "noteu",
  /** Using custom tax set Tax rates are heavily connected to the tax type used. */
  Custom = "custom",
}
/**
 */
export enum Type {
  /** A normal invoice which documents a simple selling process. */
  NormalInvoice = "RE",
  /** An invoice which generates normal invoices with the same values regularly in fixed time frames (every month, year, ...).  */
  RecurringInvoice = "WKR",
  /** An invoice which cancels another already created normal invoice.  */
  CancellationInvoice = "SR",
  /**
   * An invoice which gets created if the end-customer failed to pay a normal invoice in a given time frame.
   * Often includes some kind of reminder fee.
   */
  ReminderInvoice = "MA",
  /**
   * Part of a complete invoice. All part invoices together result in the complete invoice.
   * Often used if the end-customer can partly pay for items or services.
   */
  PartInvoice = "TR",
  /**
   * The final invoice of all part invoices which completes the invoice.
   * After the final invoice is payed by the end-customer, the selling process is complete.
   */
  FinalInvoice = "ER",
}

/**
 */
export enum Status {
  /**
   * The invoice is a deactivated recurring invoice.
   * This status code is only relevant for recurring invoices.
   */
  DeactivatedRecurringInvoice = 50,
  /**
   * The invoice is still a draft.
   * It has not been sent to the end-customer and can still be changed.
   */
  Draft = 100,
  /**
   * The invoice has been sent to the end-customer.
   * It is either shown as open if the pay date is not exceeded or due if it is.
   */
  Open = 200,
  /**
   * The invoice has been payed by the end-customer.
   * This means, that it is linked to a transaction on some payment account in sevDesk.
   */
  Payed = 1000,
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
  invoice: Invoice;
  /**
   * The invoice positions you want to create. If you don't have any, set to null.
   */
  invoicePosSave?: SavePos[] | null;
  /**
   * The invoice positions you want to delete. If you don't have any, set to null.
   */
  invoicePosDelete?: DeletePos[] | null;
  /**
   * The discounts you want to create. If you don't have any, set to null.
   */
  discountSave?: Discounts[] | null;
  /**
   * The discounts you want to delete. If you don't have any, set to null.
   */
  discountDelete?: Discounts[] | null;
  /**
   * Defines if the address of the supplied contact is automatically filled into the invoice.
   */
  takeDefaultAddress?: "true" | "false";
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
  invoice?: Invoice;
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
  mapAll: "true" | "false";
}
