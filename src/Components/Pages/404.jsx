import ErrorContainer from "../Fragments/ErrorElement/ErrorElement"

const ErrorPage = () => {
    return (
        <ErrorContainer>
            <ErrorContainer.ErrorElement>
                <ErrorContainer.ErrorElement.ErrorTitle />
                <ErrorContainer.ErrorElement.ErrorButton />
            </ErrorContainer.ErrorElement>
        </ErrorContainer>
    )
}


export default ErrorPage