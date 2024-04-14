import styled from 'styled-components'

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;

  input {
    background: ${({ theme }) => theme['gray-900']};
    border: 0;
    border-radius: 6px;
    color: ${({ theme }) => theme['gray-300']};
    flex: 1;
    padding: 1rem;

    &::placeholder {
      color: ${({ theme }) => theme['gray-500']};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    background: transparent;
    border: 1px solid ${({ theme }) => theme['green-300']};
    border-radius: 6px;
    color: ${({ theme }) => theme['green-300']};
    cursor: pointer;
    font-weight: bold;
    padding: 1rem;

    &:not(:disabled):hover {
      background: ${({ theme }) => theme['green-500']};
      border: 1px solid ${({ theme }) => theme['green-500']};
      color: ${({ theme }) => theme.white};
      cursor: not-allowed;
      transition:
        background-color 0.2s,
        border-color 0.2s;
    }

    &:disabled {
      opacity: 0.6;
    }
  }
`
