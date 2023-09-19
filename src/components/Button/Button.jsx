import { ButtonContainer, ButtonLoadMore } from "./Button.styled"

export const Button = ({onLoadMore}) => {
    return (
        <ButtonContainer onClick={onLoadMore}>
            <ButtonLoadMore type="button">Load more</ButtonLoadMore>
        </ButtonContainer>
    )
}


