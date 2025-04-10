import Button from "../../components/atoms/button"
import styles from "./home-page.module.scss"

const HomePage = () => {
  return (
    <div className={styles["home-page"]}>
      <Button className={styles["home-page__button"]}>Click me</Button>
    </div>
  )
}

export default HomePage
