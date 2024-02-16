declare module "zspk/lib/control/SpkResponsiveTable" {
    import Table, { $TableSettings } from "sap/m/Table";
    /**
     * @alias zspk.lib.control.SpkResponsiveTable
     */
    export default class SpkResponsiveTable extends Table {
        renderer: string;
        constructor(id?: string, settings?: $TableSettings);
        /**
         *
         * Применить какие-либо фильтры перед отображением текущего представления, вызывается в событии `onBeforeShow`.
         * Например, что-нибудь с MultiComboBox сделать или определить фильтрацию дат.
         * @abstract необязательный к реализации
         */
        onApplyFilter?(): void;
    }
}
//# sourceMappingURL=SpkResponsiveTable.d.ts.map