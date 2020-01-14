import { Colors } from '@monorail/helpers/color';
export declare const categoryReadableName: (entryCategory: string) => string;
export declare const categoryIcon: (entryCategory: string) => string;
export declare const categoryColor: (entryCategory: string) => Colors.Academy | Colors.RangeAlt | Colors.Tracker;
export declare const categoryPathname: (entryCategory: string) => "/catalog/course-plan" | "/catalog/training-packages" | "/catalog/content-modules" | "/catalog/external-subnets" | "/catalog/network-spec" | "/catalog/physical-assets" | "/catalog/vm-templates" | "/catalog/config-modules" | "/events" | "/catalog/discover";
