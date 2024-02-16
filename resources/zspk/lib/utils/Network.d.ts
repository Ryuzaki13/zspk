declare module "zspk/lib/utils/Network" {
    import BaseObject from "sap/ui/base/Object";
    enum HttpMethod {
        GET = "GET",
        POST = "POST",
        PUT = "PUT",
        DELETE = "DELETE",
        OPTIONS = "OPTIONS",
        PATCH = "PATCH"
    }
    type CallbackType<T = any> = (response: T, xhr: XMLHttpRequest) => void;
    interface BaseOptionType<T> {
        uri: string;
        successCallback?: CallbackType<T>;
        errorCallback?: CallbackType<any>;
        headers?: Record<string, string>;
    }
    interface OptionType<T> extends BaseOptionType<T> {
        params?: {
            [key: string]: any;
        };
    }
    function request<T>(method: HttpMethod, options: OptionType<T>): void;
    /**
     * @alias zspk.lib.utils.Network
     */
    export default class Network extends BaseObject {
        static Get<T>(options: OptionType<T>): void;
        static Put<T>(options: OptionType<T>): void;
        static Post<T>(options: OptionType<T>): void;
        static Delete<T>(options: OptionType<T>): void;
    }
}
//# sourceMappingURL=Network.d.ts.map