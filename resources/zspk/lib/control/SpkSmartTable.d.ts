declare module "zspk/lib/control/SpkSmartTable" {
    import Control from "sap/ui/core/Control";
    import SpkAnalyticalTable from "zspk\lib\control\SpkAnalyticalTable";
    import SpkResponsiveTable from "zspk\lib\control\SpkResponsiveTable";
    import SpkSmartVariantManagement from "zspk\lib\control\SpkSmartVariantManagement";
    import { SpkColumnTemplate } from "zspk\lib\utils\SpkTableUtils";
    import SmartTable, { $SmartTableSettings } from "sap/ui/comp/smarttable/SmartTable";
    const Results = "Results";
    /**
     * @alias zspk.lib.control.SpkSmartTable
     */
    export default abstract class SpkSmartTable extends SmartTable {
        private parameterBuilder?;
        static metadata: {
            properties: {
                useResult: {
                    type: string;
                    group: string;
                    defaultValue: boolean;
                };
            };
        };
        /**
         * Переопределить унаследованный от SmartTable рендерер, который
         * базируется на рендерере FlexBox. В идеале написать свой рендер.
         * NOTE: неудобно, но он и тут и во всех наследниках должен быть
         */
        renderer: {
            apiVersion: number;
            render: (rm: RenderManager, control: Control) => void;
        };
        constructor(idOrSettings?: string | $SmartTableSettings);
        constructor(id?: string, settings?: $SmartTableSettings);
        /**
         * DEBUG:
         */
        load(): void;
        setColumnTemplate(templates: SpkColumnTemplate[]): void;
        /**
         * Переопределенный метод для установки имени сущьности, дополнена
         * установка имени в `UrlParameterBuilder` для генерации строки запроса.
         * @param entityName имя сущности из которой нужно тянуть данные
         */
        setEntitySet(entityName: string): SpkSmartTable;
        /**
         * Полное переопределение метода: создание собственных (унаследованных) таблиц.
         */
        _createTable(): void;
        /**
         * Получить элемент управления таблицы `SpkAnalyticalTable` или `SpkResponsiveTable`
         */
        abstract getTableControl(): SpkAnalyticalTable | SpkResponsiveTable;
        /**
         * Найти в контенте SmartTable таблицу и использовать её
         */
        protected abstract findTableFromContent(contents: Control[]): void;
        /**
         * Создать новую таблицу и добавить её в контент SmartTable
         */
        protected abstract createNewTable(): Control;
        /**
         * Установить параметры таблицы по умолчанию, как для созданной новой, так и загруженной из контента
         */
        protected abstract setDefaultSettings(): void;
        protected abstract setFlexLayoutData(): void;
        protected abstract appendColumn(template: SpkColumnTemplate): void;
        protected storeTable(table: Control): void;
        setSmartVariant(smartVariant: SpkSmartVariantManagement): this;
        /**
         * Найти в агрегации `customToolbar` элемент `SpkSmartTableToolbar` для настройки события применения фильтра
         */
        private buildToolbar;
        private onChangeFilter;
    }
}
//# sourceMappingURL=SpkSmartTable.d.ts.map