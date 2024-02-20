import Layout from "./components/ui/layout";
import Header from "./components/ui/layout/Header";
import Content from "./components/ui/layout/Content";
import UserWidget from "./components/ui/widget/UserWidget";

function App() {

  return (
    <Layout>
      <Header></Header>
      <Content>
        <UserWidget/>
      </Content>
    </Layout>
  );
}

export default App;
