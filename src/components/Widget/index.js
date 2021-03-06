import styled from 'styled-components';

const Widget = styled.div`
  margin-top: 24px;
  margin-bottom: 24px;
  border: none;
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;

  h1, h2, h3 {
    font-size: 16px;
    font-weight: 500;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 200;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: transparent;
  color: ${(({ theme }) => theme.colors.contrastText) === (({ theme }) => theme.colors.primary) ? "#000000" : (({ theme }) => theme.colors.contrastText)};
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }

  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }

  svg {
    position: relative;
    left: -75px;
  }
`;

Widget.Topic = styled.a`
  outline: 0;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.contrastText};
  background-color: ${({ theme }) => `${theme.colors.mainBg}40`};
  padding: 10px 15px;
  margin-bottom: 8px;
  cursor: pointer;
  border: 1px solid ${({ theme }) => `${theme.colors.contrastText}`};
  border-radius: ${({ theme }) => theme.borderRadius};
  transition: .3s;
  display: block; 

  &:hover,
  &focus {
    opacity: .5;
  }

  &[data-answer="true"]{
    background-color: ${({ theme }) => theme.colors.success};
  }

  &[data-answer="false"]{
    background-color: ${({ theme }) => theme.colors.wrong};
  }
`;

export default Widget;
