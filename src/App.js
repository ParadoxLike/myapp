import React from "react";
import { Root, View, Panel, Title, PanelHeader, Header, Group, RichCell, Div, SimpleCell, Avatar, PanelHeaderButton, PanelHeaderBack } from "@vkontakte/vkui";
import Icon28CalendarOutline from "@vkontakte/icons/dist/28/calendar_outline";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeView: "View1",
      activePanel: "Main",
    }
  }

  render() {
    return (
      <Root activeView={this.state.activeView}>
        <View id="View1" activePanel={this.state.activePanel}>
          <Panel id="Main">
            <PanelHeader>byKIM</PanelHeader>
            <Group header={<Header mode="secondary">Добро пожаловать</Header>}>
              <RichCell id="UserInfoBlock"
                text="&nbsp;"
                before={<Avatar size={72} src="https://vk.com/images/camera_100.png" />}
              >
                Пользователь
              </RichCell>
            </Group>
            <Group header={<Header mode="secondary">Функции</Header>}>
              <SimpleCell onClick={
                () => this.setState({ activePanel: "FunctionDateReg" })
              } before={<Icon28CalendarOutline />}>Дата регистрации</SimpleCell>
            </Group>
          </Panel>
          <Panel id="FunctionDateReg">
            <PanelHeader
              addon={<PanelHeaderButton onClick={() => this.setState({ activePanel: "Main" })}>Назад</PanelHeaderButton>}
              left={<PanelHeaderBack onClick={() => this.setState({ activePanel: "Main" })} />}
            >Дата регистрации</PanelHeader>
            <Group>
              <Div>
                <div style={{
                  backgroundImage: "url('https://sun9-42.userapi.com/hbCbZ3XKoB8s6cR6D2WPRCb2bUDGx2YY1ejv4w/6ht81wQbY7Y.jpg')",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: 200,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBottom: "6px",
                  borderRadius: 12
                }}>
                  <Title level="1" weight="heavy" id="DateRegText" style={{
                    color: "#fff",
                    textShadow: "4px 4px 5px #000, -4px 4px 5px #000,-4px -4px 5px #000, 4px -4px 5px #000"
                  }}>Ты шо, дурак шоль!?</Title>
                </div>
              </Div>
            </Group>
          </Panel>
        </View>
      </Root>
    )
  }
}

export default App;
