import { Box } from "@mui/joy"

type LayoutProps = {
  header?: React.ReactNode,
  content?: React.ReactNode,
  children?: React.ReactNode | React.ReactNode[] 
}

const LayoutBox = ({ children }: Required<React.PropsWithChildren>) => (
  <Box sx={{
    display: "flex",
    flexDirection: "column",
    height: "100dvh"
  }}>
    {children}
  </Box>
)

export const Layout = ({ header, content, children}: LayoutProps) => {

  if (children) {
    return LayoutBox({children})
  }

  return (
    <LayoutBox>
      {header}
      {content}
    </LayoutBox>
  )
}