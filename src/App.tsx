import Layout from "./components/ui/layout";
import Content from "./components/ui/layout/Content";
import Header from "./components/ui/layout/Header";
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
