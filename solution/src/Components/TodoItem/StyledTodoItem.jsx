import styled from 'styled-components';

export const StyledTodoItem = styled.div`
  display: flex;
  width: 100%;
  min-height: 3rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  .sortable-container {
    background-color: rgba(0, 0, 0, 0.1);
    .sortable-item {
      transition: all 0.3s;
      background-color: white;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
      background-color: ${({ theme }) => theme.colors.border};

      &.chosen {
        background-color: rgba(0, 0, 0, 0.1);
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
        background-color: ${({ theme }) => theme.colors.border};
        opacity: 1;
      }
      &.drag {
        opacity: 0;
      }
    }
  }

  .circle {
    width: 1.25rem;
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;
    margin: auto 0.9375rem;
    display: grid;
    place-items: center;
    background-color: ${({ theme }) => theme.colors.border};
    &:hover {
      cursor: pointer;
      background: linear-gradient(34deg, #57ddff 0%, #c058f3 100%);
    }
    &--completed {
      background: linear-gradient(34deg, #57ddff 0%, #c058f3 100%);
    }
    &__inner {
      width: 1.125rem;
      aspect-ratio: 1/1;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.colors.bgPrimary};
      overflow: hidden;
      display: grid;
      place-items: center;
      &--completed {
        background-color: transparent;
      }
      &__icon {
        width: 60%;
        opacity: 0;
        transition: opacity 0.3s;
        color: white;
        &--completed {
          transition: opacity 0.3s;
          opacity: 1;
        }
      }
    }
  }
  .text {
    margin: auto;
    margin-left: 0;
    width: fit-content;
    height: 100%;
    width: max-content;
    padding: 0 0.5rem;
    min-width: 50%;
    font-size: 0.75rem;
    &--completed {
      opacity: 0.7;
      text-decoration: line-through;
    }
  }
  .deleteIcon {
    font-size: 0.75rem;
    margin: auto 0.5rem;
    cursor: pointer;
    opacity: 0.8;
    transition: opacity 0.3s;
    &:hover {
      opacity: 1;
    }
  }
`;
