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
             {list.length > 0 ? (
                list.map((item, index) => (
                   <ItemList key={index} item={item} index={index}></ItemList>
                ))
             ) : (
                <div>
                   <h1 className="text-center text-8xl bg-red-300 justify-items-center my-10">
                      You have no todo items
                   </h1>
                </div>
             )}
          </div>
       </HomeLayout>
    );
}

export default List