import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

type AppProviderPropType = {
    children: ReactNode;
    isMobile?: boolean;
};

interface AppContextProps {
    toggleSidebar: boolean,
    setToggleSidebar: Dispatch<SetStateAction<boolean>>,
    slideCurrent: number,
    setSlideCurrent: Dispatch<SetStateAction<number>>
}

export const AppContext = createContext<AppContextProps>({
        toggleSidebar: false,
        setToggleSidebar: () => null,
        slideCurrent: 0,
        setSlideCurrent: () => null
})


export const AppProvider = (props: AppProviderPropType) => {
    const {children} = props

    const [toggleSidebar, setToggleSidebar] = useState<boolean>(false)
    const [slideCurrent, setSlideCurrent] = useState<number>(0)

    const values = {
        toggleSidebar,
        setToggleSidebar,
        slideCurrent,
        setSlideCurrent
    }

    return (
        <AppContext.Provider value={values}>{children}</AppContext.Provider>
    )

} 