import Head from 'next/head';
import Authenticate from "./Authenticate";

const Layout = ({ title, children }) => { 
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={"container m-auto"}>
        <main className='flex'>
          <div className='w-fit m-4 self-start border-r h-screen pr-3 overflow-hidden'>
            <Authenticate />
          </div>
          <div className='flex flex-col overflow'>
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}

export default Layout;
