import { Dispatch, ReactNode, SetStateAction, createContext, useState } from "react";

type AppProviderPropType = {
    children: ReactNode;
};

interface AppContextProps {
    toggleSidebar: boolean,
    setToggleSidebar: Dispatch<SetStateAction<boolean>>
}

export const AppContext = createContext<AppContextProps>({
        toggleSidebar: false,
        setToggleSidebar: () => null
})


export const AppProvider = (props: AppProviderPropType) => {
    const {children} = props

    const [toggleSidebar, setToggleSidebar] = useState<boolean>(false)

    const values = {
        toggleSidebar,
        setToggleSidebar
    }

    return (
        <AppContext.Provider value={values}>{children}</AppContext.Provider>
    )

} 