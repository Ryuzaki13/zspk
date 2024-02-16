declare module "zspk/lib/models/SpkStorage" {
    import BaseObject from "sap/ui/base/Object";
    import JSONModel from "sap/ui/model/json/JSONModel";
    type StorageDateType = {
        current?: Date;
        begin?: Date;
        end?: Date;
    };
    type StorageType = {
        Date: StorageDateType;
        Component: {};
    };
    const ModelName: string;
    /**
     * @namespace zspk.lib.models
     * @name zspk.lib.models.SpkStorage
     */
    export default class SpkStorage extends BaseObject {
        private readonly model;
        constructor();
        getModel(): JSONModel;
    }
}
//# sourceMappingURL=SpkStorage.d.ts.map