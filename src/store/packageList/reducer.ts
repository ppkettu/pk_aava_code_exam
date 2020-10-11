import { PackageRow, FETCH_PACKAGES, PackageListActionTypes } from "./types";

const initialState: PackageRow[] = [];

export const packageListReducer = (
    state = initialState, 
    action: PackageListActionTypes
  ): PackageRow[] => {
      switch(action.type) {
        case FETCH_PACKAGES:
              return [...action.packages]
        default:
            return state;
      }
  }