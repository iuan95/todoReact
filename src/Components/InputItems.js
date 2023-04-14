function InputItems({methodAdd, methodHundleAdd, valueText, valueAuthor, hangeAuthot}){

        return(
        <div>
            <form>
                <input value={valueText} onChange={methodAdd} name={"name"} placeholder={"Сообщение"}/>
                <input value={valueAuthor} onChange={hangeAuthot} name={"author"} placeholder={"Автор"}/>
                <button className={"btn"} onClick={methodHundleAdd}>Отправить</button>
            </form>
        </div>
    )
}
export default InputItems;