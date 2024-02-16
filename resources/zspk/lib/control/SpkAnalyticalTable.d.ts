declare module "zspk/lib/control/SpkAnalyticalTable" {
    import { AggregationBindingInfo } from "sap/ui/base/ManagedObject";
    import AnalyticalTable, { $AnalyticalTableSettings } from "sap/ui/table/AnalyticalTable";
    const VisibleRowCount = 18;
    const MinAutoRowCount = 5;
    /**
     * @alias zspk.lib.control.SpkAnalyticalTable
     */
    export default class SpkAnalyticalTable extends AnalyticalTable {
        renderer: string;
        constructor(settings?: $AnalyticalTableSettings);
        bindItems(bindingInfo: AggregationBindingInfo): void;
        /**
         *
         * Применить какие-либо фильтры перед отображением текущего представления, вызывается в событии `onBeforeShow`.
         * Например, что-нибудь с MultiComboBox сделать или определить фильтрацию дат.
         * @abstract необязательный к реализации
         */
        onApplyFilter?(): void;
        private onSelectionRow;
    }
}
//# sourceMappingURL=SpkAnalyticalTable.d.ts.map