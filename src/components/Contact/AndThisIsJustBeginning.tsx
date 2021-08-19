import styled from "styled-components";
import {device} from "../../Models/MediaQueries";

const StyledDiv = styled.div`
  width: 100%;
  max-width: 60rem;
  margin: 3rem;
  padding: 2rem 1rem 0;
  background-color: white;
  display: flex;
  flex-direction: column;
  
  place-items: center;
  color: black;
  text-align: center;

  h3 {
    font-size: 2rem;
    margin: .5rem 0 1rem;
  }

  p {
    padding: 1rem;
    line-height: 1.4;

    :last-of-type {
      font-size: 1.4rem;
    }
  }

@media${device.tablet} {
  max-width: 75rem;

  p {
    width: 80%;
    margin: 0 auto;
  }
}
  @media${device.laptop}{
  border-radius: 1rem;
}
  
@media${device.laptopL} {
  max-width: 100rem;
}
`

export const AndThisIsJustBeginning = () => {
    return (
        <StyledDiv>
            <div>
                <h3>And this is just the beginning</h3>
                <p>Being a programmer is not only about coding and implementing various projects, but also about making
                    important decisions. One of them is undoubtedly the one that concerns the choice of the direction
                    in which we will develop. In the future, I would like to become a Full Stack Developer</p>
                <p>Want to talk?</p>
            </div>
        </StyledDiv>
    )
}