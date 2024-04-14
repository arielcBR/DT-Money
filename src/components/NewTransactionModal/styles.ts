import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import * as RadioGroup from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  background: rgba(0, 0, 0, 0.75);

  position: fixed;
  inset: 0;
  height: 100vw;
  width: 100vw;
`

export const Content = styled(Dialog.Content)`
  border-radius: 6px;
  min-width: 32rem;
  padding: 2.5rem 3rem;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;

    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      border: 0;
      border-radius: 6px;
      background: ${({ theme }) => theme['gray-900']};
      color: ${({ theme }) => theme['gray-300']};
      padding: 1rem;

      &::placeholder {
        color: ${({ theme }) => theme['gray-500']};
      }
    }

    button[type='submit'] {
      background: ${({ theme }) => theme['green-500']};
      border: 0;
      border-radius: 6px;
      color: ${({ theme }) => theme.white};
      cursor: pointer;
      font-weight: bold;
      height: 58px;
      margin-top: 1.5rem;
      padding: 0 1.25rem;

      &:disabled {
        cursor: not-allowed;
        opacity: 0.6;
      }

      &:not(:disabled):hover {
        background: ${({ theme }) => theme['green-700']};
        transition: background 0.2s;
      }
    }
  }
`

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 0.5rem;
`

interface TransactionTypeButton {
  variant: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(
  RadioGroup.Item,
)<TransactionTypeButton>`
  background: ${({ theme }) => theme['gray-700']};
  border: none;
  border-radius: 6px;
  color: ${({ theme }) => theme['gray-300']};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;

  svg {
    color: ${({ theme, variant }) =>
      variant === 'income' ? theme['green-300'] : theme['red-300']};
  }

  &[data-state='unchecked']:hover {
    transition: background-color 0.2s;
    background: ${(props) => props.theme['gray-600']};
  }
  &[data-state='checked'] {
    color: ${(props) => props.theme.white};
    background: ${(props) =>
      props.variant === 'income'
        ? props.theme['green-500']
        : props.theme['red-500']};

    svg {
      color: ${(props) => props.theme.white};
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  color: ${({ theme }) => theme['gray-500']};
  cursor: pointer;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
`
