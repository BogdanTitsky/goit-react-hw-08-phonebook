import { AuthNav } from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';

const AppBar = () => {
  return (
    <header>
      <Navigation></Navigation>
      <AuthNav></AuthNav>
    </header>
  );
};

export default AppBar;
