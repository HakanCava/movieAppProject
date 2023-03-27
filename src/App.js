import { Toaster } from "react-hot-toast";
import AuthContextProvider from "./context/AuthContext";
import MovieContextProvider from "./context/MovieContext";
import AppRouter from "./router/AppRouter";

function App() {
  return (
    <AuthContextProvider>
      <MovieContextProvider>
        <AppRouter />
        <Toaster />
      </MovieContextProvider>
    </AuthContextProvider>
  );
}

export default App;
