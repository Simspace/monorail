import { Colors } from '@monorail/helpers/color';
export declare enum AuthSubAppName {
    Academy = "academy",
    Admin = "admin",
    Catalog = "catalog",
    EventDesign = "event-design",
    Events = "events",
    Execution = "execution",
    Hardhat = "hardhat",
    NetworkSetup = "network-setup",
    Range = "range",
    ReportsAnalytics = "reports-analytics",
    TechOps = "techops",
    Tracker = "tracker"
}
export declare enum AppName {
    Admin = "admin",
    EventDesign = "event-design",
    Events = "events",
    Execution = "execution",
    Hardhat = "hardhat",
    Home = "home",
    Impact = "impact",
    LMS = "externalLms",
    MyOrg = "my-org",
    NetworkSetup = "network-setup",
    Range = "range",
    Repo = "repo",
    ReportsAnalytics = "reports-analytics",
    TechOps = "techops",
    Tracker = "tracker",
    Training = "training"
}
export declare type AppOrAuthSubAppName = AppName | AuthSubAppName;
export declare type AppOrAuthSubAppNameString = 'academy' | 'admin' | 'catalog' | 'event-design' | 'events' | 'execution' | 'externalLms' | 'hardhat' | 'home' | 'impact' | 'my-org' | 'network-setup' | 'range' | 'repo' | 'reports-analytics' | 'techops' | 'tracker' | 'training';
export declare const convertAppNameToColor: (appNames: AppOrAuthSubAppName) => Colors;
export declare const convertAppNameToSecondaryColor: (appNames: AppOrAuthSubAppName) => Colors;
export declare const convertStringToAppName: (appNameString: string) => AppOrAuthSubAppName;
export declare const convertAppNameToString: (appName: AppOrAuthSubAppName) => AppOrAuthSubAppNameString;
declare type AppNameType = string | AppOrAuthSubAppName;
export declare const isAppName: (name: AppNameType) => name is AppOrAuthSubAppName;
export {};
