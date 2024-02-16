declare module "zspk/lib/utils/Formatter" {
    import BaseObject from "sap/ui/base/Object";
    import { ValueState } from "sap/ui/core/library";
    const empty: string;
    const space: string;
    const coma: string;
    const persent: string;
    const defaultFloatFormat: {
        decimalSeparator: string;
        groupingSeparator: string;
        minFractionDigits: number;
        maxFractionDigits: number;
    };
    /**
     * Налог на добавленную стоимость (НДС) (value-added tax)
     */
    const VAT = 1.2;
    /**
     * Минимальные процент для успешного статуса
     */
    const SuccessPersent = 95;
    type FormaterValue = string | number;
    /**
     * @namespace zspk.lib.utils
     * @alias zspk.lib.utils.Formatter
     */
    export default class Formatter extends BaseObject {
        static isNumber(value: number): boolean;
        /**
         * Преобразовать строку в число. Использовать для значений,
         * у которых, к примеру, в начале стоят нули `000022311`.
         *
         * Замена функции `formatters.zeroReplace`
         *
         * @param value число представленное в строковом виде
         * @returns число, если на вход подано корректное значение в виде строки или числа
         *
         * @author afanasyevav
         */
        static toNumber(value: FormaterValue): number;
        /**
         * Преобразовать строковое значение `value` в форматированное число
         * @param value строковая переменная, содержащая число
         * @returns форматирования строка с типом `float` или `''`
         *
         * @author afanasyevav
         */
        static toFloatFormat(value: FormaterValue): string;
        /**
         * Преобразовать строковое значение `value` в форматированное число
         * если `v1` и `v2` пустые.
         * @param v1 уточнить!
         * @param v2 уточнить!
         * @param value строковая переменная, содержащая число
         * @returns форматирования строка с типом `float` или `''`
         *
         * @author afanasyevav
         */
        static toFloatWithCondition(v1: any, v2: any, value: FormaterValue): string;
        /**
         * Результат деления `value1` на `value2`.
         * Параметры с большей долей вероятности будут иметь тип `number`, но нельзя искулючать и ситуацию со строкой.
         *
         * @author afanasyevav
         */
        static divide(value1: FormaterValue, value2: FormaterValue): number;
        /**
         * Результат деления `value1` на `value2` и перевод форматированную строку по `defaultFloatFormat`.
         * Параметры с большей долей вероятности будут иметь тип `number`, но нельзя искулючать и ситуацию со строкой.
         *
         * @author afanasyevav
         */
        static divideToFloatFormat(value1: FormaterValue, value2: FormaterValue): string;
        /**
         * Результат деления `value1` на `value2` с учётом НДС и перевод форматированную строку по `defaultFloatFormat`.
         * Параметры с большей долей вероятности будут иметь тип `number`, но нельзя искулючать и ситуацию со строкой.
         *
         * @author afanasyevav
         */
        static divideWithVATToFloatFormat(value1: FormaterValue, value2: FormaterValue): string;
        /**
         * Вычислить процент `value1` от `value2` и округлить до целого числа.
         *
         * @author afanasyevav
         */
        static toRounedPersent(value1: FormaterValue, value2: FormaterValue): number;
        /**
         * Вычислить процент `value1` от `value2` и округлить до целого числа и добавить постфикс `%`.
         *
         * @author afanasyevav
         */
        static toStringPersent(value1: FormaterValue, value2: FormaterValue): string;
        /**
         * Вычисление процента `value2` от `value1`.
         *
         * @param value1 число, взятое за 100%
         * @param value2 число, для которого вычисляется процент
         * @returns форматированная строка от вычисленного процента с постфиком `%`
         *
         * @author afanasyevav
         */
        static toFormatPersent(value1: FormaterValue, value2: FormaterValue): string;
        /**
         * Вычисление процента `value2` от `value1`.
         *
         * @param value1 число, взятое за 100%
         * @param value2 число, для которого вычисляется процент
         * @returns форматированная строка от вычисленного процента с постфиком `%`
         *
         * @author afanasyevav
         */
        static toRoundedFormatPersent(value1: FormaterValue, value2: FormaterValue): string;
        /**
         * ! сомнительная хрень
         */
        static toFormatPersentVarian1(value1: FormaterValue, value2: FormaterValue): string;
        /**
         * ! сомнительная хрень 2
         */
        static toFormatPersentVarian2(value1: FormaterValue, value2: FormaterValue): string;
        /**
         * Вспомогательный метод для препобразования числа в форматированную строку с параметрами `defaultFloatFormat`
         *
         * @author afanasyevav
         */
        static floatToFormat(value: number): string;
        /**
         * Вспомогательные метод для вычисления процента `value1` от `value2`.
         * Использовать только в рамках текущего класса.
         *
         * @author afanasyevav
         */
        static toPersent(value1: FormaterValue, value2: FormaterValue): number;
        /**
         * Вычислить процент `value1` от `value2` и результат проверяется
         * на магическое число `SuccessPersent` и приводится к статусу `Success` | `None`
         *
         * @author afanasyevav
         */
        static toSuccessStatus(value1: FormaterValue, value2: FormaterValue): ValueState;
        /**
         * Привести `value` к статусу `Success` | `Error`
         * @param value значение проверяется на магическое число `SuccessPersent`
         *
         * @author afanasyevav
         */
        static persentToSuccessStatus(value: FormaterValue): ValueState;
        /**
         * Перевод процентного числа в статус `Success`, `Warning`, `Error`
         * @todo необъяснымые магические числа
         *
         * @author afanasyevav
         */
        static persentToStatus(value: FormaterValue): ValueState;
    }
}
//# sourceMappingURL=Formatter.d.ts.map