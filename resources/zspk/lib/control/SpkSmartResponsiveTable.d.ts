declare module "zspk/lib/control/SpkSmartResponsiveTable" {
    import { $SmartTableSettings } from "sap/ui/comp/smarttable/SmartTable";
    import SpkSmartTable from "zspk\lib\control\SpkSmartTable";
    import SpkResponsiveTable from "zspk\lib\control\SpkResponsiveTable";
    import Control from "sap/ui/core/Control";
    import { SpkColumnTemplate } from "zspk\lib\utils\SpkTableUtils";
    /**
     * @alias zspk.lib.control.SpkSmartResponsiveTable
     */
    export default class SpkSmartResponsiveTable extends SpkSmartTable {
        private table?;
        /**
         * Переопределить унаследованный от SmartTable рендерер, который
         * базируется на рендерере FlexBox. В идеале написать свой рендер.
         */
        renderer: {
            apiVersion: number;
            render: (rm: RenderManager, control: Control) => void;
        };
        constructor(id?: string, settings?: $SmartTableSettings);
        getTableControl(): SpkResponsiveTable;
        protected findTableFromContent(contents: Control[]): void;
        protected createNewTable(): SpkResponsiveTable;
        protected setDefaultSettings(): void;
        private storeItemTemplate;
        protected setFlexLayoutData(): void;
        protected appendColumn(template: SpkColumnTemplate): void;
    }
}
//# sourceMappingURL=SpkSmartResponsiveTable.d.ts.map