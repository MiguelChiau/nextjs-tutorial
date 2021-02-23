import ArticleItem from "./ArticleItem"
import articleStyles from "../styles/Article.module.css"

const ArticleItem = ({articles}) => {
    return (
        <div className={articleStyles.grid}>
            {
                articles.map((article) => (
                    <ArticleItem article={articles}/>
                ))
            }
            
        </div>
    )
}

export default ArticleItem