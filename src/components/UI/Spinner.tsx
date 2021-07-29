import styled from 'styled-components';

const Span = styled.div`
  display: inline-block;
  :after {
    content: " ";
    display: block;
    width: 3rem;
    height: 3rem;
    margin: .5rem;
    border-radius: 50%;
    border: .5rem solid white;
    border-color: white transparent white white;
    animation: lds-dual-ring .6s linear infinite;
  }
  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

export const Spinner = (): JSX.Element => {
    return (
        <Span></Span>
    );
}