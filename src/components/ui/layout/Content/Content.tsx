import { Container } from "@mui/joy";

type ContentProps = Required<React.PropsWithChildren>

export const Content = ({ children }: ContentProps) => (<Container sx={{height: "calc(100dvh - 108px)", flexGrow: 1, overflow: "auto"}}>{children} </Container>)