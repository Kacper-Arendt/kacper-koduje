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
  font-size: 1rem;
  
  h2 {
    width: 100%;
    height: 4rem;
    font-size: 2em;
    color: black;

  }
  h2{
    font-size: 1.5em;
  }

  p {
    font-size: 1em;
  }

@media${device.tablet} {
  font-size: 1.1rem;
}@media${device.laptop} {
  font-size: 1.3rem;
}
`

export const Wrapper = () => {
    return (
        <StyledWrapper>

        </StyledWrapper>
    )
}