declare module "zspk/lib/control/SpkFilterManager" {
    import HeaderContainer, { $HeaderContainerSettings } from "sap/m/HeaderContainer";
    /**
     * @alias zspk.lib.control.SpkFilterManager
     */
    export default class SpkFilterManager extends HeaderContainer {
        renderer: {
            apiVersion: number;
            render: (rm: RenderManager, control: Control) => void;
        };
        constructor(settings: $HeaderContainerSettings);
        private createComboBoxes;
    }
}
//# sourceMappingURL=SpkFilterManager.d.ts.map