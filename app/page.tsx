import ProductList from './components/product-list'
import { getProducts } from './lib/actions'
import styles from './page.module.css'

export default async function Home() {
  const allProducts = await getProducts({});
  return (
    <main className={styles.main}>
      <ProductList products={allProducts}/>
    </main>
  )
}
