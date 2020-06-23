export interface SubscriberNode<Arg = any> {
    on(eventKey: any, handler: (arg: Arg) => any): any;
}

export interface PublisherNode<Arg = any> {
    emit(eventKey: any, arg?: Arg): void;
}

export function createEvent(
    event: any,
): {
    pub: (publisherNode: PublisherNode) => void;
    sub: (subscriberNode: SubscriberNode, callback: () => void) => any;
};

export function createEvent<Arg = any>(
    event: any,
): {
    pub: (publisherNode: PublisherNode, arg: Arg) => void;
    sub: (subscriberNode: SubscriberNode, callback: (arg: Arg) => void) => any;
};

export function createEvent(event: any) {
    return {
        pub: (publisherNode: PublisherNode, arg: any) => {
            if (arg !== undefined) {
                publisherNode.emit(event);
            } else {
                publisherNode.emit(event, arg);
            }
        },
        sub: (subscriberNode: SubscriberNode, callback: () => void) => {
            return subscriberNode.on(event, callback);
        },
    };
}