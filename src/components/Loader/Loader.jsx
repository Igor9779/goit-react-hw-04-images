import { Circles } from "react-loader-spinner"
import { LoaderWrapper } from "./Loader.styled"

export const Loader = () => {
    return (
        <LoaderWrapper>
            <Circles
                height="80"
                width="80"
                color="#0074d9"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />              
        </LoaderWrapper>
    )
}
