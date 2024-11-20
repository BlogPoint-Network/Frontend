import { NavLink } from 'react-router-dom';

const ForTest = () => {
  return (
    <NavLink
      to="/messages"
      className={({ isActive, isPending }) =>
        isPending ? 'pending' : isActive ? 'active' : ''
      }
    >
      Messages
    </NavLink>
  );
};

export default ForTest;
