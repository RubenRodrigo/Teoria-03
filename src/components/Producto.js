import producto from '../images/olive-LquFsz68vxg-unsplash.jpg'
import { Colores } from './Colores'
import { Tallas } from './Tallas'

export const Producto = (props) => {
  return(
    <div style={styles.container}>
      <h2 style={styles.title}>Ropara Para Mujesres / Chalinas / Chalina con ...</h2>
      <div style={styles.items}>
        <div>
          <img style={styles.image} src={producto} alt=""/>
        </div>
        <div>
          <h2>Chalina de bordado fino</h2>
          <h2 style={styles.price}>Precio: S/ 20</h2>
          <Tallas />
          <Colores />
          <button style={styles.button} >Ver más</button>
        </div>
      </div>
    </div>
  )
}

const styles = {
  price: {
    fontWeight: 'bold',
    paddingBottom: '20px',
    paddingTop: '20px'
  },
  container: {
    margin: 'auto',
    maxWidth: '1250px',
    padding: '20px'
  },
  items: {
    paddingTop: '20px',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
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
    color: 'white',
    backgroundColor: 'black',
    padding: '10px',
    fontSize: '20px',
    cursor: 'pointer'
  }
}