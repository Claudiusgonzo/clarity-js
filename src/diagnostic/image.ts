import { Event } from "@clarity-types/data";
import { IImageError } from "@clarity-types/diagnostic";
import { bind } from "@src/core/event";
import queue from "@src/data/queue";
import { getId } from "@src/layout/dom";
import encode from "./encode";

export let data: IImageError[] = [];

export function start(): void {
    bind(document, "error", handler, true);
}

export function end(): void {
    return;
}

function handler(error: ErrorEvent): void {
    let target = error.target as HTMLElement;
    if (target && target.tagName === "IMG") {
        data.push({
            source: error["filename"],
            target: getId(target)
        });
    }

    queue(encode(Event.ImageError));
}

export function reset(): void {
    data = [];
}
