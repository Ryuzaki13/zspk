declare module "zspk/lib/control/SpkDependencyComboBox" {
    import MultiComboBox, { $MultiComboBoxSettings } from "sap/m/MultiComboBox";
    /**
     * @alias zspk.lib.control.SpkDependencyComboBox
     */
    export default class SpkDependencyComboBox extends MultiComboBox {
        metadata: {
            properties: {
                /**
                 * Идентификатор элемента управления, от изменения которого зависит текущий элемент.
                 */
                dependency: {
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
        constructor(settings: $MultiComboBoxSettings);
    }
}
//# sourceMappingURL=SpkDependencyComboBox.d.ts.map