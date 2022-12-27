import { useState } from "react";
import "./App.css";
import { User } from "./models/User";
import styled from "styled-components";
import { StyledButton } from "./components/Button";
import userStore from "./Apollo/Classes/UserHandler";
import { LazyLoadImage } from 'react-lazy-load-image-component';

enum TabStatus {
  LEFT,
  RIGHT,
}

const AppContainer = styled.div`
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  background: antiquewhite;
`;
const TabSelector = styled.div`
  height: 50px;
  display: flex;
  flex-display: row;
  border-radius: 10px;
  border: 1px solid #282c34;
`;
const Tab = styled.div`
  display: flex;
  width: 200px;
  height: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-weight: 500;

  &:hover {
    background: darkgrey;
  }
`;
const FormContainer = styled.div`
  display: flex;
  flex-display: column;

  & form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const FormAvatarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 15px;
`;

function App() {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [page, setPage] = useState<string>("");
  const [avatarResponse, setAvatarResponse] = useState<string[]>(['https://placekitten.com/300/300']);
  const [currentTab, setCurrentTab] = useState<TabStatus>(TabStatus.LEFT);


  return (
    <AppContainer className="App">
      <TabSelector>
        <Tab onClick={() => setCurrentTab(TabStatus.LEFT)}>Retrieve User by Page</Tab>
        <Tab onClick={() => setCurrentTab(TabStatus.RIGHT)}>Create User</Tab>
      </TabSelector>
      <FormAvatarWrapper>
        <FormContainer>
          {currentTab === TabStatus.LEFT && (
            <form>
              <input
                type="text"
                placeholder="Page"
                onChange={(event) => setPage(event.target.value)}
              />
              <div>
                <StyledButton
                  onClick={(e) => {
                    e.preventDefault();
                    userStore.getUserByPage(page).then((users) => {
                        users && users?.forEach(({avatar}) => {
                          if (avatar) {
                            setAvatarResponse([...avatarResponse, avatar]);
                          }
                        })
                      }
                    );
                  }}
                  backgroundColor="yellow"
                >
                  Create
                </StyledButton>
              </div>
            </form>
          )}
          {currentTab === TabStatus.RIGHT && (
            <form>
              <input
                type="text"
                placeholder="Name"
                onChange={(event) =>
                  setUser({ ...user, first_name: event.target.value } as User)
                }
              />
              <input
                type="text"
                placeholder="Surname"
                onChange={(event) =>
                  setUser({ ...user, last_name: event.target.value } as User)
                }
              />
              <input
                type="text"
                placeholder="Email"
                onChange={(event) =>
                  setUser({ ...user, email: event.target.value } as User)
                }
              />
              <input
                type="text"
                placeholder="Avatar"
                onChange={(event) =>
                  setUser({ ...user, avatar: event.target.value } as User)
                }
              />
              <div>
                <StyledButton
                  onClick={(e) => {
                    e.preventDefault();
                    if (!user) {
                      window.alert('incorrect User data')
                      return;
                    }
                    userStore.createUser(user).then((r) => {
                      console.log(r);
                      setAvatarResponse(r.avatar)
                    });
                  }}

                  backgroundColor="yellow"
                >
                  Retrieve
                </StyledButton>
              </div>
            </form>
          )}
        </FormContainer>
        {avatarResponse && avatarResponse.map(a => <LazyLoadImage src={a} alt="avatar" />)}
      </FormAvatarWrapper>

    </AppContainer>
  );
}

export default App;
