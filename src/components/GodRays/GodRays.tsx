import styles from "./GodRays.module.css"

export const GodRays = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperInner}>
        <div className={styles.stripes}>
          <div className={styles.stripesInner}></div>
        </div>
      </div>
    </div>
  )
}
