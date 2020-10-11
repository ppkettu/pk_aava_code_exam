import { ThunkAction } from "redux-thunk";
import { AnyAction, Dispatch } from "redux";
import { FETCH_PACKAGES, PackageRow } from "./types";
import { AppActions, AppState } from "..";

export const fetchPackageRowsSuccess = (
    packages: PackageRow[]
): AppActions => ({
    type: FETCH_PACKAGES,
    packages,
});

function parseDependencies(s:string|null): string[] {
    let rs:string[] = [];
    if (s) {
        let sa:string[] = s.split(',');
        sa.forEach(element => {
            element = element.trimStart();
            let p:number = element.indexOf(" ");
            let s2:string = p > -1 ? element.substring(0, p) : element;
            if (!rs.includes(s2)){
                rs.push(s2);
            }
        });
    }
    return rs;
}

function parseKey(keyWord:string,s:string): string|null {
    let p1:number = s.indexOf(keyWord);
    let rs:string|null = null;
    if (p1 > -1) {
        p1 += keyWord.length;
        let p2:number = s.indexOf("\n", p1);
        rs = p2 > -1 ? s.substring(p1, p2) : s.substring(p1);
    }
    return rs;
}

function parsePackage(s:string): PackageRow {
    let p2:number = s.indexOf("\n");
    let packageName:string = s.substring(0,p2);
    s = s.substring(p2 + 1);

    let descript:string|null = parseKey("Description: ", s);
    if (descript===null) descript = "";

    let depends:string|null = parseKey("Depends: ", s);
    let depends2:string[] = parseDependencies(depends);

    return {id: packageName, description: descript, dependencies: depends2};
}

export const fetchPackageRows = (): ThunkAction<void, AppState,{}, AnyAction> => {

    return async (dispatch: Dispatch<AppActions>) => {
        const res = await fetch("./status.real.txt");
        
        let list: PackageRow[] = [];
        if (!res.ok) {
            // todo: failure
            return dispatch(fetchPackageRowsSuccess(list));  
        }
        const text:string = String(await res.text());

        /*
          Could have utilised text.split(magicWord) here, but the substring approach used
          here may require less memory
          */
        const magicWord:string = "Package: ";
        let p1:number = text.indexOf(magicWord);

        while(p1 > -1) {
            p1 += magicWord.length;
            let p2:number = text.indexOf(magicWord, p1);
            let s: string = p2 > 0 ? text.substring(p1, p2) : text.substring(p1);
            let r: PackageRow = parsePackage(s);
            list.push(r);
            p1 = p2;
        }
        return dispatch(fetchPackageRowsSuccess(list));
    };
};