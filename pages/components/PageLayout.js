import { Container, Navbar } from "react-bootstrap";
import NewNavbar from "./NewNavbar";
import Head from 'next/head'
import { useTheme } from "../../providers/ThemeProviders";






export default function PageLayout({children,className}){
  const {theme, toggleTheme} = useTheme()



    return(
      <div className={theme.type}>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Nunito:ital@1&display=swap" rel="stylesheet"/>
      </Head>
        <Container>
            <NewNavbar theme={theme}
            toggleTheme={toggleTheme}/>
            <div className={`page-wrapper ${className}`}>
                {children}

                </div>
            <footer className="page-footer">
          <div>
            <a href="#">courses</a>{' | '}
            <a href="#">github</a>{' | '}
            <a href="#">facebook</a>
          </div>
        </footer>
        </Container>
        <style jsx global>{`
        html,body{
          background:${theme.background};
          color:${theme.fontColor};
          transition: color 0.2s ease-out 0s,background 0.2s ease-out 0s;
        }
        `}
        </style>
      </div>
    )
}