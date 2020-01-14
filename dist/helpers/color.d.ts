export declare enum Colors {
    Black12 = "black12",
    Black24 = "black24",
    Black38 = "black38",
    Black54 = "black54",
    Black62 = "black62",
    Black74 = "black74",
    Black89 = "black89",
    Black = "black",
    White89 = "white89",
    White = "white",
    Grey90 = "grey90",
    Grey94 = "grey94",
    Grey96 = "grey96",
    Grey97 = "grey97",
    Grey98 = "grey98",
    Grey99 = "grey99",
    DarkGrey = "darkGrey",
    BrandLightBlue = "brandLightBlue",
    BrandDarkBlue = "brandDarkBlue",
    PCTEPurple = "PCTEPurple",
    AccentBlue300 = "accentBlue300",
    AccentBlue400 = "accentBlue400",
    AccentBlue500 = "accentBlue500",
    AccentBlue600 = "accentBlue600",
    AccentBlue700 = "accentBlue700",
    AccentPurple500 = "accentPurple500",
    AccentPurple700 = "accentPurple700",
    Active = "active",
    Canceled = "canceled",
    Finished = "finished",
    Scheduled = "scheduled",
    Requested = "requested",
    Inactive = "inactive",
    Academy = "academy",
    Execution = "execution",
    Admin = "admin",
    AdminAlt = "adminAlt",
    Catalog = "catalog",
    CatalogAlt = "catalogAlt",
    Dashboard = "dashboard",
    Range = "range",
    RangeAlt = "rangeAlt",
    Tracker = "tracker",
    TrackerAlt = "trackerAlt",
    Hardhat = "hardhat",
    Impact = "impact",
    ImpactAlt = "impactAlt",
    Training = "training",
    TechOps = "techops",
    TechOpsAlt = "techopsAlt",
    Repo = "repo",
    LMS = "externalLms",
    MyOrg = "myOrg",
    MyOrgAlt = "myOrgAlt",
    Green = "green",
    Red = "red",
    Amber = "amber",
    Error = "error",
    Warning = "warning",
    Success = "success",
    Info = "info",
    High = "high",
    HighModerate = "highModerate",
    Moderate = "moderate",
    LowModerate = "lowModerate",
    Low = "low"
}
declare type HSLAMapType = {
    h: number;
    s: number;
    l: number;
    a: number;
};
export declare const colorHSLAMap: ({ color, alpha, }: {
    color: Colors;
    alpha: number;
}) => HSLAMapType;
export declare const convertHSLAMapToCss: (HSLAMap: HSLAMapType) => string;
export declare const getColor: (color: Colors, alpha?: number) => string;
export {};
