declare module "zspk/lib/controller/SpkController" {
    import Controller from "sap/ui/core/mvc/Controller";
    import Router from "sap/ui/core/routing/Router";
    import SpkStorage from "zspk\lib\models\SpkStorage";
    /**
     * @alias zspk.lib.controller.SpkController
     */
    export default abstract class SpkController extends Controller {
        private router;
        private storageModel;
        constructor(name: string | object[]);
        /**
         * @override при переопределении обязательно вызывать super.onInit()
         */
        onInit(): void;
        getRouter(): Router;
        /**
         * Получить модель "хранилища"
         */
        getStorage(): SpkStorage;
    }
}
//# sourceMappingURL=SpkController.d.ts.map