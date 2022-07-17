import styled from "styled-components";
import StorageOutlinedIcon from '@material-ui/icons/StorageOutlined';

const Container = styled.div`
  text-align: center;
  width: 95%;
  margin: 15px auto;
  color: #FDFF20; 
  padding: 20px 0;
  
  & > p {
    font-size: 20px;
    font-weight: bold;
  }
`;

const StorageIcon = styled(StorageOutlinedIcon)` 
  margin: 0 0 20px 0;
  font-size: 75px !important;
`;

export function NoResource({ message }){
  return (
    <Container>
      <StorageIcon />
      <p>{ message }</p>
    </Container>
  );
}
