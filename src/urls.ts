const DEFAULT_BASE_URL = "https://my.sevdesk.de/";

import { DefaultCollectionQuery, Query } from "./queries.ts";
import { ModelInvoice } from "./interfaces/index.ts";

export class SevDeskUrls {
  constructor(private baseUrl = DEFAULT_BASE_URL) {}

  apiUrl({
    version = 1,
    path,
    query = {},
  }: {
    version?: number;
    path: string;
    query?: Query;
  }) {
    const url = new URL(path, `${this.baseUrl}api/v${version}/`);

    Object.entries(query).forEach(([key, value]) => {
      const values = Array.isArray(value) ? value : [value];

      values.forEach((value) => {
        url.searchParams.append(key, value);
      });
    });

    return url.toString();
  }

  // -------------------------------------------------------
  // Invoice
  // -------------------------------------------------------

  apiGetInvoicesUrl({ ...query }: DefaultCollectionQuery & Query = {}) {
    return this.apiUrl({ path: `Invoice`, query });
  }

  apiGetInvoiceUrl({ id, ...query }: { id: string } & Query) {
    return this.apiUrl({ path: `Invoice/${id}`, query });
  }

  apiGetNextInvoiceNumberUrl({
    ...query
  }: { invoiceType: string; useNextNumber: boolean } & Query) {
    return this.apiUrl({ path: `Invoice/Factory/getNextInvoiceNumber`, query });
  }

  apiSaveInvoiceUrl({ ...query }: ModelInvoice.Factory) {
    return this.apiUrl({ path: `Invoice/Factory/saveInvoice`, query });
  }

  viewInvoiceUrl({ id }: { id: string }) {
    return `${this.baseUrl}#/fi/edit/type/RE/id/${id}`;
  }

  // -------------------------------------------------------
  // DocumentFolders
  // -------------------------------------------------------

  apiGetDocumentFoldersUrl({ ...query }: DefaultCollectionQuery & Query = {}) {
    return this.apiUrl({ path: `DocumentFolder`, query });
  }

  // -------------------------------------------------------
  // Document
  // -------------------------------------------------------

  apiGetDocumentsUrl({ ...query }: DefaultCollectionQuery & Query = {}) {
    return this.apiUrl({ path: `Document`, query });
  }

  apiFileUploadUrl({
    // The root folder is "null"
    folder = "null",
    ...query
  }: { object?: string; folder?: string } & Query = {}) {
    return this.apiUrl({
      path: `Document/Factory/fileUpload`,
      query: { folder, ...query },
    });
  }

  // -------------------------------------------------------
  // Contact
  // -------------------------------------------------------

  apiGetContactsUrl({ ...query }: DefaultCollectionQuery & Query = {}) {
    return this.apiUrl({
      path: `Contact`,
      query,
    });
  }

  // -------------------------------------------------------
  // Voucher
  // -------------------------------------------------------

  apiGetVouchersUrl({ ...query }: DefaultCollectionQuery & Query = {}) {
    return this.apiUrl({
      path: `Voucher`,
      query,
    });
  }

  // -------------------------------------------------------
  // CommunicationWay
  // -------------------------------------------------------

  apiGetCommunicationWaysUrl({
    ...query
  }: DefaultCollectionQuery & Query = {}) {
    return this.apiUrl({
      path: `CommunicationWay`,
      query,
    });
  }

  // -------------------------------------------------------
  // CheckAccountTransaction
  // -------------------------------------------------------

  apiGetCheckAccountTransactionUrl({
    ...query
  }: DefaultCollectionQuery & Query = {}) {
    return this.apiUrl({
      path: `CheckAccountTransaction`,
      query,
    });
  }

  // -------------------------------------------------------
  // Unity
  // -------------------------------------------------------

  apiGetUnitiesUrl({ ...query }: DefaultCollectionQuery & Query = {}) {
    return this.apiUrl({
      path: `Unity`,
      query,
    });
  }
}
