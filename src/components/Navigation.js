export const Navigation = (props) => {
  return(
    <div style={styles.container}>
      <h1 style={styles.title}>Ecommerce</h1>
      <div style={styles.nav}>
        <h2><a href="">Ropa Para Mujeres</a></h2>
        <h2><a href="">Ropa Para Hombres</a></h2>
        <h2><a href="">Ropa Para Niños</a></h2>
      </div>
    </div>
  )
}

const styles = {
  container:{
    padding: '30px'
  },
  title:{
    textAlign: 'center',
    padding: '10px'
  },
  nav: {
    display: "flex",
    justifyContent: 'space-around',
  }
}