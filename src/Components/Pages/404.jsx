import ErrorContainer from "../Fragments/ErrorElement/ErrorElement"

const ErrorPage = () => {
    return (
        <ErrorContainer>
            <ErrorContainer.ErrorElement>
                <ErrorContainer.ErrorTitle />
                <ErrorContainer.ErrorButton />
            </ErrorContainer.ErrorElement>
        </ErrorContainer>
    )
}


export default ErrorPage