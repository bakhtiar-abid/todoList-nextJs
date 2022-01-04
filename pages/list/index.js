import HomeLayout from "../../layouts/HomeLayout";
import { useSelector, useDispatch } from "react-redux";
import { todoSelector, toggleStatusAction, deleteTodoAction } from "../../store/slices/todoSlice";
import style from "./List.module.css"
import ItemList from "../../components/ItemList";

const List = () => {
     
     const { list } = useSelector(todoSelector);
    

    return (
       <HomeLayout>
          <div className={style["list-container"]}>
            
             {list.map((item, index) => (
                 <ItemList key={index} item = {item} index= {index} ></ItemList>
               
             ))}
          </div>
       </HomeLayout>
    );
}

export default List