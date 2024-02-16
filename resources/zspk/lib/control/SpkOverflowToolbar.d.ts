declare module "zspk/lib/control/SpkOverflowToolbar" {
    import OverflowToolbar from "sap/m/OverflowToolbar";
    /**
     * @alias zspk.lib.control.SpkOverflowToolbar
     */
    export default class SpkOverflowToolbar extends OverflowToolbar {
        private clearFilterButton;
        private toggleDetailTableVisibilityButton;
        private toggleFilterVisibilityButton;
        private openExcelButton;
        static readonly metadata: {
            properties: {
                text: {
                    type: string;
                    group: string;
                    defaultValue: string;
                };
            };
        };
        renderer: {
            apiVersion: number;
            render: (rm: RenderManager, control: Control) => void;
        };
        constructor(idOrSettings?: string | $SpkOverflowToolbarSettings);
        constructor(id?: string, settings?: $SpkOverflowToolbarSettings);
        private createToogleButton;
        private onToggleSidebar;
        getText?(): string;
    }
}
//# sourceMappingURL=SpkOverflowToolbar.d.ts.map