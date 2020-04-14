export class Iov {
    play: (iovPlayer?: any) => any;
    changeSrc: (url: string, showOnFirstFrame?: boolean) => any;
}

export class IovCollection {
    static asSingleton: () => IovCollection;
    create: (videoElementId: string) => Promise<Iov>;
}
