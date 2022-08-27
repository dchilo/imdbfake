
import styles from './FilterContainer.module.css'
import { ToggleButtonGroupControlled } from './ButtonsFilter'

export function FilterContainer( {onClick} ) {
  return (
    <div className={styles.filterContainer}>
      <h3 className={styles.trending}>What's Popular</h3>
      <ToggleButtonGroupControlled className={styles.buttons} onClick={(filter) => onClick(filter)} /> 
    </div>
  );
}
