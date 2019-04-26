import { Colors } from '@monorail/helpers/color';
declare enum AuthSubAppName {
    Academy = "academy",
    Admin = "admin",
    Catalog = "catalog",
    Dashboard = "dashboard",
    Hardhat = "hardhat",
    Range = "range",
    TechOps = "techops",
    Tracker = "tracker",
    Execution = "execution",
    Home = "home",
    Events = "events",
    EventDesign = "event-design",
    ReportsAnalytics = "reports-analytics"
}
export declare enum AppName {
    Admin = "admin",
    Dashboard = "dashboard",
    Hardhat = "hardhat",
    Impact = "impact",
    LMS = "externalLms",
    Range = "range",
    Repo = "repo",
    TechOps = "techops",
    Tracker = "tracker",
    Training = "training",
    Execution = "execution",
    Home = "home",
    Events = "events",
    EventDesign = "event-design",
    ReportsAnalytics = "reports-analytics"
}
export declare type AppOrAuthSubAppName = AppName | AuthSubAppName;
export declare type AppOrAuthSubAppNameString = 'admin' | 'academy' | 'catalog' | 'dashboard' | 'range' | 'tracker' | 'hardhat' | 'impact' | 'training' | 'techops' | 'repo' | 'externalLms' | 'execution' | 'home' | 'events' | 'event-design' | 'reports-analytics';
export declare const convertAppNameToColor: (appNames: AppOrAuthSubAppName) => Colors;
export declare const convertStringToAppName: (appNameString: string) => AppOrAuthSubAppName;
export declare const convertAppNameToString: (appName: AppOrAuthSubAppName) => AppOrAuthSubAppNameString;
export declare const isAppName: (name: string) => name is AppOrAuthSubAppName;
export {};
