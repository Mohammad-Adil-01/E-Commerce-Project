export default function Footer() {
  return (
    <footer style={{
        marginTop:'3rem',
        padding:'1rem',
      width: '100%',
      background: '#222',
      color: '#fff',
      textAlign: 'center',
      position: 'relative',
      bottom: 0,
      fontSize: '2rem'
 
    }}>
      &copy; {new Date().getFullYear()} Adil - E-commerce. All rights reserved.
    </footer>
  );
}
