import producto1 from '../images/debby-hudson-wARyNLohqUs-unsplash.jpg'
import producto2 from '../images/olive-XvQsuSXqdFU-unsplash.jpg'
import producto3 from '../images/olive-LquFsz68vxg-unsplash.jpg'

export const Productos = (props) => {
  return (
    <div style={styles.container}>
      <h2>Últimos Productos</h2>
      <div style={styles.items}>
        <div style={styles.item}>
          <img style={styles.image} src={producto1} alt="" />
          <button style={styles.button} >Ver más</button>
        </div>
        <div style={styles.item}>
          <img style={styles.image} src={producto2} alt="" />
          <button style={styles.button} >Ver más</button>
        </div>
        <div style={styles.item}>
          <img style={styles.image} src={producto3} alt="" />
          <button style={styles.button} >Ver más</button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  container: {
    margin: 'auto',
    maxWidth: '1250px',
    padding: '20px'
  },
  items: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gridGap: '30px'
  },
  image: {
    objectFit: 'cover',
    width: '100%',
    height: '450px',
  },
  button: {
    width: '100%',
    border: '1px solid black',
    padding: '10px',
    fontSize: '20px',
    cursor: 'pointer'
  }
}