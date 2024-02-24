import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Avatar from "./common/Avatar";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getLetters } from "api/queryFnc";

const StLi = styled.li`
  margin: 10px 0;
  padding: 5px;
  display: flex;
  flex-direction: column;

  list-style: none;
  cursor: pointer;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.01);
  }
`;

const UserSection = styled.section`
  display: flex;
  gap: 15px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Content = styled.p`
  padding: 10px;

  border-bottom: 1px solid red;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function LetterList() {
  const { isLoading, data: letters } = useQuery({
    queryKey: ["letters"],
    queryFn: getLetters,
  });
  const navigate = useNavigate();
  const activeMember = useSelector((state) => state.member);

  if (isLoading) {
    return <h1>Loading..</h1>;
  }

  const filteredLetters = letters.filter(
    (letter) => letter.writedTo === activeMember
  );

  return (
    <ul>
      {filteredLetters.length === 0 ? (
        <p>{activeMember} 에게 보내는 첫 팬레터의 주인공이 되어보세요!</p>
      ) : (
        filteredLetters.map((letter) => {
          return (
            <StLi
              key={letter.id}
              onClick={() => navigate(`/detail/${letter.id}`)}
            >
              <UserSection>
                <Avatar src={letter.avatar} />
                <UserInfo>
                  <h2>{letter.nickname}</h2>
                  <time>
                    {new Date(letter.createdAt).toLocaleDateString("ko", {
                      year: "2-digit",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                    })}
                  </time>
                </UserInfo>
              </UserSection>
              <Content>{letter.content}</Content>
            </StLi>
          );
        })
      )}
    </ul>
  );
}

export default LetterList;
