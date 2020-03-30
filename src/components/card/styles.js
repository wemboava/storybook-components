import styled from 'styled-components';

export const Card = styled.div`
  width: 200px;
  height: 300px;
  padding: 10px;
`;

export const FeaturedStyled = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  border-radius: 5px;
  transition: all 0.3s ease-in-out;
  &::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    top: 0;
    opacity: 0;
    border-radius: 5px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.3);
    transition: opacity 0.3s ease-in-out;
  }

  &:hover {
    transform: ${props => props.disabled ? 'scale(1)' : 'scale(1.05)'};
  }

  &:hover::after {
    opacity: 1;
  }

  .container_img {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 5px;
    }
  }
  .info {
    height: 50px;
    padding: 80px 0 15px 0;
    position: absolute;
    bottom: 0;
    width: 100%;
    color: #FFF;
    border-radius: 0 0 3px 3px;
    background: linear-gradient( to top,rgba(0, 0, 0, 0.6) 0%,rgba(0, 0, 0, 0.35) 50%,rgba(0, 0, 0, 0) 100% );

    &__label {
      padding: 0 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      font-size: 1.1em;
      line-height: 14px;     /* fallback */
      max-height: 38px;      /* fallback */
      -webkit-line-clamp: 1; /* number of lines to show */
      -webkit-box-orient: vertical;
      font-weight: 600;
      text-align: center;
    }
    &__sublabel_container {
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: flex-start;
      
      margin-top: 3px;
      align-items: center;
      flex-direction: column;
    
      .sublabel {
        font-weight: 400;
        margin: 2px 0 5px 0;
        font-size: .8em;
      }
    }
  }
`;
