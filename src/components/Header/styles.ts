import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.header`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const NewTransactionButton = styled.button`
  background: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme.white};
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  height: 50px;
  padding: 0 1.25rem;

  &:hover {
    background: ${({ theme }) => theme['green-700']};
    transition: background-color 0.2s;
  }
`
