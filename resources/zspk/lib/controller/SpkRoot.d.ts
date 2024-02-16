declare module "zspk/lib/controller/SpkRoot" {
    import Event from "sap/ui/base/Event";
    import SpkController from "zspk\lib\controller\SpkController";
    /**
     * NOTE: замена Parent
     * @alias zspk.lib.controller.SpkRoot
     */
    export default class SpkRoot extends SpkController {
        private tree;
        constructor(name: string | object[]);
        onInit(): void;
        getAppName(): string;
        onChangePage(event: Event): void;
        private createTreeMenu;
        private createPageContainer;
        private createSplitter;
        /**
         * FIXME: пока только исправлены имена. Нужно выполнить рефакторинг
         */
        private onDataReceived;
        /**
         * Применить какие-либо фильтры перед отображением текущего представления, вызывается в событии `onBeforeShow`.
         * Например, что-нибудь с MultiComboBox сделать или определить фильтрацию дат.
         * @abstract необязательный к реализации
         */
        protected onApplyFilter?(): void;
    }
}
//# sourceMappingURL=SpkRoot.d.ts.map