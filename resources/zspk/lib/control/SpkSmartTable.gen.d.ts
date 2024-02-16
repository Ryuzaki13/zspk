declare module "zspk/lib/control/SpkSmartTable" {
import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { $SmartTableSettings } from "sap/ui/comp/smarttable/SmartTable";

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $SpkSmartTableSettings extends $SmartTableSettings {
        useResult?: boolean | PropertyBindingInfo | `{${string}}`;
    }

    export default interface SpkSmartTable {

        // property: useResult

        /**
         * Gets current value of property "useResult".
         *
         * Default value is: false
         * @returns Value of property "useResult"
         */
        getUseResult(): boolean;

        /**
         * Sets a new value for property "useResult".
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * Default value is: false
         * @param [useResult=false] New value for property "useResult"
         * @returns Reference to "this" in order to allow method chaining
         */
        setUseResult(useResult: boolean): this;
    }
}
