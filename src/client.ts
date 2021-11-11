import { dependencies } from "./dependencies.ts";
import { UnknownApiError } from "./errors.ts";
import {
  ModelCheckAccountTransaction,
  ModelCommunicationWay,
  ModelContact,
  ModelDocument,
  ModelDocumentFolder,
  ModelInvoice,
  ModelUnity,
  ModelVoucher,
} from "./interfaces/index.ts";
import { SevDeskUrls } from "./urls.ts";

const DEFAULT_BASE_URL = "https://my.sevdesk.de/";

type UrlParamsFor<MethodName extends keyof SevDeskUrls> = Parameters<
  Extract<SevDeskUrls[MethodName], (...args: any) => any>
>[0];

export type SevDeskClientConfig = {
  apiKey: string;
  baseUrl?: string;
};

export class SevDeskClient {
  readonly config: Required<SevDeskClientConfig>;

  readonly urls: SevDeskUrls;

  constructor({ apiKey, baseUrl = DEFAULT_BASE_URL }: SevDeskClientConfig) {
    this.config = {
      apiKey,
      baseUrl,
    };
    this.urls = new SevDeskUrls(baseUrl);
  }

  async request<ResponseBody>(url: string | URL, options: RequestInit = {}) {
    const { apiKey } = this.config;

    const response = await dependencies.fetch(url.toString(), {
      ...options,
      headers: {
        Authorization: apiKey,
        Accept: "application/json",
        ...options.headers,
      },
    });
    let body;
    let error;

    try {
      body = await response.json();
    } catch (err: any) {
      error = err;
    }

    if (body?.error !== undefined) {
      const error = new Error();

      Object.assign(error, body.error);

      throw error;
    }
    if (response.ok === false || error) {
      const message = error?.message ?? body?.error?.message;

      throw new UnknownApiError(message, { response });
    }

    return body as ResponseBody;
  }

  // -------------------------------------------------------
  // Invoice
  // -------------------------------------------------------

  /**
   * Get an overview of all invoices.
   *
   * @see https://my.sevdesk.de/swaggerUI/index.html#/Invoice/getInvoices
   */
  async getInvoices(params: UrlParamsFor<"apiGetInvoicesUrl"> = {}) {
    const url = this.urls.apiGetInvoicesUrl(params);

    return await this.request<{
      objects: Array<Required<ModelInvoice.Invoice>>;
    }>(url, { method: "GET" });
  }

  /**
   * Get a single invoice by id
   */
  async getInvoice(params: UrlParamsFor<"apiGetInvoiceUrl">) {
    const url = this.urls.apiGetInvoiceUrl(params);

    return await this.request<{
      objects: [Required<ModelInvoice.Invoice>];
    }>(url, { method: "GET" });
  }

  /**
   * Get the next invoice number
   */
  async getNextInvoiceNumber(
    params: UrlParamsFor<"apiGetNextInvoiceNumberUrl">,
  ) {
    const url = this.urls.apiGetNextInvoiceNumberUrl(params);

    return await this.request<{
      objects: string;
    }>(url, { method: "GET" });
  }

  /**
   * Create a new invoice (with / without invoice positions and discounts).
   *
   * @see https://my.sevdesk.de/swaggerUI/index.html#/Invoice/saveInvoice
   * @see https://my.sevdesk.de/api/InvoiceAPI/doc.html#operation/createInvoiceByFactory
   * @see https://5677.extern.sevdesk.dev/apiOverview/index.html#/doc-invoices
   */
  async saveInvoice(
    params: UrlParamsFor<"apiSaveInvoiceUrl">,
    data: ModelInvoice.Factory,
  ) {
    const url = this.urls.apiSaveInvoiceUrl(params);

    console.debug("url", url);

    return await this.request<{
      objects: Array<ModelInvoice.Factory>;
    }>(url, {
      headers: { "Content-Type": "application/json" },
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  // -------------------------------------------------------
  // DocumentFolder
  // -------------------------------------------------------

  /**
   * Get an overview of all document folders
   *
   * @see https://my.sevdesk.de/swaggerUI/index.html#/DocumentFolder/getDocumentFolders
   */
  async getDocumentFolders(
    params: UrlParamsFor<"apiGetDocumentFoldersUrl"> = {},
  ) {
    const url = this.urls.apiGetDocumentFoldersUrl(params);

    return await this.request<{
      objects: Array<Required<ModelDocumentFolder>>;
    }>(url, { method: "GET" });
  }

  // -------------------------------------------------------
  // Document
  // -------------------------------------------------------

  /**
   * Get an overview of all documents
   *
   * @see https://my.sevdesk.de/swaggerUI/index.html#/Document/getDocuments
   */
  async getDocuments(params: UrlParamsFor<"apiGetDocumentsUrl"> = {}) {
    const url = this.urls.apiGetDocumentsUrl(params);

    return await this.request<{ objects: Array<Required<ModelDocument>> }>(
      url,
      {
        method: "GET",
      },
    );
  }

  /**
   * Upload a file (creating a document)
   *
   * @see https://my.sevdesk.de/swaggerUI/index.html#/Document/FactoryAddDocument
   */
  async addDocument({
    file,
    ...query
  }: UrlParamsFor<"apiFileUploadUrl"> & {
    file: Parameters<FormData["append"]>[1];
  }) {
    const url = this.urls.apiFileUploadUrl(query);
    const form = new dependencies.FormData();

    form.append("files", file);

    return await this.request<{ objects: [Required<ModelDocument>] }>(url, {
      method: "POST",
      body: form,
    });
  }

  // -------------------------------------------------------
  // Contact
  // -------------------------------------------------------

  /**
   * Get an overview of all contacts
   *
   * @see https://my.sevdesk.de/swaggerUI/index.html#/Contact/getContacts
   */
  async getContacts(params: UrlParamsFor<"apiGetContactsUrl"> = {}) {
    const url = this.urls.apiGetContactsUrl(params);

    return await this.request<{ objects: Array<Required<ModelContact>> }>(url, {
      method: "GET",
    });
  }

  /**
   * Get an contact by id
   *
   * @see https://5677.extern.sevdesk.dev/apiOverview/index.html#/doc-dataOperations#retrievingData
   */
   async getContact(params: UrlParamsFor<"apiGetContactUrl">) {
    const url = this.urls.apiGetContactUrl(params);

    return await this.request<{ objects: Array<Required<ModelContact>> }>(url, {
      method: "GET",
    });
  }

  // -------------------------------------------------------
  // Accounting Contact
  // -------------------------------------------------------

  /**
   * Get an overview of all accounting contacts
   *
   * @see https://my.sevdesk.de/swaggerUI/index.html#/AccountingContact/getAccountingContacts
   */
  async getAccountingContacts(
    params: UrlParamsFor<"apiGetAccountingContactsUrl"> = {},
  ) {
    const url = this.urls.apiGetAccountingContactsUrl(params);

    return await this.request<{ objects: Array<Required<ModelContact>> }>(url, {
      method: "GET",
    });
  }

  // -------------------------------------------------------
  // SevUser
  // -------------------------------------------------------

  /**
   * Get an overview of your sevUser
   *
   * @see https://my.sevdesk.de/swaggerUI/index.html#/SevUser/getSevUser
   */
  async getSevUsers(params: UrlParamsFor<"apiGetSevUsersUrl"> = {}) {
    const url = this.urls.apiGetSevUsersUrl(params);

    return await this.request<{ objects: Array<Required<ModelContact>> }>(url, {
      method: "GET",
    });
  }

  // -------------------------------------------------------
  // Voucher
  // -------------------------------------------------------

  /**
   * Get an overview of all vouchers
   *
   * @see https://my.sevdesk.de/swaggerUI/index.html#/Voucher/getVouchers
   */
  async getVouchers(params: UrlParamsFor<"apiGetVouchersUrl"> = {}) {
    const url = this.urls.apiGetVouchersUrl(params);

    return await this.request<{ objects: Array<Required<ModelVoucher>> }>(url, {
      method: "GET",
    });
  }

  // -------------------------------------------------------
  // CommunicationWay
  // -------------------------------------------------------

  /**
   * Get an overview of all communication ways
   *
   * @see https://my.sevdesk.de/swaggerUI/index.html#/CommunicationWay/getCommunicationWays
   */
  async getCommunicationWays(
    params: UrlParamsFor<"apiGetCommunicationWaysUrl"> = {},
  ) {
    const url = this.urls.apiGetCommunicationWaysUrl(params);

    return await this.request<
      { objects: Array<Required<ModelCommunicationWay.ModelCommunicationWay>> }
    >(
      url,
      {
        method: "GET",
      },
    );
  }

  // -------------------------------------------------------
  // CheckAccountTransaction
  // -------------------------------------------------------

  /**
   * Get an overview of all check account transactions
   *
   * @see https://my.sevdesk.de/swaggerUI/index.html#/CheckAccountTransaction
   */
  async getCheckAccountTransactions(
    params: UrlParamsFor<"apiGetCheckAccountTransactionUrl"> = {},
  ) {
    const url = this.urls.apiGetCheckAccountTransactionUrl(params);

    return await this.request<
      { objects: Array<Required<ModelCheckAccountTransaction>> }
    >(
      url,
      {
        method: "GET",
      },
    );
  }

  // -------------------------------------------------------
  // Unity
  // -------------------------------------------------------

  /**
   * Get an overview of all unities
   *
   * @see https://my.sevdesk.de/swaggerUI/index.html#/Unity/getUnities
   */
  async getUnities(params: UrlParamsFor<"apiGetUnitiesUrl"> = {}) {
    const url = this.urls.apiGetUnitiesUrl(params);

    return await this.request<{ objects: Array<Required<ModelUnity>> }>(url, {
      method: "GET",
    });
  }

  // // pending invoices from sevdesk includes also outstanding / due invoices
  // // we remove them with a filter but you could also include the if you only need everything pending
  // async getPendingInvoices(options = { includeOutstanding: false }) {
  //   const allPendingInvoices = await this.getAllInvoices({
  //     status: "200",
  //   });

  //   return options.includeOutstanding
  //     ? allPendingInvoices
  //     : allPendingInvoices.filter(({ invoiceDate, timeToPay }) =>
  //         isBefore(
  //           Date.now(),
  //           addDays(new Date(invoiceDate), Number(timeToPay))
  //         )
  //       );
  // }

  // async getOutstandingInvoices() {
  //   const pendingInvoice = await this.getPendingInvoices({
  //     includeOutstanding: true,
  //   });

  //   return pendingInvoice.filter(({ invoiceDate, timeToPay }) =>
  //     isAfter(Date.now(), addDays(new Date(invoiceDate), Number(timeToPay)))
  //   );
  // }

  // async getBilledAmount(orderId) {
  //   const invoices = await this.getAllInvoices();

  //   return invoices
  //     .filter((invoice) => {
  //       return (
  //         invoice.origin !== undefined &&
  //         invoice.origin.id === orderId.toString()
  //       );
  //     })
  //     .reduce((sum, { sumNet }) => {
  //       sum += parseInt(sumNet);

  //       return sum;
  //     }, 0);
  // }

  // async getOrderTotalNet(orderId) {
  //   const options = {
  //     method: "GET",
  //   };

  //   return this.request(
  //     `https://my.sevdesk.de/api/v1/Order/${orderId}/getTotalNet`,
  //     options
  //   );
  // }

  // async getRemainingOrderBudget(orderId) {
  //   const totalNet = await this.getOrderTotalNet(orderId);
  //   const alreadyBilledAmount = await this.getBilledAmount(orderId);

  //   return totalNet - alreadyBilledAmount;
  // }

  // async getTextTemplates(language = "DE") {
  //   const options = {
  //     method: "GET",
  //   };

  //   const templates = await this.request(
  //     "https://my.sevdesk.de/api/v1/TextTemplate",
  //     options
  //   );

  //   const textTemplates = {
  //     DE: {
  //       RE: {
  //         HEAD: null,
  //         FOOT: null,
  //       },
  //     },
  //     EN: {
  //       RE: {
  //         HEAD: null,
  //         FOOT: null,
  //       },
  //     },
  //   };

  //   templates
  //     // TODO remove filter and add english templates for Offer, E-mail, etc. (https://my.sevdesk.de/#/admin/texttemplate)
  //     .filter((template) => template.objectType === "RE")
  //     .forEach((template) => {
  //       const { objectType, textType, name, text } = template;

  //       textTemplates[name === "Standard" ? "DE" : "EN"][objectType][textType] =
  //         text;
  //     });

  //   return textTemplates[language];
  // }
}
