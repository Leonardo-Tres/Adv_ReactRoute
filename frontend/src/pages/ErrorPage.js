import { useRouteError } from "react-router-dom"

import PageContent from "../components/PageContent"
import MainNavigation from "../components/MainNavigation"

const ErrorPage = () => {
    let title = 'An error occured'
    let message = 'Something went wrong..'

    const error = useRouteError();

    if( error.status === 500 ) {
        message = error.data.message
    }

    if ( error.status === 404 ) {
        title = 'Not found'
        message =  'cannot find resource or page'
    }


    return <>
        <MainNavigation />
        <PageContent title={title}>
            <p>{message}</p>
        </PageContent>
    </>
}

export default ErrorPage