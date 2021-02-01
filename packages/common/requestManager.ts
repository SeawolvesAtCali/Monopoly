import { Request } from './request';
import { Response } from './response';

type ResolveFunc = (value: Response | PromiseLike<Response>) => void;

export interface RequestManager {
    newId(): string;
    addRequest(request: Request, timeout: number): Promise<Response>;
    onResponse(response: Response): void;
    isWaitingFor(requestId: string): boolean;
}

export function newRequestManager(): RequestManager {
    const requestIdMap = new Map<string, ResolveFunc>();
    let requestId = 1;
    function addRequest(request: Request, timeout: number) {
        const id = request.requestId;
        const promise = new Promise<Response>((resolve, reject) => {
            requestIdMap.set(id, resolve);
            if (timeout > 0) {
                setTimeout(() => {
                    if (requestIdMap.has(id)) {
                        requestIdMap.delete(id);
                        reject(new Error('timeout'));
                    }
                }, timeout);
            }
        });
        return promise;
    }

    function onResponse(response: Response) {
        const id = `${response.requestId}`;
        if (requestIdMap.has(id)) {
            const resolve = requestIdMap.get(id);
            requestIdMap.delete(id);
            Promise.resolve().then(() => {
                if (resolve) {
                    resolve(response);
                }
            });
        }
    }

    return {
        addRequest,
        onResponse,
        newId() {
            requestId = requestId + 1;
            return `${requestId}`;
        },
        isWaitingFor(id: string) {
            return requestIdMap.has(id);
        },
    };
}
