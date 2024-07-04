import styles from './styles.module.css'

const NewsList = ({ image }) => {
	return (
		<ul className={styles.list}>
			{NewsList.map(item => {
				return <li key={item.id}>{item.title}</li>
			})}
		</ul>
	)
}

export default NewsList
