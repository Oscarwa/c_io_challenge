import { FC, ReactNode } from "react";
import { Container } from "react-bootstrap";

interface LayoutProps {
  title?: string;
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ title, children }) => {
  return (
    <Container>
      <h1 className="my-5">{title}</h1>
      {children}
    </Container>
  );
};

export default Layout;
