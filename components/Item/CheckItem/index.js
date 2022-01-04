import style from "./CheckItem.module.css"
const CheckItem = () => {
    const dispatch = useDispatch();
    return (
       <>
          <div
             onClick={() => dispatch(toggleStatusAction(index))}
             className={`${style["list-item-check"]} ${
                item.status ? "bg-green-900" : "bg-red-800"
             }`}
          ></div>
       </>
    );
};

export default CheckItem;