import { useEffect, useState } from 'react';

const Cores = () => {
  const [cor, setCor] = useState('black');

  useEffect(() => {
    const mudarCorNoClique = () => {
      if (cor === 'black') {
        setCor('purple');
      } else {
        setCor('black');
      }
    };

    document.addEventListener('click', mudarCorNoClique);

    return () => {
      document.removeEventListener('click', mudarCorNoClique);
    };
  }, [cor]);

  return (
    <div>
      <div
        id='myDiv'
        style={{
          color: 'white',
          width: '100px',
          height: '100px',
          marginLeft: '10px',
          marginTop: '50px',
          backgroundColor: cor,
        }}
      >
        Essa div muda de cor! Clique em mim!
      </div>
    </div>
  );
};

export default Cores;
