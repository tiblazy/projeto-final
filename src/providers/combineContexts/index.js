import { UsersProvider } from "../usersContexts";
import { TablesProvider } from "../tablesContexts";
import { CharacterProvider } from "../characterContexts";

const Providers = ({ children }) => {
  return (
    <UsersProvider>
      <TablesProvider>
        <CharacterProvider>{children}</CharacterProvider>
      </TablesProvider>
    </UsersProvider>
  );
};

export default Providers;
