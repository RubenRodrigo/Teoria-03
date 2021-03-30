export const Tallas = (props) => {
  return(
    <div style={styles.container}>
      <h3>Tallas: <span>Pequeño</span></h3>
      <div>
        <button style={styles.button}>XS</button>
        <button style={styles.button}>L</button>
        <button style={styles.button}>M</button>
        <button style={styles.button}>S</button>
        <button style={styles.button}>XSS</button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    marginTop: '20px',
    marginBottom: '20px'
  },
  button: {
    width: '70px',
    border: '1px solid black',
    color: 'white',
    backgroundColor: 'black',
    padding: '10px',
    margin: '10px',
    fontSize: '20px',
    cursor: 'pointer'
  }
}