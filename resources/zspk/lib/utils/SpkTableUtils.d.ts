declare module "zspk/lib/utils/SpkTableUtils" {
    import BaseObject from "sap/ui/base/Object";
    import Control from "sap/ui/core/Control";
    import Float from "sap/ui/model/type/Float";
    import Integer from "sap/ui/model/type/Integer";
    /**
     * @alias zspk.lib.utils.SpkColumnType
     */
    enum SpkColumnType {
        Text,
        Float,
        Integer,
        Boolean,
        Status
    }
    /**
     * @alias zspk.lib.utils.SpkColumnTemplate
     */
    type SpkColumnTemplate = {
        text: string;
        columnKey: string;
        columnType?: SpkColumnType;
        summed?: boolean;
        showIfGrouped?: boolean;
        formatter?: Function;
    };
    /**
     * @alias zspk.lib.utils.SpkTableUtils
     */
    export default class SpkTableUtils extends BaseObject {
        /**
         * Создать шаблон ячейки для смарт таблицы.
         * Созданный элемент должен установлен в агрегацию template колонки.
         *
         * `<AnalyticalColumn>
         *      <template>
         *          [here]
         *      </template>
         *  <AnalyticalColumn>`
         */
        static createCellTemplate(template: SpkColumnTemplate): Control;
        static createFloat(fractions: number): Float;
        static createInteger(): Integer;
    }
}
//# sourceMappingURL=SpkTableUtils.d.ts.map