import { Colors } from '@monorail/helpers/color';
import { ColorAlias } from '@monorail/v2/core/theme/colors';
import { IconType } from '@monorail/visualComponents/icon/IconType';
export declare enum CategoryId {
    AcademyCoursePlan = "academy-course-plan",
    AcademyPackage = "academy-package",
    AcademyContentModule = "academy-content-module",
    Assessments = "assessments",
    AttackScenario = "attack-scenario",
    AttackTool = "attack-tool",
    HardhatSpec = "hardhat-specification",
    IndividualAssessments = "individual-assessments",
    ConfigModule = "config-module",
    PuppetModule = "puppet-module",
    ExternalSubnet = "external-subnet",
    Network = "network",
    PhysicalAsset = "physical-asset",
    Range = "range",
    VMTemplate = "vm-template",
    CloneSource = "clone-source",
    Event = "event",
    LiveActionPlan = "event-template",
    Exercise = "exercise",
    TeamAssessmentPlan = "team-assessment-plan"
}
export declare const categoryReadableName: (entryCategory: CategoryId) => CategoryId.Assessments | "Course Plan" | "Structured Content Plan" | "Content Module" | "Live Action Plan" | "Network Spec" | "Individual Assessments" | "External Subnet" | "Physical Asset" | "Config Module" | "Puppet Module" | "VM Template" | "Range" | "Event" | "Attack Scenario" | "Attack Tool" | "Network" | "Exercise" | "Clone Source" | "Team Assessment Plan";
/** @deprecated use v2 Icon + categoryIconV2 */
export declare const categoryIcon: (entryCategory: CategoryId) => IconType;
export declare const categoryIconV2: (entryCategory: CategoryId) => React.ComponentType;
/** @deprecated Use v2 theme colors */
export declare const categoryColor: (entryCategory: CategoryId) => Colors.Academy | Colors.TeamAssessmentPlan | Colors.AttackElements | Colors.Assessments | Colors.RangeAlt | Colors.Tracker;
export declare const categoryColorV2: (entryCategory: CategoryId) => ColorAlias;
export declare const categoryPathname: (entryCategory: CategoryId) => "/catalog/course-plan" | "/catalog/structured-content-plans" | "/catalog/content-modules" | "/catalog/external-subnets" | "/catalog/network-spec" | "/catalog/physical-assets" | "/catalog/vm-templates" | "/catalog/config-modules" | "/catalog/puppet-modules" | "/events" | "/catalog/attack-scenarios" | "/catalog/attack-tools" | "/catalog/live-action-plans" | "/catalog/individual-assessments" | "/catalog/team-assessment-plans" | "/catalog";
