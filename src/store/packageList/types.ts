export interface PackageRow {
    id: string;
    description: string;
    dependencies: string[];
}

export const FETCH_PACKAGES = "FETCH_PACKAGES";

export interface FetchPackagesAction {
    type: typeof FETCH_PACKAGES;
    packages: PackageRow[];
}

export type PackageListActionTypes = FetchPackagesAction;
