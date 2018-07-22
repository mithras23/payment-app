import {Time} from "@angular/common";

export class Payment {
  id: string;
  dateOccurred: Date;
  type: string;
  category: string;
  subcategory: string;
  value: number;
  note: string;
}

export class ContinuationToken {
  timestamp: Time;
  id: string;
}

export class PageDto {
  TotalCount: number;
  HasNext: boolean;
  ContinuationToken: ContinuationToken;
  NextPageUrl: string;
  Payments: Payment[];
}
