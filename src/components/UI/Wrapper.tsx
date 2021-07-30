import styled from 'styled-components';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  h2 {
    background: rgba(0, 0, 0, .3);
    width: 100%;
    height: 7rem;
    text-align: center;
    line-height: 7rem;
    font-size: 3rem;
  }
`

export const Wrapper = () => {
    return (
        <StyledWrapper>

        </StyledWrapper>
    )
}