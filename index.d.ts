export class IovPlayer {
}

/**
 * Internet of Video client. This module uses the MediaSource API to
 * deliver video content streamed through CLSP from distributed sources.
 */
export class Iov {
    on(eventName: string, action: any);
    trigger(eventName: string, value: any);
    metric(eventName: string, value: any);
    onConnectionChange();
    onVisibilityChange():Promise<void>;
    generatePlayerLogId(): string;
    showNextStream();
    cancelChangeSrc(id: string);
    play(iovPlayer?: IovPlayer):Promise<void>;
    stop(iovPlayer?: IovPlayer):Promise<void>;
    restart(iovPlayer?: IovPlayer):Promise<void>;
    enterFullscreen(iovPlayer?: IovPlayer):Promise<void>;
    exitFullscreen(iovPlayer?: IovPlayer):Promise<void>;
    toggleFullscreen(iovPlayer?: IovPlayer):Promise<void>;
    changeSrc(url: string, showOnFirstFrame?: boolean);
    clone(streamConfiguration?);
    onPlayerError(error);
    /**
     * Dereference the necessary properties, clear any intervals and timeouts, and
     * remove any listeners.  Will also destroy the player.
     */
    destroy();
}

/**
 * The Iov Collection is meant to be a singleton, and is meant to manage all
 * Iovs in a given browser window/document.  There are certain centralized
 * functions it is meant to perform, such as generating the guids that are
 * needed to establish a connection to a unique topic on the SFS, and to listen
 * to window messages and route the relevant messages to the appropriate Iov
 * instance.
 */
export class IovCollection {
    static asSingleton():IovCollection;
    /**
     * Create an Iov for a specific stream, and add it to this collection.
     */
    create(videoElementId: string): Promise<Iov>;
    /**
     * Add an Iov instance to this collection.  It can then be accessed by its id.
     */
    add(iov: Iov);
    /**
     * Determine whether or not an iov with the passed id exists in this
     * collection.
     */
    has(iovId: string):boolean;
    /**
     * Get an iov with the passed id from this collection.
     */
    get(iovId: string):Iov | undefined;
    /**
     * Remove an iov instance from this collection and destroy it.
     */
    remove(iovId: string):this;
    /**
     * Destroy this collection and destroy all iov instances in this collection.
     */
    destroy();
}
