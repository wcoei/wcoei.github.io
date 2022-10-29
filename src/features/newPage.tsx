import { useAppSelector } from "../app/hooks";
import { selectCount } from "./counter/counterSlice";

export const NewPage = () => {
    const count = useAppSelector(selectCount);
    return (
        <div>count {count} </div>
    )
}