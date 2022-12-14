import { useState } from "react";

export const useHandleSetBool = () => {
    const [bool, setBool] = useState<any>({ githubData: true, hover: false, openEmblemMenu: false });
    return [bool, (target: string) => {
        if (bool[target]) { setBool((prev: object) => { return { ...prev, [target]: false } }) }
        else { setBool((prev: object) => { return { ...prev, [target]: true } }) }
    }] as const
} 