import './hero.css'
export const Hero = (props) => {
  return(
    <div className="hero" style={styles.hero}>
      <h1 style={styles.title}>Elegencia en tu vestir</h1>
    </div>
  )
}

const styles = {
  hero: {
    position: 'relative',
    height: '568px',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
  },
  title: {
    position: 'absolute',
    color: 'black',
    bottom: '20px',
    right: '20px'
  }
}