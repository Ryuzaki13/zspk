declare module "zspk/lib/control/SpkOverflowToolbar" {
import { PropertyBindingInfo } from "sap/ui/base/ManagedObject";
import { $OverflowToolbarSettings } from "sap/m/OverflowToolbar";

    /**
     * Interface defining the settings object used in constructor calls
     */
    interface $SpkOverflowToolbarSettings extends $OverflowToolbarSettings {
        text?: string | PropertyBindingInfo;
    }

    export default interface SpkOverflowToolbar {

        // property: text

        /**
         * Gets current value of property "text".
         *
         * Default value is: ""
         * @returns Value of property "text"
         */
        getText(): string;

        /**
         * Sets a new value for property "text".
         *
         * When called with a value of "null" or "undefined", the default value of the property will be restored.
         *
         * Default value is: ""
         * @param [text=""] New value for property "text"
         * @returns Reference to "this" in order to allow method chaining
         */
        setText(text: string): this;
    }
}
