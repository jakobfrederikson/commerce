import AllProducts from './components/products/all-products'
import styles from './page.module.css'

export default function Home() {
  
  return (
    <main className={styles.main}>
      <p>Main content baby</p>
      <AllProducts />
    </main>
  )
}
