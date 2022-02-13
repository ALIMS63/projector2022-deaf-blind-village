import { Balance } from "./balance";
import { FiatKind } from "./fiat";

export enum ExchangeKind {
    Sell,
    Buy
}

export enum ExchangeState {
    Initiated,
    Confirmed,
    Completed,
    Abused,
    Cancelled
}

export interface ViewExchangeModel { 
    id: number;
    safeId: string;
    orderId: number;
    orderSafeId: string;
    ownerId: number;
    ownerSafeId: string;
    recepientId: number;
    recepientSafeId: string;
    kind: ExchangeKind;
    creationDate: Date,
    confirmationDate?: Date;
    completionDate?: Date;
    state: ExchangeState;
    volume: number;
    assetKind: Balance;
    exchangeAssetKind: FiatKind;
    rate: number;
    exchangeVolume: number;
    limitFrom: number;
    limitTo: number;
    operationWindow: any;
    terms?: string;
    methodsKindsJson: string;
    methodsKinds: number[];
    paymentMethod: any;
    userRating: string;
    orderVolume: number;
    mark: boolean | null;
}

export interface GetExchangesCollectionResult {
    collection: ViewExchangeModel[];
    totalRecords: number;
}

export type OwnExchangesProps = {
    exchanges: ViewExchangeModel[];
    loading: boolean;
    setExchanges?: (value: any) => any; 
};

export interface TotalExecutedExchangesModel {
    userId: number;
    totalExecutedExchanges: number;
};

export interface GetTotalExecutedExchangesModel {
    collection: TotalExecutedExchangesModel[];
    totalRecords: number;
}

