import styled from 'styled-components'

export const Dashboard = styled.div`
  position: fixed
  width: ${props => props.width ? '230px' : '55px' }
  transition: width 1s
  height: 100%;
  background: #363636;
  
 span {
    color: #778899;
    
      :hover { 
        transform: scale(1.1); 
        color:white;
        cursor: pointer;
    
    }
 }
 
   @keyframes slide-top {
  0% {
        transform: translateX(-100%);
  }
  100% {

        transform: translateX(0);
  }
}

animation: slide-top 1s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;


`;