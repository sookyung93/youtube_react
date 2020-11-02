import React, { useRef } from 'react';
import styles from './header.module.css';

function Header(props) {
  const inputRef = useRef();

  const handleSearch = () => {
    const inputValue = inputRef.current.value;
    props.onSearch(inputValue);
  };

  const onClick = () => {
    handleSearch();
  };

  const onKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img
          src="/image/logo-youtube.svg"
          alt=""
          className={styles.logo__icon}
        />
        <span className={styles.logo__text}>Youtube</span>
      </div>
      <input
        ref={inputRef}
        className={styles.header__searchBox}
        type="text"
        placeholder="Search.."
        onKeyPress={onKeyPress}
      />
      <button className={styles.search__button} onClick={onClick}>
        <i className={`fas fa-search ${styles.search__button__icon}`}></i>
      </button>
    </div>
  );
}

export default Header;
