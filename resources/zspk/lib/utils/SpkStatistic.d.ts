declare module "zspk/lib/utils/SpkStatistic" {
    const XCSRFToken: string;
    type StatisticRequestType = {
        source_url: string;
        target_url: string;
        source_semantic: string;
        target_semantic: string;
        source_code: string;
        target_code: string;
    };
    /**
     * @alias zspk.lib.utils.SpkStatistic
     */
    export default class SpkStatistic {
        private static csrf;
        static getPath(): string;
        static add(body: StatisticRequestType): void;
        static getToken(body: StatisticRequestType): void;
    }
}
//# sourceMappingURL=SpkStatistic.d.ts.map