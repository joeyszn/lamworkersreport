import { useState } from 'react';
import { LoginForm } from './components/LoginForm';
import { ReportsDashboard } from './components/ReportsDashboard';

interface UserData {
  firstName: string;
  lastName: string;
  department: string;
  stayLoggedIn: boolean;
}

export default function App() {
  const [user, setUser] = useState<UserData | null>(null);

  const handleLogin = (userData: UserData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="size-full">
      {user ? (
        <ReportsDashboard user={user} onLogout={handleLogout} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}