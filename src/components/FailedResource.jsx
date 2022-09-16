import styled from "styled-components";
import { MdSyncProblem } from 'react-icons/md'


const Container = styled.div`
  text-align: center;
  width: 95%;
  margin: 15px auto;
  color: #D34343; 
  padding: 20px 0;
  
  & > p {
    font-size: 20px;
    font-weight: bold;
  }
`;

const ProblemIcon = styled(MdSyncProblem)` 
  margin: 0 0 20px 0;
  font-size: 75px !important;
`;

export function FailedResource({ message }){
  return (
    <Container>
      <ProblemIcon />
      <p>{ message }</p>
    </Container>
  );
}
