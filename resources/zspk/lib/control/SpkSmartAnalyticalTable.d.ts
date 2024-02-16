declare module "zspk/lib/control/SpkSmartAnalyticalTable" {
    import { $SmartTableSettings } from "sap/ui/comp/smarttable/SmartTable";
    import SpkSmartTable from "zspk\lib\control\SpkSmartTable";
    import SpkAnalyticalTable from "zspk\lib\control\SpkAnalyticalTable";
    import Control from "sap/ui/core/Control";
    import { SpkColumnTemplate } from "zspk\lib\utils\SpkTableUtils";
    /**
     * @alias zspk.lib.control.SpkSmartAnalyticalTable
     */
    export default class SpkSmartAnalyticalTable extends SpkSmartTable {
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
        getTableControl(): SpkAnalyticalTable;
        protected findTableFromContent(contents: Control[]): void;
        protected createNewTable(): SpkAnalyticalTable;
        protected setDefaultSettings(): void;
        protected setFlexLayoutData(): void;
        protected appendColumn(template: SpkColumnTemplate): void;
    }
}
//# sourceMappingURL=SpkSmartAnalyticalTable.d.ts.map