import styled from 'styled-components';

const Span = styled.div`
  min-width: 5rem;

  div {
    width: 1rem;
    height: 1rem;
    background-color: black;

    border-radius: 100%;
    display: inline-block;
    -webkit-animation: sk-bouncedelay 1.2s infinite ease-in-out both;
    animation: sk-bouncedelay 1.2s infinite ease-in-out both;
  }

  div:nth-of-type(1) {
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
  }

  div:nth-of-type(2) {
    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;
  }

  @-webkit-keyframes sk-bouncedelay {
    0%, 80%, 100% {
      -webkit-transform: scale(0)
    }
    40% {
      -webkit-transform: scale(1.0)
    }
  }

  @keyframes sk-bouncedelay {
    0%, 80%, 100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1.0);
      transform: scale(1.0);
    }
  }

`

export const Spinner = (): JSX.Element => {
    return (
        <Span className="spinner">
            <div></div>
            <div></div>
            <div></div>
        </Span>);
}