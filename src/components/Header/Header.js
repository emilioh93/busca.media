import './Header.css';
import es from '../../img/flags/espana.png';
import en from '../../img/flags/uk.png';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import { LangContext } from '../../context/langContext';

const Header = () => {
  const { setLanguage } = useContext(LangContext);
  let history = useHistory();

  return (
    <div className='header'>
      <div>
        <span onClick={() => window.scroll(0, 0)}>🎬 Movie Base</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <button
          className='myList_link'
          onClick={() => history.push('./mylist')}
        >
          <FormattedMessage id='app.myList' defaultMessage='My List' />
        </button>
        <div>|</div>
        <div className='flags'>
          <button
            onClick={() => {
              setLanguage('es-ES');
            }}
          >
            {' '}
            <img src={es} alt='spain flag' />{' '}
          </button>
          <button
            onClick={() => {
              setLanguage('en-US');
            }}
          >
            {' '}
            <img src={en} alt='uk flag' />{' '}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
