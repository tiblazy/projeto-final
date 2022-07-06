import { UsersProvider } from "../usersContexts";
import { TablesProvider } from "../tablesContexts";

const Providers = ({ children }) => {
  return (
    <UsersProvider>
      <TablesProvider>{children}</TablesProvider>
    </UsersProvider>
  );
};

export default Providers;
