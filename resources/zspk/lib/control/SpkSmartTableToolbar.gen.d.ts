declare module "zspk/lib/control/SpkSmartTableToolbar" {
import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { $ToolbarSettings } from "sap/m/Toolbar";

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $SpkSmartTableToolbarSettings extends $ToolbarSettings {
        hello?: string | PropertyBindingInfo;
    }

    export default interface SpkSmartTableToolbar {

        // property: hello

        /**
         * Gets current value of property "hello".
         *
         * @returns Value of property "hello"
         */
        getHello(): string;

        /**
         * Sets a new value for property "hello".
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * @param hello New value for property "hello"
         * @returns Reference to "this" in order to allow method chaining
         */
        setHello(hello: string): this;
    }
}
