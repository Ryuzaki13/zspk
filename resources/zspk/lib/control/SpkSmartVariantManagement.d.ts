declare module "zspk/lib/control/SpkSmartVariantManagement" {
    import SmartVariantManagement, { $SmartVariantManagementSettings } from "sap/ui/comp/smartvariants/SmartVariantManagement";
    /**
     * @extends sap.ui.comp.smartvariants.SmartVariantManagement
     * @alias zspk.lib.control.SpkSmartVariantManagement
     */
    export default class SpkSmartVariantManagement extends SmartVariantManagement {
        renderer: (rm: RenderManager, control: Control) => void;
        constructor(settings?: $SmartVariantManagementSettings);
    }
}
//# sourceMappingURL=SpkSmartVariantManagement.d.ts.map