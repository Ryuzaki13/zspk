declare module "zspk/lib/controller/SpkPage" {
    import Model from "sap/ui/model/Model";
    import SpkController from "zspk\lib\controller\SpkController";
    /**
     * @namespace zspk.lib.controller
     * @alias zspk.lib.controller.FilterSettingResponseType
     */
    type FilterSettingResponseType = {
        MULTISELECT: boolean;
    };
    /**
     * @namespace zspk.lib.controller
     * @alias zspk.lib.controller.SpkPage
     */
    export default class SpkPage extends SpkController {
        onInit(): void;
        getComponentModel(modelName: string): Model;
        getTextI18n(key: string): string;
        protected onApplyFilter?(): void;
        /**
         * Загрузить параметр множественного выбора для кнопки `Применить`.
         * Устанавливается булево значение к свойству `applyFilter` модели `storage`
         * @async вызвает асинхронный `GET` запрос
         */
        private loadFilterSettings;
    }
}
//# sourceMappingURL=SpkPage.d.ts.map