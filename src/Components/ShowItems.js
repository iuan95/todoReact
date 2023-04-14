import {useState} from "react";

export default function ShowItems({dataData, dataDel, hchandge}){

    return(
        <div>
 
            {dataData?
            dataData.map((i)=>
                <ViewAllData data={i} del={dataDel} hundleChange = {hchandge}/>
            ):
            <h1>Пусто...</h1>
            }
        </div>
    )
}


function ViewAllData({data,del, hundleChange}){
    const [edit, setEdit] = useState(false)
    return(
        <div>
            <ul className={"ul-ul"} key={data.id}>
                <li>№: <span className={'message'}> {data.id}</span></li>
                {edit? <>
                        <form className={'message'} >
                            <label>Сообщение:
                                <input defaultValue={data.message} onChange={e=>hundleChange(
                                    {...data, message: e.target.value}
                                )}></input>
                            </label>
                            {/* <label>Автор:
                                <input placeholder="Автор" defaultValue={data.author} onChange={e=>hundleChange(
                                    {...data, author: e.target.value }
                                )}></input>
                            </label> */}
                        </form>
                        <button className={"btn"} onClick={() => setEdit(false)}><span>Сохранить</span></button>
                    </>:
                    <>
                        <div className="viewdata">
                        <li>Сообщение: <span className={'message'}>{data.message}</span></li>
                        <li>Автор: <span className={'message'}>{data.author}</span></li>
                        <li>Дата создания: <span className={'message'}>{data.time}</span></li>
                        </div>
                        <div className={"btns"}>
                            <button className={"btn"} onClick={() => del(data)}><span>Удалить</span></button>
                            <button className={"btn"} onClick={() => setEdit(true)}><span>Редактировать</span></button>
                        </div>
                    </>
                }
            </ul>
        </div>
        )
}
// export default ShowItems;