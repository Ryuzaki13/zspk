declare module "zspk/lib/utils/UrlParameterBuilder" {
    import BaseObject from "sap/ui/base/Object";
    const invalidDate: string;
    const results: string;
    const datetime: string;
    const singleQuote = "'";
    const slash = "/";
    enum EntityParameters {
        Date = "p_date",
        DateTo = "p_date_to"
    }
    function IsNumber(value: number): boolean;
    /**
     * @alias zspk.lib.utils.UrlParameterBuilder
     */
    export default class UrlParameterBuilder extends BaseObject {
        private readonly params;
        private entitySet?;
        private results;
        /**
         * Сборщик параметров для ODateService
         * @param entitySetName имя сущьности
         * @param isResults строка параметров должна иметь окончание '/Results'
         */
        constructor(entitySetName?: string, isResults?: boolean);
        /**
         * Установить набор данных для формирования запроса,
         * например, для источника https://sapbpcdp0.spk.ru/sap/opu/odata/sap/ZIOBJ_SRV/
         * могут быть наборы ZP_ZEPAR037_AGR, ZP_ZDIV_ZCFO1 и тд.
         * @param entitySetName имя набора данных источника
         */
        setEntityName(entitySetName: string): void;
        getEntityName(): string;
        setUseResult(use: boolean): void;
        isUseResult(): boolean;
        /**
         * Установить параметр как строковое значение
         * @param key ключ параметра
         * @param value строковое значение параметра
         */
        setString(key: string, value: string): void;
        /**
         * Установтиь параметр даты
         * @param key ключ параметра
         * @param value значение параметра в формате javascript Date
         */
        setDate(key: string, value: Date, timezoneFix?: boolean): void;
        /**
         * Установить параметр с числовым значением. Если значение не валидное, то значение по умолчанию 0.
         * @param key ключ параметра
         * @param value значение параметра
         */
        setNumber(key: string, value: number | string): void;
        /**
         * Проверить установку ключа,
         */
        isEmpty(key: string): boolean;
        /**
         * Получить итоговую строку
         * @returns строка параметра
         */
        getString(): string;
    }
}
//# sourceMappingURL=UrlParameterBuilder.d.ts.map