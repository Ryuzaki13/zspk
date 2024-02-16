declare module "zspk/lib/control/SpkSmartTableToolbar" {
    import Toolbar, { $ToolbarSettings } from "sap/m/Toolbar";
    /**
     * @alias zspk.lib.control.SpkSmartTableToolbar
     */
    export default class SpkSmartTableToolbar extends Toolbar {
        private onApplyFilterCallback;
        static metadata: {
            properties: {
                hello: {};
            };
        };
        renderer: {
            apiVersion: number;
            render: (rm: RenderManager, control: Control) => void;
        };
        constructor(idOrSettigns?: string | $ToolbarSettings);
        constructor(id?: string, settigns?: $ToolbarSettings);
        build(): void;
        attachApplyFilter(callback: () => void): void;
        private createApplyButton;
        private createHeaderContainer;
        private getFilterManager;
        private onApplyFilter;
    }
}
//# sourceMappingURL=SpkSmartTableToolbar.d.ts.map