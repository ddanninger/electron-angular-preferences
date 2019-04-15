import { SimpleChanges, OnChanges } from '@angular/core';
export declare class FlashMessageComponent implements OnChanges {
    message: FlashMessage;
    showMessage: boolean;
    constructor();
    ngOnChanges(changes: SimpleChanges): void;
    manageMessage(message: FlashMessage): void;
}
export interface FlashMessage {
    message: string;
    level: FlashMessageLevel;
    isError?: boolean;
}
export declare enum FlashMessageLevel {
    SUCCESS = "success",
    ERROR = "error"
}
