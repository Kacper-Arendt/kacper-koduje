import styled from 'styled-components';
import {device} from '../../Models/MediaQueries';

export const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  h2 {
    width: 100%;
    height: 4rem;
    font-size: 2rem;
    color: black;

  }
  h2{
    font-size: 1.5rem;
  }

  p {
    font-size: 1rem;
  }

@media${device.laptop} {
  h2 {
  font-size: 2.5rem;
  }
  h3{
    font-size: 2rem;
  }

  p {
    font-size: 1.5rem;
  }
}
`

export const Wrapper = () => {
    return (
        <StyledWrapper>

        </StyledWrapper>
    )
}