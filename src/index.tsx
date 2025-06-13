// import App from '@pages/App';
import './index.css';
// import './wdyr';
import { createRoot } from 'react-dom/client';

const App = () => {
  return (
    <>
      <h1>我的web3-DAPP1213132</h1>
      <span className="titleName">hhahahhah</span>
      <span className="text-3xl font-bold underline text-cyan-500">hello world</span>
    </>
  );
};

const container = document.getElementById('app');
if (!container) {
  throw new Error('Failed to find the root element');
}
const root = createRoot(container);

root.render(<App />);
