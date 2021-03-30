export const Colores = (props) => {
  return(
    <div style={styles.container}>
      <h3>Color: <span>Cafe</span></h3>
      <div>
        <button style={styles.button}></button>
        <button style={styles.button}></button>
        <button style={styles.button}></button>
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
    width: '20px',
    height: '20px',
    borderRadius: '10px',
    border: '1px solid black',
    backgroundColor: 'brown',
    margin: '10px',
    fontSize: '20px',
    cursor: 'pointer'
  }

}