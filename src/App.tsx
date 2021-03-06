import { Dashboard } from './components/Dashboard';
import Modal from 'react-modal';
import { TransactionsProvider } from './hooks/useTransactions';
import { Header } from './components/Header'
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root')

function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() {
      setIsNewTransactionModalOpen(true) 
  }

  function handleCloseNewTransactionModal() {
      setIsNewTransactionModalOpen(false)
  }


  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}/>
    </TransactionsProvider>
  );
}

export default App;
